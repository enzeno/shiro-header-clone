'use client'

import type { JSX, PropsWithChildren } from 'react'
import * as React from 'react'

export const ProviderComposer: React.FC<PropsWithChildren<{
  contexts: JSX.Element[]
}>> = ({ contexts, children }) => {
  return contexts.reduceRight((kids: any, parent: any) => {
    return React.cloneElement(parent, { children: kids })
  }, children)
}