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
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,107,157,0.25) 0%, transparent 65%)',
        top: '-120px', left: '-160px',
      }} />
      <div className="absolute pointer-events-none" style={{
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(107,207,234,0.22) 0%, transparent 65%)',
        bottom: '-120px', right: '-140px',
      }} />
      <div className="absolute pointer-events-none" style={{
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,217,61,0.16) 0%, transparent 65%)',
        top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
      }} />
      <div className="absolute pointer-events-none" style={{
        width: '360px', height: '360px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(167,139,250,0.18) 0%, transparent 65%)',
        top: '-80px', right: '25%',
      }} />
      <div className="absolute pointer-events-none" style={{
        width: '300px', height: '300px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(110,218,160,0.18) 0%, transparent 65%)',
        bottom: '0', left: '30%',
      }} />

      {/* ── 散りばめた丸デコ ── */}
      {[
        { s: 16, top: '10%', left: '14%',  c: '#FF6B9D', d: '0s' },
        { s: 10, top: '22%', left: '38%',  c: '#FFD93D', d: '0.7s' },
        { s: 20, top: '75%', left: '10%',  c: '#6BCFEA', d: '1.3s' },
        { s: 12, top: '82%', left: '44%',  c: '#A78BFA', d: '1.0s' },
        { s: 14, top: '8%',  right: '12%', c: '#6EDAA0', d: '1.9s' },
        { s: 18, top: '60%', right: '8%',  c: '#FF9F7A', d: '0.4s' },
        { s: 9,  top: '4%',  right: '35%', c: '#FFD93D', d: '1.6s' },
        { s: 13, top: '90%', right: '22%', c: '#FF6B9D', d: '2.2s' },
        { s: 8,  top: '48%', left: '5%',   c: '#A78BFA', d: '0.9s' },
        { s: 11, top: '35%', right: '3%',  c: '#6BCFEA', d: '1.4s' },
      ].map((d, i) => (
        <div key={i} className="absolute pointer-events-none animate-float" style={{
          width: d.s, height: d.s, borderRadius: '50%',
          background: d.c, top: d.top, left: d.left, right: d.right,
          opacity: 0.65, animationDelay: d.d,
        }} />
      ))}

      {/* ── スター装飾 ── */}
      {[
        { top: '18%', left: '28%',  c: '#FF6B9D', d: '0.5s', sz: '18px' },
        { top: '70%', left: '20%',  c: '#FFD93D', d: '1.1s', sz: '16px' },
        { top: '25%', right: '22%', c: '#6BCFEA', d: '1.7s', sz: '20px' },
        { top: '78%', right: '32%', c: '#A78BFA', d: '0.8s', sz: '14px' },
        { top: '50%', left: '42%',  c: '#6EDAA0', d: '2.0s', sz: '12px' },
      ].map((s, i) => (
        <div key={i} className="absolute pointer-events-none animate-float"
          style={{ top: s.top, left: s.left, right: s.right, fontSize: s.sz, color: s.c, opacity: 0.8, animationDelay: s.d, lineHeight: 1 }}>
          ✦
        </div>
      ))}

      {/* ── コンテンツ：3カラム構図 ── */}
      <div className="relative z-10 flex items-center" style={{ minHeight: 'calc(100vh - 68px)' }}>
        <div className="w-full grid lg:grid-cols-[1fr_auto_1fr] items-end lg:items-center gap-4 lg:gap-0 px-4 md:px-8 lg:px-12 py-12">

          {/* 左：Studism横影なし */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1 lg:pr-6">
            <img
              src="/images/Studism横影なし 2.png"
              alt="Studism"
              className="animate-float-slow"
              style={{
                width: 'clamp(200px, 28vw, 400px)',
                height: 'auto',
                display: 'block',
              }}
            />
          </div>

          {/* 中央：テキスト */}
          <div className="flex flex-col items-center text-center gap-6 order-1 lg:order-2"
            style={{ minWidth: 'min(340px, 90vw)', maxWidth: '420px' }}>

            {/* キャッチコピー */}
            <h1 className="font-black" style={{ fontSize: 'clamp(1.9rem, 3.8vw, 3rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              <span style={{
                background: 'linear-gradient(135deg, #FF6B9D, #FF9F7A)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>学びを、</span>
              <span style={{
                background: 'linear-gradient(135deg, #A78BFA, #6BCFEA)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>もっと自由に。</span>
              <br />
              <span style={{ color: '#1E1B4B' }}>もっと</span>
              <span style={{
                background: 'linear-gradient(135deg, #FFD93D, #6EDAA0)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>楽しく。</span>
            </h1>

            {/* 区切り */}
            <div style={{
              width: '60px', height: '4px', borderRadius: '99px',
              background: 'linear-gradient(90deg, #FF6B9D, #A78BFA, #6BCFEA)',
            }} />

            {/* 説明 */}
            <p style={{ fontSize: 'clamp(0.85rem, 1.5vw, 0.98rem)', color: '#64748B', lineHeight: 1.85, fontWeight: 500 }}>
              Studismは、テクノロジーの力で学習体験を変えるアプリを開発する教育テクノロジー企業です。英語学習から時間管理まで、すべての人の成長をサポートします。
            </p>

          </div>

          {/* 右：ペンギン */}
          <div className="flex justify-center lg:justify-start order-3 lg:pl-6">
            <img
              src="/images/背景透過 2.png"
              alt="Studismマスコット"
              className="animate-float"
              style={{
                width: 'clamp(180px, 24vw, 360px)',
                height: 'auto',
                display: 'block',
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
