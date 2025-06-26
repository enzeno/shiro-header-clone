// Mock auth client for header demo
export const authClient = {
  signOut: () => Promise.resolve({ data: { success: true } }),
  useSession: () => null,
  signIn: {
    social: ({ provider, callbackURL }: { provider: string; callbackURL: string }) => {
      console.log(`Mock login with ${provider}`)
    }
  }
}

export type AuthSocialProviders =
  | 'apple'
  | 'discord'
  | 'facebook'
  | 'github'
  | 'google'
  | 'microsoft'
  | 'spotify'
  | 'twitch'
  | 'twitter'
  | 'dropbox'
  | 'linkedin'
  | 'gitlab'

export const getUserUrl = <
  T extends { handle?: string; provider: AuthSocialProviders },
>(
  user: T,
) => {
  if (!user.handle) return
  switch (user.provider) {
    case 'github': {
      return `https://github.com/${user.handle}`
    }
  }

  return
}

// Mock session hook
export const useSession = () => null
