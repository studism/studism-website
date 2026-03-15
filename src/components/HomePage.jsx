import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/* ════════════════════════════
   スライドデータ
════════════════════════════ */
const SLIDES = [
  {
    id: 0,
    label: 'Education Technology',
    heading: '学びを、もっと\n自由に、楽しく。',
    sub: 'Studismは、テクノロジーの力で学習体験を変える教育テクノロジー企業です。',
    bg: 'linear-gradient(135deg, rgba(91,33,182,0.78) 0%, rgba(124,58,237,0.65) 55%, rgba(167,139,250,0.5) 100%), url(https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&q=80&fit=crop) center/cover no-repeat',
    visual: (
      <>
        <div style={{ position: 'absolute', top: '8%', right: '18%', width: '180px', height: '180px',
          borderRadius: '50%', background: 'rgba(255,255,255,0.1)', zIndex: 1 }} />
        <div style={{ position: 'absolute', bottom: '18%', right: '40%', width: '70px', height: '70px',
          borderRadius: '50%', background: 'rgba(255,255,255,0.08)', zIndex: 1 }} />
        <img src="/images/Studism横影なし 2.png" alt="Studism" className="animate-float-slow"
          style={{ position: 'absolute', bottom: 0, right: '28%', height: '85%', width: 'auto', zIndex: 2, opacity: 0.97 }} />
        <img src="/images/背景透過 2.png" alt="マスコット" className="animate-float"
          style={{ position: 'absolute', bottom: 0, right: '5%', height: '72%', width: 'auto', zIndex: 3, animationDelay: '1.2s' }} />
      </>
    ),
  },
  {
    id: 1,
    label: 'Language Learning App',
    heading: '英語学習を、\nもっと楽しく。',
    sub: 'レベル別英単語クイズで、効率的に語彙力を強化。SakuraEnglishで始める新しい学習体験。',
    bg: 'linear-gradient(135deg, rgba(157,23,77,0.78) 0%, rgba(219,39,119,0.65) 55%, rgba(244,114,182,0.5) 100%), url(https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1920&q=80&fit=crop) center/cover no-repeat',
    visual: (
      <>
        <div style={{
          position: 'absolute', right: '10%', top: '50%', transform: 'translateY(-50%)',
          width: 'clamp(220px, 30vw, 400px)', aspectRatio: '1',
          background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
          borderRadius: '50%', zIndex: 1,
        }} />
        <img src="/images/sakuraenglish.png" alt="SakuraEnglish" className="animate-float"
          style={{
            position: 'absolute', right: '14%', top: '50%',
            transform: 'translateY(-50%)',
            width: 'clamp(160px, 22vw, 300px)', height: 'auto',
            borderRadius: '32px',
            boxShadow: '0 24px 64px rgba(0,0,0,0.22), 0 0 0 6px rgba(255,255,255,0.18)',
            zIndex: 3,
          }} />
        <img src="/images/背景透過 2.png" alt="マスコット" className="animate-float-slow"
          style={{ position: 'absolute', bottom: 0, right: '4%', height: '55%', width: 'auto', zIndex: 4, animationDelay: '0.6s' }} />
      </>
    ),
  },
  {
    id: 2,
    label: 'Productivity App',
    heading: '学習時間を、\n見える化する。',
    sub: 'タイマー・グラフ・教科別集計で、あなたの学習習慣を強力にサポートするTimelyze。',
    bg: 'linear-gradient(135deg, rgba(30,64,175,0.75) 0%, rgba(37,99,235,0.62) 55%, rgba(125,211,252,0.5) 100%), url(https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1920&q=80&fit=crop) center/cover no-repeat',
    visual: (
      <>
        <div style={{
          position: 'absolute', right: '10%', top: '50%', transform: 'translateY(-50%)',
          width: 'clamp(220px, 30vw, 400px)', aspectRatio: '1',
          background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
          borderRadius: '50%', zIndex: 1,
        }} />
        <img src="/images/timelyze.png" alt="Timelyze" className="animate-float"
          style={{
            position: 'absolute', right: '14%', top: '50%',
            transform: 'translateY(-50%)',
            width: 'clamp(160px, 22vw, 300px)', height: 'auto',
            borderRadius: '32px',
            boxShadow: '0 24px 64px rgba(0,0,0,0.22), 0 0 0 6px rgba(255,255,255,0.18)',
            zIndex: 3,
          }} />
        <img src="/images/Studism横影なし 2.png" alt="Studism" className="animate-float-slow"
          style={{ position: 'absolute', bottom: 0, right: '3%', height: '62%', width: 'auto', zIndex: 4, opacity: 0.88 }} />
      </>
    ),
  },
  {
    id: 3,
    label: 'Our Mission',
    heading: 'テクノロジーと教育で、\n未来を変える。',
    sub: 'すべての人が自分のペースで、自分らしく学べる世界を。Studismのミッションです。',
    bg: 'linear-gradient(135deg, rgba(76,29,149,0.82) 0%, rgba(109,40,217,0.7) 50%, rgba(147,51,234,0.6) 100%), url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80&fit=crop) center/cover no-repeat',
    visual: (
      <>
        <div style={{ position: 'absolute', top: '10%', right: '40%', width: '60px', height: '60px',
          borderRadius: '50%', background: 'rgba(255,255,255,0.12)', zIndex: 2 }} />
        <div style={{ position: 'absolute', bottom: '20%', right: '30%', width: '36px', height: '36px',
          borderRadius: '50%', background: 'rgba(255,255,255,0.1)', zIndex: 2 }} />
        <div style={{
          position: 'absolute', right: '6%', top: '50%', transform: 'translateY(-50%)',
          zIndex: 3, textAlign: 'center',
        }}>
          <div style={{
            fontSize: 'clamp(3.5rem, 7vw, 8rem)', fontWeight: 900,
            color: 'rgba(255,255,255,0.08)', letterSpacing: '-0.05em', lineHeight: 1,
            userSelect: 'none',
          }}>STUDISM</div>
          <img src="/images/背景透過 2.png" alt="マスコット" className="animate-float"
            style={{ width: 'clamp(160px, 20vw, 260px)', height: 'auto', margin: '0 auto', display: 'block' }} />
        </div>
      </>
    ),
  },
];

/* ════════════════════════════
   Hero（スライドショー）
════════════════════════════ */
function HeroSection() {
  const INTERVAL = 5500;
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);

  const advance = (next) => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(next !== undefined ? next : c => (c + 1) % SLIDES.length);
      setTransitioning(false);
      setProgress(0);
      setTimeout(() => setProgress(100), 30);
    }, 350);
  };

  useEffect(() => {
    setProgress(0);
    setTimeout(() => setProgress(100), 30);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => advance(), INTERVAL);
    return () => clearInterval(timer);
  }, [paused, current]);

  const goTo = (i) => { if (i !== current) advance(i); };
  const slide = SLIDES[current];

  return (
    <>
      {/* ─── スライド本体 ─── */}
      <section style={{ position: 'relative', width: '100%', height: '70vh', overflow: 'hidden', background: '#5B21B6' }}>
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          background: slide.bg,
          opacity: transitioning ? 0 : 1,
          transition: 'opacity 0.35s ease',
        }} />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, opacity: 0.06, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(#fff 1.5px, transparent 1.5px)', backgroundSize: '28px 28px' }} />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.25) 100%)' }} />

        <div style={{ position: 'absolute', inset: 0, zIndex: 2, opacity: transitioning ? 0 : 1, transition: 'opacity 0.35s ease' }}>
          {slide.visual}
        </div>

        <div style={{
          position: 'absolute', bottom: '12%', left: '6%', zIndex: 10,
          opacity: transitioning ? 0 : 1, transition: 'opacity 0.35s ease', maxWidth: '52%',
        }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center',
            background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: '999px', padding: '5px 14px', marginBottom: '18px',
          }}>
            <span style={{ color: '#fff', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase' }}>
              {slide.label}
            </span>
          </div>
          <h1 style={{ color: '#ffffff', fontSize: 'clamp(2.6rem, 5.8vw, 5.2rem)',
            fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.05, margin: '0 0 18px', whiteSpace: 'pre-line',
            textShadow: '0 2px 16px rgba(0,0,0,0.15)' }}>
            {slide.heading}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 'clamp(0.85rem, 1.4vw, 1rem)',
            fontWeight: 400, lineHeight: 1.75, margin: 0 }}>
            {slide.sub}
          </p>
        </div>
      </section>

      {/* ─── コントロールバー ─── */}
      <div style={{
        background: '#fff',
        borderBottom: '1px solid #EDE9FE',
        height: '52px', display: 'flex', alignItems: 'center',
        padding: '0 40px', position: 'relative',
      }}>
        {/* ライン式インジケーター（左） */}
        <div style={{ display: 'flex', gap: '6px', flex: 1, maxWidth: '480px' }}>
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} style={{
              flex: 1, height: '3px', border: 'none', cursor: 'pointer', padding: 0,
              background: '#EDE9FE', position: 'relative', overflow: 'hidden', borderRadius: '999px',
            }}>
              {i < current && (
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,#8B5CF6,#C084FC)', borderRadius: '999px' }} />
              )}
              {i === current && (
                <div style={{
                  position: 'absolute', top: 0, left: 0, height: '100%',
                  background: 'linear-gradient(90deg,#8B5CF6,#C084FC)',
                  width: `${progress}%`,
                  transition: progress === 0 ? 'none' : `width ${INTERVAL / 1000 - 0.3}s linear`,
                  borderRadius: '999px',
                }} />
              )}
            </button>
          ))}
        </div>

        {/* ポーズ／再生ボタン（中央） */}
        <button onClick={() => setPaused(p => !p)} style={{
          position: 'absolute', left: '50%', transform: 'translateX(-50%)',
          width: '32px', height: '32px', borderRadius: '50%',
          border: 'none', background: 'linear-gradient(135deg,#8B5CF6,#C084FC)',
          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '11px', color: '#fff',
          boxShadow: '0 3px 10px rgba(139,92,246,0.3)',
        }}>
          {paused ? '▶' : '⏸'}
        </button>

        {/* Scroll down（右） */}
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '6px',
          color: '#A78BFA', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.04em' }}>
          <svg width="12" height="16" viewBox="0 0 12 16" fill="none">
            <path d="M6 1v14M1 10l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Scroll down
        </div>
      </div>
    </>
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
    photoBg: 'linear-gradient(135deg, #BE185D 0%, #EC4899 55%, #FBCFE8 100%)',
    accent: '#DB2777',
    accentLight: '#FCE7F3',
    shadowColor: 'rgba(219,39,119,0.14)',
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
  },
];

function Services() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir * 340, behavior: 'smooth' });
  };

  return (
    <section style={{ background: '#fff', padding: '72px 0 80px' }}>
      {/* ヘッダー＋ボタン: max-width内 */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>

        {/* ヘッダー行 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 900, color: '#7C3AED', margin: '0 0 20px', letterSpacing: '-0.02em', lineHeight: 1 }}>
              Services
            </h2>
            <Link to="/app/sakuraenglish" style={{
              textDecoration: 'none', color: '#1a1a1a', fontSize: '0.88rem', fontWeight: 700,
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              paddingBottom: '6px', borderBottom: '2px solid #7C3AED',
            }}>
              View more
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: '24px', height: '24px', borderRadius: '50%', border: '1.5px solid #aaa', fontSize: '12px' }}>
                →
              </span>
            </Link>
          </div>
          <p style={{ fontSize: '0.92rem', color: '#555', lineHeight: 1.8, maxWidth: '420px', paddingTop: '6px', margin: 0 }}>
            Studismが提供する教育テクノロジーアプリを紹介します。<br />
            学習をもっと楽しく、もっと効率的に。
          </p>
        </div>

        {/* ← → ボタン（右寄せ） */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginBottom: '24px' }}>
          {['←', '→'].map((arrow, i) => (
            <button key={i} onClick={() => scroll(i === 0 ? -1 : 1)} style={{
              width: '40px', height: '40px', borderRadius: '50%',
              border: '1.5px solid #ddd', background: '#fff',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '14px', color: '#555', transition: 'border-color 0.2s, color 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#7C3AED'; e.currentTarget.style.color = '#7C3AED'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#ddd'; e.currentTarget.style.color = '#555'; }}
            >
              {arrow}
            </button>
          ))}
        </div>
      </div>

      {/* カード横スクロール: 全幅 */}
      <div ref={scrollRef} style={{
        display: 'flex', gap: '2px',
        overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none',
        paddingLeft: 'max(0px, calc((100vw - 1200px) / 2 - 100px))',
      }}>
        {APPS.map(app => (
          <Link key={app.slug} to={`/app/${app.slug}`} style={{ textDecoration: 'none', minWidth: '340px', maxWidth: '340px', flexShrink: 0 }}>
            <article>
              {/* サムネイル */}
              <div style={{
                width: '100%', aspectRatio: '4/3',
                background: app.photoBg,
                overflow: 'hidden',
                position: 'relative', marginBottom: '16px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
                <img src={app.icon} alt={app.name} style={{
                  width: '80px', height: '80px', borderRadius: '20px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.22), 0 0 0 4px rgba(255,255,255,0.2)',
                  position: 'relative', zIndex: 1,
                }} />
              </div>

              {/* カテゴリ */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px', paddingRight: '16px' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: app.accent,
                  border: `1px solid ${app.accent}`, padding: '2px 10px', borderRadius: '999px', whiteSpace: 'nowrap' }}>
                  {app.category}
                </span>
              </div>

              {/* タイトル */}
              <p style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1a1a1a', lineHeight: 1.55, margin: 0, paddingRight: '16px',
                transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#7C3AED'}
                onMouseLeave={e => e.currentTarget.style.color = '#1a1a1a'}
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
    date: '2025.11.22', category: 'お知らせ', categoryColor: '#7C3AED',
    title: '公式ウェブサイトをリニューアルオープンしました',
    thumb: 'linear-gradient(135deg, rgba(109,40,217,0.7), rgba(167,139,250,0.6)), url(https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80&fit=crop) center/cover no-repeat',
    pickup: true,
  },
  {
    date: '2025.11.20', category: 'アップデート', categoryColor: '#2563EB',
    title: 'お問い合わせフォームのシステムを更新しました',
    thumb: 'linear-gradient(135deg, rgba(29,78,216,0.7), rgba(96,165,250,0.6)), url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80&fit=crop) center/cover no-repeat',
    pickup: false,
  },
  {
    date: '2025.11.15', category: 'アップデート', categoryColor: '#DB2777',
    title: '「SakuraEnglish」に新しい単語リストを追加しました',
    thumb: 'linear-gradient(135deg, rgba(157,23,77,0.7), rgba(244,114,182,0.6)), url(https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=80&fit=crop) center/cover no-repeat',
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
    <section style={{ background: '#fff', padding: '72px 0 80px' }}>
      {/* ヘッダー＋ボタン: max-width内 */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>

        {/* ヘッダー行 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 900, color: '#7C3AED', margin: '0 0 20px', letterSpacing: '-0.02em', lineHeight: 1 }}>
              News
            </h2>
            <a href="#" style={{
              textDecoration: 'none', color: '#1a1a1a', fontSize: '0.88rem', fontWeight: 700,
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              paddingBottom: '6px', borderBottom: '2px solid #7C3AED',
            }}>
              View more
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: '24px', height: '24px', borderRadius: '50%', border: '1.5px solid #aaa', fontSize: '12px' }}>
                →
              </span>
            </a>
          </div>
          <p style={{ fontSize: '0.92rem', color: '#555', lineHeight: 1.8, maxWidth: '420px', paddingTop: '6px', margin: 0 }}>
            Studismの最新情報・アプリアップデートに関する発表、<br />
            弊社からのお知らせを紹介します。
          </p>
        </div>

        {/* ← → ボタン（右寄せ） */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginBottom: '24px' }}>
          {['←', '→'].map((arrow, i) => (
            <button key={i} onClick={() => scroll(i === 0 ? -1 : 1)} style={{
              width: '40px', height: '40px', borderRadius: '50%',
              border: '1.5px solid #ddd', background: '#fff',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '14px', color: '#555', transition: 'border-color 0.2s, color 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#7C3AED'; e.currentTarget.style.color = '#7C3AED'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#ddd'; e.currentTarget.style.color = '#555'; }}
            >
              {arrow}
            </button>
          ))}
        </div>
      </div>

      {/* カード横スクロール: 全幅 */}
      <div ref={scrollRef} style={{
        display: 'flex', gap: '2px',
        overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none',
        paddingLeft: 'max(0px, calc((100vw - 1200px) / 2 - 100px))',
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
                  background: '#7C3AED', color: '#fff',
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
              onMouseEnter={e => e.currentTarget.style.color = '#7C3AED'}
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
      background: 'linear-gradient(135deg, #4C1D95 0%, #6D28D9 40%, #9333EA 70%, #C084FC 100%)',
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
          background: '#fff', color: '#6D28D9',
          textDecoration: 'none', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.04em',
          borderRadius: '999px',
          boxShadow: '0 6px 24px rgba(0,0,0,0.14)',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 32px rgba(0,0,0,0.18)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,0.14)'; }}
        >
          お問い合わせ
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="#6D28D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
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
