<!--
 @name: layer.vue
 @description:
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/17 16:02
-->
<template>
  <!--  <div class="layer">-->
  <el-scrollbar height="100%">
    <div>图层 Content</div>
    <div v-for="i in 300" :key="i">TEST {{ i }}</div>
  </el-scrollbar>
  <!--  </div>-->
</template>

<script setup lang="ts">
defineProps<{
  p?: string
}>()
</script>
<style scoped lang="scss">
.layer {
  @apply overflow-hidden h-full;
}
</style>
