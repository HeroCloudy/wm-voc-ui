<!--
 @name: prop-form.vue
 @description:
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/16 10:16
-->
<template>
  <el-form :model="form" label-position="top">
    <el-form-item label="复选框标题" prop="title" :rules="[RULES.R('请输入复选框标题')]">
      <el-input v-model="form.title" clearable />
    </el-form-item>

    <el-form-item label="是否垂直排列" prop="isVertical">
      <el-switch v-model="form.isVertical" />
    </el-form-item>

    <el-form-item label="复选框选项" props="options">
      <wm-option-edit v-model="form.options" />
    </el-form-item>

    <el-form-item label="默认选中" props="value">
      <el-select v-model="form.value" multiple>
        <el-option v-for="item in options" :key="item" :value="item" :label="item" />
      </el-select>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { RULES } from '@/constants/rules.ts'
import { type VocCheckboxPropsType } from './config.ts'
import { usePropForm } from '@/hooks/use-prop-form.ts'

const props = defineProps<VocCheckboxPropsType>()

const emits = defineEmits<{
  change: [value: VocCheckboxPropsType]
}>()

const { form } = usePropForm(props, emits)
</script>

<style scoped lang="scss"></style>
