import { type ComponentInfo, useEditorStore } from '@/stores/modules/editor.ts'

export function useGetComponentList() {
  const editorStore = useEditorStore()

  const componentList = computed<ComponentInfo[]>(() => editorStore.componentList)

  return {
    componentList,
  }
}
