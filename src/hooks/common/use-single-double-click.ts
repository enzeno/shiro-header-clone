import { useCallback, useRef } from 'react'

export const useSingleAndDoubleClick = (
  singleClick: () => void,
  doubleClick: () => void,
  delay = 250
) => {
  const timer = useRef<number | null>(null)

  return useCallback(() => {
    if (timer.current === null) {
      timer.current = window.setTimeout(() => {
        singleClick()
        timer.current = null
      }, delay)
    } else {
      clearTimeout(timer.current)
      timer.current = null
      doubleClick()
    }
  }, [singleClick, doubleClick, delay])
} 