import instance from '@/service/ajax.ts'

export const getVocStatListService = (vocId: string, opt: { page: number; pageSize: number }) =>
  instance.get(`api/stat/${vocId}`, { params: opt })
