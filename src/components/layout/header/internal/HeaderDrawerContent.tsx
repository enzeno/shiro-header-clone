'use client'

import { m } from 'motion/react'
import Link from '@/components/next-shims'
import { memo } from 'react'

import { useSheetContext } from '@/components/ui/sheet/context'
import { reboundPreset } from '@/constants/spring'

import { useHeaderConfig } from './HeaderDataConfigureProvider'

export const HeaderDrawerContent = () => {
  const { config } = useHeaderConfig()

  return (
    <div className="scrollbar-none mt-12 max-h-[80dvh] w-[90vw] space-y-4 overflow-auto pb-24">
      {config.map((section, index) => {
        const href = section.path

        return (
          <m.section
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              ...reboundPreset,
              delay: index * 0.08,
            }}
            key={href}
          >
            <LinkInternal className="block" href={href}>
              <span className="flex items-center space-x-2 py-2 text-lg">
                <i>{section.icon}</i>
                <h2>{section.title}</h2>
              </span>
            </LinkInternal>

            {section.subMenu && (
              <ul className="my-2 grid grid-cols-2 gap-2">
                {section.subMenu.map((sub) => (
                  <li key={sub.path}>
                    <LinkInternal className="inline-block p-2" href={sub.path}>
                      {sub.title}
                    </LinkInternal>
                  </li>
                ))}
              </ul>
            )}
          </m.section>
        )
      })}
    </div>
  )
}

const LinkInternal = memo(function LinkInternal({
  href,
  children,
  ...rest
}: {
  href: string
  children: React.ReactNode
  [key: string]: any
}) {
  const { dismiss } = useSheetContext()
  return (
    <Link href={href} {...rest} onClick={dismiss}>
      {children}
    </Link>
  )
})
