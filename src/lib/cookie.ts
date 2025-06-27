export const getToken = (): string | null => {
  if (typeof document === 'undefined') return null
  const cookies = document.cookie.split(';')
  const tokenCookie = cookies.find(cookie => cookie.trim().startsWith('token='))
  return tokenCookie ? tokenCookie.split('=')[1] : null
}

export const removeToken = (): void => {
  if (typeof document === 'undefined') return
  document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
} 