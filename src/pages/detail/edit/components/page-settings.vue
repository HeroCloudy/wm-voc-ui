<!--
 @name: page-settings.vue
 @description:
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/17 21:47
-->
<template>
  <el-scrollbar height="100%">
    <el-form :model="pageInfo" label-position="top" v-if="pageInfo" @submit.prevent>
      <el-form-item label="问卷标题" prop="title" :rules="[RULES.R('标题不能为空')]">
        <el-input v-model="pageInfo.title" />
      </el-form-item>
      <el-form-item label="问卷信息" prop="desc">
        <el-input type="textarea" :rows="3" v-model="pageInfo.desc" />
      </el-form-item>
      <el-form-item label="JS" prop="js">
        <el-input type="textarea" :rows="3" v-model="pageInfo.js" />
      </el-form-item>
      <el-form-item label="CSS" prop="css">
        <el-input type="textarea" :rows="3" v-model="pageInfo.css" />
      </el-form-item>
    </el-form>
  </el-scrollbar>
</template>

<script setup lang="ts">
import { RULES } from '@/constants/rules.ts'
import { useGetPageInfo } from '@/hooks/use-get-page-info.ts'

const { pageInfo } = useGetPageInfo()
</script>
<style scoped lang="scss"></style>
