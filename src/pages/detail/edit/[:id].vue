<!--
 @description: 问卷编辑页面
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/13 10:42
-->
<template>
  <div>问卷编辑页面</div>
</template>

<script setup lang="ts">
import { getSurveyService } from '@/service/survey.ts'

const router = useRouter()
const route = useRoute()

onMounted(async () => {
  const id = (route.params?.id ?? '') as string
  if (!id) {
    router.back()
  }
  console.log('--- id', id)
  const resp = await getSurveyService(id)
  console.log(resp)
})
</script>
<style scoped lang="scss"></style>
