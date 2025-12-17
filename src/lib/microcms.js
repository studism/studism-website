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

// 人気トピック取得（viewsでソート）
export const getPopularTopics = async (limit = 3) => {
  const response = await client.get({
    endpoint: 'topics',
    queries: { limit: 100 }, // 全件取得してクライアント側でソート
  });
  // viewsを数値として降順ソート
  const sorted = response.contents.sort((a, b) => {
    const viewsA = parseInt(a.views || '0', 10);
    const viewsB = parseInt(b.views || '0', 10);
    return viewsB - viewsA;
  });
  return sorted.slice(0, limit);
};
