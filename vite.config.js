import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        Exo: ['Exo 2', 'sans-serif'],
        
      },
    },
  },
  plugins: [tailwindcss(),react()],
})
