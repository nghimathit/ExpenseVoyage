import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@compoents": path.resolve(__dirname, "src/compoents"),
      // "@libs": path.resolve(__dirname, "src/libs"),
      "@page": path.resolve(__dirname, "src/page"),
      "@Context": path.resolve(__dirname, "src/Context"),
      // "@hooks": path.resolve(__dirname, "src/hooks"),

    }
  },
  // cấu hình chạy netword
  server: {
    host: true,
  }
})
