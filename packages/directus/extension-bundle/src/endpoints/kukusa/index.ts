import { defineEndpoint } from '@directus/extensions-sdk';

export default defineEndpoint((router, { env, logger }) => {
  router.get('/', (_req, res) => res.send('ok'));
});
