<!--
 @description: 问卷统计页面
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/13 10:42
-->
<template>
  <div class="stat-page" v-loading="loading">
    <div class="h-full flex items-center justify-center" v-if="!pageInfo?.isPublished">
      <el-result title="404" sub-title="问卷没有发布，发布后才能查看统计">
        <template #icon>
          <el-image :src="img404" class="w-280px" />
        </template>
        <template #extra>
          <el-button type="primary" @click="router.back()">返回</el-button>
        </template>
      </el-result>
    </div>

    <template v-else>
      {{ loading ? '加载中' : JSON.stringify(data) }}
    </template>
  </div>
</template>

<script setup lang="ts">
import { useLoadSurveyData } from '@/hooks/use-load-survey-data.ts'
import img404 from '@/assets/images/404.png'
import { useGetPageInfo } from '@/hooks/use-get-page-info.ts'

const { loading, data } = useLoadSurveyData()
const { pageInfo } = useGetPageInfo()
const router = useRouter()
</script>
<style scoped lang="scss">
.stat-page {
  @apply flex flex-col h-screen bg-[#f0f2f5] overflow-hidden;
}
</style>
