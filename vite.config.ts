import { defineConfig } from 'vite'
import type { Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * Custom domain root path: https://rajinmd.com/
 *
 * Can still be overridden if needed:
 *   BASE_PATH=/dorpon/ npm run build
 */
const BASE_PATH = process.env.BASE_PATH ?? '/'

/**
 * With a base path configured, the dev server only serves the app under that
 * prefix. This redirects the bare root so http://localhost:5173 keeps working.
 */
function redirectRootToBase(base: string): Plugin {
  return {
    name: 'dorpon:redirect-root-to-base',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        if (req.url === '/' || req.url === '') req.url = base
        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: BASE_PATH,
  plugins: [react(), tailwindcss(), redirectRootToBase(BASE_PATH)],
  server: {
    port: 5173,
    open: true,
  },
  preview: {
    port: 4173,
    open: true,
  },
  build: {
    // Photos are served from /public, so no special asset handling is required.
    outDir: 'dist',
  },
})
