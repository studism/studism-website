import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.VITE_MICROCMS_API_KEY,
});

// ニュース取得
export const getNewsList = async (limit = 100) => {
  const response = await client.get({
    endpoint: 'news',
    queries: { limit, orders: '-publishedAt' },
  });
  return response.contents;
};

export const getNewsById = async (id) => {
  const response = await client.get({
    endpoint: 'news',
    contentId: id,
  });
  return response;
};

// トピック取得
export const getTopicsList = async (limit = 100) => {
  const response = await client.get({
    endpoint: 'topics',
    queries: { limit, orders: '-publishedAt' },
  });
  return response.contents;
};

export const getTopicById = async (id) => {
  const response = await client.get({
    endpoint: 'topics',
    contentId: id,
  });
  return response;
};

// 人気トピック取得（viewsでソート - microCMS側でviewsフィールドがある場合）
export const getPopularTopics = async (limit = 3) => {
  const response = await client.get({
    endpoint: 'topics',
    queries: { limit, orders: '-views' },
  });
  return response.contents;
};
