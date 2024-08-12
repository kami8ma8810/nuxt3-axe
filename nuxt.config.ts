// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app:{
    head:{
      title: 'Nuxtにvue-axeを入れようとしたら苦戦した話',
      htmlAttrs: {
        lang: 'ja'
      }
    }
  },
  plugins: [
    { src: '~/plugins/axe.client.ts', mode: 'client' }
  ],
  vite: {
    optimizeDeps: { 
      include: process.env.NODE_ENV === 'development' ? ['axe-core'] : []
    },
  },
  runtimeConfig: {
    public: {
      env: process.env.NODE_ENV || 'development',
    }
  },
})
