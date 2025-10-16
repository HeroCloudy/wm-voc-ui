<!--
 @name: index.vue
 @description: 标题组件
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/15 16:54
-->
<template>
  <div class="voc-title">
    <div :style="innerStyle">{{ text }}</div>
  </div>
</template>

<script setup lang="ts">
import { defaultProps, type VocTitlePropsType } from './config.ts'

const props = withDefaults(defineProps<VocTitlePropsType>(), defaultProps)

const innerStyle = computed<Record<string, any>>(() => {
  const style: Record<string, any> = {}

  const { level, isCenter } = props
  if (isCenter) {
    style.textAlign = 'center'
  }

  let fontSize = '16px'
  switch (level) {
    case 1:
      fontSize = '28px'
      break
    case 2:
      fontSize = '24px'
      break
    case 3:
      fontSize = '20px'
      break
  }
  style.fontSize = fontSize

  return style
})
</script>
<style scoped lang="scss">
.voc-title {
  @apply text-gray-800;
}
</style>
