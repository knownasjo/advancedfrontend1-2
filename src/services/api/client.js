import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
})

apiClient.interceptors.request.use((config) => {
  console.log(`[API] ${config.method.toUpperCase()} ${config.url}`)
  return config
})

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('[API Error]', error.message)
    return Promise.reject(error)
  }
)

export default apiClient
