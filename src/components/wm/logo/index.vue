<!--
 @name: index.vue
 @description:
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/13 13:45
-->
<template>
  <el-link underline="never" class="logo" href="/">
    <el-space>
      <wm-icon icon="ant-design:form-outlined" />
      <span>wumeng问卷</span>
    </el-space>
  </el-link>
</template>

<script setup lang="ts">
defineProps<{
  p?: string
}>()
</script>
<style scoped lang="scss">
.logo {
  @apply text-2xl text-white;
}
</style>
