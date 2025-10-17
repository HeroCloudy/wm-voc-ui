import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { PiniaUndo } from 'pinia-undo'
import type { App } from 'vue'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
pinia.use(PiniaUndo)

export const installStore = (app: App) => {
  app.use(pinia)
}

export default pinia
