import * as Sentry from "@sentry/nuxt";
 
Sentry.init({
  dsn: "https://f4f85953457d72ffa39672aa5ac35ce1@o4509142768091136.ingest.de.sentry.io/4509142774579280",

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
  
  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
