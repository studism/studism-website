import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Shield, MessageCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
  0%,100% { transform: translateY(0px); }
  50%     { transform: translateY(-10px); }
}
@keyframes floatPhone2 {
  0%,100% { transform: translateY(50px); }
  50%     { transform: translateY(36px); }
}
@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes slideInRight {
  from { opacity: 0; transform: translateX(40px); }
  to   { opacity: 1; transform: translateX(0); }
}
`;

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

const appData = {
  sakuraenglish: {
    name: 'SakuraEnglish',
    icon: '/images/sakuraenglish.png',
    category: '語学学習',
    color: '#2563EB',
    features: [
      '5段階のレベル別英単語クイズ',
      'カスタム単語リストの作成',
      '間違えた単語の自動復習機能',
      '習熟度トラッキング',
      'オフラインでも利用可能',
    ],
    screenshots: [
      '/images/screenshots/SakuraEnglish-ss01.webp',
      '/images/screenshots/SakuraEnglish-ss02.webp',
      '/images/screenshots/SakuraEnglish-ss03.webp',
    ],
    appStoreUrl: 'https://apps.apple.com/jp/app/sakuraenglish/id6747013736',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.studism.sakuraenglish',
  },
  timelyze: {
    name: 'Timelyze',
    icon: '/images/timelyze.png',
    category: '生産性・時間管理',
    color: '#2563EB',
    features: [
      'タイマー機能で学習時間を自動記録',
      '教科別の学習時間を集計',
      '日別・週別・月別グラフで可視化',
      '目標設定と進捗確認',
      'カレンダー・メモ機能搭載',
    ],
    screenshots: [
      '/images/screenshots/SakuraEnglish-ss01.webp',
      '/images/screenshots/SakuraEnglish-ss02.webp',
      '/images/screenshots/SakuraEnglish-ss03.webp',
    ],
    appStoreUrl: 'https://apps.apple.com/jp/app/timelyze/id6752543100',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.studism.timelyze',
  },
  studism: {
    name: 'Studism',
    icon: '/images/Studismicon.png',
    category: '教育テクノロジー',
    color: '#0EA5E9',
    features: [
      '学びをもっと自由に、楽しく',
      'テクノロジーで学習体験を変える',
      '直感的なインターフェース',
      '学習の継続をサポート',
      'いつでもどこでも学習可能',
    ],
    screenshots: [
      '/images/screenshots/SakuraEnglish-ss01.webp',
      '/images/screenshots/SakuraEnglish-ss02.webp',
      '/images/screenshots/SakuraEnglish-ss03.webp',
    ],
    appStoreUrl: '#',
    playStoreUrl: '#',
  },
  loopin: {
    name: 'Loopin',
    icon: '/images/Loopinicon.png',
    category: '近日公開',
    color: '#1D4ED8',
    features: [
      '近日公開予定のアプリです',
      '詳細は近日中にお知らせします',
      'お楽しみに！',
    ],
    screenshots: [
      '/images/screenshots/SakuraEnglish-ss01.webp',
      '/images/screenshots/SakuraEnglish-ss02.webp',
      '/images/screenshots/SakuraEnglish-ss03.webp',
    ],
    appStoreUrl: '#',
    playStoreUrl: '#',
  },
  mamemame: {
    name: '豆マメ',
    icon: '/images/豆マメicon.png',
    category: '近日公開',
    color: '#1D4ED8',
    features: [
      '近日公開予定のアプリです',
      '詳細は近日中にお知らせします',
      'お楽しみに！',
    ],
    screenshots: [
      '/images/screenshots/SakuraEnglish-ss01.webp',
      '/images/screenshots/SakuraEnglish-ss02.webp',
      '/images/screenshots/SakuraEnglish-ss03.webp',
    ],
    appStoreUrl: '#',
    playStoreUrl: '#',
  },
};

const AppDetail = () => {
  const { appSlug } = useParams();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
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

  return (
    <div style={{ minHeight: '100vh', background: '#ffffff' }}>
      <style>{css}</style>
      <Header />

      {/* ── メインセクション ── */}
      <section style={{ padding: '80px 60px', maxWidth: '1400px', margin: '0 auto', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr 440px', gap: '60px', alignItems: 'center' }}>

          {/* 左：アイコン＋名前 */}
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px',
            animation: visible ? 'slideInLeft 0.7s cubic-bezier(0.16,1,0.3,1) forwards' : 'none',
            opacity: visible ? undefined : 0,
          }}>
            <img src={app.icon} alt={app.name} style={{
              width: '280px', height: '280px', borderRadius: '60px',
              boxShadow: '0 24px 64px rgba(0,0,0,0.20)',
              border: '2px solid rgba(0,0,0,0.08)',
              animation: 'floatIcon 6s ease-in-out infinite',
            }} />
            <h1 style={{ fontSize: '3.2rem', fontWeight: 900, color: '#0a0a0a', margin: 0, letterSpacing: '-0.03em', textAlign: 'center' }}>
              {app.name}
            </h1>
          </div>

          {/* 中央：機能箇条書き */}
          <div style={{
            animation: visible ? 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.15s forwards' : 'none',
            opacity: 0,
          }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#0a0a0a', marginBottom: '28px', letterSpacing: '-0.02em' }}>
              主な機能
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {app.features.map((f, i) => (
                <li key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '14px',
                  padding: '18px 22px', borderRadius: '16px',
                  background: '#f8faff', border: '1px solid #e8eef8',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  animation: visible ? `fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) ${0.2 + i * 0.08}s forwards` : 'none',
                  opacity: 0,
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateX(6px)'; e.currentTarget.style.boxShadow = `0 4px 20px rgba(0,0,0,0.10)`; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'; }}
                >
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: app.color, flexShrink: 0 }} />
                  <span style={{ fontSize: '0.98rem', fontWeight: 600, color: '#1a1a1a' }}>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 右：スマホ画面 */}
          <div style={{
            display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'flex-start', justifyContent: 'center',
            animation: visible ? 'slideInRight 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s forwards' : 'none',
            opacity: 0,
          }}>
            {app.screenshots.slice(0, 2).map((src, i) => (
              <div key={i} style={{
                width: '260px', borderRadius: '44px', overflow: 'hidden',
                boxShadow: '0 24px 72px rgba(0,0,0,0.28)',
                border: '10px solid #1a1a1a',
                background: '#1a1a1a',
                flexShrink: 0,
                animation: i === 0 ? 'floatPhone1 5s ease-in-out infinite' : 'floatPhone2 5s ease-in-out infinite 0.8s',
              }}>
                <img src={src} alt={`スクリーンショット${i + 1}`} style={{ width: '100%', display: 'block' }} />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── サポートセクション ── */}
      <section style={{ background: '#f8faff', padding: '60px 40px', borderTop: '1px solid #e8e8e8' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#0a0a0a', marginBottom: '28px', textAlign: 'center' }}>サポート</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <Link to={`/app/${appSlug}/privacy`} style={{
              display: 'block', padding: '28px', borderRadius: '16px', textAlign: 'center',
              background: '#fff', border: '1px solid #e2e8f0', textDecoration: 'none',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: '#1D4ED8', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
                <Shield size={22} color="#fff" />
              </div>
              <p style={{ fontWeight: 800, color: '#0a0a0a', margin: '0 0 6px', fontSize: '0.95rem' }}>プライバシーポリシー</p>
              <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0 }}>個人情報の取り扱いについて</p>
            </Link>
            <Link to={`/app/${appSlug}/contact`} style={{
              display: 'block', padding: '28px', borderRadius: '16px', textAlign: 'center',
              background: '#fff', border: '1px solid #e2e8f0', textDecoration: 'none',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: '#1D4ED8', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
                <MessageCircle size={22} color="#fff" />
              </div>
              <p style={{ fontWeight: 800, color: '#0a0a0a', margin: '0 0 6px', fontSize: '0.95rem' }}>お問い合わせ</p>
              <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0 }}>ご質問・サポートはこちら</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AppDetail;
