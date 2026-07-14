// 固定のお知らせ（ポスター）データ。
// microCMS ではなくハードコードのお知らせ。HomePage / MobileHomePage の
// お知らせセクションと、お知らせ詳細ページ（/notice/:slug）で共有する。
//
// body には各お知らせの本文を入れる（HTML 文字列）。ダウンロードリンクは
// appStoreUrl / playStoreUrl に分離し、詳細表示ではストアアイコンとして出す。
export const NEWS_POSTERS = [
  {
    slug: 'timelyze',
    img: '/images/news/timelyze-poster.webp',
    type: '配信中',
    title: 'Timelyze：時間管理アプリ大幅アップデート！',
    note: 'さらに使いやすくなりました!',
    date: '2025.1.26',
    pos: 'center 45%',
    appStoreUrl: 'https://apps.apple.com/jp/app/timelyze/id6752543100',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.naoki2998.timelyze&hl=ja',
    body: `
<p style="font-size:1.1rem;font-weight:700;color:#1a1a1a;margin:0 0 16px;">Timelyze：大幅アップデートでさらに使いやすく！</p>
<p style="margin:0 0 24px;">Studismが配信する学習管理アプリ「Timelyze」が大幅アップデートしました！今回のアップデートでは操作性を全面的に見直し、毎日の学習をこれまで以上にスムーズに記録・管理できるようになりました。</p>

<p style="margin:0 0 16px;">新たに、解いた問題ごとに理解度を記録できるようになり、自分がどこを理解していて、どこが苦手なのかをひと目で振り返れるようになりました。さらに、使っている教材をアプリに登録して学習記録と一緒に管理できるので、参考書や問題集ごとの進み具合も簡単に把握できます。</p>
<p style="margin:0;">「ただ時間を記録するだけ」から一歩進んで、学習の中身まで見える化することで、次に何をやるべきかが自然と見えてくる——そんなアプリを目指してアップデートを重ねています。ぜひ最新バージョンをお試しください！</p>`,
  },
  {
    slug: 'sakuraenglish',
    img: '/images/news/sakuraenglish-release.webp',
    type: '配信中',
    title: 'SakuraEnglish：大幅アップデート！',
    note: 'ノートデザインに変わりました！',
    date: '2025.1.26',
    pos: 'center 42%',
    appStoreUrl: 'https://apps.apple.com/jp/app/sakuraenglish/id6747013736',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.studism.sakuraenglish01',
    body: `
<p style="font-size:1.1rem;font-weight:700;color:#1a1a1a;margin:0 0 16px;">SakuraEnglish：大幅アップデートでUIデザインが一新！</p>
<p style="margin:0 0 24px;">Studismが配信する英単語学習アプリ「SakuraEnglish」が大幅アップデートしました！今回のアップデートではアプリのUIデザインを全面的に刷新し、よりスマートで見やすいインターフェースに生まれ変わりました。</p>

<p style="margin:0 0 16px;">直感的に操作できるレイアウトに改善したほか、画面全体の配色・フォント・アニメーションを見直し、快適な学習体験を実現しました。</p>
<p style="margin:0;">機能面でも細かなブラッシュアップを重ね、これまで以上に使いやすいアプリになりました。ぜひ最新バージョンをお試しください！</p>`,
  },
  {
    slug: 'studism',
    img: '/images/news/studism-ad.webp',
    type: '配信中',
    title: 'Studism：勉強のためのSNS配信中',
    note: '使いやすくなって機能続々追加！',
    date: '2025.1.26',
    pos: 'center 40%',
    appStoreUrl: 'https://apps.apple.com/jp/app/studism/id6754665143',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.naoki2998.Studism&hl=ja',
    body: `
<p style="font-size:1.1rem;font-weight:700;color:#1a1a1a;margin:0 0 16px;">勉強だけのSNSアプリ：Studismが絶賛配信中！</p>
<p style="margin:0 0 24px;">このアプリは学習する人々が集う場所として制作。</p>

<p style="margin:0 0 16px;">高校範囲からあらゆる分野まで、学ぶすべての人を対象に質問や投稿ができます。さらに、スキマ時間にサクッと読める勉強コラムや、実際に問題に取り組めるチャレンジ問題も充実。アプリを閉じるころには、ちょっと賢くなれる！ —— そんな体験が待っています。</p>
<p style="margin:0;">豆知識を学んだり紹介したり...YouTubeの「ショート単語」公式チャンネルも配信中！アプリをダウンロードしてStudismをはじめよう！</p>`,
  },
  {
    slug: 'mamemame',
    img: '/images/news/mamemame-store.webp',
    type: '配信中',
    title: '豆マメ：古文単語アプリ配信中',
    date: '2025.1.26',
    pos: 'center 10%',
    appStoreUrl: 'https://apps.apple.com/jp/app/%E8%B1%86%E3%83%9E%E3%83%A1/id6757949629',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.naoki2998.mamemame&hl=ja',
    body: `
<p style="font-size:1.1rem;font-weight:700;color:#1a1a1a;margin:0 0 16px;">古文単語の学習を、もっと楽しく、もっと効率的に。</p>
<p style="margin:0 0 24px;">豆マメは、大学受験や古典学習に必要な古文単語を、クイズ形式で楽しく学べる学習アプリです。</p>

<p style="margin:0 0 16px;">品詞ごとにクイズへ挑戦でき、間違えた単語は復習機能で繰り返し学べるので、苦手な単語も自然と得意に変えていけます。気になったときは単語帳でいつでも意味を確認でき、習得率を見ながら毎日コツコツ積み重ねるうちに、気づけば古文単語が得点源に変わっていきます。</p>
<p style="margin:0;">スキマ時間にサクッと取り組める手軽さと、学習を続けたくなる美しいデザインにもこだわりました。古文を「覚えるのが大変なもの」から「楽しく続けられるもの」へ。豆マメと一緒に、古文単語の学習を始めましょう！</p>`,
  },
];

export const getPosterBySlug = (slug) =>
  NEWS_POSTERS.find((p) => p.slug === slug);
