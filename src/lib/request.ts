import { QueryClient } from '@tanstack/react-query'

// Create a query client
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes
    },
  },
})

// Mock API client for header demo
export const apiClient = {
  user: {
    proxy: (endpoint: string) => ({
      post: () => Promise.resolve({ data: { success: true } })
    })
  }
} 