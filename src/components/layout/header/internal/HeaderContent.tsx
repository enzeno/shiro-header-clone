'use client'

import clsx from 'clsx'
import {
  AnimatePresence,
  LayoutGroup,
  m,
  useMotionTemplate,
  useMotionValue,
} from 'motion/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as React from 'react'
import { memo } from 'react'

import { RootPortal } from '@/components/ui/portal'
import useDebounceValue from '@/hooks/common/use-debounce-value'
import { clsxm } from '@/lib/helper'
import { useIsScrollUpAndPageIsOver } from '@/providers/root/page-scroll-info-provider'

import type { IHeaderMenu } from '../config'
import { useHeaderConfig } from './HeaderDataConfigureProvider'
import { useHeaderHasMetaInfo, useMenuOpacity } from './hooks'
import { MenuPopover } from './MenuPopover'

export const HeaderContent = () => {
  return (
    <LayoutGroup>
      <AnimatedMenu>
        <ForDesktop />
      </AnimatedMenu>
      <AccessibleMenu />
    </LayoutGroup>
  )
}

const AccessibleMenu: Component = () => {
  const hasMetaInfo = useHeaderHasMetaInfo()

  const showShow = useDebounceValue(
    useIsScrollUpAndPageIsOver(600) && hasMetaInfo,
    120,
  )
  return (
    <RootPortal>
      <AnimatePresence>
        {showShow && (
          <m.div
            layout
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            exit={{ y: -20, opacity: 0 }}
            className="pointer-events-none fixed inset-x-0 top-12 z-10 mr-[var(--removed-body-scroll-bar-size)] flex justify-center"
          >
            <ForDesktop />
          </m.div>
        )}
      </AnimatePresence>
    </RootPortal>
  )
}

const AnimatedMenu: Component = ({ children }) => {
  const opacity = useMenuOpacity()

  const hasMetaInfo = useHeaderHasMetaInfo()
  const shouldHideNavBg = !hasMetaInfo && opacity === 0
  return (
    <m.div
      className="duration-100"
      style={{
        opacity: hasMetaInfo ? opacity : 1,
        visibility: opacity === 0 && hasMetaInfo ? 'hidden' : 'visible',
      }}
    >
      {/* @ts-ignore */}
      {React.cloneElement(children, { shouldHideNavBg })}
    </m.div>
  )
}

const ForDesktop: Component<{
  shouldHideNavBg?: boolean
  animatedIcon?: boolean
}> = ({ className, shouldHideNavBg, animatedIcon = true }) => {
  const { config: headerMenuConfig } = useHeaderConfig()
  const pathname = usePathname()

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const radius = useMotionValue(0)
  const handleMouseMove = React.useCallback(
    ({ clientX, clientY, currentTarget }: React.MouseEvent) => {
      const bounds = currentTarget.getBoundingClientRect()
      mouseX.set(clientX - bounds.left)
      mouseY.set(clientY - bounds.top)
      radius.set(Math.hypot(bounds.width, bounds.height) / 2.5)
    },
    [mouseX, mouseY, radius],
  )

  const background = useMotionTemplate`radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, var(--spotlight-color) 0%, transparent 65%)`

  return (
    <m.nav
      layout="size"
      onMouseMove={handleMouseMove}
      className={clsxm(
        'relative',
        'rounded-full bg-gradient-to-b from-zinc-50/70 to-white/90',
        'shadow-lg shadow-zinc-400/5 ring-1 ring-zinc-900/5 backdrop-blur-md',
        'dark:from-zinc-900/70 dark:to-zinc-800/90 dark:ring-zinc-100/10',
        'group [--spotlight-color:oklch(var(--a)_/_0.12)]',
        'pointer-events-auto duration-200',
        shouldHideNavBg && '!bg-none !shadow-none !ring-transparent',
        className,
      )}
    >
      {/* Spotlight overlay */}
      <m.div
        className="pointer-events-none absolute -inset-px rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background }}
        aria-hidden="true"
      />
      <m.div 
        layout 
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="flex px-4 font-medium text-zinc-800 dark:text-zinc-200"
      >
        {headerMenuConfig.map((section) => {
          const subItemActive =
            section.subMenu?.findIndex((item) => {
              return item.path === pathname || pathname.slice(1) === item.path
            }) ?? -1

          return (
            <HeaderMenuItem
              iconLayout={animatedIcon}
              section={section}
              key={section.path}
              subItemActive={section.subMenu?.[subItemActive]}
              isActive={
                pathname === section.path ||
                (pathname.startsWith(`${section.path}/`) &&
                  !section.exclude?.includes(pathname)) ||
                subItemActive > -1 ||
                false
              }
            />
          )
        })}
      </m.div>
    </m.nav>
  )
}

const HeaderMenuItem = memo<{
  section: IHeaderMenu
  isActive: boolean
  subItemActive?: IHeaderMenu
  iconLayout?: boolean
}>(({ section, isActive, subItemActive, iconLayout }) => {
  const href = section.path

  return (
    <MenuPopover subMenu={section.subMenu} key={href}>
      <AnimatedItem
        href={href}
        isActive={isActive}
        className="transition-[padding]"
      >
        <m.span layout className="relative flex items-center">
          <AnimatePresence mode="popLayout">
            {isActive && (
              <m.span
                layoutId={iconLayout ? 'header-menu-icon' : undefined}
                className="mr-2 flex items-center"
                initial={false}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {subItemActive?.icon ?? section.icon}
              </m.span>
            )}
          </AnimatePresence>
          <m.span 
            layout 
            layoutId={`menu-text-${section.path}`}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            {subItemActive?.title ?? section.title}
          </m.span>
        </m.span>
      </AnimatedItem>
    </MenuPopover>
  )
})
HeaderMenuItem.displayName = 'HeaderMenuItem'

function AnimatedItem({
  href,
  children,
  className,
  isActive,
}: {
  href: string
  children: React.ReactNode
  className?: string
  isActive?: boolean
}) {
  const isExternal = href.startsWith('http')
  const As = isExternal ? 'a' : Link
  return (
    <div>
      <As
        href={href}
        className={clsxm(
          'relative block whitespace-nowrap px-4 py-2 transition',
          isActive ? 'text-accent' : 'hover:text-accent/80',
          isActive ? 'active' : '',
          className,
        )}
        target={isExternal ? '_blank' : undefined}
      >
        {children}
        {isActive && (
          <m.span
            className={clsx(
              'absolute inset-x-1 -bottom-px h-px',
              'bg-gradient-to-r from-accent/0 via-accent/70 to-accent/0',
            )}
            layoutId="active-nav-item"
          />
        )}
      </As>
    </div>
  )
}
