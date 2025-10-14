<!--
 @description: 问卷编辑页面
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/13 10:42
-->
<template>
  <div>问卷编辑页面</div>
  <div>
    {{ loading ? '加载中' : JSON.stringify(data) }}
  </div>
</template>

<script setup lang="ts">
import { useLoadSurveyData } from '@/hooks/use-load-survey-data.ts'

// const router = useRouter()
// const route = useRoute()

// const loading = ref(false)
// const data = ref<Record<string, any>>()
//
// onMounted(async () => {
//   const id = (route.params?.id ?? '') as string
//   if (!id) {
//     router.back()
//   }
//   loading.value = true
//   const resp = await getSurveyService(id)
//   loading.value = false
//   data.value = resp
//   console.log(resp)
// })
const { loading, data } = useLoadSurveyData()
</script>
<style scoped lang="scss"></style>
