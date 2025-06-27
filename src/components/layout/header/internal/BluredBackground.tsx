'use client'

import clsx from 'clsx'

import { useHeaderBgOpacity } from './hooks'

export const BluredBackground = () => {
  const headerOpacity = useHeaderBgOpacity()
  return (
    <div
      className={clsx(
        'absolute inset-0 transform-gpu',
        'backdrop-filter backdrop-blur-[20px] backdrop-saturate-[180%]',
        '[backface-visibility:hidden]',
        '[border-bottom:1px_solid_rgb(187_187_187_/_20%)]',
      )}
      style={{
        backgroundColor: 'var(--bg-opacity)',
        opacity: headerOpacity,
      }}
    />
  )
}
