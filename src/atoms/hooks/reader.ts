import type { AuthSocialProviders } from '@/lib/authjs'

export interface SessionData {
  name: string
  image: string
  email?: string
  handle?: string
  provider?: AuthSocialProviders
}

// This is a simplified version of the session reader hooks
export const useSessionReader = (): SessionData | null => {
  // In a real implementation, this would read from a session atom
  // For the demo, return a mock session or null
  return {
    name: 'John Doe',
    image: 'https://avatars.githubusercontent.com/u/1?v=4',
    email: 'john@example.com',
    handle: 'johndoe',
    provider: 'github',
  }
} 