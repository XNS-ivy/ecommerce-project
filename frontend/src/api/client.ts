import axios, { AxiosInstance } from 'axios'

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000'

const client: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add token to requests
client.interceptors.request. use((config) => {
  const token = localStorage.getItem('auth_token')
  if (token) {
    config.headers. Authorization = `Bearer ${token}`
  }
  return config
})

// Handle responses & errors
client.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error. response?.status === 401) {
      // Token expired, redirect to login
      localStorage.removeItem('auth_token')
      window.location.href = '/'
    }
    return Promise. reject(error)
  }
)

export default client