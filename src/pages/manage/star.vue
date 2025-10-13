<!--
 @name: star.vue
 @description: 星标问卷
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/13 10:40
-->
<template>
  <div class="flex items-center justify-between mb-6">
    <div class="text-xl font-700">我的问卷</div>
    <div>（搜索）</div>
  </div>

  <div>
    <template v-if="questionList?.length">
      <question-card v-for="item in questionList" :key="item.id" :data="item" />
    </template>
    <el-empty v-else />
  </div>

  <div class="my-6 text-right">分页</div>
</template>

<script setup lang="ts">
import type { QuestionType } from '@/types/types.ts'
import QuestionCard from '@/pages/manage/components/question-card.vue'

const questionList = ref<QuestionType[]>([])

onMounted(() => {
  setTimeout(() => {
    for (let i = 1; i <= 5; i++) {
      questionList.value.push({
        id: `${i}`,
        title: `测试问卷${i}`,
        isStar: true,
        isPublished: i % 3 === 0,
        answerCount: 20,
        createdTime: '2019-02-01',
      })
    }
  }, 2000)
})
</script>
<style scoped lang="scss"></style>
