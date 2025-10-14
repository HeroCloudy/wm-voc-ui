<!--
 @description: 问卷统计页面
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/13 10:42
-->
<template>
  <div>问卷统计页面</div>
  <div>
    {{ loading ? '加载中' : JSON.stringify(data, 2) }}
  </div>
</template>

<script setup lang="ts">
import { useLoadSurveyData } from '@/hooks/use-load-survey-data.ts'

const { loading, data } = useLoadSurveyData()
</script>
<style scoped lang="scss"></style>
