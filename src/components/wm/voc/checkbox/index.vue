<!--
 @name: index.vue
 @description: 复选框组件
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/15 16:54
-->
<template>
  <div class="voc-checkbox">
    <div class="title">{{ title }}</div>
    <el-checkbox-group :model-value="value">
      <el-space :direction="isVertical ? 'vertical' : 'horizontal'" alignment="stretch">
        <el-checkbox v-for="item in options" :key="item" :value="item" :label="item" />
      </el-space>
    </el-checkbox-group>
  </div>
</template>

<script setup lang="ts">
import { defaultProps, type VocCheckboxPropsType } from './config'

withDefaults(defineProps<VocCheckboxPropsType>(), defaultProps)
</script>
<style scoped lang="scss">
.voc-checkbox {
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
