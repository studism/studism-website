// 固定のお知らせ（ポスター）データ。
// microCMS ではなくハードコードのお知らせ。HomePage / MobileHomePage の
// お知らせセクションと、お知らせ詳細ページ（/notice/:slug）で共有する。
//
// body には各お知らせの本文を入れる（後ほど指定）。HTML 文字列でも可。
// 未指定（空文字）の場合、詳細ページでは本文を表示しない。
export const NEWS_POSTERS = [
  {
    slug: 'timelyze',
    img: '/images/news/timelyze-poster.png',
    type: '配信中',
    title: 'Timelyze：時間管理アプリ大幅アップデート！',
    note: 'さらに使いやすくなりました!',
    date: '2025.1.26',
    pos: 'center 35%',
    body: `
<p style="font-size:1.1rem;font-weight:700;color:#1a1a1a;margin:0 0 16px;">Timelyzeは効率的な学習管理で目標達成をサポート</p>
<p style="margin:0 0 24px;">Timelyzeは、学習時間の記録と管理を簡単にする学習管理アプリです。直感的な操作で学習習慣を身につけ、目標達成まで継続的にサポートします。</p>

<h2 style="font-size:1.05rem;font-weight:800;color:#1a1a1a;margin:0 0 12px;">こんな方におすすめ</h2>
<ul style="margin:0 0 24px;padding-left:1.25em;">
  <li>受験生・学生</li>
  <li>資格試験の勉強中の方</li>
  <li>語学学習者</li>
  <li>継続的なスキルアップを目指す方</li>
</ul>

<h2 style="font-size:1.05rem;font-weight:800;color:#1a1a1a;margin:0 0 12px;">特徴</h2>
<ul style="margin:0 0 24px;padding-left:1.25em;">
  <li>シンプルで使いやすいデザイン</li>
  <li>データはデバイス内に安全に保存</li>
  <li>オフラインでも利用可能</li>
  <li>無料で基本機能を利用可能</li>
</ul>

<p style="margin:0 0 24px;">学習時間の記録から目標管理まで、効率的な学習をTimelyzeがサポートします。今すぐダウンロードして、理想的な学習習慣を始めましょう！</p>

<p style="font-weight:700;color:#1a1a1a;margin:0 0 12px;">以下のリンクからダウンロード！</p>
<p style="margin:0;">
  <a href="https://apps.apple.com/jp/app/timelyze/id6752543100" target="_blank" rel="noopener noreferrer" style="color:#2563EB;font-weight:700;text-decoration:underline;">App Storeでダウンロード</a>
  <span style="color:#94A3B8;"> ／ </span>
  <a href="https://play.google.com/store/apps/details?id=com.naoki2998.timelyze&hl=ja" target="_blank" rel="noopener noreferrer" style="color:#2563EB;font-weight:700;text-decoration:underline;">Google Playでダウンロード</a>
</p>`,
  },
  {
    slug: 'sakuraenglish',
    img: '/images/news/sakuraenglish-release.png',
    type: '配信中',
    title: 'SakuraEnglish：大幅アップデート！',
    note: 'さらに使いやすくなりました!',
    date: '2025.1.26',
    body: `
<p style="font-size:1.1rem;font-weight:700;color:#1a1a1a;margin:0 0 16px;">SakuraEnglish：大幅アップデートでUIデザインが一新！</p>
<p style="margin:0 0 24px;">Studismが配信する英単語学習アプリ「SakuraEnglish」が大幅アップデートしました！今回のアップデートではアプリのUIデザインを全面的に刷新し、よりスマートで見やすいインターフェースに生まれ変わりました。</p>

<p style="margin:0 0 16px;">直感的に操作できるレイアウトに改善したほか、画面全体の配色・フォント・アニメーションを見直し、快適な学習体験を実現しました。</p>
<p style="margin:0 0 24px;">機能面でも細かなブラッシュアップを重ね、これまで以上に使いやすいアプリになりました。ぜひ最新バージョンをお試しください！</p>

<p style="font-weight:700;color:#1a1a1a;margin:0 0 12px;">以下のリンクからダウンロード！</p>
<p style="margin:0;">
  <a href="https://apps.apple.com/jp/app/sakuraenglish/id6747013736" target="_blank" rel="noopener noreferrer" style="color:#2563EB;font-weight:700;text-decoration:underline;">App Storeでダウンロード</a>
  <span style="color:#94A3B8;"> ／ </span>
  <a href="https://play.google.com/store/apps/details?id=com.studism.sakuraenglish01" target="_blank" rel="noopener noreferrer" style="color:#2563EB;font-weight:700;text-decoration:underline;">Google Playでダウンロード</a>
</p>`,
  },
  {
    slug: 'studism',
    img: '/images/news/studism-ad.png',
    type: '配信中',
    title: 'Studism：勉強のためのSNS配信中',
    date: '2025.1.26',
    pos: 'center 35%',
    body: `
<p style="font-size:1.1rem;font-weight:700;color:#1a1a1a;margin:0 0 16px;">勉強だけのSNSアプリ：Studismが絶賛配信中！</p>
<p style="margin:0 0 24px;">このアプリは学習する人々が集う場所として制作。</p>

<p style="margin:0 0 24px;">高校範囲からあらゆる分野まで、学ぶすべての人を対象に質問や投稿ができます。さらに、スキマ時間にサクッと読める勉強コラムや、実際に問題に取り組めるチャレンジ問題も充実。アプリを閉じるころには、ちょっと賢くなれる！ —— そんな体験が待っています</p>
<p style="margin:0 0 16px;">豆知識を学んだり紹介したり...YouTubeの「ショート単語」公式チャンネルも配信中！</p>
<p style="margin:0 0 24px;">アプリをダウンロードしてStudismをはじめよう！</p>

<p style="font-weight:700;color:#1a1a1a;margin:0 0 12px;">以下のリンクからダウンロード！</p>
<p style="margin:0;">
  <a href="https://apps.apple.com/jp/app/studism/id6754665143" target="_blank" rel="noopener noreferrer" style="color:#2563EB;font-weight:700;text-decoration:underline;">App Storeでダウンロード</a>
  <span style="color:#94A3B8;"> ／ </span>
  <a href="https://play.google.com/store/apps/details?id=com.naoki2998.Studism&hl=ja" target="_blank" rel="noopener noreferrer" style="color:#2563EB;font-weight:700;text-decoration:underline;">Google Playでダウンロード</a>
</p>`,
  },
  {
    slug: 'mamemame',
    img: '/images/news/mamemame-store.png',
    type: '配信中',
    title: '豆マメ：古文単語アプリ配信中',
    date: '2025.1.26',
    pos: 'center 35%',
    body: `
<p style="font-size:1.1rem;font-weight:700;color:#1a1a1a;margin:0 0 16px;">古文単語の学習を、もっと楽しく、もっと効率的に。</p>
<p style="margin:0 0 24px;">豆マメは、大学受験や古典学習に必要な古文単語を、クイズ形式で楽しく学べる学習アプリです。</p>

<h2 style="font-size:1.05rem;font-weight:800;color:#1a1a1a;margin:0 0 12px;">こんな方におすすめ</h2>
<ul style="margin:0 0 24px;padding-left:1.25em;">
  <li>大学受験で古文を得点源にしたい方</li>
  <li>古典の授業の予習・復習をしたい方</li>
  <li>古文単語を効率よく覚えたい方</li>
  <li>スキマ時間を活用して学習したい方</li>
  <li>美しいデザインのアプリで学びたい方</li>
</ul>

<h2 style="font-size:1.05rem;font-weight:800;color:#1a1a1a;margin:0 0 12px;">学習のポイント</h2>
<ol style="margin:0 0 24px;padding-left:1.25em;">
  <li>まずは品詞を選んでクイズに挑戦</li>
  <li>間違えた単語は復習機能で繰り返し学習</li>
  <li>単語帳で意味を確認</li>
  <li>習得率100%を目指して毎日コツコツ</li>
</ol>

<p style="margin:0 0 24px;">古文単語の学習を、豆マメと一緒に始めましょう！</p>

<p style="font-weight:700;color:#1a1a1a;margin:0 0 12px;">以下のリンクからダウンロード！</p>
<p style="margin:0;">
  <a href="https://apps.apple.com/jp/app/%E8%B1%86%E3%83%9E%E3%83%A1/id6757949629" target="_blank" rel="noopener noreferrer" style="color:#2563EB;font-weight:700;text-decoration:underline;">App Storeでダウンロード</a>
  <span style="color:#94A3B8;"> ／ </span>
  <a href="https://play.google.com/store/apps/details?id=com.naoki2998.mamemame&hl=ja" target="_blank" rel="noopener noreferrer" style="color:#2563EB;font-weight:700;text-decoration:underline;">Google Playでダウンロード</a>
</p>`,
  },
];

export const getPosterBySlug = (slug) =>
  NEWS_POSTERS.find((p) => p.slug === slug);
