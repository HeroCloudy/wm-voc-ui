import { getSurveyService } from '@/service/survey.ts'
import { useRouteParam } from '@/hooks/use-route-param.ts'
import { useRequest } from '@/hooks/use-request.ts'
import { useEditorStore } from '@/stores/modules/editor.ts'

export function useLoadSurveyData() {
  const router = useRouter()
  const editorStore = useEditorStore()

  const { id } = useRouteParam()
  if (!id) {
    router.back()
  }
  const { loading, data, error } = useRequest(() => getSurveyService(id), {
    onSuccess: (data: any) => {
      if (data) {
        const { componentList = [] } = data
        editorStore.setComponentList(componentList)
      }
    },
  })

  return {
    data,
    loading,
    error,
  }
}
