<!--
 @description: 问卷统计页面
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/13 10:42
-->
<template>
  <div class="stat-page">
    <stat-header />

    <div class="wrapper">
      <div class="left">Left</div>
      <div class="main" v-loading="loading">
        <div class="h-full flex items-center justify-center" v-if="!pageInfo?.isPublished">
          <el-result v-if="!loading" title="未发布" sub-title="问卷没有发布，发布后才能查看统计">
            <template #icon>
              <el-image :src="img404" class="w-280px" />
            </template>
            <template #extra>
              <el-button type="primary" @click="router.back()">返回</el-button>
            </template>
          </el-result>
        </div>
        <div v-else class="h-full overflow-hidden bg-red">列表</div>
      </div>
      <div class="right">Right</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLoadSurveyData } from '@/hooks/use-load-survey-data.ts'
import img404 from '@/assets/images/404.png'
import { useGetPageInfo } from '@/hooks/use-get-page-info.ts'
import StatHeader from './components/stat-header.vue'

const { loading } = useLoadSurveyData()
const { pageInfo } = useGetPageInfo()
const router = useRouter()
</script>
<style scoped lang="scss">
.stat-page {
  @apply flex flex-col h-screen bg-[#f0f2f5] overflow-hidden;

  .wrapper {
    @apply flex-1 flex py-3 mx-6 overflow-hidden;

    .left {
      @apply w-350px bg-white px-3 box-border;
    }

    .right {
      @apply w-400px bg-white px-3  box-border;
    }

    .main {
      @apply flex-1 overflow-hidden h-full mx-5 bg-white;
    }
  }
}
</style>
