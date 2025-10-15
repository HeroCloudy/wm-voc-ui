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

  <div v-loading="false">
    <template v-if="questionList?.length">
      <question-card v-for="item in questionList" :key="item.id" :data="item" />
    </template>
    <el-empty v-else />
  </div>

  <div class="my-6 text-center">
    <div v-if="loading">加载中...</div>
    <div v-else-if="!hasMore">没有更多数据</div>
    <div v-else>上划加载更多...</div>
  </div>
</template>

<script setup lang="ts">
import QuestionCard from '@/pages/manage/components/question-card.vue'
import type { QuestionType } from '@/types/types.ts'
import ListSearch from '@/pages/manage/components/list-search.vue'
import { useRequest } from '@/hooks/use-request.ts'
import { getSurveyListService } from '@/service/survey.ts'
import { DEFAULT_LIST_SIZE } from '@/constants'

const route = useRoute()

const questionList = ref<QuestionType[]>([])
const page = ref(1)
const questionTotal = ref(0)
const hasMore = computed(() => questionTotal.value > questionList.value.length)

// const { data, loading } = useLoadSurveyList()

const keyword = computed(() => route.query?.keyword ?? '')

const { run: loadData, loading } = useRequest(
  () => {
    return getSurveyListService({
      page: page.value,
      pageSize: DEFAULT_LIST_SIZE,
      keyword: keyword.value,
    })
  },
  {
    manual: true,
    onSuccess(v: any) {
      console.log(v)
      questionList.value.push(...(v?.list ?? []))
      questionTotal.value = v?.total ?? 0

      page.value += 1
    },
  },
)

const tryLoadMore = useDebounceFn(loadData, 1000)

// watchEffect(() => {
//   loadData()
// })

watch(
  keyword,
  () => {
    page.value = 1
    questionList.value = []
    loadData()
  },
  { immediate: true },
)

const onScroll = () => {
  // 页面滚动到底部判断
  if (
    window.scrollY + window.innerHeight >= document.documentElement.scrollHeight &&
    hasMore.value
  ) {
    tryLoadMore()
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped lang="scss">
.list {
}
</style>
