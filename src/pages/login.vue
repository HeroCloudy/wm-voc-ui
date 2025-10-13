<template>
  <div class="h-full flex flex-col items-center justify-center">
    <div class="text-3xl flex items-center font-700">
      <wm-icon icon="ant-design:user-add-outlined" class="mr-2" />
      <span>用户登录</span>
    </div>
    <el-form
      ref="formRef"
      :model="form"
      :validate-on-rule-change="false"
      class="mt-10 w-500px"
      label-width="100"
      size="large"
    >
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
      <el-form-item>
        <el-checkbox v-model="form.rememberMe" label="记住我" size="large" />
      </el-form-item>
      <div class="text-center mt-5">
        <el-button type="primary" @click="onSubmit">登 录</el-button>
        <el-button type="primary" link @click="router.push(PATH_REGISTER)">
          没有账户，注册账户
        </el-button>
      </div>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { PATH_REGISTER } from '@/router'
import type { FormInstance } from 'element-plus'

const router = useRouter()
const form = ref<Record<string, any>>({
  username: '',
  password: '',
  rememberMe: true,
})

const formRef = useTemplateRef<FormInstance>('formRef')

onMounted(() => {
  const { username, password } = getUserInfoFromStorage()
  if (username && password) {
    form.value.username = username
    form.value.password = password
  }
})

const onSubmit = async () => {
  const valid = await formRef.value?.validate()
  if (!valid) {
    return
  }

  console.log(form.value)
  const { username, password, rememberMe } = form.value
  if (rememberMe) {
    rememberUser(username, password)
  } else {
    forgetUser()
  }
}

const USERNAME_KEY = 'USERNAME'
const PASSWORD_KEY = 'PASSWORD'

const rememberUser = (username: string, password: string) => {
  localStorage.setItem(USERNAME_KEY, username)
  localStorage.setItem(PASSWORD_KEY, password)
}
const forgetUser = () => {
  localStorage.removeItem(USERNAME_KEY)
  localStorage.removeItem(PASSWORD_KEY)
}
const getUserInfoFromStorage = () => {
  return {
    username: localStorage.getItem(USERNAME_KEY),
    password: localStorage.getItem(PASSWORD_KEY),
  }
}
</script>
