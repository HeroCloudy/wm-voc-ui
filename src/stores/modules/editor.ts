import type { VocComponentPropsType } from '@/components/types.ts'

export interface ComponentInfo {
  fe_id: string
  type: string
  title: string
  props: VocComponentPropsType
}

export const useEditorStore = defineStore('editorStore', () => {
  /** 当前问卷的组件列表 */
  const componentList = ref<ComponentInfo[]>([])

  /** 当前选中的组件id */
  const selectedId = ref<string>('')

  const setComponentList = (list: ComponentInfo[]) => {
    componentList.value = list

    if (list?.length) {
      setSelectedId(list[0]?.fe_id ?? '')
    }
  }

  const setSelectedId = (id: string) => {
    selectedId.value = id
  }

  return {
    componentList,
    setComponentList,

    selectedId,
    setSelectedId,
  }
})
