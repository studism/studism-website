export const topics = [
  {
    id: 'topic-sakuraenglish-tips',
    title: 'SakuraEnglishで効率的に英単語を覚える5つのコツ',
    description: '毎日の学習を効果的にするためのヒントをご紹介',
    image: '/images/sakuraenglish-banner.jpg',
    category: '学習Tips',
    dateSort: '2025-12-15',
    isPopular: true,
    views: 1250
  },
  {
    id: 'topic-timelyze-intro',
    title: 'Timelyzeで学習時間を可視化しよう',
    description: '時間管理の重要性と、Timelyzeの活用方法',
    image: '/images/Timelyze1.0.7.jpg',
    category: 'アプリ紹介',
    dateSort: '2025-12-10',
    isPopular: true,
    views: 980
  },
  {
    id: 'topic-study-habit',
    title: '学習習慣を身につけるための3つのステップ',
    description: '継続的な学習を支援するStudismのアプローチ',
    image: '/images/studism-logo.png',
    category: '学習Tips',
    dateSort: '2025-12-05',
    isPopular: true,
    views: 850
  },
  {
    id: 'topic-new-feature-2025',
    title: '2025年の新機能アップデート予定',
    description: '来年予定している新機能をご紹介します',
    image: '/images/sakuraenglish-promo.png',
    category: 'お知らせ',
    dateSort: '2025-12-17',
    isPopular: false,
    views: 320
  },
  {
    id: 'topic-toeic-guide',
    title: 'TOEIC学習ガイド：目標スコア別の勉強法',
    description: '600点、730点、860点それぞれの攻略法',
    image: '/images/sakuraenglish-banner.jpg',
    category: '学習Tips',
    dateSort: '2025-12-16',
    isPopular: false,
    views: 450
  },
  {
    id: 'topic-app-comparison',
    title: 'Studismアプリの使い分け方',
    description: 'SakuraEnglishとTimelyzeを組み合わせた学習法',
    image: '/images/studism-logo.png',
    category: 'アプリ紹介',
    dateSort: '2025-12-14',
    isPopular: false,
    views: 280
  }
];

// 最新トピックを取得（日付順）
export const getLatestTopics = (count = 3) => {
  return [...topics]
    .sort((a, b) => new Date(b.dateSort) - new Date(a.dateSort))
    .slice(0, count);
};

// 人気トピックを取得（views順）
export const getPopularTopics = (count = 3) => {
  return [...topics]
    .sort((a, b) => b.views - a.views)
    .slice(0, count);
};

export const getTopicById = (id) => {
  return topics.find(item => item.id === id);
};
