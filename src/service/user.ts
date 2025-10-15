import instance from '@/service/ajax.ts'

export const registerService = (userInfo: Record<string, any>) =>
  instance.post('/api/user/register', userInfo)

export const loginService = (userInfo: Record<string, any>) =>
  instance.post('/api/user/login', userInfo)
