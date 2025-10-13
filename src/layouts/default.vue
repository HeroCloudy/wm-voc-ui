<!--
  空布局
-->
<template>
  <el-container class="min-h-screen">
    <el-header class="header" height="60px">
      <div>Logo</div>
      <div>登录</div>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer class="footer" height="auto">
      乌蒙问卷 &copy;2025 - present. Created By YouYaCoder
    </el-footer>
  </el-container>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.header {
  @apply bg-gray-800 px-6 flex items-center justify-between text-white;
}
.footer {
  @apply bg-[var(--bg-color)] text-center text-gray-400 py-2;
  border-top: 1px solid var(--border-color);
}
</style>
