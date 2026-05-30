import { createClient } from 'microcms-js-sdk';

const serviceDomain = import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN;
const apiKey = import.meta.env.VITE_MICROCMS_API_KEY;

const isConfigured = Boolean(serviceDomain && apiKey);

if (!isConfigured) {
  // 環境変数が未設定でもアプリ全体がクラッシュ（ブラックアウト）しないようにする。
  // .env.local に VITE_MICROCMS_SERVICE_DOMAIN と VITE_MICROCMS_API_KEY を設定してください。
  console.warn(
    '[microCMS] VITE_MICROCMS_SERVICE_DOMAIN / VITE_MICROCMS_API_KEY が未設定です。お知らせ機能は無効化されます。'
  );
}

// 未設定時は createClient を呼ばず、空データを返すスタブを使う。
export const client = isConfigured
  ? createClient({ serviceDomain, apiKey })
  : {
      getList: async () => ({ contents: [], totalCount: 0, offset: 0, limit: 0 }),
      get: async () => {
        throw new Error('microCMS is not configured');
      },
    };

export const getNewsList = async (limit = 10) => {
  return client.getList({
    endpoint: 'news',
    queries: { limit, orders: '-publishedAt' },
  });
};
