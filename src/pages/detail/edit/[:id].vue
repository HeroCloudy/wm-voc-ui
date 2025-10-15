<!--
 @description: 问卷编辑页面
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/13 10:42
-->
<template>
  <div class="edit-page">
    <div class="bg-white">Header</div>
    <div class="wrapper">
      <div class="left">
        <left-panel />
      </div>
      <div class="main" @click="onPageClick">
        <div class="canvas-wrapper" v-loading="loading">
          <el-scrollbar min-height="100%">
            <editor-canvas />
          </el-scrollbar>
        </div>
      </div>
      <div class="right">Right</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import EditorCanvas from './components/editor-canvas.vue'
import { useLoadSurveyData } from '@/hooks/use-load-survey-data.ts'
import { useEditorStore } from '@/stores/modules/editor.ts'
import LeftPanel from '@/pages/detail/edit/components/left-panel.vue'

const editorStore = useEditorStore()

const { loading } = useLoadSurveyData()
// watchEffect(() => {
//   console.log(data.value)
// })

const onPageClick = () => {
  editorStore.setSelectedId('')
}
</script>
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
