import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getNewsList } from '@/lib/microcms';

const TYPE_COLORS = {
  'お知らせ': { bg: '#EFF6FF', text: '#2563EB' },
  'アップデート': { bg: '#F0FDF4', text: '#16A34A' },
  'リリース': { bg: '#FFF7ED', text: '#EA580C' },
};

/* ════════════════════════════
   アプリデータ
════════════════════════════ */
const APPS = [
  {
    slug: 'studism',
    name: 'Studism',
    category: '教育テクノロジー',
    icon: '/images/studism/icon.png',
    lead: '学びを、もっと自由に、楽しく。',
    accent: '#0EA5E9',
    accentLight: '#E0F2FE',
    shadowColor: 'rgba(14,165,233,0.14)',
    comingSoon: false,
  },
  {
    slug: 'sakuraenglish',
    name: 'SakuraEnglish',
    category: '語学学習',
    icon: '/images/sakuraenglish/icon.png',
    lead: '英語学習を、もっと楽しく。',
    accent: '#2563EB',
    accentLight: '#DBEAFE',
    shadowColor: 'rgba(37,99,235,0.14)',
    comingSoon: false,
  },
  {
    slug: 'mamemame',
    name: '豆マメ',
    category: '近日公開',
    icon: '/images/mamemame/icon.png',
    lead: '',
    accent: '#1D4ED8',
    accentLight: '#DBEAFE',
    shadowColor: 'rgba(29,78,216,0.14)',
    comingSoon: false,
  },
  {
    slug: 'loopin',
    name: 'Loopin',
    category: '近日公開',
    icon: '/images/loopin/icon.png',
    lead: '',
    accent: '#1D4ED8',
    accentLight: '#DBEAFE',
    shadowColor: 'rgba(29,78,216,0.14)',
    comingSoon: false,
  },
  {
    slug: 'timelyze',
    name: 'Timelyze',
    category: '生産性・時間管理',
    icon: '/images/timelyze/icon.png',
    lead: '学習時間を、見える化する。',
    accent: '#2563EB',
    accentLight: '#DBEAFE',
    shadowColor: 'rgba(37,99,235,0.14)',
    comingSoon: false,
  },
];

/* ════════════════════════════
   サービスデータ
════════════════════════════ */
const SERVICES = [
  {
    title: 'YouTube',
    description: '英単語の動画を投稿しています。毎日の学習に役立つ単語や表現をわかりやすく解説。チャンネル登録してぜひご活用ください。',
    link: 'https://www.youtube.com/channel/UCkoYxm2fTNza2qrjrgrbFgw',
    renderThumb: () => (
      <div style={{ width: '100%', height: '100%', position: 'relative', background: 'linear-gradient(145deg, #FF0000 0%, #8B0000 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px', borderRadius: '50%', border: '40px solid rgba(255,255,255,0.06)' }} />
        <div style={{ position: 'absolute', bottom: '-60px', left: '-30px', width: '220px', height: '220px', borderRadius: '50%', border: '40px solid rgba(255,255,255,0.04)' }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ background: 'white', borderRadius: '18px', width: '110px', height: '78px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 12px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)' }}>
            <svg width="52" height="36" viewBox="0 0 90 63"><polygon points="36,12 36,51 65,32" fill="#FF0000" /></svg>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.72rem', fontWeight: 700, textAlign: 'center', marginTop: '12px', letterSpacing: '0.1em' }}>YOUTUBE</p>
        </div>
      </div>
    ),
  },
  {
    title: 'TikTok',
    description: '英単語の動画を投稿しています。短い動画でサクッと学べるので、スキマ時間の学習にぴったりです。フォローお待ちしています。',
    link: 'https://www.tiktok.com/@user9530011262997',
    renderThumb: () => (
      <div style={{ width: '100%', height: '100%', position: 'relative', background: '#010101', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '10%', right: '10%', width: '160px', height: '160px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(105,201,208,0.18) 0%, transparent 70%)' }} />
        <div style={{ position: 'absolute', bottom: '5%', left: '5%', width: '140px', height: '140px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(238,29,82,0.18) 0%, transparent 70%)' }} />
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
          <div style={{ position: 'relative', width: '60px', height: '68px' }}>
            <svg viewBox="0 0 60 70" width="60" height="68" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.7 }}>
              <path d="M42,0 C43,10 50,17 60,18 L60,30 C54,30 48,28 44,24 L44,46 C44,58 34,68 22,68 C10,68 0,58 0,46 C0,34 10,24 22,24 C24,24 26,24 28,25 L28,37 C26,36 24,36 22,36 C16,36 12,40 12,46 C12,52 16,56 22,56 C28,56 32,52 32,46 L32,0 Z" fill="#69C9D0" />
            </svg>
            <svg viewBox="0 0 60 70" width="60" height="68" style={{ position: 'absolute', top: '3px', left: '3px', opacity: 0.7 }}>
              <path d="M42,0 C43,10 50,17 60,18 L60,30 C54,30 48,28 44,24 L44,46 C44,58 34,68 22,68 C10,68 0,58 0,46 C0,34 10,24 22,24 C24,24 26,24 28,25 L28,37 C26,36 24,36 22,36 C16,36 12,40 12,46 C12,52 16,56 22,56 C28,56 32,52 32,46 L32,0 Z" fill="#EE1D52" />
            </svg>
            <svg viewBox="0 0 60 70" width="60" height="68" style={{ position: 'absolute', top: '1.5px', left: '1.5px' }}>
              <path d="M42,0 C43,10 50,17 60,18 L60,30 C54,30 48,28 44,24 L44,46 C44,58 34,68 22,68 C10,68 0,58 0,46 C0,34 10,24 22,24 C24,24 26,24 28,25 L28,37 C26,36 24,36 22,36 C16,36 12,40 12,46 C12,52 16,56 22,56 C28,56 32,52 32,46 L32,0 Z" fill="white" />
            </svg>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', margin: 0 }}>TIKTOK</p>
        </div>
      </div>
    ),
  },
];

/* ════════════════════════════
   MobileHomePage
════════════════════════════ */
export default function MobileHomePage() {
  const [news, setNews] = useState([]);
  const [loadingNews, setLoadingNews] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    getNewsList(2).then(res => {
      setNews(res.contents);
      setLoadingNews(false);
    }).catch(() => setLoadingNews(false));
  }, []);

  return (
    <div style={{ background: '#f0f4f8' }}>

      {/* ヒーローセクション */}
      <section style={{
        position: 'relative', width: '100%', overflow: 'hidden',
        background: '#ffffff',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        padding: '40px 24px 32px',
      }}>
        {/* カラフルなスプラッター */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
          {/* 左エリア */}
          <div style={{ position: 'absolute', top: '6%',  left: '3%',  width: 42, height: 56, background: '#FF3D8B', borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%', transform: 'rotate(20deg)',  opacity: 0.8 }} />
          <div style={{ position: 'absolute', top: '14%', left: '3%',  width: 10, height: 10, background: '#FF3D8B', borderRadius: '50%', opacity: 0.65 }} />
          <div style={{ position: 'absolute', top: '10%', left: '8%',  width: 7,  height: 7,  background: '#FF3D8B', borderRadius: '50%', opacity: 0.55 }} />
          <div style={{ position: 'absolute', top: '55%', left: '4%',  width: 46, height: 36, background: '#FFD600', borderRadius: '40% 60% 30% 70% / 60% 40% 55% 45%', transform: 'rotate(-18deg)', opacity: 0.85 }} />
          <div style={{ position: 'absolute', top: '62%', left: '12%', width: 8,  height: 8,  background: '#FFD600', borderRadius: '50%', opacity: 0.65 }} />
          <div style={{ position: 'absolute', bottom: '8%', left: '6%', width: 38, height: 50, background: '#06B6D4', borderRadius: '50% 50% 40% 60% / 60% 30% 70% 40%', transform: 'rotate(12deg)',  opacity: 0.8 }} />
          <div style={{ position: 'absolute', bottom: '5%', left: '14%', width: 9, height: 9, background: '#06B6D4', borderRadius: '50%', opacity: 0.6 }} />
          <div style={{ position: 'absolute', top: '35%', left: '2%',  width: 28, height: 36, background: '#A855F7', borderRadius: '70% 30% 50% 50% / 40% 60% 40% 60%', transform: 'rotate(-30deg)', opacity: 0.75 }} />
          <div style={{ position: 'absolute', top: '40%', left: '10%', width: 7,  height: 7,  background: '#A855F7', borderRadius: '50%', opacity: 0.6 }} />
          {/* 中央エリア */}
          <div style={{ position: 'absolute', top: '5%',  left: '30%', width: 18, height: 14, background: '#06B6D4', borderRadius: '55% 45% 40% 60%', transform: 'rotate(-20deg)', opacity: 0.75 }} />
          <div style={{ position: 'absolute', top: '3%',  left: '44%', width: 44, height: 34, background: '#FF6B00', borderRadius: '50% 50% 40% 60% / 60% 30% 70% 40%', transform: 'rotate(8deg)',   opacity: 0.8 }} />
          <div style={{ position: 'absolute', top: '8%',  left: '50%', width: 9,  height: 9,  background: '#FF6B00', borderRadius: '50%', opacity: 0.65 }} />
          <div style={{ position: 'absolute', bottom: '5%', left: '38%', width: 40, height: 52, background: '#22C55E', borderRadius: '70% 30% 50% 50% / 40% 60% 40% 60%', transform: 'rotate(28deg)',  opacity: 0.8 }} />
          <div style={{ position: 'absolute', bottom: '8%', left: '46%', width: 10, height: 10, background: '#22C55E', borderRadius: '50%', opacity: 0.65 }} />
          <div style={{ position: 'absolute', top: '45%', left: '45%', width: 30, height: 22, background: '#FF3D8B', borderRadius: '40% 60% 50% 50%', transform: 'rotate(40deg)',  opacity: 0.7 }} />
          {/* 右エリア */}
          <div style={{ position: 'absolute', top: '8%',  left: '52%', width: 38, height: 52, background: '#FF3D8B', borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%', transform: 'rotate(20deg)',  opacity: 0.8 }} />
          <div style={{ position: 'absolute', top: '12%', left: '60%', width: 12, height: 12, background: '#FF3D8B', borderRadius: '50%', opacity: 0.65 }} />
          <div style={{ position: 'absolute', top: '18%', right: '6%', width: 52, height: 44, background: '#FFD600', borderRadius: '40% 60% 30% 70% / 60% 40% 55% 45%', transform: 'rotate(-15deg)', opacity: 0.85 }} />
          <div style={{ position: 'absolute', top: '15%', right: '14%', width: 8, height: 8,  background: '#FFD600', borderRadius: '50%', opacity: 0.65 }} />
          <div style={{ position: 'absolute', bottom: '22%', left: '55%', width: 44, height: 58, background: '#22C55E', borderRadius: '70% 30% 50% 50% / 40% 60% 40% 60%', transform: 'rotate(35deg)',  opacity: 0.8 }} />
          <div style={{ position: 'absolute', bottom: '18%', left: '64%', width: 8, height: 8,  background: '#22C55E', borderRadius: '50%', opacity: 0.6 }} />
          <div style={{ position: 'absolute', top: '55%', right: '12%', width: 48, height: 36, background: '#A855F7', borderRadius: '30% 70% 60% 40% / 55% 45% 60% 40%', transform: 'rotate(-30deg)', opacity: 0.85 }} />
          <div style={{ position: 'absolute', top: '62%', right: '18%', width: 7,  height: 7,  background: '#A855F7', borderRadius: '50%', opacity: 0.65 }} />
          <div style={{ position: 'absolute', bottom: '10%', right: '8%', width: 56, height: 42, background: '#FF6B00', borderRadius: '50% 50% 40% 60% / 60% 30% 70% 40%', transform: 'rotate(10deg)',  opacity: 0.8 }} />
          <div style={{ position: 'absolute', bottom: '14%', right: '4%', width: 10, height: 10, background: '#FF6B00', borderRadius: '50%', opacity: 0.65 }} />
          <div style={{ position: 'absolute', top: '30%', left: '58%', width: 32, height: 40, background: '#06B6D4', borderRadius: '40% 60% 55% 45% / 65% 35% 55% 45%', transform: 'rotate(-25deg)', opacity: 0.8 }} />
          <div style={{ position: 'absolute', top: '38%', left: '66%', width: 8,  height: 8,  background: '#06B6D4', borderRadius: '50%', opacity: 0.6 }} />
        </div>

        {/* 画像 */}
        <div style={{ position: 'relative', zIndex: 2, width: '80%', maxWidth: '320px', margin: '0 auto 24px' }}>
          <img src="/images/polipoli3.png" alt="ポリポリ" style={{ width: '100%', display: 'block' }} />
        </div>

        {/* テキスト */}
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <h1 style={{
            color: '#0a0a0a',
            fontSize: 'clamp(2.4rem, 10vw, 3.5rem)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
            margin: 0,
            whiteSpace: 'pre-line',
          }}>
            {'学びをもっと\n自由に、もっと\n楽しく。'}
          </h1>
        </div>
      </section>

      {/* アプリ一覧セクション */}
      <section id="apps" style={{ background: 'transparent', padding: '40px 16px 24px' }}>
        <Link to="/apps" style={{ textDecoration: 'none' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#0f0f0f', margin: '0 0 24px', letterSpacing: '-0.02em' }}>
            アプリ一覧 →
          </h2>
        </Link>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          {APPS.map(app => (
            <Link key={app.slug} to={`/app/${app.slug}`} style={{ textDecoration: 'none' }}>
              <div>
                <img
                  src={app.icon}
                  alt={app.name}
                  style={{
                    width: '100%',
                    borderRadius: '24px',
                    boxShadow: `0 2px 4px rgba(0,0,0,0.08), 0 8px 16px rgba(0,0,0,0.10), 0 20px 40px ${app.shadowColor}`,
                    display: 'block',
                  }}
                />
                <p style={{ fontSize: '0.9rem', fontWeight: 800, color: '#1a1a1a', margin: '8px 0 4px' }}>
                  {app.name}
                </p>
                <span style={{
                  fontSize: '0.68rem', fontWeight: 700, color: app.accent,
                  border: `1px solid ${app.accent}`, padding: '2px 8px', borderRadius: '999px', whiteSpace: 'nowrap',
                  display: 'inline-block',
                }}>
                  {app.category}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* サービス一覧セクション */}
      <section id="services" style={{ background: 'transparent', padding: '24px 16px' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#0f0f0f', margin: '0 0 24px', letterSpacing: '-0.02em' }}>
          サービス一覧
        </h2>
        {SERVICES.map((s, i) => (
          <div
            key={i}
            onClick={() => s.link && window.open(s.link, '_blank')}
            style={{
              borderRadius: '8px', overflow: 'hidden',
              marginBottom: '16px', cursor: 'pointer',
              background: '#fff',
              boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
            }}
          >
            <div style={{ aspectRatio: '16/9', position: 'relative', overflow: 'hidden' }}>
              {s.renderThumb()}
            </div>
            <div style={{ padding: '12px 16px 16px' }}>
              <p style={{ fontSize: '0.92rem', fontWeight: 700, color: '#1a1a1a', margin: '0 0 6px' }}>
                {s.title}
              </p>
              <p style={{ fontSize: '0.85rem', fontWeight: 500, color: '#555', lineHeight: 1.55, margin: 0 }}>
                {s.description}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* お知らせセクション */}
      <section id="news" style={{ background: 'transparent', padding: '24px 16px 60px' }}>
        <Link to="/news" style={{ textDecoration: 'none' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#0f0f0f', margin: '0 0 24px', letterSpacing: '-0.02em' }}>
            お知らせ →
          </h2>
        </Link>
        {loadingNews ? (
          <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>読み込み中...</p>
        ) : news.length === 0 ? (
          <div style={{
            width: '100%', aspectRatio: '4/3',
            background: 'linear-gradient(135deg, #e8edf5, #f4f6f9)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px',
            border: '2px dashed #d0d7e3', borderRadius: '4px',
          }}>
            <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#94A3B8', letterSpacing: '0.12em' }}>COMING SOON</span>
            <span style={{ fontSize: '0.8rem', color: '#b0bac8', fontWeight: 500 }}>お知らせは準備中です</span>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {news.map(item => {
              const typeColor = TYPE_COLORS[item.type] || { bg: '#F1F5F9', text: '#64748B' };
              return (
                <div key={item.id} style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
                  <div style={{ padding: '14px 16px' }}>
                    {item.type && (
                      <span style={{
                        fontSize: '0.68rem', fontWeight: 700,
                        background: typeColor.bg, color: typeColor.text,
                        padding: '2px 8px', borderRadius: '999px', display: 'inline-block', marginBottom: '6px',
                      }}>{item.type}</span>
                    )}
                    <p style={{ fontSize: '0.92rem', fontWeight: 700, color: '#1a1a1a', margin: '0 0 4px', lineHeight: 1.4 }}>{item.title}</p>
                    <p style={{ fontSize: '0.72rem', color: '#94A3B8', margin: 0 }}>
                      {new Date(item.publishedAt).toLocaleDateString('ja-JP')}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

    </div>
  );
}
