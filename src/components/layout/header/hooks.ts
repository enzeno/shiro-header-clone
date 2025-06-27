'use client'

import { useEffect } from 'react'

import { useSetHeaderShouldShowBg, useSetHeaderMetaInfo } from '@/components/layout/header/internal/hooks'

export { useSetHeaderMetaInfo }

export const useHideHeaderBgInRoute = () => {
  const setter = useSetHeaderShouldShowBg()
  useEffect(() => {
    setter(false)
    return () => {
      setter(true)
    }
  }, [])
}

export const HeaderHideBg = () => {
  useHideHeaderBgInRoute()
  return null
}
