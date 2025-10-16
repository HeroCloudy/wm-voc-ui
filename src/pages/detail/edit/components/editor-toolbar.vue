<!--
 @name: editor-toolbar.vue
 @description: 编辑器顶部工具栏
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/16 16:45
-->
<template>
  <div class="editor-toolbar">
    <el-tooltip content="删除" placement="bottom" effect="light">
      <el-button circle @click="editorStore.removeComponent()" :disabled="!selectedId">
        <wm-icon icon="ant-design:delete-outlined" />
      </el-button>
    </el-tooltip>

    <el-tooltip content="隐藏" placement="bottom" effect="light">
      <el-button
        circle
        @click="editorStore.updateComponentHidden(selectedId, true)"
        :disabled="!selectedId"
      >
        <wm-icon icon="ant-design:eye-invisible-outlined" />
      </el-button>
    </el-tooltip>
  </div>
</template>

<script setup lang="ts">
import { useEditorStore } from '@/stores/modules/editor.ts'
import { useGetComponent } from '@/hooks/use-get-component.ts'

const editorStore = useEditorStore()
const { selectedId } = useGetComponent()
</script>
<style scoped lang="scss"></style>
