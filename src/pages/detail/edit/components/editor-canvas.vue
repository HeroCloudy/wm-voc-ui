<!--
 @name: editor-canvas.vue
 @description:
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/15 17:17
-->
<template>
  <div class="editor-canvas">
    {{ selectedId }}
    <div
      v-for="item in innerComponentList"
      :key="item.fe_id"
      :class="['component-wrapper', selectedId === item.fe_id ? 'selected' : '']"
      @click.stop="onItemClick(item.fe_id)"
    >
      <div class="component">
        <component :is="componentMap[item.type]" v-bind="item.props" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGetComponentList } from '@/hooks/use-get-component-list.ts'
import WmVocTitle from '@/components/wm/voc/title/index.vue'
import WmVocInput from '@/components/wm/voc/input/index.vue'
import { type ComponentInfo, useEditorStore } from '@/stores/modules/editor.ts'

const componentMap: Record<string, any> = {
  title: WmVocTitle,
  input: WmVocInput,
}

const editorStore = useEditorStore()

const { componentList } = useGetComponentList()
const selectedId = computed(() => editorStore.selectedId)

const innerComponentList = computed(() =>
  componentList.value.filter((item: ComponentInfo) => item.type && componentMap[item.type]),
)

const onItemClick = (id: string) => {
  editorStore.setSelectedId(id)
}
</script>
<style scoped lang="scss">
.editor-canvas {
  .component-wrapper {
    @apply m-3 p-3;
    border: 1px solid #fff;
    border-radius: 4px;

    &:hover {
      border-color: #d9d9d9;
    }

    .component {
      @apply pointer-events-none;
    }

    &.selected {
      border-color: var(--wm-color-primary) !important;
    }
  }
}
</style>
