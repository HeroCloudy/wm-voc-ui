<!--
 @name: index.vue
 @description: 输入框组件
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/15 16:54
-->
<template>
  <div class="voc-radio">
    <div class="title">{{ title }}</div>
    <el-radio-group :value="value">
      <el-space :direction="isVertical ? 'vertical' : 'horizontal'" alignment="stretch">
        <el-radio v-for="item in options" :key="item" :value="item" :label="item" />
      </el-space>
    </el-radio-group>
  </div>
</template>

<script setup lang="ts">
import { defaultProps, type VocRadioPropsType } from './config'

withDefaults(defineProps<VocRadioPropsType>(), defaultProps)
</script>
<style scoped lang="scss">
.voc-radio {
  @apply my-2;
  .title {
    @apply my-2 text-16px font-bold;
  }

  .el-space--horizontal {
    @apply flex-wrap;
  }
  :deep(.el-space__item) {
    @apply mr-12px;
  }
}
</style>
