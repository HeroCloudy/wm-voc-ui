<!--
 @name: component-lib.vue
 @description: 左侧-组件库
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/15 22:01
-->
<template>
  <div class="component-lib">
    <div v-for="(item, index) in componentGroup" :key="index" class="mb-4">
      <div class="title">{{ item.groupName }}</div>
      <div v-for="(c, i) in item.components" :key="i" class="wrapper" @click="onItemClick(c)">
        <div class="pointer-events-none">
          <component :is="c.component" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { componentGroup } from '@/constants/component-config.ts'
import type { ComponentExportType } from '@/components/types.ts'
import { type ComponentInfo, useEditorStore } from '@/stores/modules/editor.ts'

const editorStore = useEditorStore()

const onItemClick = (item: ComponentExportType) => {
  const { title, type } = item
  const newComponent: ComponentInfo = {
    fe_id: `${new Date().getTime()}`,
    title,
    type,
  }
  editorStore.addComponent(newComponent)
}
</script>
<style scoped lang="scss">
.component-lib {
  .title {
    @apply font-bold my-2;
  }

  .wrapper {
    @apply mb-3 bg-white cursor-pointer px-4 py-2;
    border-radius: 3px;

    &:hover {
      @apply bg-gray-1;
    }
  }
}
</style>
