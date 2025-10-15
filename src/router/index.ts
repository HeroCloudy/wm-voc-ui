import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import { setupLayouts } from 'virtual:generated-layouts'
import type { App } from 'vue'
import { useCoreStore } from '@/stores/modules/core.ts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(routes),
})

export const PATH_HOME = '/'
export const PATH_LOGIN = '/login'
export const PATH_REGISTER = '/register'
export const PATH_MANAGE_INDEX = '/manage/list'

const whiteList = [PATH_HOME, PATH_LOGIN, PATH_REGISTER]

router.beforeEach((to) => {
  const coreStore = useCoreStore()
  const token = coreStore.token
  if (token) {
    if (to.path === PATH_LOGIN) {
      return PATH_MANAGE_INDEX
    }
    return true
  }
  if (whiteList.includes(to.path)) {
    return true
  }
  return PATH_LOGIN
})

export const installRouter = (app: App) => {
  app.use(router)
}

export default router
