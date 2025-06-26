'use client'
import React from 'react'
import { TrackerAction } from '@/constants/tracker'

interface ImpressionViewProps {
  action: TrackerAction
  trackerMessage: string
  children: React.ReactNode
}

export const ImpressionView: React.FC<ImpressionViewProps> = ({ 
  children,
  action,
  trackerMessage 
}) => {
  // In a real implementation, this would track impressions
  React.useEffect(() => {
    console.log(`Impression tracked: ${action} - ${trackerMessage}`)
  }, [action, trackerMessage])

  return <>{children}</>
} 