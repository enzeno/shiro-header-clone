'use client'

import { useEffect } from 'react'
import chroma from 'chroma-js'
import Color from 'colorjs.io'
import { getColorScheme } from '@/lib/color'

const hexToOklchString = (hex: string) => {
  // @ts-ignore
  return new Color(hex).oklch
}

const hslToOklchString = (hsl: string) => {
  // @ts-ignore
  return new Color(hsl).oklch
}

const hslToRgb = (hsl: string) => {
  const matches = hsl.match(/\d+/g)
  if (!matches) return [0, 0, 0]
  const [h, s, l] = matches.map(Number)
  return chroma.hsl(h, s / 100, l / 100).rgb()
}

const lightBg = 'rgb(250, 250, 250)'
const darkBg = 'rgb(0, 2, 18)'

export function AccentColorStyleInjector() {
  useEffect(() => {
    const { light: lightColors, dark: darkColors } = getColorScheme()
    const { accent: currentAccentColorL } = lightColors
    const { accent: currentAccentColorD } = darkColors

    const lightOklch = hslToOklchString(currentAccentColorL)
    const darkOklch = hslToOklchString(currentAccentColorD)

    const [hl, sl, ll] = lightOklch
    const [hd, sd, ld] = darkOklch

    const [lr, lg, lb] = hslToRgb(currentAccentColorL)
    const [dr, dg, db] = hslToRgb(currentAccentColorD)

    // Remove existing accent color style
    const existingStyle = document.getElementById('accent-color-style')
    if (existingStyle) {
      existingStyle.remove()
    }

    // Inject new accent color style
    const style = document.createElement('style')
    style.id = 'accent-color-style'
    style.setAttribute('data-light', currentAccentColorL)
    style.setAttribute('data-dark', currentAccentColorD)
    
    style.innerHTML = `
      html[data-theme='light'] {
        --a: ${hl} ${sl} ${ll};
        --root-bg: ${chroma.mix(lightBg, currentAccentColorL, 0.05, 'hsl').hex()};
        --gradient-from: ${lr} ${lg} ${lb};
        --gradient-to: ${lr} ${lg} ${lb};
      }
      html[data-theme='dark'] {
        --a: ${hd} ${sd} ${ld};
        --root-bg: ${chroma.mix(darkBg, currentAccentColorD, 0.12, 'hsl').hex()};
        --gradient-from: ${dr} ${dg} ${db};
        --gradient-to: ${dr} ${dg} ${db};
      }
      html {
        background-color: var(--root-bg) !important;
      }
    `
    
    document.head.appendChild(style)

    console.log('🎨 Accent color injected:', {
      light: currentAccentColorL,
      dark: currentAccentColorD,
    })
  }, []) // Run on every mount (page navigation)

  return null
}