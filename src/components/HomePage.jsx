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
    bg: 'linear-gradient(135deg, #0f0520 0%, #2d0d5e 40%, #5b21b6 70%, #7c3aed 100%)',
    visual: (
      <>
        <img src="/images/Studism横影なし 2.png" alt="Studism" className="animate-float-slow"
          style={{ position: 'absolute', bottom: 0, right: '30%', height: '85%', width: 'auto', zIndex: 2, opacity: 0.95 }} />
        <img src="/images/背景透過 2.png" alt="マスコット" className="animate-float"
          style={{ position: 'absolute', bottom: 0, right: '6%', height: '70%', width: 'auto', zIndex: 3, animationDelay: '1.2s' }} />
      </>
    ),
  },
  {
    id: 1,
    label: 'Language Learning App',
    heading: '英語学習を、\nもっと楽しく。',
    sub: 'レベル別英単語クイズで、効率的に語彙力を強化。SakuraEnglishで始める新しい学習体験。',
    bg: 'linear-gradient(135deg, #1a0533 0%, #6d28d9 45%, #db2777 100%)',
    visual: (
      <>
        <div style={{
          position: 'absolute', right: '12%', top: '50%', transform: 'translateY(-50%)',
          width: 'clamp(200px, 28vw, 380px)', aspectRatio: '1',
          background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)',
          borderRadius: '50%', zIndex: 1,
        }} />
        <img src="/images/sakuraenglish.png" alt="SakuraEnglish"
          style={{
            position: 'absolute', right: '14%', top: '50%',
            transform: 'translateY(-50%)',
            width: 'clamp(160px, 22vw, 300px)', height: 'auto',
            borderRadius: '30%',
            boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
            zIndex: 3,
          }} />
        <img src="/images/背景透過 2.png" alt="マスコット" className="animate-float"
          style={{ position: 'absolute', bottom: 0, right: '4%', height: '55%', width: 'auto', zIndex: 4, animationDelay: '0.8s', opacity: 0.9 }} />
      </>
    ),
  },
  {
    id: 2,
    label: 'Productivity App',
    heading: '学習時間を、\n見える化する。',
    sub: 'タイマー・グラフ・教科別集計で、あなたの学習習慣を強力にサポートするTimelyze。',
    bg: 'linear-gradient(135deg, #0c2340 0%, #0369a1 45%, #06b6d4 100%)',
    visual: (
      <>
        <div style={{
          position: 'absolute', right: '12%', top: '50%', transform: 'translateY(-50%)',
          width: 'clamp(200px, 28vw, 380px)', aspectRatio: '1',
          background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)',
          borderRadius: '50%', zIndex: 1,
        }} />
        <img src="/images/timelyze.png" alt="Timelyze"
          style={{
            position: 'absolute', right: '14%', top: '50%',
            transform: 'translateY(-50%)',
            width: 'clamp(160px, 22vw, 300px)', height: 'auto',
            borderRadius: '30%',
            boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
            zIndex: 3,
          }} />
        <img src="/images/Studism横影なし 2.png" alt="Studism" className="animate-float-slow"
          style={{ position: 'absolute', bottom: 0, right: '3%', height: '60%', width: 'auto', zIndex: 4, opacity: 0.85 }} />
      </>
    ),
  },
  {
    id: 3,
    label: 'Our Mission',
    heading: 'テクノロジーと教育で、\n未来を変える。',
    sub: 'すべての人が自分のペースで、自分らしく学べる世界を。Studismのミッションです。',
    bg: 'linear-gradient(160deg, #0a0a0a 0%, #0f0520 50%, #1a0533 100%)',
    visual: (
      <>
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '48%',
          background: 'linear-gradient(135deg, rgba(124,58,237,0.25) 0%, rgba(6,182,212,0.15) 100%)',
          zIndex: 1,
        }} />
        <div style={{
          position: 'absolute', right: '8%', top: '50%', transform: 'translateY(-50%)',
          zIndex: 3, textAlign: 'center',
        }}>
          <div style={{
            fontSize: 'clamp(3rem, 6vw, 7rem)', fontWeight: 900,
            color: 'rgba(255,255,255,0.08)', letterSpacing: '-0.05em', lineHeight: 1,
            userSelect: 'none',
          }}>STUDISM</div>
          <img src="/images/背景透過 2.png" alt="マスコット" className="animate-float"
            style={{ width: 'clamp(140px, 18vw, 240px)', height: 'auto', margin: '0 auto', display: 'block' }} />
        </div>
      </>
    ),
  },
];

/* ════════════════════════════
   Hero（スライドショー）
════════════════════════════ */
function Hero() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrent(c => (c + 1) % SLIDES.length);
        setTransitioning(false);
      }, 400);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const goTo = (i) => {
    if (i === current) return;
    setTransitioning(true);
    setTimeout(() => { setCurrent(i); setTransitioning(false); }, 400);
  };

  const slide = SLIDES[current];

  return (
    <section style={{ position: 'relative', width: '100%', height: '90vh', overflow: 'hidden', background: '#0f0520' }}>

      {/* 背景（トランジション付き） */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: slide.bg,
        transition: 'background 0.6s ease',
        opacity: transitioning ? 0 : 1,
        transitionProperty: 'opacity',
        transitionDuration: '0.4s',
      }} />

      {/* テクスチャ */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, opacity: 0.05,
        backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
        backgroundSize: '32px 32px', pointerEvents: 'none',
      }} />
      {/* ボトムオーバーレイ */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.5) 100%)',
      }} />

      {/* ビジュアル（スライド切替） */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2,
        opacity: transitioning ? 0 : 1,
        transition: 'opacity 0.4s ease',
      }}>
        {slide.visual}
      </div>

      {/* テキスト（左下） */}
      <div style={{
        position: 'absolute', bottom: '16%', left: '5%', zIndex: 10,
        opacity: transitioning ? 0 : 1,
        transition: 'opacity 0.4s ease',
        maxWidth: '52%',
      }}>
        <p style={{
          color: 'rgba(255,255,255,0.6)', fontSize: '0.72rem',
          fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase',
          marginBottom: '14px',
        }}>
          {slide.label}
        </p>
        <h1 style={{
          color: '#ffffff', fontSize: 'clamp(2.4rem, 5.5vw, 5rem)',
          fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.05, margin: '0 0 18px',
          whiteSpace: 'pre-line',
        }}>
          {slide.heading}
        </h1>
        <p style={{
          color: 'rgba(255,255,255,0.65)', fontSize: 'clamp(0.82rem, 1.4vw, 1rem)',
          fontWeight: 400, lineHeight: 1.75, margin: 0,
        }}>
          {slide.sub}
        </p>
      </div>

      {/* ドットナビ */}
      <div style={{
        position: 'absolute', bottom: '36px', left: '5%', zIndex: 10,
        display: 'flex', alignItems: 'center', gap: '10px',
      }}>
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} style={{
            width: i === current ? '28px' : '8px',
            height: '8px', borderRadius: '4px', border: 'none', cursor: 'pointer',
            background: i === current ? '#ffffff' : 'rgba(255,255,255,0.35)',
            transition: 'all 0.3s ease', padding: 0,
          }} />
        ))}
      </div>

      {/* スライド番号 */}
      <div style={{
        position: 'absolute', bottom: '36px', right: '5%', zIndex: 10,
        color: 'rgba(255,255,255,0.4)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em',
      }}>
        {String(current + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
      </div>

      {/* SCROLLインジケーター */}
      <div style={{
        position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
        zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
      }}>
        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.22em' }}>
          SCROLL
        </span>
        <div style={{
          width: '1px', height: '40px',
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.45), transparent)',
        }} />
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
    photoBg: 'linear-gradient(135deg, #4c1d95 0%, #7c3aed 40%, #ec4899 100%)',
    accent: '#7C3AED',
  },
  {
    slug: 'timelyze',
    name: 'Timelyze',
    category: '生産性・時間管理',
    icon: '/images/timelyze.png',
    lead: '学習時間を、見える化する。',
    description: '学習時間の記録・管理を簡単に。タイマー機能、教科別集計、グラフ可視化で、継続的な学習習慣をサポートします。',
    photoBg: 'linear-gradient(135deg, #0c4a6e 0%, #0ea5e9 50%, #06b6d4 100%)',
    accent: '#0EA5E9',
  },
];

function Services() {
  return (
    <section style={{ background: '#fff', padding: '80px 0 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>

        {/* セクションヘッダー */}
        <div style={{ marginBottom: '48px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', borderBottom: '1px solid #e8e8e8', paddingBottom: '20px' }}>
          <div>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', color: '#7C3AED', textTransform: 'uppercase', marginBottom: '8px' }}>
              Our Services
            </p>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 900, color: '#0f0f0f', letterSpacing: '-0.03em', margin: 0 }}>
              サービス
            </h2>
          </div>
          <Link to="/app/sakuraenglish" style={{ textDecoration: 'none', color: '#7C3AED', fontSize: '0.82rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
            すべて見る
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>

        {/* サービスカード */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2px' }}>
          {APPS.map(app => (
            <Link key={app.slug} to={`/app/${app.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
              <article style={{ background: '#fff', overflow: 'hidden' }}
                onMouseEnter={e => e.currentTarget.querySelector('.card-inner').style.transform = 'translateY(-4px)'}
                onMouseLeave={e => e.currentTarget.querySelector('.card-inner').style.transform = 'translateY(0)'}>
                <div className="card-inner" style={{ transition: 'transform 0.3s ease' }}>
                  {/* 写真ブロック */}
                  <div style={{
                    width: '100%', aspectRatio: '16/8',
                    background: app.photoBg,
                    position: 'relative', overflow: 'hidden',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {/* テクスチャ */}
                    <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                    {/* アプリアイコン */}
                    <img src={app.icon} alt={app.name} style={{
                      width: '80px', height: '80px', borderRadius: '22px',
                      boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
                      position: 'relative', zIndex: 1,
                    }} />
                    {/* カテゴリラベル */}
                    <div style={{
                      position: 'absolute', top: '20px', left: '24px',
                      background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)',
                      padding: '5px 12px', borderRadius: '4px',
                      color: '#fff', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em',
                    }}>
                      {app.category}
                    </div>
                  </div>

                  {/* テキスト */}
                  <div style={{ padding: '28px 28px 36px' }}>
                    <p style={{ fontSize: '0.75rem', color: app.accent, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
                      {app.name}
                    </p>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#0f0f0f', letterSpacing: '-0.02em', marginBottom: '14px', lineHeight: 1.3 }}>
                      {app.lead}
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.85 }}>
                      {app.description}
                    </p>
                    <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '6px', color: app.accent, fontSize: '0.82rem', fontWeight: 700 }}>
                      詳細を見る
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
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
  { date: '2025.11.22', category: 'お知らせ', title: '公式ウェブサイトをリニューアルオープンしました', bg: 'linear-gradient(135deg, #4c1d95, #7c3aed)' },
  { date: '2025.11.20', category: 'アップデート', title: 'お問い合わせフォームのシステムを更新しました', bg: 'linear-gradient(135deg, #0c4a6e, #0ea5e9)' },
  { date: '2025.11.15', category: 'アップデート', title: '「SakuraEnglish」に新しい単語リストを追加しました', bg: 'linear-gradient(135deg, #831843, #ec4899)' },
];

function NewsSection() {
  return (
    <section style={{ background: '#f5f5f5', padding: '80px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>

        {/* ヘッダー */}
        <div style={{ marginBottom: '40px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', borderBottom: '1px solid #ddd', paddingBottom: '20px' }}>
          <div>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', color: '#7C3AED', textTransform: 'uppercase', marginBottom: '8px' }}>
              News
            </p>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 900, color: '#0f0f0f', letterSpacing: '-0.03em', margin: 0 }}>
              ニュース
            </h2>
          </div>
        </div>

        {/* カードグリッド */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }}>
          {NEWS.map((n, i) => (
            <article key={i} style={{ background: '#fff', overflow: 'hidden', cursor: 'pointer' }}>
              {/* サムネイル写真風 */}
              <div style={{
                width: '100%', aspectRatio: '16/9',
                background: n.bg,
                position: 'relative',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                <span style={{ fontSize: '2.5rem', opacity: 0.4 }}>
                  {i === 0 ? '📢' : i === 1 ? '⚙️' : '📚'}
                </span>
              </div>

              {/* テキスト */}
              <div style={{ padding: '20px 22px 26px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <span style={{
                    fontSize: '0.68rem', fontWeight: 700, color: '#7C3AED',
                    border: '1px solid #7C3AED', padding: '2px 8px', letterSpacing: '0.06em',
                  }}>
                    {n.category}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#999', fontWeight: 500 }}>{n.date}</span>
                </div>
                <p style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f0f0f', lineHeight: 1.6, margin: 0 }}>
                  {n.title}
                </p>
              </div>
            </article>
          ))}
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
      background: '#0f0520', padding: '100px 0',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(124,58,237,0.30) 0%, transparent 70%)',
      }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.2em', color: 'rgba(167,139,250,0.8)', textTransform: 'uppercase', marginBottom: '24px' }}>
          Our Mission
        </p>
        <h2 style={{
          fontSize: 'clamp(2rem, 5vw, 4rem)',
          fontWeight: 900, color: '#ffffff',
          letterSpacing: '-0.04em', lineHeight: 1.1,
          margin: '0 0 28px',
        }}>
          テクノロジーと教育の力で、<br />
          <span style={{ color: '#a78bfa' }}>すべての人の学びを変える。</span>
        </h2>
        <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.9, maxWidth: '560px', margin: '0 auto 40px' }}>
          Studismは、「学びを、もっと自由に、もっと楽しく」というビジョンのもと、最高の教育テクノロジーアプリを届け続けます。
        </p>
        <Link to="/contact" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '14px 36px', background: '#7C3AED', color: '#fff',
          textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.04em',
        }}>
          お問い合わせ
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
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
      <Hero />
      <Services />
      <NewsSection />
      <MissionBanner />
      <Footer />
    </div>
  );
}
