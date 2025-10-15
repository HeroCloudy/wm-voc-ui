<template>
  <div class="h-full flex flex-col items-center justify-center">
    <div class="text-3xl flex items-center font-700">
      <wm-icon icon="ant-design:user-add-outlined" class="mr-2" />
      <span>注册新用户</span>
    </div>
    <el-form ref="formRef" :model="form" class="mt-10 w-500px" label-width="100" size="large">
      <el-form-item
        label="用户名"
        prop="username"
        :rules="[
          { required: true, message: '请输入用户名' },
          { type: 'string', min: 5, max: 20, message: '用户名长度在 5-20 之间' },
          { pattern: /^\w+$/, message: '用户名只能是字母、数字、下划线' },
        ]"
      >
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item
        label="密码"
        prop="password"
        :rules="[
          { required: true, message: '请输入密码' },
          { type: 'string', min: 5, max: 20, message: '密码长度在 5-20 之间' },
        ]"
      >
        <el-input type="password" v-model="form.password" />
      </el-form-item>
      <el-form-item
        label="确认密码"
        prop="confirm"
        :rules="[
          { required: true, message: '请输入确认密码' },
          {
            validator: (rule, value, callback) => {
              if (!value) {
                callback(new Error('请输入确认密码'))
              } else if (value !== form.password) {
                callback(new Error('两次密码不一致'))
              } else {
                callback()
              }
            },
          },
        ]"
      >
        <el-input type="password" v-model="form.confirm" />
      </el-form-item>
      <el-form-item
        label="昵称"
        prop="nickname"
        :rules="[
          { required: true, message: '请输入昵称' },
          { type: 'string', min: 3, max: 20, message: '昵称长度在 3-20 之间' },
        ]"
      >
        <el-input v-model="form.nickname" />
      </el-form-item>
      <div class="text-center mt-5">
        <el-button type="primary" @click="onSubmit" :loading="loading">注 册</el-button>
        <el-button type="primary" link @click="router.push(PATH_LOGIN)">已有账户，登录</el-button>
      </div>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { PATH_LOGIN } from '@/router'
import type { FormInstance } from 'element-plus'
import { useRequest } from '@/hooks/use-request.ts'
import { registerService } from '@/service/user.ts'

const router = useRouter()
const form = ref({
  username: '',
  password: '',
  confirm: '',
  nickname: '',
})

const formRef = useTemplateRef<FormInstance>('formRef')

const { loading, run: onRegister } = useRequest(() => registerService(form.value), {
  manual: true,
  onSuccess(v) {
    console.log(v)
    ElMessage.success('注册成功')
    router.push(PATH_LOGIN)
  },
})

const onSubmit = async () => {
  const valid = await formRef.value?.validate()
  if (!valid) {
    return
  }
  console.log(form.value)
  onRegister()
}
</script>
