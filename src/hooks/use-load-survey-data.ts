import { getSurveyService } from '@/service/survey.ts'
import { useRouteParam } from '@/hooks/use-route-param.ts'
import { useRequest } from '@/hooks/use-request.ts'
import { useEditorStore } from '@/stores/modules/editor.ts'
import { useVocStore } from '@/stores/modules/voc.ts'

export function useLoadSurveyData() {
  const router = useRouter()
  const editorStore = useEditorStore()
  const vocStore = useVocStore()

  const { id } = useRouteParam()
  if (!id) {
    router.back()
  }
  const { loading, data, error } = useRequest(() => getSurveyService(id), {
    onSuccess: (data: any) => {
      if (data) {
        const { componentList = [], title = '', desc = '', js = '', css = '' } = data
        editorStore.setComponentList(componentList)
        vocStore.setPageInfo({ title, desc, js, css })
      }
    },
  })

  return {
    data,
    loading,
    error,
  }
}
