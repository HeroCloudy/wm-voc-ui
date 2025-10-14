import instance from '@/service/ajax.ts'

export const getSurveyService = (id: string) => instance.get(`/api/survey/${id}`)

export const createSurveyService = () => instance.post(`/api/survey`, {})

export const getSurveyListService = (params: Record<string, any> = {}) =>
  instance.get(`/api/survey`, { params })
