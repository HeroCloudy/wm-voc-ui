import { getSurveyService } from '@/service/survey.ts'
import { useRouteParam } from '@/hooks/use-route-param.ts'
import { useRequest } from '@/hooks/use-request.ts'

export function useLoadSurveyData() {
  const router = useRouter()

  const { id } = useRouteParam()
  if (!id) {
    router.back()
  }
  const { loading, data, error } = useRequest(() => getSurveyService(id))

  return {
    data,
    loading,
    error,
  }
}
