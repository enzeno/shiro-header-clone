// Mock API client for header demo
export const apiClient = {
  user: {
  proxy: (endpoint: string) => ({
      post: () => Promise.resolve({ data: { success: true } })
    })
    }
} 