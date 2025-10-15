import type { VocComponentPropsType } from '@/components/types.ts'

export interface ComponentInfo {
  fe_id: string
  type: string
  title: string
  props: VocComponentPropsType
}

export const useEditorStore = defineStore('editorStore', () => {
  const componentList = ref<ComponentInfo[]>([])

  const setComponentList = (list: ComponentInfo[]) => {
    componentList.value = list
  }

  return {
    componentList,
    setComponentList,
  }
})
