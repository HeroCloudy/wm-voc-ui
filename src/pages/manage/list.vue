<!--
 @name: list.vue
 @description: 我的问卷
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/13 10:39
-->
<template>
  <div class="flex items-center justify-between mb-6">
    <div class="text-xl font-700">我的问卷</div>
    <div>
      <list-search />
    </div>
  </div>

  <div v-loading="loading">
    <template v-if="questionList?.length">
      <question-card v-for="item in questionList" :key="item.id" :data="item" />
    </template>
    <el-empty v-else />
  </div>

  <div class="my-6 text-center">Load more 上划加载更多</div>
</template>

<script setup lang="ts">
import QuestionCard from '@/pages/manage/components/question-card.vue'
import type { QuestionType } from '@/types/types.ts'
import ListSearch from '@/pages/manage/components/list-search.vue'
import { useLoadSurveyList } from '@/hooks/use-load-survey-list.ts'

const questionList = ref<QuestionType[]>([])

const { data, loading } = useLoadSurveyList()

watchEffect(() => {
  const { list = [] } = data.value || []
  questionList.value = list
})
</script>

<style scoped lang="scss">
.list {
}
</style>
