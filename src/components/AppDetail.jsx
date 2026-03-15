import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, MessageCircle, Zap, Star, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/* ── 背景に散りばめる記号リスト ── */
const SYMBOLS = [
  { s: '∑',     top: '6%',  left: '3%',  size: 52, rot: -15, op: 0.18, delay: '0s'   },
  { s: '∫',     top: '18%', left: '8%',  size: 44, rot: 10,  op: 0.15, delay: '0.5s' },
  { s: 'π',     top: '38%', left: '2%',  size: 48, rot: -8,  op: 0.18, delay: '1s'   },
  { s: '√',     top: '58%', left: '6%',  size: 40, rot: 5,   op: 0.15, delay: '1.5s' },
  { s: '∞',     top: '72%', left: '12%', size: 36, rot: -12, op: 0.18, delay: '0.8s' },
  { s: 'Δ',     top: '85%', left: '4%',  size: 44, rot: 8,   op: 0.15, delay: '2s'   },
  { s: 'θ',     top: '92%', left: '20%', size: 38, rot: -6,  op: 0.16, delay: '0.3s' },
  { s: 'E=mc²', top: '5%',  left: '22%', size: 22, rot: -10, op: 0.20, delay: '0.6s' },
  { s: 'α',     top: '14%', left: '30%', size: 42, rot: 12,  op: 0.15, delay: '1.2s' },
  { s: 'λ',     top: '30%', left: '25%', size: 36, rot: -5,  op: 0.15, delay: '1.8s' },
  { s: 'H₂O',   top: '48%', left: '20%', size: 24, rot: 8,   op: 0.20, delay: '0.4s' },
  { s: '≈',     top: '62%', left: '28%', size: 44, rot: -10, op: 0.16, delay: '2.2s' },
  { s: 'CO₂',   top: '78%', left: '22%', size: 22, rot: 6,   op: 0.20, delay: '1.1s' },
  { s: 'F=ma',  top: '88%', left: '35%', size: 20, rot: -8,  op: 0.20, delay: '0.7s' },
  { s: 'β',     top: '8%',  left: '48%', size: 40, rot: 15,  op: 0.14, delay: '1.4s' },
  { s: '±',     top: '22%', left: '55%', size: 46, rot: -12, op: 0.16, delay: '0.9s' },
  { s: 'pH',    top: '42%', left: '50%', size: 26, rot: 7,   op: 0.18, delay: '2.4s' },
  { s: '∂',     top: '68%', left: '52%', size: 42, rot: -9,  op: 0.15, delay: '0.2s' },
  { s: 'mol',   top: '82%', left: '48%', size: 22, rot: 11,  op: 0.18, delay: '1.6s' },
  { s: 'γ',     top: '10%', left: '68%', size: 38, rot: -14, op: 0.15, delay: '0.5s' },
  { s: 'NaCl',  top: '25%', left: '72%', size: 20, rot: 9,   op: 0.18, delay: '1.3s' },
  { s: 'ω',     top: '44%', left: '68%', size: 40, rot: -7,  op: 0.16, delay: '2.0s' },
  { s: '÷',     top: '60%', left: '74%', size: 44, rot: 13,  op: 0.15, delay: '0.6s' },
  { s: 'σ',     top: '75%', left: '68%', size: 36, rot: -11, op: 0.16, delay: '1.7s' },
  { s: 'v=λf',  top: '90%', left: '65%', size: 18, rot: 6,   op: 0.20, delay: '0.4s' },
  { s: 'φ',     top: '4%',  left: '82%', size: 42, rot: -8,  op: 0.15, delay: '1.0s' },
  { s: '×',     top: '18%', left: '88%', size: 40, rot: 20,  op: 0.16, delay: '2.1s' },
  { s: 'ε',     top: '35%', left: '84%', size: 36, rot: -15, op: 0.15, delay: '0.3s' },
  { s: '∇',     top: '55%', left: '88%', size: 40, rot: 8,   op: 0.16, delay: '1.5s' },
  { s: 'ℏ',     top: '70%', left: '82%', size: 38, rot: -10, op: 0.15, delay: '0.8s' },
  { s: 'O₂',    top: '82%', left: '88%', size: 22, rot: 12,  op: 0.18, delay: '2.3s' },
  { s: 'μ',     top: '94%', left: '80%', size: 36, rot: -6,  op: 0.15, delay: '1.2s' },
];

/* ── App Store / Google Play SVGアイコン ── */
function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.36.6 1.24 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z"/>
    </svg>
  );
}

const AppDetail = () => {
  const { appSlug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [appSlug]);

  const appData = {
    sakuraenglish: {
      name: 'SakuraEnglish',
      icon: '/images/sakuraenglish.png',
      category: '語学学習',
      description: 'レベル別の英単語クイズで効率的に語彙力を強化できるアプリです。5段階のレベル（Lev1-Lev5）から自分に合った難易度を選択でき、カスタム単語リスト機能で自分だけの学習プランを作成できます。間違えた単語の復習機能や習熟度トラッキングにより、着実に英語力を向上させることができます。',
      features: [
        { icon: <Zap className="w-5 h-5" />, title: 'レベル別クイズ', description: '5段階の難易度で自分に合った学習', image: '/images/screenshots/SakuraEnglish-ss01.webp' },
        { icon: <Star className="w-5 h-5" />, title: 'カスタム単語リスト', description: '自分だけの単語帳を作成可能', image: '/images/screenshots/SakuraEnglish-ss02.webp' },
        { icon: <Users className="w-5 h-5" />, title: '復習＆トラッキング', description: '間違えた単語の復習と習熟度管理', image: '/images/screenshots/SakuraEnglish-ss03.webp' }
      ],
      screenshots: [
        { title: 'メイン画面', description: 'シンプルで使いやすいインターフェース', image: '/images/screenshots/SakuraEnglish-ss01.webp' },
        { title: 'クイズ画面', description: 'レベル別の英単語クイズ', image: '/images/screenshots/SakuraEnglish-ss02.webp' },
        { title: '学習進捗', description: '詳細な学習データと分析', image: '/images/screenshots/SakuraEnglish-ss03.webp' }
      ],
      appStoreUrl: 'https://apps.apple.com/jp/app/sakuraenglish/id6747013736',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.studism.sakuraenglish'
    },
    timelyze: {
      name: 'Timelyze',
      icon: '/images/timelyze.png',
      category: '生産性',
      description: '学習時間の記録・管理を簡単にする時間管理アプリです。タイマー機能での測定や手動入力に対応し、教科別に学習時間を集計できます。日別・週別・月別のグラフ表示で学習データを可視化し、目標設定と進捗確認で継続的な学習をサポート。カレンダー機能やメモ機能も搭載し、効率的な学習習慣を身につけることができます。',
      features: [
        { icon: <Zap className="w-5 h-5" />, title: '時間記録・追跡', description: 'タイマー機能と手動入力で教科別集計', image: '/images/screenshots/Timelyze-ss01.webp' },
        { icon: <Star className="w-5 h-5" />, title: 'データ可視化', description: '日別・週別・月別のグラフで分析', image: '/images/screenshots/Timelyze-ss02.webp' },
        { icon: <Users className="w-5 h-5" />, title: '目標管理', description: '進捗確認と達成時の自動通知', image: '/images/screenshots/Timelyze-ss03.webp' }
      ],
      screenshots: [
        { title: 'タイマー画面', description: 'シンプルで使いやすい時間記録', image: '/images/screenshots/Timelyze-ss01.webp' },
        { title: '統計画面', description: '詳細な学習データの可視化', image: '/images/screenshots/Timelyze-ss02.webp' },
        { title: '目標設定', description: '個人に合わせた目標管理', image: '/images/screenshots/Timelyze-ss03.webp' }
      ],
      appStoreUrl: 'https://apps.apple.com/jp/app/timelyze/id6752543100',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.studism.timelyze'
    }
  };

  const app = appData[appSlug];

  if (!app) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">アプリが見つかりません</h1>
          <Button asChild>
            <Link to="/">ホームに戻る</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: '#FAFAFE' }}>
      <Header />

      {/* ════ Hero セクション ════ */}
      <section className="relative overflow-hidden" style={{ background: '#5DCFEA', minHeight: '520px' }}>

        {/* 背景：学習記号 */}
        {SYMBOLS.map((item, i) => (
          <div key={i} className="absolute pointer-events-none select-none animate-float"
            style={{
              top: item.top, left: item.left,
              fontSize: item.size, fontWeight: 900,
              color: '#ffffff',
              opacity: item.op,
              transform: `rotate(${item.rot}deg)`,
              animationDelay: item.delay,
              fontFamily: 'Georgia, serif',
              lineHeight: 1,
            }}>
            {item.s}
          </div>
        ))}

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 py-16 md:py-24">
          <div className="flex flex-col items-center text-center gap-8 max-w-3xl mx-auto">

            {/* アイコン */}
            <div className="relative animate-float-slow">
              <div className="absolute inset-0 animate-pulse-glow pointer-events-none" style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.30) 0%, transparent 65%)',
                transform: 'scale(1.8)', borderRadius: '50%',
              }} />
              <img
                src={app.icon}
                alt={app.name}
                style={{
                  width: 'clamp(100px, 16vw, 160px)',
                  height: 'auto',
                  borderRadius: '28%',
                  filter: 'drop-shadow(0 20px 48px rgba(30,27,75,0.28))',
                  position: 'relative',
                }}
              />
            </div>

            {/* アプリ名 */}
            <div className="space-y-1">
              <span className="inline-block text-xs font-black px-3 py-1 rounded-full"
                style={{ background: 'rgba(255,255,255,0.25)', color: '#1E1B4B', letterSpacing: '0.08em' }}>
                {app.category}
              </span>
            </div>
            <h1 className="font-black"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                color: '#1E1B4B',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginTop: '-16px',
              }}>
              {app.name}
            </h1>

            {/* 説明文 */}
            <p className="font-medium leading-relaxed"
              style={{
                fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)',
                color: 'rgba(30,27,75,0.80)',
                maxWidth: '640px',
              }}>
              {app.description}
            </p>

            {/* ダウンロードボタン */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a href={app.appStoreUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3.5 rounded-2xl font-black text-sm transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  background: '#1E1B4B',
                  color: '#ffffff',
                  boxShadow: '0 8px 24px rgba(30,27,75,0.30)',
                  textDecoration: 'none',
                  minWidth: '180px',
                  justifyContent: 'center',
                }}>
                <AppleIcon />
                App Store
              </a>
              <a href={app.playStoreUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3.5 rounded-2xl font-black text-sm transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  background: 'rgba(255,255,255,0.92)',
                  color: '#1E1B4B',
                  boxShadow: '0 8px 24px rgba(30,27,75,0.15)',
                  border: '1.5px solid rgba(255,255,255,0.6)',
                  backdropFilter: 'blur(12px)',
                  textDecoration: 'none',
                  minWidth: '180px',
                  justifyContent: 'center',
                }}>
                <PlayIcon />
                Google Play
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ════ 機能セクション（スクリーンショット3枚） ════ */}
      <section className="py-20" style={{ background: '#F0FBFF' }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-14">
            <h2 className="font-black" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: '#1E1B4B', letterSpacing: '-0.02em' }}>
              主な機能
            </h2>
            <p className="mt-3 font-medium" style={{ color: '#64748B', fontSize: '1rem' }}>
              {app.name}の特徴的な機能をご紹介します
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {app.features.map((feature, index) => (
              <div key={index}
                className="rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2"
                style={{
                  background: 'rgba(255,255,255,0.80)',
                  backdropFilter: 'blur(20px)',
                  border: '1.5px solid rgba(255,255,255,0.90)',
                  boxShadow: '0 8px 40px rgba(93,207,234,0.18), 0 2px 8px rgba(30,27,75,0.06)',
                }}>
                {/* スクリーンショット */}
                <div className="overflow-hidden" style={{ aspectRatio: '9/16', background: '#1E1B4B' }}>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* テキスト */}
                <div className="p-6 text-center">
                  <h3 className="font-black mb-2" style={{ fontSize: '1.05rem', color: '#1E1B4B' }}>
                    {feature.title}
                  </h3>
                  <p className="font-medium text-sm leading-relaxed" style={{ color: '#64748B' }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ サポートセクション ════ */}
      <section className="py-20" style={{ background: '#FAFAFE' }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-14">
            <h2 className="font-black" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: '#1E1B4B', letterSpacing: '-0.02em' }}>
              サポート
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* プライバシーポリシー */}
            <Link to={`/app/${appSlug}/privacy`}
              className="block rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{
                background: 'rgba(255,255,255,0.90)',
                backdropFilter: 'blur(20px)',
                border: '1.5px solid rgba(93,207,234,0.30)',
                boxShadow: '0 4px 24px rgba(93,207,234,0.12)',
                textDecoration: 'none',
              }}>
              <div className="flex justify-center mb-5">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #5DCFEA, #7C3AED)' }}>
                  <Shield className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="font-black mb-2" style={{ fontSize: '1.1rem', color: '#1E1B4B' }}>
                プライバシーポリシー
              </h3>
              <p className="text-sm font-medium" style={{ color: '#64748B' }}>
                個人情報の取り扱いについて
              </p>
              <span className="inline-block mt-4 text-xs font-black px-4 py-1.5 rounded-full"
                style={{ background: 'linear-gradient(135deg, #5DCFEA, #7C3AED)', color: '#fff' }}>
                詳細を見る
              </span>
            </Link>

            {/* お問い合わせ */}
            <Link to={`/app/${appSlug}/contact`}
              className="block rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{
                background: 'rgba(255,255,255,0.90)',
                backdropFilter: 'blur(20px)',
                border: '1.5px solid rgba(93,207,234,0.30)',
                boxShadow: '0 4px 24px rgba(93,207,234,0.12)',
                textDecoration: 'none',
              }}>
              <div className="flex justify-center mb-5">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #A855F7, #EC4899)' }}>
                  <MessageCircle className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="font-black mb-2" style={{ fontSize: '1.1rem', color: '#1E1B4B' }}>
                お問い合わせ
              </h3>
              <p className="text-sm font-medium" style={{ color: '#64748B' }}>
                ご質問やサポートが必要な場合
              </p>
              <span className="inline-block mt-4 text-xs font-black px-4 py-1.5 rounded-full"
                style={{ background: 'linear-gradient(135deg, #A855F7, #EC4899)', color: '#fff' }}>
                お問い合わせ
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AppDetail;
