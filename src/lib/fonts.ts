import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

// Using Inter as a web-safe alternative to Manrope
export const sansFont = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
})

// Using local Geist font files for serif
export const serifFont = localFont({
  src: [
    {
      path: '../app/fonts/GeistVF.woff',
      weight: '100 900',
      style: 'normal',
    },
  ],
  variable: '--font-serif',
  display: 'swap',
  preload: true,
  fallback: ['Georgia', 'Times New Roman', 'serif'],
}) 