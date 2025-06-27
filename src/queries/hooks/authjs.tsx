import React from 'react'

export const useHasProviders = () => {
  return true // Simplified - assume providers are available
}

export const useOauthLoginModal = () => {
  return () => {
    // Mock OAuth login modal
    alert('OAuth login modal would open here')
  }
} 