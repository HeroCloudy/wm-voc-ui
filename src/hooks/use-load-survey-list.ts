import { useRequest } from '@/hooks/use-request.ts'
import { getSurveyListService } from '@/service/survey.ts'
import { LIST_SEARCH_PARAM_KEY } from '@/constants'

export const useLoadSurveyList = () => {
  const route = useRoute()
  const keyword = computed(() => route.query?.[LIST_SEARCH_PARAM_KEY])

  const { data, loading, error, run } = useRequest(async () => {
    return await getSurveyListService({ keyword: keyword.value })
  })

  watchEffect(() => {
    run()
  })

  return {
    data,
    loading,
    error,
  }
}
