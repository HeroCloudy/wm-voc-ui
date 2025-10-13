<!--
 @name: index.vue
 @description:
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/13 13:45
-->
<template>
  <el-link underline="never" class="logo" @click="router.push(PATH_HOME)">
    <el-space>
      <wm-icon icon="ant-design:form-outlined" />
      <span>问卷 DEMO</span>
    </el-space>
  </el-link>
</template>

<script setup lang="ts">
import { PATH_HOME } from '@/router'

const router = useRouter()
</script>
<style scoped lang="scss">
.logo {
  @apply text-2xl text-white;
}
</style>
