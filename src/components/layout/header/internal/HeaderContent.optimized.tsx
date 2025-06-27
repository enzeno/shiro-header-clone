'use client'

import clsx from 'clsx'
import dynamic from 'next/dynamic'
import Link from '@/components/next-shims'
import { usePathname } from '@/lib/next-shims'
import * as React from 'react'
import { memo, Suspense } from 'react'

import { RootPortal } from '@/components/ui/portal'
import useDebounceValue from '@/hooks/common/use-debounce-value'
import { clsxm } from '@/lib/helper'
import { useIsScrollUpAndPageIsOver } from '@/providers/root/page-scroll-info-provider'

import type { IHeaderMenu } from '../config'
import { useHeaderConfig } from './HeaderDataConfigureProvider'
import { useHeaderHasMetaInfo, useMenuOpacity } from './hooks'

// Lazy load motion components
const MotionComponents = dynamic(
  () => import('./HeaderContentMotion'),
  { 
    ssr: false,
    loading: () => <div className="h-10" />
  }
)

// Lazy load MenuPopover for submenu functionality
const MenuPopover = dynamic(
  () => import('./MenuPopover').then(mod => ({ default: mod.MenuPopover })),
  { ssr: true }
)

export const HeaderContent = () => {
  return (
    <Suspense fallback={<HeaderContentSkeleton />}>
      <MotionComponents />
    </Suspense>
  )
}

// Simple skeleton loader while motion components load
const HeaderContentSkeleton = () => {
  const { config: headerMenuConfig } = useHeaderConfig()
  const opacity = useMenuOpacity()
  const hasMetaInfo = useHeaderHasMetaInfo()
  const shouldHideNavBg = !hasMetaInfo && opacity === 0
  
  return (
    <nav className={clsxm(
      'relative rounded-full',
      'bg-gradient-to-b from-zinc-50/70 to-white/90',
      'shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-md',
      'dark:from-zinc-900/70 dark:to-zinc-800/90 dark:ring-zinc-100/10',
      'pointer-events-auto duration-200',
      shouldHideNavBg && '!bg-none !shadow-none !ring-transparent',
    )}>
      <div className="flex px-4 font-medium text-zinc-800 dark:text-zinc-200">
        {headerMenuConfig.map((section) => (
          <Link
            key={section.path}
            href={section.path}
            className="block whitespace-nowrap px-4 py-2 transition hover:text-accent/80"
          >
            {section.title}
          </Link>
        ))}
      </div>
    </nav>
  )
}