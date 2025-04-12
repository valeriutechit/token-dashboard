// import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  css: ['@/assets/css/tailwind.css'],

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
})