<template>
  <div class="index">
    <div class="text-3xl font-700">问卷调查 | 在线投票</div>
    <div class="mt-4 text-lg">已累计创建问卷 110 份，发布问卷 93 份，收到答卷 876 份</div>
    <div class="mt-8">
      <el-button class="h-60px! text-2xl!" type="primary" @click="router.push(PATH_MANAGE_INDEX)">
        开始使用
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PATH_MANAGE_INDEX } from '@/router'

const router = useRouter()
</script>

<style scoped lang="scss">
.index {
  @apply h-full flex flex-col items-center justify-center;
  // http://color.oulu.me
  background-image: linear-gradient(135deg, #fdfcfb, #e2d1c3 100%);
}
</style>
