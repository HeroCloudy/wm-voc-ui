<!--
 @name: star.vue
 @description: 星标问卷
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/13 10:40
-->
<template>
  <div class="flex items-center justify-between mb-6">
    <div class="text-xl font-700">星标问卷</div>
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

  <list-pagination class="my-6" :total="questionTotal" />
</template>

<script setup lang="ts">
import type { QuestionType } from '@/types/types.ts'
import QuestionCard from '@/pages/manage/components/question-card.vue'
import ListSearch from '@/pages/manage/components/list-search.vue'
import { useLoadSurveyList } from '@/hooks/use-load-survey-list.ts'
import ListPagination from '@/pages/manage/components/list-pagination.vue'

const questionList = ref<QuestionType[]>([])
const questionTotal = ref(0)

const { data, loading } = useLoadSurveyList({ isStar: true })

watchEffect(() => {
  const { list = [], total = 0 } = data.value || {}
  questionList.value = list
  questionTotal.value = total ?? 0
})
</script>
<style scoped lang="scss"></style>
