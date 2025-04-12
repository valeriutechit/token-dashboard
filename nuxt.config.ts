// import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@sentry/nuxt/module'],
  css: ['@/assets/css/tailwind.css'],
  nitro: {
    preset: 'node',
  },
  devServer: {
    port: process.env.PORT ? Number(process.env.PORT) : 3000,
    host: '0.0.0.0',
  },
  // vite: {
  //   plugins: [tailwindcss()],
  // },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || 'http://localhost:3000',
      sentryDsn: process.env.SENTRY_DSN || '',
    }
  },
  compatibilityDate: '2025-04-13',
  sentry: {
    sourceMapsUploadOptions: {
      org: 'valerii-yg',
      project: 'javascript-nuxt',
    },
  },

  sourcemap: {
    client: 'hidden',
  },
})