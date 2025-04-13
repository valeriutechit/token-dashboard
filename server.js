import { createServer } from 'node:http';
import { handler } from './.output/server/index.mjs';

const port = process.env.PORT || 3000;

createServer(handler).listen(port, () => {
  console.log(`✅ Nuxt server listening on http://localhost:${port}`);
});
