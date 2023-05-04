import { defineConfig } from 'vite'
import { resolve } from 'node:path'

// Vite plugins
import Inspect from 'vite-plugin-inspect'

// postcss plugins
import purgecss from '@fullhuman/postcss-purgecss'
import autoprefixer from 'autoprefixer'

export default defineConfig(({ command, mode }) => {
  return {
    appType: 'mpa',
    // root: resolve(__dirname, 'src'),
    
    build: {
      // outDir: '../dist',
      rollupOptions: {
        input: {
          index: './index.html',
          another: './another.html'
        },
      }
    },
    css: {
      devSourcemap: true,
      preprocessorOptions: {
        scss: {
          // provide global bootstrap function and mixins for entire app
          additionalData: '@import "./node_modules/bootstrap/scss/_functions.scss"; @import "./src/scss/bootstrap/_variables.scss"; @import "./node_modules/bootstrap/scss/_variables.scss"; @import "./node_modules/bootstrap/scss/_maps.scss"; @import "./node_modules/bootstrap/scss/_mixins.scss"; ',
        },
      },
      // postcss: {
      //   plugins: command === 'build' ? [
      //     purgecss({
      //       content: [
      //         './node_modules/bootstrap/dist/js/bootstrap.bundle.js',
      //         './src/**'
      //       ]
      //     }),
      //     autoprefixer()
      //   ] : []
      // },
    },
    plugins: [
      Inspect()
    ]
  }
})
