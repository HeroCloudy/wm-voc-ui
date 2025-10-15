import axios from 'axios'
import { useCoreStore } from '@/stores/modules/core.ts'

export type ResType = {
  errno: number
  msg?: string
  data?: Record<string, any>
}

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
})

instance.interceptors.request.use(
  (config) => {
    const coreStore = useCoreStore()
    const token = coreStore.token
    const headers = config.headers || {}
    if (token) {
      headers.token = `bearer ${token}`
      config.headers = headers
    }
    return config
  },
  (error) => Promise.reject(error),
)

instance.interceptors.response.use((resp) => {
  const resData = (resp.data || {}) as ResType
  const { errno, data = {}, msg = '' } = resData
  if (errno !== 0) {
    if (msg) {
      ElMessage.error(msg)
    }
    throw new Error(msg || '')
  }
  return data as any
})

export default instance
