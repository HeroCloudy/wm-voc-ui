<!--
 @name: prop-form.vue
 @description:
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/16 10:16
-->
<template>
  <el-form :model="form" label-position="top">
    {{ form }}
    <el-form-item label="标题内容" prop="text" :rules="[RULES.R('请输入标题内容')]">
      <el-input v-model="form.text" clearable />
    </el-form-item>
    <el-form-item label="层级" prop="level">
      <el-select v-model="form.level">
        <el-option v-for="i in 3" :key="i" :value="i" :label="i" />
      </el-select>
    </el-form-item>
    <el-form-item label="居中显示" prop="isCenter">
      <el-switch v-model="form.isCenter" />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { RULES } from '@/constants/rules.ts'
import type { VocTitlePropsType } from './config.ts'

const props = defineProps<VocTitlePropsType>()
const emits = defineEmits<{
  change: [value: VocTitlePropsType]
}>()

const form = ref({ ...props })
watch(
  form,
  () => {
    emits('change', form.value)
  },
  {
    deep: true,
  },
)

watch(
  props,
  () => {
    form.value = { ...props }
  },
  { deep: true },
)
</script>
<style scoped lang="scss">
.prop-form {
}
</style>
