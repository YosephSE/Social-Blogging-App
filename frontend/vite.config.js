import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "Social-Blogging-App",
  server:{
    port:3000,
    proxy:{
      '/api': {
        target: 'https://mern-w0x6.onrender.com',
        changeOrigin: true
      }
    }
  }
})
