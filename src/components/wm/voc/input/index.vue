<!--
 @name: index.vue
 @description: 输入框组件
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/15 16:54
-->
<template>
  <div class="voc-input">
    <div class="title">{{ title }}</div>
    <div>
      <el-input :placeholder="placeholder" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defaultProps, type VocInputPropsType } from './config'

withDefaults(defineProps<VocInputPropsType>(), defaultProps)
</script>
<style scoped lang="scss">
.voc-input {
  @apply my-2;
  .title {
    @apply my-2 text-16px font-bold;
  }
}
</style>
