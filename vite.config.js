import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  base: globalThis.process?.env?.CF_PAGES ? '/' : '/likelionpage/',
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
