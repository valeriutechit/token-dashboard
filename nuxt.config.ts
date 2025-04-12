export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@sentry/nuxt'],
  css: ['@/assets/css/tailwind.css'],

  sentry: {
    dsn: process.env.SENTRY_DSN,
    config: {
      tracesSampleRate: 1.0,
    },
    sourceMaps: {
      enabled: true,
      authToken: process.env.SENTRY_AUTH_TOKEN,
      org: 'valerii-yg',
      project: 'javascript-nuxt',
    },
  },

  nitro: {
    preset: 'node',
    serveStatic: true,
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || 'http://localhost:3000',
      sentryDsn: process.env.SENTRY_DSN || '',
    }
  },

  sourcemap: {
    client: 'hidden', // чтобы скрывать исходники в браузере
  },
})
