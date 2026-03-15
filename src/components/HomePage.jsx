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
      background: '#ffffff', borderBottom: '1px solid #e0e0e0',
      display: 'flex', alignItems: 'center',
    }}>
      {/* 左半分：画像（中央からはみ出して大きく） */}
      <div style={{ position: 'relative', width: '52%', height: '100%', flexShrink: 0 }}>
        <img src="/images/ポリポリ3.png" alt="ポリポリ"
          style={{ position: 'absolute', bottom: '-38%', left: '0%', transform: 'none',
            height: '160%', width: 'auto', zIndex: 2, objectFit: 'contain' }} />
      </div>

      {/* 右半分：テキスト */}
      <div style={{ flex: 1, paddingRight: '7%', zIndex: 10 }}>
        <h1 style={{
          color: '#0a0a0a', fontSize: 'clamp(2.8rem, 4.2vw, 4.5rem)',
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
    slug: 'sakuraenglish',
    name: 'SakuraEnglish',
    category: '語学学習',
    icon: '/images/sakuraenglish.png',
    lead: '英語学習を、もっと楽しく。',
    description: 'レベル別英単語クイズで効率的に語彙力を強化。5段階の難易度とカスタム単語リスト機能で、自分だけの学習プランを作成できます。',
    photoBg: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 55%, #93C5FD 100%)',
    accent: '#2563EB',
    accentLight: '#DBEAFE',
    shadowColor: 'rgba(37,99,235,0.14)',
  },
  {
    slug: 'timelyze',
    name: 'Timelyze',
    category: '生産性・時間管理',
    icon: '/images/timelyze.png',
    lead: '学習時間を、見える化する。',
    description: '学習時間の記録・管理を簡単に。タイマー機能、教科別集計、グラフ可視化で、継続的な学習習慣をサポートします。',
    photoBg: 'linear-gradient(135deg, #1D4ED8 0%, #3B82F6 55%, #BAE6FD 100%)',
    accent: '#2563EB',
    accentLight: '#DBEAFE',
    shadowColor: 'rgba(37,99,235,0.14)',
    comingSoon: false,
  },
  {
    slug: 'app3',
    name: 'Coming Soon',
    category: '近日公開',
    icon: null,
    lead: '新しいアプリを準備中です。',
    description: '',
    photoBg: 'linear-gradient(135deg, #0C4A6E 0%, #0EA5E9 55%, #BAE6FD 100%)',
    accent: '#0EA5E9',
    accentLight: '#E0F2FE',
    shadowColor: 'rgba(14,165,233,0.14)',
    comingSoon: true,
  },
  {
    slug: 'app4',
    name: 'Coming Soon',
    category: '近日公開',
    icon: null,
    lead: '新しいアプリを準備中です。',
    description: '',
    photoBg: 'linear-gradient(135deg, #172554 0%, #1D4ED8 55%, #BFDBFE 100%)',
    accent: '#1D4ED8',
    accentLight: '#DBEAFE',
    shadowColor: 'rgba(29,78,216,0.14)',
    comingSoon: true,
  },
  {
    slug: 'app5',
    name: 'Coming Soon',
    category: '近日公開',
    icon: null,
    lead: '新しいアプリを準備中です。',
    description: '',
    photoBg: 'linear-gradient(135deg, #1E3A8A 0%, #1D4ED8 55%, #BFDBFE 100%)',
    accent: '#1D4ED8',
    accentLight: '#DBEAFE',
    shadowColor: 'rgba(29,78,216,0.14)',
    comingSoon: true,
  },
];

function Services() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir * 340, behavior: 'smooth' });
  };

  return (
    <section style={{ background: '#fff', padding: '64px 0 32px' }}>
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
                  <img src={app.icon} alt={app.name} style={{
                    width: '220px', height: '220px', borderRadius: '48px',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                    display: 'block',
                  }} />
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
    <section style={{ background: '#fff', padding: '40px 0 80px' }}>
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
   会社ミッションバナー
════════════════════════════ */
function MissionBanner() {
  return (
    <section style={{
      position: 'relative', overflow: 'hidden',
      background: 'linear-gradient(135deg, #0F2D6E 0%, #1D4ED8 40%, #2563EB 70%, #3B82F6 100%)',
      padding: '100px 0',
    }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1.5px, transparent 1.5px)', backgroundSize: '24px 24px', zIndex: 0 }} />
      <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '340px', height: '340px',
        borderRadius: '50%', background: 'rgba(255,255,255,0.06)', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '-80px', left: '-60px', width: '280px', height: '280px',
        borderRadius: '50%', background: 'rgba(255,255,255,0.05)', zIndex: 0 }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center',
          background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.28)',
          borderRadius: '999px', padding: '5px 18px', marginBottom: '28px',
        }}>
          <span style={{ color: '#fff', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Our Mission</span>
        </div>
        <h2 style={{
          fontSize: 'clamp(2rem, 5vw, 4rem)',
          fontWeight: 900, color: '#ffffff',
          letterSpacing: '-0.04em', lineHeight: 1.1,
          margin: '0 0 28px',
        }}>
          テクノロジーと教育の力で、<br />
          すべての人の学びを変える。
        </h2>
        <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.9, maxWidth: '560px', margin: '0 auto 44px' }}>
          Studismは、「学びを、もっと自由に、もっと楽しく」というビジョンのもと、最高の教育テクノロジーアプリを届け続けます。
        </p>
        <Link to="/contact" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '14px 36px',
          background: '#fff', color: '#1D4ED8',
          textDecoration: 'none', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.04em',
          borderRadius: '999px',
          boxShadow: '0 6px 24px rgba(0,0,0,0.14)',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 32px rgba(0,0,0,0.18)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,0.14)'; }}
        >
          お問い合わせ
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="#1D4ED8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </Link>
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
    <div style={{ background: '#fff' }}>
      <Header />
      <HeroSection />
      <Services />
      <NewsSection />
      <MissionBanner />
      <Footer />
    </div>
  );
}
