'use client'

import * as React from 'react'

import { clsxm } from '@/lib/helper'

export const UserAuthFromIcon: Component = ({ className }) => {
  // For demo purposes, just show a simple user icon
  return (
    <span
      className={clsxm(
        'pointer-events-none flex size-4 select-none items-center justify-center rounded-full bg-white dark:bg-zinc-900',
        className,
      )}
    >
      <div className="size-2 rounded-full bg-green-500" />
    </span>
  )
}
