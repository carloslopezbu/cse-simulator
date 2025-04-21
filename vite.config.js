import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  root: './stack/',
  frontend: '/frontend/',
  backend: '/backend/',
  plugins: [react(),
    tailwindcss()
  ],
})
