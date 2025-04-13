export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@sentry/nuxt'],
  css: ['@/assets/css/tailwind.css'],

  sentry: {
    dsn: process.env.SENTRY_DSN,
    authToken: process.env.SENTRY_AUTH_TOKEN,
    org: 'valerii-yg',
    project: 'javascript-nuxt',
    sourceMaps: {
      include: ['./.output'], // default
      ignore: ['node_modules'],
    },
    telemetry: false
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
