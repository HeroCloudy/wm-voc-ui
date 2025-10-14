import { getSurveyService } from '@/service/survey.ts'
import { useRouteParam } from '@/hooks/use-route-param.ts'

export function useLoadSurveyData() {
  const loading = ref<boolean>(false)
  const data = ref<Record<string, any>>()
  const router = useRouter()

  onMounted(async () => {
    const { id } = useRouteParam()
    if (!id) {
      router.back()
    }
    loading.value = true
    const resp = await getSurveyService(id)
    loading.value = false
    data.value = resp
  })

  return {
    data,
    loading,
  }
}
