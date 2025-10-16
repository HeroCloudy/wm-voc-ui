<!--
 @name: editor-header.vue
 @description: 编辑器顶部操作
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/16 16:34
-->
<template>
  <div class="editor-header">
    <div class="wrapper">
      <div class="left">
        <el-button link type="primary" @click="router.back()">
          <wm-icon icon="ant-design:left-outlined" class="mr-1" />
          返回
        </el-button>

        <div class="title">问卷标题</div>
      </div>

      <div class="main">
        <editor-toolbar />
      </div>

      <div class="right">
        <el-button>保存</el-button>
        <el-button type="primary">发布</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import EditorToolbar from '@/pages/detail/edit/components/editor-toolbar.vue'

const router = useRouter()
</script>
<style scoped lang="scss">
.editor-header {
  @apply bg-white py-3;
  border-bottom: 1px solid #e8e8e8;

  .wrapper {
    @apply flex mx-6;

    .left {
      @apply flex-1 flex items-center;

      .title {
        @apply ml-4 text-lg font-bold;
      }
    }
    .main {
      @apply flex-1 text-center;
    }
    .right {
      @apply flex-1 text-right;
    }
  }
}
</style>
