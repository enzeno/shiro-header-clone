// Custom Spring type that includes the 'type' property
type SpringConfig = {
  type?: 'spring'
  stiffness?: number
  damping?: number
  bounce?: number
  duration?: number
}

export const reboundPreset: SpringConfig = {
  type: 'spring',
  bounce: 10,
  stiffness: 140,
  damping: 8,
}

export const microDampingPreset: SpringConfig = {
  type: 'spring',
  damping: 24,
}

export const microReboundPreset: SpringConfig = {
  type: 'spring',
  stiffness: 300,
  damping: 20,
}

export const softSpringPreset: SpringConfig = {
  duration: 0.35,
  type: 'spring',
  stiffness: 120,
  damping: 20,
}

export const softBouncePreset: SpringConfig = {
  type: 'spring',
  damping: 10,
  stiffness: 100,
} 