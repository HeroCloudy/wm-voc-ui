<!--
 @name: stat-header.vue
 @description: 统计页头部
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/18 19:38
-->
<template>
  <div class="stat-header">
    <div class="wrapper">
      <div class="left">
        <el-button link type="primary" @click="router.back()">
          <wm-icon icon="ant-design:left-outlined" class="mr-1" />
          返回
        </el-button>
        <div class="title">
          <span>{{ pageInfo?.title }}</span>
        </div>
      </div>

      <div class="main">
        <template v-if="pageInfo?.isPublished">
          <el-input ref="linkInputRef" class="w-350px!" :model-value="url" readonly />
          <el-tooltip content="点击复制链接" placement="bottom" effect="light">
            <el-button class="ml-2" @click="onCopyLinkBtnClick">
              <wm-icon icon="ep:document-copy" />
            </el-button>
          </el-tooltip>

          <el-popover placement="bottom" popper-class="qr-popper">
            <template #reference>
              <el-button>
                <wm-icon icon="ant-design:qrcode-outlined" />
              </el-button>
            </template>
            <vue-qrcode
              :value="url"
              :color="{ dark: '#000000ff', light: '#ffffffff' }"
              type="image/jpeg"
              :width="300"
            />
          </el-popover>
        </template>
      </div>

      <div class="right">
        <el-button type="primary" @click="router.push(`/detail/edit/${route.params?.id ?? ''}`)">
          编辑问卷
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGetPageInfo } from '@/hooks/use-get-page-info.ts'
import type { InputInstance } from 'element-plus'
import VueQrcode from 'vue-qrcode'

const router = useRouter()
const route = useRoute()

const { pageInfo } = useGetPageInfo()

const url = computed(() => `http://localhost:3010/voc/${route.params?.id ?? ''}`)
const linkInputRef = useTemplateRef<InputInstance>('linkInputRef')
const onCopyLinkBtnClick = () => {
  if (!linkInputRef.value) {
    return
  }
  linkInputRef.value.select()
  document.execCommand('copy')
  ElMessage.success('已复制到剪贴板')
}
</script>
<style scoped lang="scss">
.stat-header {
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
