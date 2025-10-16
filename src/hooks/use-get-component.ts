import { useEditorStore } from '@/stores/modules/editor.ts'

export function useGetComponent() {
  const editorStore = useEditorStore()

  const { componentList, selectedId, selectedComponent } = storeToRefs(editorStore)

  return {
    componentList,
    selectedId,
    selectedComponent,
  }
}
