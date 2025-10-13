<!--
 @name: index.vue
 @description:
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/13 13:54
-->
<template>
  <div class="user-info">
    <el-link underline="never" @click="router.push(PATH_LOGIN)">登录</el-link>
  </div>
</template>

<script setup lang="ts">
import { PATH_LOGIN } from '@/router'

const router = useRouter()
</script>
<style scoped lang="scss">
.user-info {
  .el-link {
    @apply text-white;
  }
}
</style>
