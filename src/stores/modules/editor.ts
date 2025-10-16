import type { VocComponentPropsType } from '@/components/types.ts'
import { getComponent } from '@/constants/component-config.ts'

export interface ComponentInfo {
  fe_id: string
  type: string
  title: string
  props?: VocComponentPropsType
}

export const useEditorStore = defineStore('editorStore', () => {
  /** 当前问卷的组件列表 */
  const componentList = ref<ComponentInfo[]>([])

  /** 当前选中的组件id */
  const selectedId = ref<string>('')

  const setComponentList = (list: ComponentInfo[]) => {
    componentList.value = list.filter((item) => getComponent(item.type))

    if (list?.length) {
      setSelectedId(list[0]?.fe_id ?? '')
    }
  }

  const setSelectedId = (id: string) => {
    selectedId.value = id
  }

  const addComponent = (data: ComponentInfo) => {
    const newComponent = { ...data }

    const index = componentList.value.findIndex((c) => c.fe_id === selectedId.value)
    if (index >= 0) {
      componentList.value.splice(index + 1, 0, newComponent)
    } else {
      componentList.value.push(newComponent)
    }
    selectedId.value = newComponent.fe_id
  }

  return {
    componentList,
    setComponentList,
    addComponent,

    selectedId,
    setSelectedId,
  }
})
