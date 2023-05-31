import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

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
  }
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
