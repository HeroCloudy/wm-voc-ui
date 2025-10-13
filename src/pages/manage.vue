<!--
 @name: manage.vue
 @description:
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/13 10:39
-->
<template>
  <div class="py-6 w-1200px mx-auto flex">
    <div class="w-120px">
      <p><el-button>创建问卷</el-button></p>
      <p><el-button>我的问卷</el-button></p>
      <p><el-button>星标问卷</el-button></p>
      <p><el-button>回收站</el-button></p>
    </div>
    <div class="flex-1 ml-60px">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped lang="scss"></style>
