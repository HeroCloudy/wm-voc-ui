<!--
 @name: index.vue
 @description: 段落组件
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/17 10:48
-->
<template>
  <div class="voc-paragraph">
    <div :class="[isCenter ? 'text-center' : 'text-left', 'whitespace-pre-wrap']">{{ text }}</div>
  </div>
</template>

<script setup lang="ts">
import { defaultProps, type VocParagraphPropsType } from './config.ts'

withDefaults(defineProps<VocParagraphPropsType>(), defaultProps)
</script>
<style scoped lang="scss">
.voc-paragraph {
}
</style>
