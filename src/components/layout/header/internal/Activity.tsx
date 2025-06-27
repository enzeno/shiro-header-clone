'use client'

import { useHeaderMetaShouldShow } from './hooks'

export const Activity = () => {
  const shouldShowMeta = useHeaderMetaShouldShow()

  // For demo purposes, don't show any activity when meta should show
  if (shouldShowMeta) return null
  
  // In a real implementation, this would show current activity/music/process
  // For the demo, we'll just return null to keep the header simple
  return null
}
