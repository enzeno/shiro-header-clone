import { atom } from 'jotai'

export const activityProcessInfoAtom = atom<{
  name: string
  iconUrl?: string
  iconBase64?: string
  description?: string
} | null>(null)

export const activityMediaInfoAtom = atom<{
  title: string
  artist: string
} | null>(null)

export function setActivityProcessInfo(info: {
  name: string
  iconUrl?: string
  iconBase64?: string
  description?: string
} | null) {
  // In a real implementation, this would update the atom
  console.log('Setting activity process info:', info)
}

export function setActivityMediaInfo(info: {
  title: string
  artist: string
} | null) {
  // In a real implementation, this would update the atom
  console.log('Setting activity media info:', info)
} 