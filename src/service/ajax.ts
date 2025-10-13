import axios from 'axios'

export type ResType = {
  errno: number
  msg?: string
  data?: Record<string, any>
}

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
})

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
