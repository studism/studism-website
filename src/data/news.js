export const news = [
  {
    id: 'website-renewal-2025',
    date: '2025年11月22日',
    dateSort: '2025-11-22',
    title: '公式ウェブサイトをリニューアルオープンしました',
    type: 'お知らせ',
    content: `
Studismの公式ウェブサイトをリニューアルオープンいたしました。

新しいウェブサイトでは、より見やすく、使いやすいデザインを採用し、
各アプリケーションの情報をより分かりやすくお伝えできるようになりました。

今後とも、Studismをよろしくお願いいたします。
    `.trim()
  },
  {
    id: 'contact-form-update-2025',
    date: '2025年11月20日',
    dateSort: '2025-11-20',
    title: 'お問い合わせフォームのシステムを更新し、よりスムーズにご利用いただけるようになりました',
    type: 'アップデート',
    content: `
お問い合わせフォームのシステムを更新いたしました。

主な改善点：
- フォーム送信後の確認メッセージを改善
- 入力内容のバリデーションを強化
- モバイル端末での操作性を向上

より快適にお問い合わせいただけるようになりました。
ご不明な点がございましたら、お気軽にお問い合わせください。
    `.trim()
  },
  {
    id: 'sakuraenglish-wordlist-2025',
    date: '2025年11月15日',
    dateSort: '2025-11-15',
    title: '「SakuraEnglish」に新しい単語リストを追加しました',
    type: 'アップデート',
    content: `
SakuraEnglishに新しい単語リストを追加いたしました。

追加された単語リスト：
- TOEIC頻出単語（600点レベル）
- TOEIC頻出単語（730点レベル）
- ビジネス英語基礎

これらの単語リストを活用して、効率的に語彙力を強化してください。
今後も定期的に新しいコンテンツを追加していく予定です。
    `.trim()
  },
  {
    id: 'test-for-news001',
    date: '2025年12月17日',
    dateSort: '2025-12-17',
    title: 'ニュース機能を追加しました。',
    type: 'アップデート',
    content: `
ニュースシステムを追加しました

主な改善点：
- 複数のニュースを表示
- モバイル端末での操作性を向上

より快適にお問い合わせいただけるようになりました。
ご不明な点がございましたら、お気軽にお問い合わせください。
    `.trim()
  },
];

// 日付順（新しい順）にソートしたニュースを返す
export const getSortedNews = () => {
  return [...news].sort((a, b) => new Date(b.dateSort) - new Date(a.dateSort));
};

// 指定件数のニュースを取得（新しい順）
export const getLatestNews = (count = 5) => {
  return getSortedNews().slice(0, count);
};

export const getNewsById = (id) => {
  return news.find(item => item.id === id);
};
