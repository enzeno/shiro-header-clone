'use client'

import { useAtom } from 'jotai'
import { useEffect } from 'react'

import { viewportAtom } from '@/atoms/viewport'

export const ViewportProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [, setViewport] = useAtom(viewportAtom)

  useEffect(() => {
    const updateViewport = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      
      setViewport({
        sm: w >= 640,
        md: w >= 768,
        lg: w >= 1024,
        xl: w >= 1280,
        '2xl': w >= 1536,
        mobile: w < 1024,
        w,
        h,
      })
    }

    updateViewport()
    window.addEventListener('resize', updateViewport)
    return () => window.removeEventListener('resize', updateViewport)
  }, [setViewport])

  return <>{children}</>
} 