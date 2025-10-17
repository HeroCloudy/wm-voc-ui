<!--
 @name: prop-form.vue
 @description:
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/16 10:16
-->
<template>
  <el-form :model="form" label-position="top">
    <el-form-item label="标题内容" prop="title" :rules="[RULES.R('请输入标题内容')]">
      <el-input v-model="form.title" clearable />
    </el-form-item>
    <el-form-item label="描述内容" prop="description" :rules="[RULES.R('请输入描述内容')]">
      <el-input
        type="textarea"
        :rows="3"
        v-model="form.description"
        clearable
        @keyup.enter.stop="() => {}"
      />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { RULES } from '@/constants/rules.ts'
import type { VocInfoPropsType } from './config.ts'
import { usePropForm } from '@/hooks/use-prop-form.ts'

const props = defineProps<VocInfoPropsType>()

const emits = defineEmits<{
  change: [value: VocInfoPropsType]
}>()

const { form } = usePropForm(props, emits)

// const form = ref({ ...props })
// watch(
//   form,
//   () => {
//     emits('change', form.value)
//   },
//   {
//     deep: true,
//   },
// )
//
// watch(
//   props,
//   () => {
//     form.value = { ...props }
//   },
//   { deep: true },
// )
</script>
<style scoped lang="scss"></style>
