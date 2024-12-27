import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from "path"
// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte({
    compilerOptions: {
      customElement: true,
    }})],
    build: {
      lib: {
        entry: resolve(__dirname, 'src/lib/index.js'),
        name: 'custom-counter',
        fileName: (fmt) => `build.${fmt}.js`
      }
    },
    server: {
      proxy: {
        // '/api': {
        //   target: 'http://jsonplaceholder.typicode.com',
        //   changeOrigin: true,
        //   rewrite: (path) => path.replace(/^\/api/, '')
        // }
      }
    }
})
