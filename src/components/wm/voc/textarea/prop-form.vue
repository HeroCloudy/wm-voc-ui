<!--
 @name: prop-form.vue
 @description:
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/16 10:16
-->
<template>
  <el-form :model="form" label-position="top">
    {{ form }}
    <el-form-item label="标题" prop="title" :rules="[RULES.R('请输入标题')]">
      <el-input v-model="form.title" clearable />
    </el-form-item>
    <el-form-item label="Placeholder" prop="placeholder">
      <el-input v-model="form.placeholder" clearable />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { RULES } from '@/constants/rules.ts'
import { type VocTextareaPropsType } from './config.ts'
import { usePropForm } from '@/hooks/use-prop-form.ts'

const props = defineProps<VocTextareaPropsType>()

const emits = defineEmits<{
  change: [value: VocTextareaPropsType]
}>()

const { form } = usePropForm(props, emits)
</script>

<style scoped lang="scss"></style>
