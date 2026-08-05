import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: "/comoradb",
  server: {
    port: 8080,
  },
  build: {
    outDir: "docs",
  },
})
