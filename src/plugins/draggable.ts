import type { App } from 'vue'
import draggable from 'vuedraggable'
import '@/assets/scss/draggable.scss'

export const installDraggable = (app: App): void => {
  app.component('draggable', draggable)
}
