// This is a simplified version of the session reader hooks

export const useSessionReader = () => {
  // In a real implementation, this would read from a session atom
  return {
    data: {
      name: 'User',
      avatar: 'https://via.placeholder.com/40',
      email: 'user@example.com',
    },
    isLoading: false,
    isError: false,
  }
} 