<!--
 @name: editor-canvas.vue
 @description:
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/15 17:17
-->
<template>
  <div class="editor-canvas" v-loading="loading">
    <!-- 临时使用 -->
    <div class="component-wrapper">
      <div class="component">
        <wm-voc-title />
      </div>
    </div>
    <div class="component-wrapper">
      <div class="component">
        <wm-voc-title text="测试标题1" :level="1" :is-center="false" />
      </div>
    </div>
    <div class="component-wrapper">
      <div class="component">
        <wm-voc-title text="测试标题2" :level="2" :is-center="false" />
      </div>
    </div>
    <div class="component-wrapper">
      <div class="component">
        <wm-voc-title text="测试标题3" :level="3" :isCenter="true" />
      </div>
    </div>
    <div class="component-wrapper">
      <div class="component">
        <wm-voc-input />
      </div>
    </div>
    <div class="component-wrapper">
      <div class="component">
        <wm-voc-input title="你的名字" placeholder="请输入你的名字" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  loading?: boolean
}>()
</script>
<style scoped lang="scss">
.editor-canvas {
  .component-wrapper {
    @apply m-3 p-3;
    border: 1px solid #fff;
    border-radius: 4px;

    &:hover {
      border-color: #d9d9d9;
    }

    .component {
      @apply pointer-events-none;
    }
  }
}
</style>
