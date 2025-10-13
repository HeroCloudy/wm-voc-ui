<!--
 @name: question-card.vue
 @description:
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/13 14:52
-->
<template>
  <div class="question-card">
    <div class="flex justify-between">
      <el-button
        type="primary"
        link
        @click="router.push(`/detail/${data.isPublished ? 'stat' : 'edit'}/${data.id}`)"
      >
        <wm-icon v-if="data.isStar" icon="ant-design:star-fill" class="mr-2 text-yellow mb--2px" />
        {{ data.title }}
      </el-button>

      <div class="text-gray-600 text-sm">
        <el-space size="large">
          <el-tag :type="data.isPublished ? 'primary' : 'info'">
            {{ data.isPublished ? '已发布' : '未发布' }}
          </el-tag>

          <span>答卷：{{ data.answerCount }}</span>
          <span>{{ data.createdTime }}</span>
        </el-space>
      </div>
    </div>

    <el-divider class="my-3!" />
    <div class="flex justify-between">
      <div>
        <el-button @click="router.push(`/detail/edit/${data.id}`)">
          <wm-icon icon="ant-design:edit-outlined" class="mr-2" />
          编辑问卷
        </el-button>
        <el-button @click="router.push(`/detail/stat/${data.id}`)" :disabled="!data.isPublished">
          <wm-icon icon="ant-design:line-chart-outlined" class="mr-1" />
          数据统计
        </el-button>
      </div>
      <div>
        <el-button text>
          <wm-icon icon="ant-design:star-outlined" class="mr-1" />
          {{ data.isStar ? '取消标星' : '标星' }}
        </el-button>
        <el-button text> <wm-icon icon="ant-design:copy-outlined" class="mr-1" /> 复制 </el-button>
        <el-button text>
          <wm-icon icon="ant-design:delete-outlined" class="mr-1" /> 删除
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { QuestionType } from '@/types/types.ts'

defineProps<{
  data: QuestionType
}>()

const router = useRouter()
</script>
<style scoped lang="scss">
.question-card {
  .el-divider {
    --el-border-color: #eee;
  }

  @apply bg-white mt-4 px-4 py-3 rd rd-2;
}
</style>
