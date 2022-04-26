import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {

  return {
    base: '/',
    clearScreen: false,
    define: {
      'process.platform': null,
      'process.version': null,
      GLOBAL_STRING: JSON.stringify('我是变量'),
      GLOBAL_VAR: {
        test: '我是对象'
      }
    },
    plugins: [
      vue({
        // refTransform: true,
      })
    ]
  }
})
