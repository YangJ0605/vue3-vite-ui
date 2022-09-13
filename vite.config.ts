import { defineConfig, type BuildOptions } from 'vite'

import vueJsx from '@vitejs/plugin-vue-jsx'

import Unocss from './config/unocss'

const rollupOptions: BuildOptions['rollupOptions'] = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}

export default defineConfig({
  plugins: [vueJsx({}), Unocss()],
  build: {
    rollupOptions,
    minify: false,
    cssCodeSplit: true,
    lib: {
      entry: './src/entry.ts',
      name: 'DrUI',
      fileName: 'dr-ui',
      formats: ['es', 'umd', 'iife']
    }
  }
})
