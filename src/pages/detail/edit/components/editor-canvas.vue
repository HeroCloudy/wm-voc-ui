<!--
 @name: editor-canvas.vue
 @description:
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/15 17:17
-->
<template>
  <div class="editor-canvas">
    <div
      v-for="item in innerComponentList"
      :key="item.fe_id"
      :class="[
        'component-wrapper',
        selectedId === item.fe_id ? 'selected' : '',
        item.isLocked ? 'locked' : '',
      ]"
      @click.stop="onItemClick(item)"
    >
      <div class="component">
        <component :is="item.c" v-bind="item.props" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGetComponent } from '@/hooks/use-get-component.ts'
import { type ComponentInfo, useEditorStore } from '@/stores/modules/editor.ts'
import { getComponent } from '@/constants/component-config.ts'

const editorStore = useEditorStore()

const { componentList } = useGetComponent()
const selectedId = computed(() => editorStore.selectedId)

const innerComponentList = computed(() =>
  componentList.value
    .map((item) => ({
      ...item,
      c: getComponent(item.type),
    }))
    .filter((item) => !!item.c && !item.isHidden),
)

const onItemClick = (info: ComponentInfo) => {
  editorStore.setCurrentSelect(info)
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

    &.locked {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
}
</style>
