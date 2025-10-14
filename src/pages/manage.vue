<!--
 @name: manage.vue
 @description:
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/13 10:39
-->
<template>
  <div class="py-6 min-w-1200px w-80% mx-auto flex">
    <div class="w-120px">
      <el-space direction="vertical" alignment="normal">
        <el-button
          type="primary"
          size="large"
          class="mb-8"
          @click="onCreateBtnClick"
          :disabled="loading"
        >
          <wm-icon icon="ant-design:plus-outlined" class="mr-1" />
          新建问卷
        </el-button>

        <el-button
          v-for="item in navBtnList"
          :key="item.code"
          type="default"
          size="large"
          :text="!isCurrent(item.code)"
          @click="router.push(`/manage/${item.code}`)"
        >
          <wm-icon :icon="item.icon" class="mr-1" />
          {{ item.title }}
        </el-button>
      </el-space>
    </div>
    <div class="flex-1 ml-60px">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { createSurveyService } from '@/service/survey.ts'

const router = useRouter()
const route = useRoute()

const navBtnList: { code: string; title: string; icon: string }[] = [
  { code: 'list', title: '我的问卷', icon: 'ant-design:bars-outlined' },
  { code: 'star', title: '星标问卷', icon: 'ant-design:star-outlined' },
  { code: 'trash', title: '回收站', icon: 'ant-design:delete-outlined' },
]

const isCurrent = (code: string) => route.path === `/manage/${code}`

const loading = ref(false)

const onCreateBtnClick = async () => {
  loading.value = true
  const resp = await createSurveyService()
  loading.value = false
  console.log(resp)
  const { id } = (resp || {}) as any
  if (id) {
    ElMessage.success('问卷创建成功')
    router.push(`/detail/edit/${id}`)
  }
}
</script>
<style scoped lang="scss"></style>
