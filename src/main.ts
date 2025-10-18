import { createApp } from 'vue'
import App from './App.vue'
import { installStore } from '@/stores'
import { installRouter } from '@/router'
import { installAssets } from '@/plugins/assets.ts'
import { installDraggable } from '@/plugins/draggable.ts'

const app = createApp(App)

installDraggable(app)
installRouter(app)
installStore(app)
installAssets()

app.mount('#app')
