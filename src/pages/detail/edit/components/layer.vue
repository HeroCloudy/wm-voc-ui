<!--
 @name: layer.vue
 @description:
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/17 16:02
-->
<template>
  <el-scrollbar height="100%">
    <draggable
      v-model="componentList"
      tag="div"
      item-key="fe_id"
      ghost-class="drag-ghost"
      chosen-class="drag-chosen"
      animation="300"
    >
      <template #item="{ element: item }">
        <div class="item">
          <div
            :class="[
              'wrapper',
              item.isHidden ? 'pointer-events-none' : '',
              item.dragover ? 'draging' : '',
            ]"
            @click.stop="onItemClick(item)"
          >
            <div class="flex-1">
              <el-input
                v-if="changingTitleId === item.fe_id"
                v-model="item.title"
                @keyup.enter.prevent="changingTitleId = ''"
                @blur="changingTitleId = ''"
                autofocus
              />
              <span
                v-else
                @click.stop="onTitleClick(item)"
                :class="[
                  'text-gray-700',
                  selectedId === item.fe_id ? 'text-[var(--wm-color-primary)]! font-bold' : '',
                  'pr-2',
                  item.isHidden ? 'text-gray-400!' : '',
                ]"
              >
                {{ item.title || '&nbsp;&nbsp;' }}
              </span>
            </div>
            <div>
              <el-button
                :size="item.isHidden ? 'small' : 'default'"
                class="pointer-events-auto!"
                @click.stop="editorStore.updateComponentHidden(item.fe_id, !item.isHidden)"
                :type="item.isHidden ? 'primary' : 'default'"
                :circle="item.isHidden"
                :text="!item.isHidden"
              >
                <wm-icon icon="ant-design:eye-invisible-outlined" />
              </el-button>

              <el-button
                :size="item.isLocked ? 'small' : 'default'"
                class="pointer-events-auto!"
                @click.stop="editorStore.toggleComponentLock(item.fe_id)"
                :type="item.isLocked ? 'primary' : 'default'"
                :circle="item.isLocked"
                :text="!item.isLocked"
              >
                <wm-icon icon="ant-design:lock-outlined" />
              </el-button>
            </div>
          </div>
        </div>
      </template>
    </draggable>
  </el-scrollbar>
</template>

<script setup lang="ts">
import { useGetComponent } from '@/hooks/use-get-component.ts'
import { type ComponentInfo, useEditorStore } from '@/stores/modules/editor.ts'

const editorStore = useEditorStore()
const { componentList, selectedId } = useGetComponent()

const changingTitleId = ref<string>('')

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
  changingTitleId.value = item.fe_id
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
  @apply py-2 bg-white px-2 box-border;
  border-bottom: 1px solid var(--border-color);

  .wrapper {
    @apply flex items-center cursor-pointer;

    .el-button {
      @apply px-1;
    }
  }
}
</style>
