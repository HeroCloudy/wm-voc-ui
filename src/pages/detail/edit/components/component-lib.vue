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
      <div v-for="(c, i) in item.components" :key="i" class="wrapper">
        <div class="component">
          <component :is="c" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { componentGroup } from '@/constants/component-config.ts'
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

    .component {
      @apply pointer-events-none;
    }
  }
}
</style>
