<!--
 @name: index.vue
 @description: 问卷信息组件
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/15 16:54
-->
<template>
  <div class="voc-info">
    <div class="text-32px mb-2">{{ title }}</div>
    <div class="whitespace-pre-wrap text-gray-800">{{ description }}</div>
  </div>
</template>

<script setup lang="ts">
import { defaultProps, type VocInfoPropsType } from './config.ts'

withDefaults(defineProps<VocInfoPropsType>(), defaultProps)
</script>
<style scoped lang="scss">
.voc-info {
  @apply text-center my-3;
}
</style>
