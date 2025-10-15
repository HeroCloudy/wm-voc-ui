import { useRequest } from '@/hooks/use-request.ts'
import { getSurveyListService } from '@/service/survey.ts'
import {
  DEFAULT_LIST_SIZE,
  LIST_PAGE_PARAM_KEY,
  LIST_SEARCH_PARAM_KEY,
  LIST_SIZE_PARAM_KEY,
} from '@/constants'

export const useLoadSurveyList = (opt: { isStar?: boolean; isDeleted?: boolean } = {}) => {
  const { isStar, isDeleted } = opt || {}
  const route = useRoute()
  const keyword = computed(() => route.query?.[LIST_SEARCH_PARAM_KEY])
  const pageNum = computed(() => parseInt(route.query?.[LIST_PAGE_PARAM_KEY] ?? '') || 1)
  const pageSize = computed(
    () => parseInt(route.query?.[LIST_SIZE_PARAM_KEY] ?? '') || DEFAULT_LIST_SIZE,
  )

  const { data, loading, error, run } = useRequest(async () => {
    const params = {
      keyword: keyword.value,
      isStar,
      isDeleted,
      page: pageNum.value,
      pageSize: pageSize.value,
    }
    return await getSurveyListService(params)
  })

  watchEffect(() => {
    run()
  })

  return {
    data,
    loading,
    error,
    run,
  }
}
