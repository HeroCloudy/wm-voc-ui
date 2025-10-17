<!--
 @name: prop-form.vue
 @description:
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/16 10:16
-->
<template>
  <el-form :model="form" label-position="top">
    {{ form }}
    <el-form-item label="段落内容" prop="text" :rules="[RULES.R('请输入段落内容')]">
      <el-input
        type="textarea"
        :rows="3"
        v-model="form.text"
        clearable
        @keyup.enter.stop="() => {}"
      />
    </el-form-item>
    <el-form-item label="居中显示" prop="isCenter">
      <el-switch v-model="form.isCenter" />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { RULES } from '@/constants/rules.ts'
import type { VocParagraphPropsType } from './config.ts'
import { usePropForm } from '@/hooks/use-prop-form.ts'

const props = defineProps<VocParagraphPropsType>()

const emits = defineEmits<{
  change: [value: VocParagraphPropsType]
}>()

const { form } = usePropForm(props, emits)
</script>
<style scoped lang="scss"></style>
