<!--
 @name: trash.vue
 @description: 回收站
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/13 10:40
-->
<template>
  <div class="flex items-center justify-between mb-6">
    <div class="text-xl font-700">回收站</div>
    <div>
      <list-search />
    </div>
  </div>

  <div>
    <div class="mb-4 text-right">
      <el-button type="primary" :disabled="!selectedList?.length">恢复</el-button>
      <el-button type="danger" :disabled="!selectedList?.length" @click="onDeleteBtnClick"
        >彻底删除</el-button
      >
    </div>
    <el-table
      v-loading="loading"
      border
      :data="questionList"
      size="large"
      class="w-full"
      @selection-change="onSelectionChange"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column prop="title" label="标题" min-width="180" />
      <el-table-column prop="isPublished" label="是否发布" min-width="180">
        <template #default="{ row }">
          <el-tag :type="row.isPublished ? 'primary' : 'info'">
            {{ row.isPublished ? '已发布' : '未发布' }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="answerCount" label="答卷数量" min-width="180" />
      <el-table-column prop="createdTime" label="创建时间" min-width="180" />
    </el-table>
  </div>

  <div class="my-6 text-right">分页</div>
</template>

<script setup lang="ts">
import type { QuestionType } from '@/types/types.ts'
import { ElMessageBox } from 'element-plus'
import ListSearch from '@/pages/manage/components/list-search.vue'
import { useLoadSurveyList } from '@/hooks/use-load-survey-list.ts'

const questionList = ref<QuestionType[]>([])

const { data, loading } = useLoadSurveyList({ isDeleted: true })

watchEffect(() => {
  const { list = [] } = data.value || []
  questionList.value = list
})

const selectedList = ref<QuestionType[]>([])

const onSelectionChange = (val: QuestionType[]) => {
  selectedList.value = val
}

const onDeleteBtnClick = () => {
  ElMessageBox.confirm(
    `是否确定删除所选的 ${selectedList.value.length} 个问卷？彻底删除后将不可恢复`,
    '是否确认彻底删除？',
    {
      confirmButtonText: '彻底删除',
      cancelButtonText: '取消',
      type: 'warning',
    },
  ).then(() => {
    console.log('彻底删除')
  })
}
</script>
<style scoped lang="scss"></style>
