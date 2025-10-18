import { fileURLToPath, URL } from 'node:url'

import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import VueRouter from 'unplugin-vue-router/vite'
import Layouts from 'vite-plugin-vue-layouts'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig((configEnv: ConfigEnv) => {
  const env = loadEnv(configEnv.mode, process.cwd())

  return {
    plugins: [
      VueRouter({
        exclude: ['./src/pages/**/components/**'],
      }),
      // ⚠️ Vue must be placed after VueRouter()
      vue(),
      vueJsx(),
      UnoCSS(),
      createSvgIconsPlugin({
        iconDirs: [fileURLToPath(new URL('./src/assets/icons', import.meta.url))],
        symbolId: 'icon-[dir]-[name]',
      }),
      Layouts({
        layoutsDirs: 'src/layouts',
        defaultLayout: 'default',
      }),
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/, // .md
        ],
        imports: ['vue', VueRouterAutoImports, 'pinia', '@vueuse/core'],
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        deep: true,
        directoryAsNamespace: true,
        resolvers: [ElementPlusResolver()],
      }),
      vueDevTools(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      port: 5173,
      proxy: {
        [env.VITE_BASE_URL]: {
          target: env.VITE_BASE_URL_RMOTE,
          changeOrigin: true,
          secure: false,
          rewrite(path) {
            return path.replace(env.VITE_BASE_URL, '')
          },
        },
      },
    },
    // css: {
    //   preprocessorOptions: {
    // scss: {
    // api: 'modern',
    // },
    //   },
    // },
  }
})
