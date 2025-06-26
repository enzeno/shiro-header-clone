import React from 'react'

declare global {
  type Component<P = {}> = React.FC<P & { className?: string; children?: React.ReactNode }>
 
  interface Bilibili {
    liveId: string
  }
} 