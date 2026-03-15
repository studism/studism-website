import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/* ════════════════════════════
   Hero セクション
════════════════════════════ */
function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#FFFCFE', minHeight: 'calc(100vh - 68px)' }}>

      {/* ── カラフル背景ブロブ ── */}
      <div className="absolute pointer-events-none" style={{
        width: '700px', height: '700px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,107,157,0.22) 0%, transparent 60%)',
        top: '-200px', right: '-150px',
      }} />
      <div className="absolute pointer-events-none" style={{
        width: '550px', height: '550px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(107,207,234,0.20) 0%, transparent 60%)',
        bottom: '-150px', left: '-100px',
      }} />
      <div className="absolute pointer-events-none" style={{
        width: '420px', height: '420px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,217,61,0.18) 0%, transparent 60%)',
        top: '30%', left: '20%',
      }} />
      <div className="absolute pointer-events-none" style={{
        width: '320px', height: '320px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(167,139,250,0.20) 0%, transparent 60%)',
        bottom: '5%', right: '20%',
      }} />

      {/* ── 散りばめた丸デコ ── */}
      {[
        { size: 18, top: '8%',  left: '6%',  color: '#FF6B9D', delay: '0s' },
        { size: 12, top: '15%', left: '45%', color: '#FFD93D', delay: '0.6s' },
        { size: 22, top: '70%', left: '8%',  color: '#6BCFEA', delay: '1.2s' },
        { size: 14, top: '80%', left: '40%', color: '#A78BFA', delay: '0.9s' },
        { size: 10, top: '20%', right: '6%', color: '#6EDAA0', delay: '1.8s' },
        { size: 16, top: '55%', right: '3%', color: '#FF9F7A', delay: '0.3s' },
        { size: 20, top: '5%',  right: '28%',color: '#FFD93D', delay: '1.5s' },
        { size: 8,  top: '88%', right: '18%',color: '#FF6B9D', delay: '2.1s' },
      ].map((d, i) => (
        <div key={i} className="absolute pointer-events-none animate-float" style={{
          width: d.size, height: d.size, borderRadius: '50%',
          background: d.color,
          top: d.top, left: d.left, right: d.right,
          opacity: 0.7,
          animationDelay: d.delay,
        }} />
      ))}

      {/* ── スター装飾 ── */}
      {[
        { top: '12%', left: '35%', color: '#FF6B9D', delay: '0.4s' },
        { top: '65%', left: '5%',  color: '#FFD93D', delay: '1.0s' },
        { top: '40%', right: '5%', color: '#6BCFEA', delay: '1.6s' },
        { top: '85%', left: '55%', color: '#A78BFA', delay: '0.7s' },
      ].map((s, i) => (
        <div key={i} className="absolute pointer-events-none animate-float" style={{
          top: s.top, left: s.left, right: s.right,
          fontSize: '20px', color: s.color, opacity: 0.85,
          animationDelay: s.delay, lineHeight: 1,
        }}>✦</div>
      ))}

      {/* ── コンテンツ ── */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 flex items-center"
        style={{ minHeight: 'calc(100vh - 68px)' }}>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full py-16">

          {/* 左：テキスト */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">

            {/* キャッチコピー */}
            <h1 className="font-black" style={{ fontSize: 'clamp(2.6rem, 5.2vw, 4.2rem)', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
              <span style={{
                background: 'linear-gradient(135deg, #FF6B9D 0%, #FF9F7A 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>学びを、</span>
              <span style={{
                background: 'linear-gradient(135deg, #A78BFA 0%, #6BCFEA 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>もっと自由に。</span>
              <br />
              <span style={{ color: '#1E1B4B' }}>もっと</span>
              <span style={{
                background: 'linear-gradient(135deg, #FFD93D 0%, #6EDAA0 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>楽しく。</span>
            </h1>

            {/* 説明 */}
            <p style={{
              fontSize: 'clamp(0.95rem, 1.7vw, 1.08rem)',
              color: '#64748B',
              maxWidth: '440px',
              lineHeight: 1.85,
              fontWeight: 500,
            }}>
              Studismは、テクノロジーの力で学習体験を変えるアプリを開発する
              教育テクノロジー企業です。英語学習から時間管理まで、
              すべての人の成長をサポートします。
            </p>

          </div>

          {/* 右：両キャラクター */}
          <div className="relative order-1 lg:order-2 flex items-center justify-center" style={{ minHeight: '520px' }}>

            {/* キャラ背後のカラフル円 */}
            <div className="absolute pointer-events-none" style={{
              width: '440px', height: '440px', borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(255,107,157,0.15) 0%, rgba(107,207,234,0.15) 50%, rgba(167,139,250,0.15) 100%)',
              top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            }} />
            <div className="absolute pointer-events-none animate-spin-slow" style={{
              width: '460px', height: '460px', borderRadius: '50%',
              border: '2.5px dashed rgba(255,107,157,0.25)',
              top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            }} />
            <div className="absolute pointer-events-none animate-spin-slow" style={{
              width: '380px', height: '380px', borderRadius: '50%',
              border: '2px dashed rgba(107,207,234,0.22)',
              top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
              animationDirection: 'reverse',
            }} />

            {/* Studism横影なし：メイン */}
            <img
              src="/images/Studism横影なし 2.png"
              alt="Studism"
              className="animate-float-slow"
              style={{
                width: 'clamp(230px, 32vw, 380px)',
                height: 'auto',
                position: 'relative',
                zIndex: 2,
                marginLeft: '-30px',
              }}
            />

            {/* ペンギン：右下 */}
            <img
              src="/images/背景透過 2.png"
              alt="Studismマスコット"
              className="animate-float"
              style={{
                width: 'clamp(160px, 20vw, 260px)',
                height: 'auto',
                position: 'absolute',
                bottom: '2%',
                right: '2%',
                zIndex: 3,
                animationDelay: '1.0s',
              }}
            />

          </div>

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
    <div style={{ background: '#FFFCFE' }}>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
