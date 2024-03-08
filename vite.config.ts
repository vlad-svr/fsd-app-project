import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: '**/*.svg'
    })
  ],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' }
    ]
  },
  define: {
    _IS_DEV_: JSON.stringify(true),
    _API_BASE_URL_: JSON.stringify('http://localhost:8000'),
    _PROJECT_: JSON.stringify('frontend')
  }
})
