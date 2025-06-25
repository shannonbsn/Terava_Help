import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt'],
      manifest: {
        name: 'Terava',
        short_name: 'Terava',
        description: 'Application de rencontre pour trouver un partenaire de voyage',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'icons/icon.svg',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'favicon.ico',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.origin.includes('your-backend-domain.com'),
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 // 1 heure
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            // Exclusion Reverb/broadcast
            urlPattern: ({ url }) => url.pathname.startsWith('/broadcasting'),
            handler: 'NetworkOnly'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
