<!--
 @name: list.vue
 @description: 我的问卷
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/13 10:39
-->
<template>
  <div class="flex items-center justify-between mb-6">
    <div class="text-xl font-700">我的问卷</div>
    <div>（搜索）</div>
  </div>

  <div>
    <question-card v-for="item in questionList" :key="item.id" :data="item" />
  </div>

  <div class="my-6 text-center">Load more 上划加载更多</div>
</template>

<script setup lang="ts">
import QuestionCard from '@/pages/manage/components/question-card.vue'
import type { QuestionType } from '@/types/types.ts'

const questionList = ref<QuestionType[]>([])

onMounted(() => {
  for (let i = 1; i <= 5; i++) {
    questionList.value.push({
      id: `${i}`,
      title: `测试问卷${i}`,
      isStar: i % 2 === 0,
      isPublished: i % 3 === 0,
      answerCount: 20,
      createdTime: '2019-02-01',
    })
  }
})
</script>

<style scoped lang="scss">
.list {
}
</style>
