import type { VocComponentPropsType } from '@/components/types.ts'
import { getComponent, getComponentConfig } from '@/constants/component-config.ts'

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

  /** 当前选中的组件 */
  const selectedComponent = ref<ComponentInfo>()

  const setComponentList = (list: ComponentInfo[]) => {
    componentList.value = list.filter((item) => !!getComponentConfig(item.type))

    if (componentList.value?.length) {
      setCurrentSelect(componentList.value[0])
    }
  }

  const setCurrentSelect = (info?: ComponentInfo) => {
    if (info) {
      selectedComponent.value = info
      selectedId.value = info.fe_id
    } else {
      selectedComponent.value = undefined
      selectedId.value = ''
    }
  }

  const addComponent = (data: ComponentInfo) => {
    const newComponent = { ...data }

    const index = componentList.value.findIndex((c) => c.fe_id === selectedId.value)
    if (index >= 0) {
      componentList.value.splice(index + 1, 0, newComponent)
    } else {
      componentList.value.push(newComponent)
    }
    setCurrentSelect(newComponent)
  }

  return {
    componentList,
    setComponentList,
    addComponent,

    selectedId,
    selectedComponent,
    setCurrentSelect,
  }
})
