export interface PageInfo {
  title: string
  desc?: string
  js?: string
  css?: string
  isPublished?: boolean
}

export const useVocStore = defineStore('vocStore', () => {
  const pageInfo = ref<PageInfo>()

  const setPageInfo = (info: PageInfo) => {
    pageInfo.value = info
  }

  return {
    pageInfo,
    setPageInfo,
  }
})
