<!--
 @name: right-panel.vue
 @description: 右侧面板
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/15 21:53
-->
<template>
  <el-tabs stretch v-model="activeTab">
    <el-tab-pane name="prop">
      <template #label>
        <div class="flex items-center text-sm">
          <wm-icon icon="ant-design:file-text-outlined" class="mr-2" />
          <span>属性</span>
        </div>
      </template>
      <component-prop />
    </el-tab-pane>

    <el-tab-pane name="setting">
      <template #label>
        <div class="flex items-center text-sm">
          <wm-icon icon="ant-design:setting-outlined" class="mr-2" />
          <span>页面设置</span>
        </div>
      </template>
      <div>页面设置 Content</div>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import ComponentProp from '@/pages/detail/edit/components/component-prop.vue'

const activeTab = ref('prop')
</script>
<style scoped lang="scss"></style>
