<!--
 @name: left-panel.vue
 @description: 左侧面板
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/15 21:53
-->
<template>
  <el-tabs stretch v-model="activeTab">
    <el-tab-pane name="componentLib">
      <template #label>
        <div class="flex items-center text-sm">
          <wm-icon icon="ant-design:appstore-outlined" class="mr-2" />
          <span>组件库</span>
        </div>
      </template>
      <component-lib />
    </el-tab-pane>

    <el-tab-pane name="layer">
      <template #label>
        <div class="flex items-center text-sm">
          <wm-icon icon="ant-design:bars-outlined" class="mr-2" />
          <span>图层</span>
        </div>
      </template>
      <div>图层 Content</div>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import ComponentLib from './component-lib.vue'

const activeTab = ref('componentLib')
</script>
<style scoped lang="scss">
.left-panel {
}
</style>
