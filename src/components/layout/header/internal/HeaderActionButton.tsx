import clsx from 'clsx'
import type { JSX } from 'react'
import { forwardRef } from 'react'

export const HeaderActionButton = forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements['div']
>(({ children, ...rest }, ref) => (
  <div
    role="button"
    tabIndex={1}
    className={clsx(
      'group size-10 rounded-full center flex',
      // Background styling to match desktop header
      'bg-gradient-to-b from-zinc-50/70 to-white/90',
      'shadow-lg shadow-zinc-400/5 ring-1 ring-zinc-900/5 backdrop-blur-md',
      'dark:from-zinc-900/70 dark:to-zinc-800/90 dark:ring-zinc-100/10',
      // Hover effects
      'transition-all duration-200 hover:shadow-xl hover:ring-zinc-900/10',
      'dark:hover:ring-zinc-100/20',
      // Text and padding
      'px-3 text-sm',
    )}
    {...rest}
    ref={ref}
    aria-label="Header Action"
  >
    {children}
  </div>
))

HeaderActionButton.displayName = 'HeaderActionButton'
