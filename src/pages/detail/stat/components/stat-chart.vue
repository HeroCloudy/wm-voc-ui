<!--
 @name: stat-chart.vue
 @description: 统计 图标展示
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/18 22:06
-->
<template>
  <div class="stat-chart">
    <div class="title">统计图</div>
    <div class="content" v-loading="loading">
      <div class="warning-hint" v-if="!selectedComponent">未选中组件</div>
      <div class="warning-hint" v-else-if="!isUserSelectComponent">该组件无法进行统计</div>
      <div v-else>
        {{ list }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ComponentInfo } from '@/stores/modules/editor.ts'
import { useRequest } from '@/hooks/use-request.ts'
import { getComponentStatService } from '@/service/stat.ts'

const props = defineProps<{
  selectedComponent?: ComponentInfo
}>()

const route = useRoute()

const list = ref<Record<string, any>[]>([])

const { loading, run: loadData } = useRequest(
  () => getComponentStatService(route.params?.id ?? '', props.selectedComponent?.fe_id ?? ''),
  {
    manual: true,
    onSuccess: (v: any) => {
      list.value = v?.stat || []
    },
  },
)

const isUserSelectComponent = computed(() => {
  const { type = '' } = props.selectedComponent || {}
  return ['radio', 'checkbox'].includes(type)
})

watch(
  () => props.selectedComponent,
  () => {
    if (props.selectedComponent && isUserSelectComponent.value) {
      loadData()
    }
    console.log('changed ....')
  },
)
</script>
<style scoped lang="scss">
.stat-chart {
  @apply box-border py-4 px-2 h-full overflow-hidden flex flex-col;

  .title {
    @apply text-lg font-700;
  }

  .content {
    @apply flex-1 text-center;

    .warning-hint {
      @apply mt-10 text-gray-500;
    }
  }
}
</style>
