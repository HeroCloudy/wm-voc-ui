<!--
 @name: stat-table.vue
 @description:
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/18 21:16
-->
<template>
  <div class="stat-table" v-loading="loading">
    <el-table :data="list" size="large" height="100%" header-row-class-name="table-header">
      <el-table-column
        v-for="item in innerComponentList"
        :key="item.fe_id"
        :prop="item.fe_id"
        :label="item.props?.title ?? item.title"
        :min-width="getWidthByType(item.type)"
      >
        <template #header>
          <div
            :class="[
              'text-16px cursor-pointer ',
              selectedComponent?.fe_id === item.fe_id
                ? 'text-[var(--wm-color-primary)] font-700'
                : 'text-gray-600 font-400',
            ]"
            @click="onColHeaderClick(item)"
          >
            {{ item.props?.title ?? item.title }}
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import type { ComponentInfo } from '@/stores/modules/editor.ts'
import { useRequest } from '@/hooks/use-request.ts'
import { getVocStatListService } from '@/service/stat.ts'
import { useGetComponent } from '@/hooks/use-get-component.ts'
import { isUserInputComponent } from '@/constants/component-config.ts'

defineProps<{
  selectedComponent?: ComponentInfo
}>()

const emits = defineEmits<{
  'update-total': [total: number]
  selected: [value: ComponentInfo]
}>()

const route = useRoute()

const { componentList } = useGetComponent()
const innerComponentList = computed(() =>
  componentList.value.filter((item) => !item.isHidden && isUserInputComponent(item.type)),
)

const total = ref(0)
const list = ref<Record<string, any>[]>([])

const { loading } = useRequest(
  () => {
    return getVocStatListService(route.params.id, { page: 1, pageSize: 20 })
  },
  {
    onSuccess: (v: any) => {
      total.value = v.total
      list.value = v.list

      emits('update-total', total.value)
    },
  },
)

const getWidthByType = (type: string) => {
  switch (type) {
    case 'radio':
      return 160
    case 'checkbox':
      return 200
    case 'input':
      return 200
    default:
      return 200
  }
}

const onColHeaderClick = (item: ComponentInfo) => {
  emits('selected', item)
}
</script>
<style scoped lang="scss">
.stat-table {
  @apply h-full overflow-hidden;

  :deep(.el-table) {
    --el-table-header-bg-color: var(--wm-color-primary-light-9);
  }
}
</style>
