export * from './hooks/viewport'

export const useActivity = () => {
  return {
    process: null,
    media: null
  }
}

export const useResolveAdminUrl = () => {
  return () => '#'
}

export const useIsLogged = () => {
  return false
} 