import { useMagicKeys } from '@vueuse/core'
import { useEditorStore } from '@/stores/modules/editor.ts'

function isInputActive() {
  return document.activeElement !== document.body
}

export function useBindCanvasKey() {
  const editorStore = useEditorStore()

  const keys: any = useMagicKeys({
    // passive: false,
    // onEventFired: (e: KeyboardEvent) => {
    //   e.preventDefault()
    //   e.stopPropagation()
    //   return false
    // },
  })

  whenever(keys['backspace'], () => {
    if (!isInputActive()) {
      editorStore.removeComponent()
    }
  })

  whenever(keys['delete'], () => {
    if (!isInputActive()) {
      editorStore.removeComponent()
    }
  })

  whenever(keys['meta_l'], () => {
    if (!isInputActive()) {
      editorStore.toggleComponentLock(editorStore.selectedId)
    }
  })

  whenever(keys['meta_h'], () => {
    if (!isInputActive()) {
      editorStore.updateComponentHidden(editorStore.selectedId, true)
    }
  })

  whenever(keys['meta_c'], () => {
    if (!isInputActive()) {
      editorStore.copySelectedComponent()
    }
  })

  whenever(keys['meta_v'], () => {
    if (!isInputActive()) {
      editorStore.pasteComponent()
    }
  })

  whenever(keys['up'], () => {
    if (!isInputActive()) {
      editorStore.selectPrevComponent()
    }
  })

  whenever(keys['down'], () => {
    if (!isInputActive()) {
      editorStore.selectNextComponent()
    }
  })

  whenever(keys['meta_z'], () => {
    if (!isInputActive()) {
      editorStore.undo()
    }
  })

  whenever(keys['shift_meta_z'], () => {
    if (!isInputActive()) {
      editorStore.redo()
    }
  })

  whenever(keys['meta_r'], () => {
    window.location.reload()
  })
}
