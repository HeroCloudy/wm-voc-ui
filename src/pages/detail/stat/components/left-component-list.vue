<!--
 @name: component-list.vue
 @description: 组件列表
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/18 20:36
-->
<template>
  <div class="component-list">
    <el-scrollbar height="100%">
      <div
        v-for="item in innerComponentList"
        :key="item.fe_id"
        :class="[
          'component-wrapper',
          innerSelectedComponent?.fe_id === item.fe_id ? 'selected' : '',
          isUserInputComponent(item.type) ? 'cursor-pointer' : 'cursor-not-allowed',
        ]"
        @click="onItemClick(item)"
      >
        <div class="component">
          <component :is="item.c" v-bind="item.props" />
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { useGetComponent } from '@/hooks/use-get-component.ts'
import { getComponent, isUserInputComponent } from '@/constants/component-config.ts'
import type { ComponentInfo } from '@/stores/modules/editor.ts'

const props = defineProps<{
  selectedComponent?: ComponentInfo
}>()

const emits = defineEmits<{
  selected: [value: ComponentInfo]
}>()

const { componentList } = useGetComponent()
const innerSelectedComponent = ref<ComponentInfo | undefined>(props.selectedComponent)

const innerComponentList = computed(() =>
  componentList.value
    .map((item) => ({
      ...item,
      c: getComponent(item.type),
    }))
    .filter((item) => !!item.c && !item.isHidden),
)

const onItemClick = (item: ComponentInfo) => {
  if (!isUserInputComponent(item.type)) {
    return
  }
  innerSelectedComponent.value = item
  emits('selected', innerSelectedComponent.value)
}

watch(
  () => props.selectedComponent,
  () => {
    innerSelectedComponent.value = props.selectedComponent
  },
  {
    deep: true,
  },
)
</script>
<style scoped lang="scss">
.component-list {
  @apply overflow-hidden h-full;

  .component-wrapper {
    @apply m-2 p-2;
    border: 1px solid #fff;
    border-radius: 4px;

    &:hover {
      border-color: #d9d9d9;
    }

    .component {
      @apply pointer-events-none;
      opacity: 0.8;
    }

    &.selected {
      border-color: var(--wm-color-primary) !important;
      background-color: var(--wm-color-primary-light-9) !important;
    }
  }
}
</style>
