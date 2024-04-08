import { fileURLToPath, URL } from 'node:url'
import electron, { startup } from 'vite-plugin-electron'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const isDev = process.env.NODE_ENV === "development"
const isProd = process.env.NODE_ENV === "production"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    
    electron({
      entry: "electron/main.ts",
      vite: { 
        build: {
          minify: isProd,
          watch: isDev ? {} : null,
        },
        plugins: [{
          name: "plugin-start-election",
          closeBundle() {
            if (isDev) {
              startup()
            }
          }
        }]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
