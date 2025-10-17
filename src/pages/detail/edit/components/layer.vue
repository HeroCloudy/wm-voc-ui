<!--
 @name: layer.vue
 @description:
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/17 16:02
-->
<template>
  <el-scrollbar height="100%">
    <div v-for="item in componentList" :key="item.fe_id" class="item">
      <div class="wrapper" @click="onItemClick(item)">
        <div class="flex-1">
          <span @click="onTitleClick(item)">{{ item.title }}</span>
        </div>
        <div>
          <el-button text>
            <wm-icon icon="ant-design:eye-invisible-outlined" />
          </el-button>

          <el-button text>
            <wm-icon icon="ant-design:lock-outlined" />
          </el-button>
        </div>
      </div>
    </div>
  </el-scrollbar>
</template>

<script setup lang="ts">
import { useGetComponent } from '@/hooks/use-get-component.ts'
import { type ComponentInfo, useEditorStore } from '@/stores/modules/editor.ts'

const editorStore = useEditorStore()
const { componentList } = useGetComponent()

const checkHidden = (item: ComponentInfo) => {
  if (item.isHidden) {
    ElMessage.warning('隐藏的组件不能被选中')
    return false
  }
  return true
}

const onTitleClick = (item: ComponentInfo) => {
  if (!checkHidden(item)) {
    return
  }
}

const onItemClick = (item: ComponentInfo) => {
  if (!checkHidden(item)) {
    return
  }
  editorStore.setCurrentSelect(item)
}
</script>
<style scoped lang="scss">
.item {
  @apply py-2;
  border-bottom: 1px solid var(--border-color);

  .wrapper {
    @apply flex items-center cursor-pointer;

    .el-button {
      @apply px-1;
    }
  }
}
</style>
