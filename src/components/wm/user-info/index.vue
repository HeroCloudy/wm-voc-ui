<!--
 @name: index.vue
 @description:
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/13 13:54
-->
<template>
  <div class="user-info">
    <template v-if="userInfo">
      <span class="text-#e8e8e8">
        <wm-icon icon="ant-design:user-outlined" />
        {{ userInfo?.nickname }}
      </span>
      <el-link underline="never" @click="onLogout" class="ml-2">退出</el-link>
    </template>

    <el-link v-else underline="never" @click="router.push(PATH_LOGIN)">登录</el-link>
  </div>
</template>

<script setup lang="ts">
import { PATH_LOGIN } from '@/router'
import { useCoreStore } from '@/stores/modules/core.ts'

const router = useRouter()
const coreStore = useCoreStore()

const userInfo = computed(() => coreStore.userInfo)

const onLogout = () => {
  coreStore.logout()
  router.push(PATH_LOGIN)
}
</script>
<style scoped lang="scss">
.user-info {
  @apply flex items-center;
  .el-link {
    @apply text-gray-100;
  }
}
</style>
