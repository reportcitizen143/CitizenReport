import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base: './' keeps the build portable — it works on GitHub Pages
// (including project sub-paths), Netlify, Vercel or a plain folder.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
})
