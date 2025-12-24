import client from './client'
import { LoginPayload, RegisterPayload, AuthResponse, User } from '../types'

export const authAPI = {
  register: async (payload: RegisterPayload): Promise<AuthResponse> => {
    const { data } = await client.post('/auth/register', payload)
    return data
  },

  login: async (payload: LoginPayload): Promise<AuthResponse> => {
    const { data } = await client. post('/auth/login', payload)
    if (data.token) {
      localStorage.setItem('auth_token', data.token)
    }
    return data
  },

  logout: (): void => {
    localStorage. removeItem('auth_token')
  },

  getCurrentUser: async (): Promise<User> => {
    const { data } = await client.get('/auth/me')
    return data.data || data
  },

  refreshToken: async (): Promise<AuthResponse> => {
    const { data } = await client.post('/auth/refresh')
    if (data.token) {
      localStorage.setItem('auth_token', data.token)
    }
    return data
  },
}