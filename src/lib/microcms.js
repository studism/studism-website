import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.VITE_MICROCMS_API_KEY,
});

export const getNewsList = async (limit = 10) => {
  return client.getList({
    endpoint: 'news',
    queries: { limit, orders: '-publishedAt' },
  });
};
