import { useVocStore } from '@/stores/modules/voc.ts'

export function useGetPageInfo() {
  const vocStore = useVocStore()

  const { pageInfo } = storeToRefs(vocStore)

  return {
    pageInfo,
  }
}
