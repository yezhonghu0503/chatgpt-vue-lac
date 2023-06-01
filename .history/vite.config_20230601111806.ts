import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': './src'
    }
    // {
    //   find: '@',
    //   replacement: resolve(__dirname, '../src'),
    // }
  },
  AutoImport({
    resolvers: [ElementPlusResolver()],
  }),
Components({
  resolvers: [ElementPlusResolver()],
}),
  // server: {
  //   proxy: {
  //     "/chat": {
  //       target: "http://43.134.90.37:8999",
  //       changeOrigin: true,
  //       // rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //   },
  // },
})
