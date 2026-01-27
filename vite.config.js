import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  // GitHub Pagesのベースパス設定
  // 開発時は '/'、本番時は '/studism-website/'
  base: mode === 'production' ? '/studism-website/' : '/',
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}))
