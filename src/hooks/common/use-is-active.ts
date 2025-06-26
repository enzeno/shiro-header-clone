import { useState, useEffect } from 'react'

export const usePageIsActive = () => {
  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsActive(document.visibilityState === 'visible')
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  return isActive
} 