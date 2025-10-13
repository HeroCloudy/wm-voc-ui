<!--
 @name: list-search.vue
 @description: 列表搜素组件
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/13 16:44
-->
<template>
  <el-input
    size="large"
    placeholder="请输入关键字"
    class="w-280px!"
    v-model="value"
    @keyup.enter="onSearch"
    clearable
    @clear="onSearch"
  >
    <template #suffix>
      <el-button link @click="onSearch">
        <wm-icon icon="ep:search" />
      </el-button>
    </template>
  </el-input>
</template>

<script setup lang="ts">
import { LIST_SEARCH_PARAM_KEY } from '@/constants'

const value = ref<string>('')
const router = useRouter()
const route = useRoute()

onMounted(() => {
  value.value = route.query?.[LIST_SEARCH_PARAM_KEY] ?? ''
})

const onSearch = () => {
  router.push({
    path: route.path,
    query: {
      ...(route.query || {}),
      [LIST_SEARCH_PARAM_KEY]: value.value,
    },
  })
}
</script>
<style scoped lang="scss">
.list-search {
}
</style>
