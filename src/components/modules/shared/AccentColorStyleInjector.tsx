'use client'

import { useEffect } from 'react'
import chroma from 'chroma-js'
import Color from 'colorjs.io'

const accentColorLight = [
  // 浅葱
  '#33A6B8',
  '#FF6666', 
  '#26A69A',
  '#fb7287',
  '#69a6cc',
]

const accentColorDark = [
  // 桃
  '#F596AA',
  '#A0A7D4',
  '#ff7b7b', 
  '#99D8CF',
  '#838BC6',
]

const hexToOklchString = (hex: string) => {
  // @ts-ignore
  return new Color(hex).oklch
}

const lightBg = 'rgb(250, 250, 250)'
const darkBg = 'rgb(0, 2, 18)'

export function AccentColorStyleInjector() {
  useEffect(() => {
    const Length = Math.max(accentColorLight.length, accentColorDark.length)
    const randomSeed = Math.floor(Math.random() * Length)
    const currentAccentColorL = accentColorLight[randomSeed]
    const currentAccentColorD = accentColorDark[randomSeed]

    const lightOklch = hexToOklchString(currentAccentColorL)
    const darkOklch = hexToOklchString(currentAccentColorD)

    const [hl, sl, ll] = lightOklch
    const [hd, sd, ld] = darkOklch

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
        --root-bg: ${chroma.mix(lightBg, currentAccentColorL, 0.05, 'rgb').hex()};
      }
      html[data-theme='dark'] {
        --a: ${hd} ${sd} ${ld};
        --root-bg: ${chroma.mix(darkBg, currentAccentColorD, 0.12, 'rgb').hex()};
      }
      html {
        background-color: var(--root-bg) !important;
      }
    `
    
    document.head.appendChild(style)

    console.log('🎨 Accent color injected:', {
      light: currentAccentColorL,
      dark: currentAccentColorD,
      lightOklch: `${hl} ${sl} ${ll}`,
      darkOklch: `${hd} ${sd} ${ld}`,
      seed: randomSeed
    })
  }, []) // Run on every mount (page navigation)

  return null
}