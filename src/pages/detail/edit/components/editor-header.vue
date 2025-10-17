<!--
 @name: editor-header.vue
 @description: 编辑器顶部操作
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/16 16:34
-->
<template>
  <div class="editor-header">
    <div class="wrapper">
      <div class="left">
        <el-button link type="primary" @click="router.back()">
          <wm-icon icon="ant-design:left-outlined" class="mr-1" />
          返回
        </el-button>

        <div class="title" v-if="pageInfo">
          <div class="flex items-center" v-if="!isEditingTitle">
            <span>{{ pageInfo?.title }}</span>
            <el-button text class="ml-2" @click="isEditingTitle = true">
              <wm-icon icon="ep:edit" class="font-bold text-xl" />
            </el-button>
          </div>
          <div v-else>
            <el-input v-model="pageInfo.title" @keyup.enter.prevent="isEditingTitle = false" />
          </div>
        </div>
      </div>

      <div class="main">
        <editor-toolbar />
      </div>

      <div class="right">
        <el-button :loading="saveLoading" @click="onSaveBtnClick"> 保存 </el-button>
        <el-button type="primary" :loading="publishLoading" @click="onPublishBtnClick">
          发布
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import EditorToolbar from '@/pages/detail/edit/components/editor-toolbar.vue'
import { useGetPageInfo } from '@/hooks/use-get-page-info.ts'
import { useRequest } from '@/hooks/use-request.ts'
import { updateSurveyService } from '@/service/survey.ts'
import { useGetComponent } from '@/hooks/use-get-component.ts'

const router = useRouter()
const route = useRoute()

const { pageInfo } = useGetPageInfo()
const { componentList } = useGetComponent()
const isEditingTitle = ref(false)
const id = computed(() => route.params.id)

const { loading: saveLoading, run: onSave } = useRequest(
  () => {
    if (!id.value) {
      ElMessage.error('系统出错')
      router.replace('/')
      return
    }
    const params = {
      ...pageInfo.value,
      componentList: componentList.value,
    }
    return updateSurveyService(id.value, params)
  },
  {
    manual: true,
  },
)

const { loading: publishLoading, run: onPublishBtnClick } = useRequest(
  async () => {
    if (!id.value) {
      ElMessage.error('系统出错')
      router.replace('/')
      return
    }
    const params = {
      ...pageInfo.value,
      componentList: componentList.value,
      isPublished: true,
    }
    return updateSurveyService(id.value, params)
  },
  {
    manual: true,
    onSuccess() {
      ElMessage.success('问卷发布成功')
      router.replace(`/detail/stat/${id.value}`)
    },
  },
)

const onSaveBtnClick = async () => {
  await onSave()
  ElMessage.success('问卷保存成功')
}
</script>
<style scoped lang="scss">
.editor-header {
  @apply bg-white py-3;
  border-bottom: 1px solid #e8e8e8;

  .wrapper {
    @apply flex mx-6;

    .left {
      @apply flex-1 flex items-center;

      .title {
        @apply ml-4 text-lg font-bold;
      }
    }
    .main {
      @apply flex-1 text-center;
    }
    .right {
      @apply flex-1 text-right;
    }
  }
}
</style>
