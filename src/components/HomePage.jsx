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
        overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none',
        paddingLeft: '120px',
      }}>
        {APPS.map(app => (
          <Link key={app.slug} to={`/app/${app.slug}`} style={{ textDecoration: 'none', minWidth: '260px', maxWidth: '260px', flexShrink: 0 }}>
            <article>
              {/* アイコン */}
              <div style={{ marginBottom: '16px' }}>
                {app.comingSoon ? (
                  <div style={{
                    width: '220px', height: '220px', borderRadius: '48px',
                    background: '#F1F5F9',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#94A3B8', letterSpacing: '0.08em' }}>COMING SOON</span>
                  </div>
                ) : (
                  <div style={{ perspective: '900px', display: 'inline-block' }}>
                    <div
                      onMouseEnter={e => e.currentTarget.style.transform = 'rotateX(-22deg) rotateY(-28deg) translateY(-8px)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'rotateX(-18deg) rotateY(-22deg)'}
                      style={{
                        width: '220px', height: '220px',
                        position: 'relative',
                        transformStyle: 'preserve-3d',
                        transform: 'rotateX(-18deg) rotateY(-22deg)',
                        transition: 'transform 0.35s ease',
                        filter: 'drop-shadow(6px 16px 18px rgba(0,0,0,0.22))',
                      }}
                    >
                      {/* 前面: アイコン */}
                      <div style={{ position: 'absolute', inset: 0, borderRadius: '48px', overflow: 'hidden' }}>
                        <img src={app.icon} alt={app.name} style={{ width: '100%', height: '100%', display: 'block' }} />
                        <div style={{
                          position: 'absolute', inset: 0, pointerEvents: 'none',
                          background: 'linear-gradient(135deg, rgba(255,255,255,0.22) 0%, transparent 55%)',
                        }} />
                      </div>
                      {/* 上面 */}
                      <div style={{
                        position: 'absolute', width: '220px', height: '70px',
                        top: 0, left: 0,
                        background: app.accentLight || '#E0EAFF',
                        borderRadius: '48px 48px 0 0',
                        transformOrigin: 'center top',
                        transform: 'rotateX(-90deg)',
                      }} />
                      {/* 右面 */}
                      <div style={{
                        position: 'absolute', width: '70px', height: '220px',
                        top: 0, left: '220px',
                        background: 'rgba(0,0,0,0.20)',
                        borderRadius: '0 48px 48px 0',
                        transformOrigin: 'left center',
                        transform: 'rotateY(90deg)',
                      }} />
                    </div>
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
        {/* 右端の余白 */}
        <div style={{ minWidth: '40px', flexShrink: 0 }} />
      </div>
    </section>
  );
}

/* ════════════════════════════
   ニュース
════════════════════════════ */
const NEWS = [
  {
    date: '2025.11.22', category: 'お知らせ', categoryColor: '#2563EB',
    title: '公式ウェブサイトをリニューアルオープンしました',
    thumb: 'linear-gradient(135deg, rgba(30,58,138,0.7), rgba(59,130,246,0.6)), url(https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80&fit=crop) center/cover no-repeat',
    pickup: true,
  },
  {
    date: '2025.11.20', category: 'アップデート', categoryColor: '#2563EB',
    title: 'お問い合わせフォームのシステムを更新しました',
    thumb: 'linear-gradient(135deg, rgba(29,78,216,0.7), rgba(96,165,250,0.6)), url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80&fit=crop) center/cover no-repeat',
    pickup: false,
  },
  {
    date: '2025.11.15', category: 'アップデート', categoryColor: '#0369A1',
    title: '「SakuraEnglish」に新しい単語リストを追加しました',
    thumb: 'linear-gradient(135deg, rgba(12,74,110,0.7), rgba(14,165,233,0.6)), url(https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=80&fit=crop) center/cover no-repeat',
    pickup: false,
  },
];

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

      {/* カード横スクロール: 全幅 */}
      <div ref={scrollRef} style={{
        display: 'flex', gap: '2px',
        overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none',
        paddingLeft: '120px',
      }}>
        {NEWS.map((n, i) => (
          <article key={i} style={{
            minWidth: '340px', maxWidth: '340px', flexShrink: 0,
            cursor: 'pointer',
          }}>
            {/* サムネイル */}
            <div style={{
              width: '100%', aspectRatio: '4/3',
              background: n.thumb,
              overflow: 'hidden',
              position: 'relative', marginBottom: '16px',
            }}>
              {n.pickup && (
                <div style={{
                  position: 'absolute', top: '12px', left: '12px',
                  background: '#1D4ED8', color: '#fff',
                  fontSize: '0.72rem', fontWeight: 800, padding: '4px 12px',
                  borderRadius: '999px', letterSpacing: '0.04em',
                }}>
                  Pick up
                </div>
              )}
            </div>

            {/* 日付 ＋ カテゴリ */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px', paddingRight: '16px' }}>
              <span style={{ fontSize: '0.8rem', color: '#888', fontWeight: 500 }}>{n.date}</span>
              <span style={{
                fontSize: '0.72rem', fontWeight: 700, color: n.categoryColor,
                border: `1px solid ${n.categoryColor}`, padding: '2px 10px',
                borderRadius: '999px', whiteSpace: 'nowrap',
              }}>
                {n.category}
              </span>
            </div>

            {/* タイトル */}
            <p style={{ fontSize: '0.92rem', fontWeight: 700, color: '#1a1a1a', lineHeight: 1.55, margin: 0, paddingRight: '16px',
              transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#1D4ED8'}
              onMouseLeave={e => e.currentTarget.style.color = '#1a1a1a'}
            >
              {n.title}
            </p>
          </article>
        ))}
        {/* 右端の余白 */}
        <div style={{ minWidth: '40px', flexShrink: 0 }} />
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
      <NewsSection />
      <Footer />
    </div>
  );
}
