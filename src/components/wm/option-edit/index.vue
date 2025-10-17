<!--
 @name: option-edit.vue
 @description: 选项编辑器
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/17 15:20
-->
<template>
  <div class="option-edit">
    <el-form :model="form">
      <div class="flex items-center" v-for="(item, index) in form.list" :key="index">
        <el-form-item
          :prop="'list.' + index"
          :rules="[RULES.R('请填写该选项'), { validator: itemValidator }]"
          class="flex-1 mt-4"
        >
          <el-input v-model="form.list![index]" />
        </el-form-item>

        <el-button
          text
          type="danger"
          :disabled="(form.list?.length ?? 0) <= 2"
          @click="onRemoveBtnClick(index)"
        >
          <wm-icon icon="ep:delete" class="ml-2" />
        </el-button>
      </div>
    </el-form>

    <el-button type="primary" text @click="onAddBtnClick" :disabled="btnBtnDisabled" class="mt-4">
      <wm-icon icon="ep:plus" class="mr-2" />
      添加选项
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { RULES } from '@/constants/rules.ts'

const list = defineModel<string[]>()

const form = ref({
  list: list.value,
})

const onAddBtnClick = () => {
  console.log('-------- ', list.value)
  list.value?.push('')
}

const onRemoveBtnClick = (index: number) => {
  list.value?.splice(index, 1)
}

const btnBtnDisabled = computed(() => {
  const len = list.value?.filter((item) => !!item.trim()).length ?? 0
  return len < (list.value?.length ?? 0)
})

const itemValidator = (rule: any, value: any, callback: any) => {
  if (!value) {
    callback(new Error('请填写该选项'))
  } else {
    if ((form.value.list?.filter((item) => item === value)?.length ?? 0) >= 2) {
      callback(new Error('选项不能有重复'))
    } else {
      callback()
    }
  }
}
</script>
<style scoped lang="scss">
.option-edit {
  @apply w-full;
}
</style>
