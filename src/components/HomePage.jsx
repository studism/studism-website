import React, { useEffect, useState } from 'react';
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
    bg: 'linear-gradient(135deg, #7B2FF7 0%, #F107A3 55%, #FF6B6B 100%)',
    accent: '#FFD93D',
    visual: (
      <>
        {/* デコ丸 */}
        <div style={{ position: 'absolute', top: '8%', right: '18%', width: '180px', height: '180px',
          borderRadius: '50%', background: 'rgba(255,217,61,0.18)', zIndex: 1 }} />
        <div style={{ position: 'absolute', bottom: '15%', right: '38%', width: '80px', height: '80px',
          borderRadius: '50%', background: 'rgba(255,255,255,0.12)', zIndex: 1 }} />
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
    bg: 'linear-gradient(135deg, #FF416C 0%, #FF7F50 50%, #FFD93D 100%)',
    accent: '#fff',
    visual: (
      <>
        <div style={{
          position: 'absolute', right: '10%', top: '50%', transform: 'translateY(-50%)',
          width: 'clamp(220px, 30vw, 400px)', aspectRatio: '1',
          background: 'radial-gradient(circle, rgba(255,255,255,0.22) 0%, transparent 70%)',
          borderRadius: '50%', zIndex: 1,
        }} />
        <img src="/images/sakuraenglish.png" alt="SakuraEnglish" className="animate-float"
          style={{
            position: 'absolute', right: '14%', top: '50%',
            transform: 'translateY(-50%)',
            width: 'clamp(160px, 22vw, 300px)', height: 'auto',
            borderRadius: '32px',
            boxShadow: '0 30px 80px rgba(255,65,108,0.45), 0 0 0 8px rgba(255,255,255,0.15)',
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
    bg: 'linear-gradient(135deg, #00C9FF 0%, #4FACFE 45%, #667EEA 100%)',
    accent: '#FFD93D',
    visual: (
      <>
        <div style={{
          position: 'absolute', right: '10%', top: '50%', transform: 'translateY(-50%)',
          width: 'clamp(220px, 30vw, 400px)', aspectRatio: '1',
          background: 'radial-gradient(circle, rgba(255,255,255,0.22) 0%, transparent 70%)',
          borderRadius: '50%', zIndex: 1,
        }} />
        <img src="/images/timelyze.png" alt="Timelyze" className="animate-float"
          style={{
            position: 'absolute', right: '14%', top: '50%',
            transform: 'translateY(-50%)',
            width: 'clamp(160px, 22vw, 300px)', height: 'auto',
            borderRadius: '32px',
            boxShadow: '0 30px 80px rgba(102,126,234,0.45), 0 0 0 8px rgba(255,255,255,0.15)',
            zIndex: 3,
          }} />
        <img src="/images/Studism横影なし 2.png" alt="Studism" className="animate-float-slow"
          style={{ position: 'absolute', bottom: 0, right: '3%', height: '62%', width: 'auto', zIndex: 4, opacity: 0.92 }} />
      </>
    ),
  },
  {
    id: 3,
    label: 'Our Mission',
    heading: 'テクノロジーと教育で、\n未来を変える。',
    sub: 'すべての人が自分のペースで、自分らしく学べる世界を。Studismのミッションです。',
    bg: 'linear-gradient(135deg, #6A11CB 0%, #8B5CF6 40%, #C026D3 75%, #F43F5E 100%)',
    accent: '#FFD93D',
    visual: (
      <>
        <div style={{
          position: 'absolute', right: '6%', top: '50%', transform: 'translateY(-50%)',
          zIndex: 3, textAlign: 'center',
        }}>
          <div style={{
            fontSize: 'clamp(3.5rem, 7vw, 8rem)', fontWeight: 900,
            color: 'rgba(255,255,255,0.1)', letterSpacing: '-0.05em', lineHeight: 1,
            userSelect: 'none',
          }}>STUDISM</div>
          <img src="/images/背景透過 2.png" alt="マスコット" className="animate-float"
            style={{ width: 'clamp(160px, 20vw, 260px)', height: 'auto', margin: '0 auto', display: 'block' }} />
        </div>
        <div style={{ position: 'absolute', top: '12%', right: '42%', width: '60px', height: '60px',
          borderRadius: '50%', background: 'rgba(255,217,61,0.35)', zIndex: 2 }} />
        <div style={{ position: 'absolute', bottom: '18%', right: '32%', width: '36px', height: '36px',
          borderRadius: '50%', background: 'rgba(255,255,255,0.2)', zIndex: 2 }} />
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
      <section style={{ position: 'relative', width: '100%', height: '82vh', overflow: 'hidden', background: '#7B2FF7' }}>
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          background: slide.bg,
          opacity: transitioning ? 0 : 1,
          transition: 'opacity 0.35s ease',
        }} />
        {/* ドット模様（明るめ） */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, opacity: 0.08, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(#fff 1.5px, transparent 1.5px)', backgroundSize: '28px 28px' }} />
        {/* 下グラデ */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.28) 100%)' }} />

        <div style={{ position: 'absolute', inset: 0, zIndex: 2, opacity: transitioning ? 0 : 1, transition: 'opacity 0.35s ease' }}>
          {slide.visual}
        </div>

        <div style={{
          position: 'absolute', bottom: '12%', left: '6%', zIndex: 10,
          opacity: transitioning ? 0 : 1, transition: 'opacity 0.35s ease', maxWidth: '52%',
        }}>
          {/* ラベルピル */}
          <div style={{
            display: 'inline-flex', alignItems: 'center',
            background: 'rgba(255,255,255,0.22)', backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.35)',
            borderRadius: '999px', padding: '5px 14px', marginBottom: '18px',
          }}>
            <span style={{ color: '#fff', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              {slide.label}
            </span>
          </div>
          <h1 style={{ color: '#ffffff', fontSize: 'clamp(2.6rem, 5.8vw, 5.2rem)',
            fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.05, margin: '0 0 18px', whiteSpace: 'pre-line',
            textShadow: '0 4px 24px rgba(0,0,0,0.18)' }}>
            {slide.heading}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(0.85rem, 1.4vw, 1rem)',
            fontWeight: 500, lineHeight: 1.75, margin: 0 }}>
            {slide.sub}
          </p>
        </div>
      </section>

      {/* ─── カラフルコントロールバー ─── */}
      <div style={{
        background: '#fff',
        borderBottom: '1px solid #f0e8ff',
        height: '52px', display: 'flex', alignItems: 'center',
        padding: '0 40px', position: 'relative',
        boxShadow: '0 2px 12px rgba(124,58,237,0.06)',
      }}>
        {/* ライン式インジケーター（左） */}
        <div style={{ display: 'flex', gap: '6px', flex: 1, maxWidth: '480px' }}>
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} style={{
              flex: 1, height: '3px', border: 'none', cursor: 'pointer', padding: 0,
              background: '#f0e8ff', position: 'relative', overflow: 'hidden', borderRadius: '999px',
            }}>
              {i < current && (
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,#7B2FF7,#F107A3)', borderRadius: '999px' }} />
              )}
              {i === current && (
                <div style={{
                  position: 'absolute', top: 0, left: 0, height: '100%',
                  background: 'linear-gradient(90deg,#7B2FF7,#F107A3)',
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
          border: 'none', background: 'linear-gradient(135deg,#7B2FF7,#F107A3)',
          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '11px', color: '#fff',
          boxShadow: '0 4px 12px rgba(124,58,237,0.35)',
        }}>
          {paused ? '▶' : '⏸'}
        </button>

        {/* Scroll down（右） */}
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '6px',
          color: '#A78BFA', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.04em' }}>
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
    photoBg: 'linear-gradient(135deg, #FF416C 0%, #FF7F50 55%, #FFD93D 100%)',
    accent: '#FF416C',
    shadowColor: 'rgba(255,65,108,0.22)',
  },
  {
    slug: 'timelyze',
    name: 'Timelyze',
    category: '生産性・時間管理',
    icon: '/images/timelyze.png',
    lead: '学習時間を、見える化する。',
    description: '学習時間の記録・管理を簡単に。タイマー機能、教科別集計、グラフ可視化で、継続的な学習習慣をサポートします。',
    photoBg: 'linear-gradient(135deg, #4FACFE 0%, #00C9FF 50%, #667EEA 100%)',
    accent: '#4FACFE',
    shadowColor: 'rgba(79,172,254,0.22)',
  },
];

function Services() {
  return (
    <section style={{ background: 'linear-gradient(180deg, #FFF7FF 0%, #F0F4FF 100%)', padding: '80px 0 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>

        {/* セクションヘッダー */}
        <div style={{ marginBottom: '48px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', paddingBottom: '20px',
          borderBottom: '2px solid transparent',
          backgroundImage: 'linear-gradient(white,white), linear-gradient(90deg,#7B2FF7,#F107A3,#FF7F50)',
          backgroundOrigin: 'border-box', backgroundClip: 'padding-box, border-box',
          borderImage: 'linear-gradient(90deg,#7B2FF7 0%,#F107A3 50%,#FF7F50 100%) 1',
        }}>
          <div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 900, margin: 0,
              background: 'linear-gradient(90deg,#7B2FF7,#F107A3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              サービス
            </h2>
          </div>
          <Link to="/app/sakuraenglish" style={{ textDecoration: 'none', fontSize: '0.82rem', fontWeight: 700,
            display: 'flex', alignItems: 'center', gap: '6px',
            background: 'linear-gradient(90deg,#7B2FF7,#F107A3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            すべて見る
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="#F107A3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>

        {/* サービスカード */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
          {APPS.map(app => (
            <Link key={app.slug} to={`/app/${app.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
              <article style={{ background: '#fff', overflow: 'hidden', borderRadius: '24px',
                boxShadow: `0 8px 40px ${app.shadowColor}, 0 2px 8px rgba(0,0,0,0.06)`,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = `0 20px 60px ${app.shadowColor}, 0 4px 16px rgba(0,0,0,0.08)`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `0 8px 40px ${app.shadowColor}, 0 2px 8px rgba(0,0,0,0.06)`; }}>

                {/* 写真ブロック */}
                <div style={{
                  width: '100%', aspectRatio: '16/8',
                  background: app.photoBg,
                  position: 'relative', overflow: 'hidden',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
                  {/* デコ丸 */}
                  <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '120px', height: '120px',
                    borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
                  <div style={{ position: 'absolute', bottom: '-30px', left: '-10px', width: '100px', height: '100px',
                    borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
                  <img src={app.icon} alt={app.name} style={{
                    width: '88px', height: '88px', borderRadius: '24px',
                    boxShadow: '0 16px 48px rgba(0,0,0,0.28), 0 0 0 4px rgba(255,255,255,0.25)',
                    position: 'relative', zIndex: 1,
                  }} />
                  <div style={{
                    position: 'absolute', top: '18px', left: '20px',
                    background: 'rgba(255,255,255,0.25)', backdropFilter: 'blur(10px)',
                    padding: '4px 12px', borderRadius: '999px',
                    color: '#fff', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.06em',
                    border: '1px solid rgba(255,255,255,0.35)',
                  }}>
                    {app.category}
                  </div>
                </div>

                {/* テキスト */}
                <div style={{ padding: '26px 28px 32px' }}>
                  <p style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '10px',
                    background: `linear-gradient(90deg, ${app.accent}, #7B2FF7)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {app.name}
                  </p>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 900, color: '#1a1a2e', letterSpacing: '-0.02em', marginBottom: '12px', lineHeight: 1.3 }}>
                    {app.lead}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: '#666', lineHeight: 1.85 }}>
                    {app.description}
                  </p>
                  <div style={{ marginTop: '18px', display: 'inline-flex', alignItems: 'center', gap: '6px',
                    background: `linear-gradient(90deg,${app.accent},#7B2FF7)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                    fontSize: '0.82rem', fontWeight: 800 }}>
                    詳細を見る
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke={app.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════
   ニュース
════════════════════════════ */
const NEWS = [
  { date: '2025.11.22', category: 'お知らせ', categoryColor: '#7B2FF7', categoryBg: '#F3EEFF', title: '公式ウェブサイトをリニューアルオープンしました', bg: 'linear-gradient(135deg, #7B2FF7, #F107A3)' },
  { date: '2025.11.20', category: 'アップデート', categoryColor: '#0EA5E9', categoryBg: '#E0F6FF', title: 'お問い合わせフォームのシステムを更新しました', bg: 'linear-gradient(135deg, #4FACFE, #667EEA)' },
  { date: '2025.11.15', category: 'アップデート', categoryColor: '#FF416C', categoryBg: '#FFF0F3', title: '「SakuraEnglish」に新しい単語リストを追加しました', bg: 'linear-gradient(135deg, #FF416C, #FFD93D)' },
];

function NewsSection() {
  return (
    <section style={{ background: '#FAFAFF', padding: '80px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>

        {/* リクルート風ヘッダー: 大きい "News" 左 ＋ 説明右 */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '48px', marginBottom: '48px', paddingBottom: '32px',
          borderBottom: '2px solid transparent',
          borderImage: 'linear-gradient(90deg,#7B2FF7 0%,#F107A3 50%,#FF7F50 100%) 1',
        }}>
          <h2 style={{
            fontSize: 'clamp(3.5rem, 7vw, 6rem)',
            fontWeight: 900, margin: 0, flexShrink: 0, lineHeight: 1,
            background: 'linear-gradient(135deg,#7B2FF7 0%,#F107A3 60%,#FF7F50 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            News
          </h2>
          <div style={{ paddingTop: '14px' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center',
              background: 'linear-gradient(90deg,#7B2FF7,#F107A3)',
              borderRadius: '999px', padding: '3px 12px', marginBottom: '12px',
            }}>
              <span style={{ color: '#fff', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase' }}>最新情報</span>
            </div>
            <p style={{ fontSize: '0.92rem', color: '#666', lineHeight: 1.75, margin: 0, maxWidth: '440px' }}>
              Studismの最新ニュース、アプリアップデート、<br />
              お知らせをお届けします。
            </p>
          </div>
        </div>

        {/* ニュースリスト */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {NEWS.map((n, i) => (
            <article key={i} style={{
              display: 'flex', alignItems: 'center', gap: '28px',
              padding: '22px 16px', borderRadius: '16px',
              marginBottom: i < NEWS.length - 1 ? '4px' : 0,
              cursor: 'pointer', transition: 'background 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#F3EEFF'; e.currentTarget.querySelector('.news-title').style.color = '#7B2FF7'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.querySelector('.news-title').style.color = '#1a1a2e'; }}
            >
              {/* サムネイル */}
              <div style={{
                width: '120px', height: '72px', flexShrink: 0,
                background: n.bg, borderRadius: '12px',
                position: 'relative', overflow: 'hidden',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 6px 20px rgba(0,0,0,0.12)',
              }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '10px 10px' }} />
                <span style={{ fontSize: '1.6rem' }}>
                  {i === 0 ? '📢' : i === 1 ? '⚙️' : '📚'}
                </span>
              </div>

              {/* テキスト */}
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <span style={{
                    fontSize: '0.68rem', fontWeight: 800, color: n.categoryColor,
                    background: n.categoryBg, padding: '3px 10px', borderRadius: '999px', letterSpacing: '0.04em',
                    whiteSpace: 'nowrap',
                  }}>
                    {n.category}
                  </span>
                  <span style={{ fontSize: '0.78rem', color: '#aaa', fontWeight: 500 }}>{n.date}</span>
                </div>
                <p className="news-title" style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1a1a2e', lineHeight: 1.5, margin: 0, transition: 'color 0.2s' }}>
                  {n.title}
                </p>
              </div>

              {/* 矢印 */}
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', flexShrink: 0,
                background: 'linear-gradient(135deg,#7B2FF7,#F107A3)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                opacity: 0.2, transition: 'opacity 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                onMouseLeave={e => e.currentTarget.style.opacity = '0.2'}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </article>
          ))}
        </div>

        {/* もっと見るリンク */}
        <div style={{ marginTop: '36px', textAlign: 'right' }}>
          <a href="#" style={{
            textDecoration: 'none', fontSize: '0.82rem', fontWeight: 800,
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            background: 'linear-gradient(90deg,#7B2FF7,#F107A3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            ニュース一覧
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="#F107A3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
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
      background: 'linear-gradient(135deg, #7B2FF7 0%, #F107A3 45%, #FF7F50 80%, #FFD93D 100%)',
      padding: '100px 0',
    }}>
      {/* ドット */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1.5px, transparent 1.5px)', backgroundSize: '24px 24px', zIndex: 0 }} />
      {/* デコ丸 */}
      <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '320px', height: '320px',
        borderRadius: '50%', background: 'rgba(255,255,255,0.08)', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '-80px', left: '-40px', width: '260px', height: '260px',
        borderRadius: '50%', background: 'rgba(255,255,255,0.06)', zIndex: 0 }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center',
          background: 'rgba(255,255,255,0.22)', backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.35)',
          borderRadius: '999px', padding: '5px 18px', marginBottom: '28px',
        }}>
          <span style={{ color: '#fff', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase' }}>Our Mission</span>
        </div>
        <h2 style={{
          fontSize: 'clamp(2rem, 5vw, 4rem)',
          fontWeight: 900, color: '#ffffff',
          letterSpacing: '-0.04em', lineHeight: 1.1,
          margin: '0 0 28px',
          textShadow: '0 4px 24px rgba(0,0,0,0.12)',
        }}>
          テクノロジーと教育の力で、<br />
          すべての人の学びを変える。
        </h2>
        <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.9, maxWidth: '560px', margin: '0 auto 44px' }}>
          Studismは、「学びを、もっと自由に、もっと楽しく」というビジョンのもと、最高の教育テクノロジーアプリを届け続けます。
        </p>
        <Link to="/contact" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '14px 36px',
          background: '#fff', color: '#7B2FF7',
          textDecoration: 'none', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.04em',
          borderRadius: '999px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.2)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.15)'; }}
        >
          お問い合わせ
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="#7B2FF7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
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
