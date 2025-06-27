import { Manrope, Noto_Serif_SC } from 'next/font/google'

const sansFont = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
  display: 'swap',
  fallback: ['system-ui', '-apple-system', 'PingFang SC', 'Microsoft YaHei', 'Segoe UI', 'Roboto', 'Helvetica', 'noto sans sc', 'hiragino sans gb', 'sans-serif'],
})

const serifFont = Noto_Serif_SC({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-serif',
  display: 'swap',
  // adjustFontFallback: false,
  fallback: ['Noto Serif SC'],
})

export { sansFont, serifFont } 