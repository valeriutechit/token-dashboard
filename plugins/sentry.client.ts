import * as Sentry from '@sentry/vue';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  
  if (!config.public.sentryDsn) return
  
  const dsn = config.public.sentryDsn as string;
  
  Sentry.init({
    app: nuxtApp.vueApp,
    dsn,
    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.replayIntegration(),
    ],
    tracesSampleRate: 1.0
  })
})