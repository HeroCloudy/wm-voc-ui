<!--
 @name: list-pagination.vue
 @description:
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/15 09:50
-->
<template>
  <div class="list-pagination">
    <div class="flex-1"></div>
    <el-pagination
      v-model:current-page="pageNum"
      v-model:page-size="pageSize"
      background
      layout="prev, pager, next, sizes"
      :total="total"
      @change="onChange"
    />
  </div>
</template>

<script setup lang="ts">
import { DEFAULT_LIST_SIZE, LIST_PAGE_PARAM_KEY, LIST_SIZE_PARAM_KEY } from '@/constants'

withDefaults(
  defineProps<{
    total?: number
  }>(),
  {
    total: 0,
  },
)

const route = useRoute()
const router = useRouter()

const pageNum = ref(1)
const pageSize = ref(DEFAULT_LIST_SIZE)

watchEffect(() => {
  pageNum.value = parseInt(route.query?.[LIST_PAGE_PARAM_KEY] || '') || 1
  pageSize.value = parseInt(route.query?.[LIST_SIZE_PARAM_KEY] || '') || DEFAULT_LIST_SIZE
})

const onChange = (pageNum: number, pageSize: number) => {
  router.push({
    path: route.path,
    query: {
      ...(route.query || {}),
      [LIST_PAGE_PARAM_KEY]: pageNum,
      [LIST_SIZE_PARAM_KEY]: pageSize,
    },
  })
}
</script>
<style scoped lang="scss">
.list-pagination {
  @apply flex;

  //.el-pagination {
  //--el-pagination-button-disabled-bg-color: transparent;
  //--el-pagination-bg-color: transparent;
  //}
}
</style>
