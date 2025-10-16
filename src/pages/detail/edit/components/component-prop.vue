<!--
 @name: component-prop.vue
 @description: 右侧 - 组件属性
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/16 10:35
-->
<template>
  <div class="component-prop" v-if="selectedComponent">
    <component :is="config?.propComponent" v-bind="selectedComponent.props" @change="onChange" />
  </div>
  <div v-else>未选中任何组件</div>
</template>

<script setup lang="ts">
import { useGetComponent } from '@/hooks/use-get-component.ts'
import { getComponentConfig } from '@/constants/component-config.ts'
import type { VocComponentPropsType } from '@/components/types.ts'
import { useEditorStore } from '@/stores/modules/editor.ts'

const editorStore = useEditorStore()
const { selectedComponent } = useGetComponent()
const config = computed(() => {
  if (!selectedComponent.value) {
    return undefined
  }
  return getComponentConfig(selectedComponent.value.type)
})

const fn = useDebounceFn((value: VocComponentPropsType) => {
  editorStore.updateComponentProp(value)
}, 200)

const onChange = (value: VocComponentPropsType) => {
  fn(value)
}
</script>
<style scoped lang="scss"></style>
