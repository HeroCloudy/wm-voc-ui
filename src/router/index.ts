import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import { setupLayouts } from 'virtual:generated-layouts'
import type { App } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(routes),
})

export const installRouter = (app: App) => {
  app.use(router)
}

export const PATH_HOME = '/'
export const PATH_LOGIN = '/login'
export const PATH_REGISTER = '/register'
export const PATH_MANAGE_INDEX = '/manage/list'

export default router
