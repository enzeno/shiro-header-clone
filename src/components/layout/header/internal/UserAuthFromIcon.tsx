'use client'

import * as React from 'react'

import { clsxm } from '@/lib/helper'

export const UserAuthFromIcon: Component = ({ className }) => {
  // Show GitHub icon to match the original (assuming GitHub auth provider)
  return (
    <span
      className={clsxm(
        'pointer-events-none flex size-4 select-none items-center justify-center rounded-full bg-white dark:bg-zinc-900',
        className,
      )}
    >
      <i className="i-mingcute-github-line size-3" />
    </span>
  )
}
