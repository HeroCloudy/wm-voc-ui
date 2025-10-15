<!--
 @description: 问卷编辑页面
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/13 10:42
-->
<template>
  <div class="edit-page">
    <div class="bg-white">Header</div>
    <div class="wrapper">
      <div class="left">Left</div>
      <div class="main">
        <div class="canvas-wrapper">
          <el-scrollbar height="100%">
            <div>画布 滚动</div>
            <div class="h-1200px"></div>
            <div>aa</div>
          </el-scrollbar>
        </div>
      </div>
      <div class="right">Right</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped lang="scss">
.edit-page {
  @apply flex flex-col h-screen bg-[#f0f2f5];

  .wrapper {
    @apply flex-1 flex py-3 mx-6;

    .left {
      @apply w-300px bg-white px-3 box-border;
    }

    .right {
      @apply w-300px bg-white px-3  box-border;
    }

    .main {
      @apply flex-1 overflow-hidden h-full;

      .canvas-wrapper {
        @apply absolute h-80vh top-50% left-50% bg-white;
        transform: translateX(-50%) translateY(-50%);
        box-shadow: 0 2px 2px #ccc;
        max-width: calc(100% - 900px);
        min-width: 400px;
        width: 40%;
      }
    }
  }
}
</style>
