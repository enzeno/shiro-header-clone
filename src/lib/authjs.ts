export type AuthSocialProviders =
  | 'apple'
  | 'facebook'
  | 'github'
  | 'google'
  | 'microsoft'
  | 'twitter'

export const authClient = {
  signOut: () => {
    return Promise.resolve({ data: { success: true } })
  }
}

export const getUserUrl = <
  T extends { handle?: string; provider: AuthSocialProviders },
>(
  user: T,
): string | undefined => {
  if (!user.handle) return
  switch (user.provider) {
    case 'github':
      return `https://github.com/${user.handle}`
    case 'twitter':
      return `https://twitter.com/${user.handle}`
    default:
      return undefined
  }
} 