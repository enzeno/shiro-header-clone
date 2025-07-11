'use client'

import { atom, useAtomValue, useSetAtom } from 'jotai'
import type { FC, PropsWithChildren } from 'react'
import { useMemo, useRef, useLayoutEffect } from 'react'

import { createAtomSelector } from '@/lib/atom'

const pageScrollLocationAtom = atom(0)
const pageScrollDirectionAtom = atom<'up' | 'down' | null>(null)

// Simple throttle function
function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  options: { leading?: boolean } = {}
): T {
  let timeout: NodeJS.Timeout | null = null
  let previous = 0
  const { leading = true } = options

  return ((...args: Parameters<T>) => {
    const now = Date.now()
    if (!previous && leading === false) previous = now
    const remaining = wait - (now - previous)
    
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now
      func.apply(null, args)
    } else if (!timeout) {
      timeout = setTimeout(() => {
        previous = leading === false ? 0 : Date.now()
        timeout = null
        func.apply(null, args)
      }, remaining)
    }
  }) as T
}

export const PageScrollInfoProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <ScrollDetector />
      {children}
    </>
  )
}

const ScrollDetector = () => {
  const setPageScrollLocation = useSetAtom(pageScrollLocationAtom)
  const setPageScrollDirection = useSetAtom(pageScrollDirectionAtom)
  const prevScrollY = useRef(0)

  useLayoutEffect(() => {
    const scrollHandler = throttle(
      () => {
        let currentTop = document.documentElement.scrollTop

        // 当 radix modal 被唤出，body 会被设置为 fixed，此时需要获取 body 的 top 值。
        // 只有在 mobile 端会出现这种逻辑
        if (currentTop === 0) {
          const bodyStyle = document.body.style
          if (bodyStyle.position === 'fixed') {
            const bodyTop = bodyStyle.top
            currentTop = Math.abs(Number.parseInt(bodyTop, 10))
          }
        }
        setPageScrollDirection(
          prevScrollY.current - currentTop > 0 ? 'up' : 'down',
        )
        prevScrollY.current = currentTop

        setPageScrollLocation(prevScrollY.current)
      },
      16,
      {
        leading: false,
      },
    )
    window.addEventListener('scroll', scrollHandler)

    scrollHandler()

    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return null
}

const usePageScrollLocation = () => useAtomValue(pageScrollLocationAtom)
const usePageScrollDirection = () => useAtomValue(pageScrollDirectionAtom)

const usePageScrollLocationSelector = createAtomSelector(pageScrollLocationAtom)
const usePageScrollDirectionSelector = createAtomSelector(
  pageScrollDirectionAtom,
)

const useIsScrollUpAndPageIsOver = (threshold: number) => {
  return useAtomValue(
    useMemo(
      () =>
        atom((get) => {
          const scrollLocation = get(pageScrollLocationAtom)
          const scrollDirection = get(pageScrollDirectionAtom)
          return scrollLocation > threshold && scrollDirection === 'up'
        }),
      [threshold],
    ),
  )
}
export {
  useIsScrollUpAndPageIsOver,
  usePageScrollDirection,
  usePageScrollDirectionSelector,
  usePageScrollLocation,
  usePageScrollLocationSelector,
} 