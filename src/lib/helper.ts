import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const clsxm = (...args: Parameters<typeof clsx>) => twMerge(clsx(...args))

export function noop() {} 