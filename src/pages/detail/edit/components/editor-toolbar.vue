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

    <el-tooltip
      :content="selectedComponent?.isLocked ? '解锁' : '锁定'"
      placement="bottom"
      effect="light"
    >
      <el-button
        circle
        @click="editorStore.toggleComponentLock(selectedId)"
        :disabled="!selectedId"
        :type="selectedComponent?.isLocked ? 'primary' : 'default'"
      >
        <wm-icon icon="ant-design:lock-outlined" />
      </el-button>
    </el-tooltip>

    <el-tooltip content="复制" placement="bottom" effect="light">
      <el-button circle @click="editorStore.copySelectedComponent()" :disabled="!selectedId">
        <wm-icon icon="ant-design:copy-outlined" />
      </el-button>
    </el-tooltip>

    <el-tooltip content="粘贴" placement="bottom" effect="light">
      <el-button
        circle
        @click="editorStore.pasteComponent()"
        :disabled="!editorStore.copiedComponent"
      >
        <wm-icon icon="ant-design:block-outlined" />
      </el-button>
    </el-tooltip>

    <el-tooltip content="撤销" placement="bottom" effect="light">
      <el-button circle @click="editorStore.undo()">
        <wm-icon icon="fad:undo" />
      </el-button>
    </el-tooltip>

    <el-tooltip content="重做" placement="bottom" effect="light">
      <el-button circle @click="editorStore.redo()">
        <wm-icon icon="fad:redo" />
      </el-button>
    </el-tooltip>
  </div>
</template>

<script setup lang="ts">
import { useEditorStore } from '@/stores/modules/editor.ts'
import { useGetComponent } from '@/hooks/use-get-component.ts'

const editorStore = useEditorStore()
const { selectedId, selectedComponent } = useGetComponent()
</script>
<style scoped lang="scss"></style>
