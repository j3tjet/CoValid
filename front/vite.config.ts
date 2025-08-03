import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/traducir': {
        target: 'https://libretranslate.de',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/traducir/, '/translate')
      }
    }
  }
})
