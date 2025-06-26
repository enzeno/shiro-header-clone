import { atom } from 'jotai'

export const isLoggedAtom = atom(false)

export const isLogged = () => false

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

export function setActivityProcessInfo(info: any) {
  // This would normally update the atom, but we're simplifying
  console.log('Activity process info:', info)
}

export function setActivityMediaInfo(info: any) {
  // This would normally update the atom, but we're simplifying
  console.log('Activity media info:', info)
}

export const getAdminUrl = () => {
  return '/admin'
} 