<!--
 @name: question-card.vue
 @description:
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/13 14:52
-->
<template>
  <div class="question-card" v-loading="copyLoading || deleteLoading" v-if="!data.isDeleted">
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
        <el-button text @click="onStarBtnClick" v-loading="starLoading">
          <wm-icon icon="ant-design:star-outlined" class="mr-1" />
          {{ data.isStar ? '取消标星' : '标星' }}
        </el-button>

        <el-popconfirm
          :title="`是否确定复制问卷【${data.title}】`"
          confirm-button-text="确定复制"
          width="300"
          :hide-after="10"
          @confirm="onCopy"
        >
          <template #reference>
            <el-button text>
              <wm-icon icon="ant-design:copy-outlined" class="mr-1" /> 复制
            </el-button>
          </template>
        </el-popconfirm>

        <el-button text @click="onDeleteBtnClick">
          <wm-icon icon="ant-design:delete-outlined" class="mr-1" /> 删除
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { QuestionType } from '@/types/types.ts'
import { ElMessageBox } from 'element-plus'
import { useRequest } from '@/hooks/use-request.ts'
import { copySurveyService, updateSurveyService } from '@/service/survey.ts'

const props = defineProps<{
  data: QuestionType
}>()

const router = useRouter()

const onDeleteBtnClick = () => {
  ElMessageBox.confirm(`是否确定删除问卷【${props.data.title}】`, '提醒', {
    confirmButtonText: '确定删除',
    cancelButtonText: '取消',
    type: 'warning',
  }).then(() => {
    console.log('删除逻辑')
    onDelete()
  })
}

const { loading: starLoading, run: onStarBtnClick } = useRequest(
  () => updateSurveyService(props.data.id, { isStar: !props.data.isStar }),
  {
    manual: true,
    onSuccess: () => {
      const data = props.data
      data.isStar = !data.isStar
    },
  },
)

const { loading: copyLoading, run: onCopy } = useRequest(() => copySurveyService(props.data.id), {
  manual: true,
  onSuccess(v: any) {
    router.push(`/detail/edit/${v.id}`)
  },
})

const { loading: deleteLoading, run: onDelete } = useRequest(
  () => updateSurveyService(props.data.id, { isDeleted: true }),
  {
    manual: true,
    onSuccess: () => {
      ElMessage.success('删除成功')
      const data = props.data
      data.isDeleted = !data.isDeleted
    },
  },
)
</script>
<style scoped lang="scss">
.question-card {
  .el-divider {
    --el-border-color: #eee;
  }

  @apply bg-white mt-4 px-4 py-3 rd rd-2;
}
</style>
