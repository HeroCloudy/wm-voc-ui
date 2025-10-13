<template>
  <div class="h-full flex items-center justify-center">
    <el-result title="404" sub-title="抱歉，您访问的页面不存在">
      <template #icon>
        <el-image :src="img404" class="w-280px" />
      </template>
      <template #extra>
        <el-button type="primary" @click="router.replace(PATH_MANAGE_INDEX)">返回首页</el-button>
      </template>
    </el-result>
  </div>
</template>

<script setup lang="ts">
import img404 from '@/assets/images/404.png'
import { PATH_MANAGE_INDEX } from '@/router'

const router = useRouter()
</script>
