import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/* ════════════════════════════
   スライドデータ
════════════════════════════ */
const HERO = {
  heading: '学びをもっと\n自由に、もっと\n楽しく。',
};

/* ════════════════════════════
   Hero
════════════════════════════ */
function HeroSection() {
  return (
    <section style={{
      position: 'relative', width: '100%', height: '75vh', overflow: 'hidden',
      background: '#ffffff',
      boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
      display: 'flex', alignItems: 'center',
    }}>
      {/* 絵の具スプラッター（全体） */}
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
        {/* オーバーレイなし */}
      </div>

      {/* 左半分：画像（中央からはみ出して大きく） */}
      <div style={{ position: 'relative', width: '42%', height: '100%', flexShrink: 0, zIndex: 2 }}>
        <img src="/images/polipoli3.png" alt="ポリポリ"
          style={{ position: 'absolute', bottom: '-33%', left: '6%', transform: 'none',
            height: '160%', width: 'auto', zIndex: 2, objectFit: 'contain' }} />
      </div>

      {/* 右半分：テキスト */}
      <div style={{ flex: 1, paddingRight: '5%', marginLeft: '4%', zIndex: 10 }}>
        <h1 style={{
          color: '#0a0a0a', fontSize: 'clamp(4rem, 7vw, 8rem)',
          fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.1, margin: 0, whiteSpace: 'pre-line',
        }}>
          {HERO.heading}
        </h1>
      </div>
    </section>
  );
}

/* ════════════════════════════
   サービス紹介
════════════════════════════ */
const APPS = [
  {
    slug: 'studism',
    name: 'Studism',
    category: '教育テクノロジー',
    icon: '/images/studism/icon.png',
    lead: '学びを、もっと自由に、楽しく。',
    description: 'Studismは、テクノロジーの力で学習体験を変える教育テクノロジー企業のフラッグシップアプリです。',
    photoBg: 'linear-gradient(135deg, #0C4A6E 0%, #0EA5E9 55%, #BAE6FD 100%)',
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
    description: 'レベル別英単語クイズで効率的に語彙力を強化。5段階の難易度とカスタム単語リスト機能で、自分だけの学習プランを作成できます。',
    photoBg: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 55%, #93C5FD 100%)',
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
    description: '',
    photoBg: 'linear-gradient(135deg, #1E3A8A 0%, #1D4ED8 55%, #BFDBFE 100%)',
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
    description: '',
    photoBg: 'linear-gradient(135deg, #172554 0%, #1D4ED8 55%, #BFDBFE 100%)',
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
    description: '学習時間の記録・管理を簡単に。タイマー機能、教科別集計、グラフ可視化で、継続的な学習習慣をサポートします。',
    photoBg: 'linear-gradient(135deg, #1D4ED8 0%, #3B82F6 55%, #BAE6FD 100%)',
    accent: '#2563EB',
    accentLight: '#DBEAFE',
    shadowColor: 'rgba(37,99,235,0.14)',
    comingSoon: false,
  },
];

function Services() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir * 340, behavior: 'smooth' });
  };

  return (
    <section id="apps" style={{ background: 'transparent', padding: '64px 0 32px' }}>
      {/* ヘッダー＋ボタン */}
      <div style={{ padding: '0 40px 0 120px' }}>

        {/* ヘッダー行 */}
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 900, color: '#0f0f0f', margin: 0, letterSpacing: '-0.02em', lineHeight: 1 }}>
            アプリ一覧
          </h2>
        </div>
      </div>

      {/* カード横スクロール: 全幅 */}
      <div ref={scrollRef} style={{
        display: 'flex', gap: '32px',
        overflowX: 'auto', overflowY: 'visible', scrollbarWidth: 'none', msOverflowStyle: 'none',
        paddingLeft: '120px',
      }}>
        {APPS.map(app => (
          <Link key={app.slug} to={`/app/${app.slug}`} style={{ textDecoration: 'none', minWidth: '260px', maxWidth: '260px', flexShrink: 0 }}>
            <article>
              {/* アイコン */}
              <div style={{ marginBottom: '16px', paddingTop: '20px', overflow: 'visible' }}>
                {app.comingSoon ? (
                  <div style={{
                    width: '220px', height: '220px', borderRadius: '48px',
                    background: '#F1F5F9',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#94A3B8', letterSpacing: '0.08em' }}>COMING SOON</span>
                  </div>
                ) : (
                  <div
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08) translateY(-6px)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1) translateY(0)'}
                    style={{ position: 'relative', display: 'inline-block', transition: 'transform 0.3s ease' }}>
                    <img src={app.icon} alt={app.name} style={{
                      width: '220px', height: '220px', borderRadius: '48px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.08), 0 8px 16px rgba(0,0,0,0.10), 0 20px 40px rgba(0,0,0,0.14)',
                      display: 'block',
                    }} />
                    <div style={{
                      position: 'absolute', top: 0, left: 0, right: 0, height: '55%',
                      borderRadius: '48px 48px 50% 50% / 48px 48px 30% 30%',
                      background: 'linear-gradient(180deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0) 100%)',
                      pointerEvents: 'none',
                    }} />
                  </div>
                )}
              </div>
              {/* カテゴリ */}
              <div style={{ marginBottom: '8px' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: app.accent,
                  border: `1px solid ${app.accent}`, padding: '2px 10px', borderRadius: '999px', whiteSpace: 'nowrap' }}>
                  {app.category}
                </span>
              </div>
              {/* アプリ名 */}
              <p style={{ margin: '0 0 6px', color: '#1a1a1a', fontSize: '1rem', fontWeight: 800, letterSpacing: '0.01em' }}>
                {app.comingSoon ? 'Coming Soon' : app.name}
              </p>
              {/* リード文 */}
              <p style={{ fontSize: '0.85rem', fontWeight: 500, color: '#555', lineHeight: 1.6, margin: 0,
                transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#1D4ED8'}
                onMouseLeave={e => e.currentTarget.style.color = '#555'}
              >
                {app.lead}
              </p>
            </article>
          </Link>
        ))}
        <div style={{ minWidth: '40px', flexShrink: 0 }} />
      </div>
    </section>
  );
}

/* ════════════════════════════
   サービス
════════════════════════════ */
const SERVICES = [
  {
    title: 'YouTube',
    category: '動画',
    categoryColor: '#DC2626',
    description: '教育・学習をテーマにしたYouTubeチャンネルを運営。役立つコンテンツを発信中。',
    link: 'https://www.youtube.com/channel/UCkoYxm2fTNza2qrjrgrbFgw',
    renderThumb: () => (
      <div style={{ width: '100%', height: '100%', position: 'relative', background: 'linear-gradient(145deg, #FF0000 0%, #8B0000 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        {/* 背景の幾何学模様 */}
        <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px', borderRadius: '50%', border: '40px solid rgba(255,255,255,0.06)' }}/>
        <div style={{ position: 'absolute', bottom: '-60px', left: '-30px', width: '220px', height: '220px', borderRadius: '50%', border: '40px solid rgba(255,255,255,0.04)' }}/>
        {/* YouTubeロゴ */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ background: 'white', borderRadius: '18px', width: '110px', height: '78px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 12px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)' }}>
            <svg width="52" height="36" viewBox="0 0 90 63"><polygon points="36,12 36,51 65,32" fill="#FF0000"/></svg>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.72rem', fontWeight: 700, textAlign: 'center', marginTop: '12px', letterSpacing: '0.1em' }}>YOUTUBE</p>
        </div>
      </div>
    ),
  },
  {
    title: 'TikTok',
    category: '動画',
    categoryColor: '#010101',
    description: '短尺動画で学びのヒントや新機能をわかりやすくお届け。フォローして最新情報をチェック。',
    link: 'https://www.tiktok.com/@user9530011262997',
    renderThumb: () => (
      <div style={{ width: '100%', height: '100%', position: 'relative', background: '#010101', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        {/* ネオングロー */}
        <div style={{ position: 'absolute', top: '10%', right: '10%', width: '160px', height: '160px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(105,201,208,0.18) 0%, transparent 70%)' }}/>
        <div style={{ position: 'absolute', bottom: '5%', left: '5%', width: '140px', height: '140px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(238,29,82,0.18) 0%, transparent 70%)' }}/>
        {/* TikTokロゴ（RGB分離エフェクト） */}
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
          <div style={{ position: 'relative', width: '60px', height: '68px' }}>
            <svg viewBox="0 0 60 70" width="60" height="68" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.7 }}>
              <path d="M42,0 C43,10 50,17 60,18 L60,30 C54,30 48,28 44,24 L44,46 C44,58 34,68 22,68 C10,68 0,58 0,46 C0,34 10,24 22,24 C24,24 26,24 28,25 L28,37 C26,36 24,36 22,36 C16,36 12,40 12,46 C12,52 16,56 22,56 C28,56 32,52 32,46 L32,0 Z" fill="#69C9D0"/>
            </svg>
            <svg viewBox="0 0 60 70" width="60" height="68" style={{ position: 'absolute', top: '3px', left: '3px', opacity: 0.7 }}>
              <path d="M42,0 C43,10 50,17 60,18 L60,30 C54,30 48,28 44,24 L44,46 C44,58 34,68 22,68 C10,68 0,58 0,46 C0,34 10,24 22,24 C24,24 26,24 28,25 L28,37 C26,36 24,36 22,36 C16,36 12,40 12,46 C12,52 16,56 22,56 C28,56 32,52 32,46 L32,0 Z" fill="#EE1D52"/>
            </svg>
            <svg viewBox="0 0 60 70" width="60" height="68" style={{ position: 'absolute', top: '1.5px', left: '1.5px' }}>
              <path d="M42,0 C43,10 50,17 60,18 L60,30 C54,30 48,28 44,24 L44,46 C44,58 34,68 22,68 C10,68 0,58 0,46 C0,34 10,24 22,24 C24,24 26,24 28,25 L28,37 C26,36 24,36 22,36 C16,36 12,40 12,46 C12,52 16,56 22,56 C28,56 32,52 32,46 L32,0 Z" fill="white"/>
            </svg>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', margin: 0 }}>TIKTOK</p>
        </div>
      </div>
    ),
  },
];

function ServiceSection() {
  const scrollRef = useRef(null);
  return (
    <section id="services" style={{ background: 'transparent', padding: '40px 0 64px' }}>
      <div style={{ padding: '0 40px 0 120px' }}>
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 900, color: '#0f0f0f', margin: 0, letterSpacing: '-0.02em', lineHeight: 1 }}>
            サービス一覧
          </h2>
        </div>
      </div>
      <div ref={scrollRef} style={{
        display: 'flex', gap: '2px',
        overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none',
        paddingLeft: '120px',
      }}>
        {SERVICES.map((s, i) => (
          <article key={i}
            onClick={() => s.link && window.open(s.link, '_blank')}
            style={{ minWidth: '340px', maxWidth: '340px', flexShrink: 0, cursor: s.link ? 'pointer' : 'default' }}
          >
            <div style={{ width: '100%', aspectRatio: '4/3', overflow: 'hidden', position: 'relative', marginBottom: '16px' }}>
              {s.renderThumb()}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px', paddingRight: '16px' }}>
              <span style={{
                fontSize: '0.72rem', fontWeight: 700, color: s.categoryColor,
                border: `1px solid ${s.categoryColor}`, padding: '2px 10px',
                borderRadius: '999px', whiteSpace: 'nowrap',
              }}>
                {s.category}
              </span>
            </div>
            <p style={{ fontSize: '0.92rem', fontWeight: 700, color: '#1a1a1a', margin: '0 0 6px', paddingRight: '16px' }}>
              {s.title}
            </p>
            <p style={{ fontSize: '0.85rem', fontWeight: 500, color: '#555', lineHeight: 1.55, margin: 0, paddingRight: '16px',
              transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#1D4ED8'}
              onMouseLeave={e => e.currentTarget.style.color = '#555'}
            >
              {s.description}
            </p>
          </article>
        ))}
        <div style={{ minWidth: '40px', flexShrink: 0 }} />
      </div>
    </section>
  );
}

/* ════════════════════════════
   ニュース
════════════════════════════ */

function NewsSection() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' });
  };

  return (
    <section id="news" style={{ background: 'transparent', padding: '40px 0 80px' }}>
      {/* ヘッダー＋ボタン */}
      <div style={{ padding: '0 40px 0 120px' }}>

        {/* ヘッダー行 */}
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 900, color: '#0f0f0f', margin: 0, letterSpacing: '-0.02em', lineHeight: 1 }}>
            お知らせ
          </h2>
        </div>
      </div>

      {/* Coming Soon */}
      <div style={{ paddingLeft: '120px' }}>
        <div style={{
          width: '340px', aspectRatio: '4/3',
          background: 'linear-gradient(135deg, #e8edf5, #f4f6f9)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px',
          border: '2px dashed #d0d7e3', borderRadius: '4px',
        }}>
          <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#94A3B8', letterSpacing: '0.12em' }}>COMING SOON</span>
          <span style={{ fontSize: '0.8rem', color: '#b0bac8', fontWeight: 500 }}>お知らせは準備中です</span>
        </div>
      </div>
    </section>
  );
}


/* ════════════════════════════
   PAGE
════════════════════════════ */
export default function HomePage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div style={{ background: '#f0f4f8' }}>
      <Header />
      <HeroSection />
      <Services />
      <ServiceSection />
      <NewsSection />
      <Footer />
    </div>
  );
}
