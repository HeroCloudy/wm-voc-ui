import type { VocComponentPropsType } from '@/components/types.ts'
import { getComponentConfig } from '@/constants/component-config.ts'
import { getNextSelectedId } from '@/utils'
import { cloneDeep } from 'lodash-es'

export interface ComponentInfo {
  fe_id: string
  type: string
  title: string
  isHidden?: boolean
  isLocked?: boolean
  props?: VocComponentPropsType
}

export const useEditorStore = defineStore(
  'editorStore',
  () => {
    /** 当前问卷的组件列表 */
    const componentList = ref<ComponentInfo[]>([])

    /** 当前选中的组件id */
    const selectedId = ref<string>('')

    const copiedComponent = ref<ComponentInfo>()

    /** 当前选中的组件 */
    const selectedComponent = computed(() =>
      componentList.value.find((item) => item.fe_id === selectedId.value),
    )

    const setComponentList = (list: ComponentInfo[]) => {
      copiedComponent.value = undefined
      componentList.value = list.filter((item) => !!getComponentConfig(item.type))

      if (componentList.value?.length) {
        setCurrentSelect(componentList.value[0])
      }
    }

    const setCurrentSelect = (info?: ComponentInfo) => {
      if (info) {
        selectedId.value = info.fe_id
      } else {
        selectedId.value = ''
      }
    }

    const getSelectedIndex = () =>
      componentList.value.findIndex((c) => c.fe_id === selectedId.value)

    const addComponent = (data: ComponentInfo) => {
      const newComponent = { ...data }

      const index = getSelectedIndex()
      if (index >= 0) {
        componentList.value.splice(index + 1, 0, newComponent)
      } else {
        componentList.value.push(newComponent)
      }
      setCurrentSelect(newComponent)
    }

    const removeComponent = () => {
      const index = getSelectedIndex()
      if (index < 0) {
        return
      }

      const newSelectedId = getNextSelectedId(index, componentList.value)

      componentList.value.splice(index, 1)
      selectedId.value = newSelectedId
    }

    const updateComponentHidden = (id: string, isHidden: boolean) => {
      const index = componentList.value.findIndex((c) => c.fe_id === id)
      if (index < 0) {
        return
      }

      const newSelectedId = getNextSelectedId(
        index,
        componentList.value.filter((c) => !c.isHidden),
      )
      componentList.value[index]!.isHidden = isHidden
      if (isHidden) {
        selectedId.value = newSelectedId
      } else {
        selectedId.value = id
      }
    }

    const updateComponentProp = (value: VocComponentPropsType) => {
      const target = componentList.value.find((item) => item.fe_id === selectedId.value)
      if (target) {
        target.props = value
      }
    }

    const toggleComponentLock = (id: string) => {
      const target = componentList.value.find((item) => item.fe_id === id)
      if (target) {
        target.isLocked = !target.isLocked
      }
    }

    const copySelectedComponent = () => {
      if (selectedComponent.value) {
        copiedComponent.value = cloneDeep(selectedComponent.value)
      }
    }

    const pasteComponent = () => {
      if (!copiedComponent.value) {
        return
      }
      const newComponent = {
        ...copiedComponent.value,
        fe_id: `${new Date().getTime()}`,
      }
      addComponent(newComponent)
    }

    const selectPrevComponent = () => {
      const index = getSelectedIndex()
      if (index <= 0) {
        return
      }
      selectedId.value = componentList.value[index - 1]!.fe_id
    }

    const selectNextComponent = () => {
      const index = getSelectedIndex()
      if (index >= componentList.value.length - 1) {
        return
      }
      selectedId.value = componentList.value[index + 1]!.fe_id
    }

    const moveSelectComponentUp = () => {
      const index = getSelectedIndex()
      if (index <= 0) {
        return
      }
      const target = componentList.value.splice(index, 1)
      if (target) {
        componentList.value.splice(index - 1, 0, ...target)
      }
    }

    const moveSelectComponentDown = () => {
      const index = getSelectedIndex()
      if (index >= componentList.value.length - 1) {
        return
      }
      const target = componentList.value.splice(index, 1)
      if (target) {
        componentList.value.splice(index + 1, 0, ...target)
      }
    }

    return {
      componentList,
      setComponentList,
      addComponent,
      updateComponentProp,
      removeComponent,
      updateComponentHidden,
      toggleComponentLock,
      copySelectedComponent,

      moveSelectComponentUp,
      moveSelectComponentDown,

      selectedId,
      selectedComponent,
      setCurrentSelect,
      getSelectedIndex,

      copiedComponent,
      pasteComponent,
      selectPrevComponent,
      selectNextComponent,
    }
  },
  {
    undo: {
      omit: ['selectedId', 'copiedComponent'],
    },
  },
)
