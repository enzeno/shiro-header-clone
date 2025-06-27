const getRandomColor = (
  lightness: [number, number],
  saturation: [number, number],
  hue: number,
) => {
  const satAccent = Math.floor(
    Math.random() * (saturation[1] - saturation[0] + 1) + saturation[0],
  )
  const lightAccent = Math.floor(
    Math.random() * (lightness[1] - lightness[0] + 1) + lightness[0],
  )

  const satBackground = satAccent > 30 ? satAccent - 30 : 0
  const lightBackground = lightAccent < 80 ? lightAccent + 20 : 100

  return {
    accent: `hsl(${hue}, ${satAccent}%, ${lightAccent}%)`,
    background: `hsl(${hue}, ${satBackground}%, ${lightBackground}%)`,
  }
}

export function stringToHue(str: string) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }
  const hue = hash % 360
  return hue < 0 ? hue + 360 : hue
}

export const getColorScheme = (hue?: number) => {
  const baseHue = hue ?? Math.floor(Math.random() * 361)
  const complementaryHue = (baseHue + 180) % 360

  const lightColors = getRandomColor([40, 70], [70, 90], baseHue)
  const darkColors = getRandomColor([20, 50], [70, 90], complementaryHue)

  return {
    light: {
      accent: lightColors.accent,
      background: lightColors.background,
    },
    dark: {
      accent: darkColors.accent,
      background: darkColors.background,
    },
  }
} 