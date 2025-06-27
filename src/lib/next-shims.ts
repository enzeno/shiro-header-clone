'use client'

import { usePathname as useNextPathname, useRouter as useNextRouter } from 'next/navigation'

// Shim for Next.js usePathname hook
export function usePathname() {
  return useNextPathname()
}

// Shim for Next.js useRouter hook
export function useRouter() {
  return useNextRouter()
} 