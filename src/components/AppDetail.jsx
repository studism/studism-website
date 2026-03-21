import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import useIsMobile from '@/hooks/useIsMobile';
import MobileAppDetail from '@/components/mobile/MobileAppDetail';

const css = `
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(32px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes floatIcon {
  0%,100% { transform: translateY(0px) rotate(-1deg); }
  50%     { transform: translateY(-14px) rotate(1deg); }
}
@keyframes floatPhone1 {
  0%,100% { transform: translateY(0px) translateZ(0); }
  50%     { transform: translateY(-12px) translateZ(0); }
}
@keyframes floatPhone2 {
  0%,100% { transform: translateY(0px) translateZ(0); }
  50%     { transform: translateY(-12px) translateZ(0); }
}
@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes slideInRight {
  from { opacity: 0; transform: translateX(60px); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes blobPulse {
  0%,100% { transform: scale(1) rotate(0deg); opacity: 0.5; }
  50%     { transform: scale(1.1) rotate(10deg); opacity: 0.7; }
}
.feature-item:hover {
  transform: translateX(8px) !important;
  box-shadow: 0 6px 24px rgba(0,0,0,0.12) !important;
  border-color: transparent !important;
}
`;

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.36.6 1.24 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z"/>
    </svg>
  );
}

const appData = {
  sakuraenglish: {
    name: 'SakuraEnglish',
    lead: '英語学習を、もっと楽しく。',
    description: 'レベル別の英単語クイズで、無理なく語彙力を伸ばせる英語学習アプリです。5段階の難易度設定と、自分だけのオリジナル単語リスト機能で、あなたのペースに合った学習プランを実現します。',
    icon: '/images/sakuraenglish/icon.png',
    category: '語学学習',
    color: '#2563EB',
    gradient: 'linear-gradient(135deg, #EC4899, #F97316)',
    features: [
      { icon: '📚', text: '5段階のレベル別英単語クイズ' },
      { icon: '✏️', text: 'カスタム単語リストの作成' },
      { icon: '🔄', text: '間違えた単語の自動復習機能' },
      { icon: '📊', text: '習熟度トラッキング' },
      { icon: '📵', text: 'オフラインでも利用可能' },
    ],
    screenshots: [
      '/images/sakuraenglish/ss01.webp',
      '/images/sakuraenglish/ss02.webp',
    ],
    appStoreUrl: 'https://apps.apple.com/jp/app/sakuraenglish/id6747013736',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.studism.sakuraenglish01',
  },
  timelyze: {
    name: 'Timelyze',
    lead: '学習時間を、見える化する。',
    description: '勉強時間の記録・管理をシンプルに実現する学習タイマーアプリです。教科ごとの集計や日別・週別グラフで学習の積み重ねを可視化し、目標設定とカレンダー機能で継続的な学習習慣をサポートします。',
    icon: '/images/timelyze/icon.png',
    category: '生産性・時間管理',
    color: '#6366F1',
    gradient: 'linear-gradient(135deg, #6366F1, #06B6D4)',
    features: [
      { icon: '⏱️', text: 'タイマー機能で学習時間を自動記録' },
      { icon: '📁', text: '教科別の学習時間を集計' },
      { icon: '📈', text: '日別・週別・月別グラフで可視化' },
      { icon: '🎯', text: '目標設定と進捗確認' },
      { icon: '🗓️', text: 'カレンダー・メモ機能搭載' },
    ],
    screenshots: [
      '/images/timelyze/ss01.webp',
      '/images/timelyze/ss02.webp',
    ],
    appStoreUrl: 'https://apps.apple.com/jp/app/timelyze/id6752543100',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.naoki2998.timelyze',
  },
  studism: {
    name: 'Studism',
    lead: '学びを、もっと自由に、楽しく。',
    description: '勉強をSNSでシェアして、仲間と一緒に高め合える学習コミュニティアプリです。学習記録の投稿やいいね・コメントで互いに応援し合いながら、楽しく学習習慣を継続できます。',
    icon: '/images/studism/icon.png',
    category: '教育テクノロジー',
    color: '#0EA5E9',
    gradient: 'linear-gradient(135deg, #0EA5E9, #6366F1)',
    features: [
      { icon: '📖', text: '学習記録を投稿してみんなと共有' },
      { icon: '👥', text: '同じ目標を持つ仲間とつながる' },
      { icon: '❤️', text: 'いいね・コメントで勉強を応援' },
      { icon: '🔥', text: '継続ランキングでモチベーションアップ' },
      { icon: '📊', text: '自分の学習履歴をタイムラインで振り返る' },
    ],
    screenshots: [
      '/images/studism/Studism1.png',
      '/images/studism/Studism2.png',
    ],
    appStoreUrl: 'https://apps.apple.com/jp/app/studism/id6754665143',
    playStoreUrl: '#',
  },
  loopin: {
    name: 'Loopin',
    lead: '毎日の習慣を、ループさせよう。',
    description: '継続したい習慣やルーティンをかんたんに登録・管理できるアプリです。毎日のチェックと通知リマインダー、達成率カレンダーで習慣化をしっかりサポートします。',
    icon: '/images/loopin/icon.png',
    category: '近日公開',
    color: '#1D4ED8',
    gradient: 'linear-gradient(135deg, #1D4ED8, #7C3AED)',
    features: [
      { icon: '🔁', text: '毎日のルーティンを簡単に登録・管理' },
      { icon: '✅', text: 'ワンタップでタスク完了チェック' },
      { icon: '🔔', text: 'リマインダー通知で習慣化をサポート' },
      { icon: '📅', text: '達成率カレンダーで継続状況を確認' },
      { icon: '🏆', text: '連続達成ストリークでモチベーション維持' },
    ],
    screenshots: [
      '/images/loopin/Loopin1.png',
      '/images/loopin/Loopin2.png',
    ],
    appStoreUrl: '#',
    playStoreUrl: '#',
  },
  mamemame: {
    name: '豆マメ',
    lead: '古文単語を、豆知識と一緒に覚えよう。',
    description: '古文単語の暗記に特化したフラッシュカードアプリです。レベル別のクイズ形式で楽しく学べ、間違えた単語を自動で繰り返し出題することで、試験に向けた効率的な暗記をサポートします。',
    icon: '/images/mamemame/icon.png',
    category: '近日公開',
    color: '#1D4ED8',
    gradient: 'linear-gradient(135deg, #10B981, #06B6D4)',
    features: [
      { icon: '📜', text: '古文単語をカード形式で効率よく暗記' },
      { icon: '🎯', text: 'レベル別出題で無理なくステップアップ' },
      { icon: '🔄', text: '間違えた単語を自動で繰り返し出題' },
      { icon: '📝', text: '意味・語源をまとめて確認' },
      { icon: '📈', text: '習熟度グラフで暗記の進捗を可視化' },
    ],
    screenshots: [
      '/images/mamemame/mamemame1.png',
      '/images/mamemame/mamemame2.png',
    ],
    appStoreUrl: 'https://apps.apple.com/jp/app/%E8%B1%86%E3%83%9E%E3%83%A1/id6757949629',
    playStoreUrl: '#',
  },
};

const AppDetail = () => {
  const { appSlug } = useParams();
  const isMobile = useIsMobile();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [appSlug]);

  const app = appData[appSlug];

  if (!app) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>アプリが見つかりません</h1>
          <Link to="/" style={{ color: '#1D4ED8' }}>ホームに戻る</Link>
        </div>
      </div>
    );
  }

  const hasStoreLinks = app.appStoreUrl !== '#' || app.playStoreUrl !== '#';

  if (isMobile) return <MobileAppDetail app={app} appSlug={appSlug} />;

  return (
    <div style={{ minHeight: '100vh', background: '#ffffff' }}>
      <style>{css}</style>
      <Header />

      {/* ── メインセクション ── */}
      <section style={{
        padding: '0 140px',
        overflow: 'hidden',
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        background: 'linear-gradient(160deg, #f8faff 0%, #ffffff 50%, #f0f7ff 100%)',
      }}>

        {/* 背景デコレーション */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', top: '-10%', right: '-5%',
            width: '600px', height: '600px', borderRadius: '50%',
            background: `radial-gradient(circle, ${app.color}18 0%, transparent 70%)`,
            animation: 'blobPulse 8s ease-in-out infinite',
          }} />
          <div style={{
            position: 'absolute', bottom: '-15%', left: '5%',
            width: '400px', height: '400px', borderRadius: '50%',
            background: 'radial-gradient(circle, #818cf818 0%, transparent 70%)',
            animation: 'blobPulse 10s ease-in-out infinite 2s',
          }} />
        </div>

        <div key={appSlug} style={{ display: 'grid', gridTemplateColumns: '280px 1fr 700px', gap: '60px', alignItems: 'center', width: '100%', position: 'relative', zIndex: 1 }}>

          {/* 左：アイコン＋カテゴリ＋名前 */}
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px',
            animation: 'slideInLeft 0.7s cubic-bezier(0.16,1,0.3,1) both',
            willChange: 'transform, opacity',
          }}>
            {/* アイコン with glow */}
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute', inset: '-16px',
                borderRadius: '80px',
                background: app.gradient,
                opacity: 0.15,
                filter: 'blur(24px)',
              }} />
              <img src={app.icon} alt={app.name} style={{
                width: '260px', height: '260px', borderRadius: '56px',
                boxShadow: '0 32px 80px rgba(0,0,0,0.22)',
                border: '2px solid rgba(0,0,0,0.06)',
                animation: 'floatIcon 6s ease-in-out infinite',
                position: 'relative',
              }} />
            </div>


            <h1 style={{ fontSize: '2.8rem', fontWeight: 900, color: '#0a0a0a', margin: 0, letterSpacing: '-0.03em', textAlign: 'center', lineHeight: 1.1 }}>
              {app.name}
            </h1>

            {/* ダウンロードボタン */}
            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center',
              animation: `fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) 0.3s both`,
              willChange: 'transform, opacity',
            }}>
              {app.appStoreUrl !== '#' ? (
                <a href={app.appStoreUrl} target="_blank" rel="noopener noreferrer" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                  padding: '12px 22px', borderRadius: '14px', whiteSpace: 'nowrap',
                  background: '#0a0a0a', color: '#fff',
                  textDecoration: 'none', fontWeight: 700, fontSize: '0.85rem',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.20)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.25)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.20)'; }}
                >
                  <AppleIcon /> App Store
                </a>
              ) : (
                <span style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                  padding: '12px 22px', borderRadius: '14px', whiteSpace: 'nowrap',
                  background: '#d1d5db', color: '#9ca3af',
                  fontWeight: 700, fontSize: '0.85rem',
                }}>
                  <AppleIcon /> App Store
                </span>
              )}
              {app.playStoreUrl !== '#' ? (
                <a href={app.playStoreUrl} target="_blank" rel="noopener noreferrer" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                  padding: '12px 22px', borderRadius: '14px', whiteSpace: 'nowrap',
                  background: '#ffffff', color: '#0a0a0a',
                  textDecoration: 'none', fontWeight: 700, fontSize: '0.85rem',
                  border: '1.5px solid #e2e8f0',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)'; }}
                >
                  <PlayIcon /> Google Play
                </a>
              ) : (
                <span style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                  padding: '12px 22px', borderRadius: '14px', whiteSpace: 'nowrap',
                  background: '#ffffff', color: '#d1d5db',
                  fontWeight: 700, fontSize: '0.85rem',
                  border: '1.5px solid #e2e8f0',
                }}>
                  <PlayIcon /> Google Play
                </span>
              )}
            </div>
          </div>

          {/* 中央：機能リスト */}
          <div style={{
            animation: 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.15s both',
            willChange: 'transform, opacity',
          }}>
            <div style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#0a0a0a', margin: 0, letterSpacing: '-0.02em' }}>
                主な機能
              </h2>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0' }}>
              {app.features.map((f, i) => (
                <li key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '20px',
                  padding: '18px 0',
                  borderBottom: i < app.features.length - 1 ? '1px solid #f0f2f5' : 'none',
                  animation: `fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) ${0.2 + i * 0.07}s both`,
                  willChange: 'transform, opacity',
                }}>
                  <span style={{
                    fontSize: '1.1rem', fontWeight: 900, color: app.color,
                    letterSpacing: '0.04em', minWidth: '40px',
                    opacity: 0.6,
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span style={{ fontSize: '1.35rem', fontWeight: 700, color: '#1a1a1a', flex: 1, whiteSpace: 'nowrap' }}>{f.text}</span>
                </li>
              ))}
            </ul>

          </div>

          {/* 右：スマホ画面 */}
          <div style={{
            display: 'flex', flexDirection: 'row', gap: '0px', alignItems: 'center', justifyContent: 'center',
            position: 'relative',
            animation: 'slideInRight 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s both',
            willChange: 'transform, opacity',
          }}>
            {/* 背後のグロー */}
            <div style={{
              position: 'absolute', inset: '10%',
              background: app.gradient,
              opacity: 0.12,
              filter: 'blur(60px)',
              borderRadius: '50%',
            }} />
            {app.screenshots.slice(0, 2).map((src, i) => (
              <div key={i} style={{
                width: '320px', borderRadius: '44px', overflow: 'hidden',
                boxShadow: i === 0
                  ? '0 32px 80px rgba(0,0,0,0.30), 0 8px 24px rgba(0,0,0,0.15)'
                  : '0 24px 60px rgba(0,0,0,0.22)',
                border: '10px solid #1a1a1a',
                background: '#1a1a1a',
                flexShrink: 0,
                position: 'relative',
                zIndex: i === 0 ? 2 : 1,
                marginLeft: i === 1 ? '-40px' : 0,
                marginTop: i === 1 ? '60px' : 0,
                willChange: 'transform',
                animation: i === 0 ? 'floatPhone1 5s ease-in-out infinite' : 'floatPhone2 5s ease-in-out infinite 0.8s',
              }}>
                <img src={src} alt={`スクリーンショット${i + 1}`} style={{ width: '100%', display: 'block' }} />
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AppDetail;
