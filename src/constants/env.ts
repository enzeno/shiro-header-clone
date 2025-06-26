// Basic environment constants for the header clone project
export const API_URL = '/api/v2'
export const GATEWAY_URL = ''

export const isDev = process.env.NODE_ENV === 'development'
export const isClientSide = typeof window !== 'undefined' 