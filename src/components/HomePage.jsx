import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/* ════════════════════════════
   Hero セクション
════════════════════════════ */
function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#0D0B1E', minHeight: 'calc(100vh - 68px)' }}>

      {/* ── 背景レイヤー ── */}
      {/* メイングラデーション */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 65% 80% at 80% 45%, rgba(124,58,237,0.28) 0%, transparent 60%)',
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 45% 55% at 8% 85%, rgba(6,182,212,0.14) 0%, transparent 55%)',
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 35% 45% at 3% 8%, rgba(168,85,247,0.12) 0%, transparent 55%)',
      }} />

      {/* グリッドオーバーレイ */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '52px 52px',
      }} />

      {/* グローオーブ */}
      <div className="absolute pointer-events-none animate-pulse-glow" style={{
        width: '340px', height: '340px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)',
        top: '5%', right: '8%',
      }} />
      <div className="absolute pointer-events-none animate-pulse-glow" style={{
        width: '220px', height: '220px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6,182,212,0.14) 0%, transparent 70%)',
        bottom: '12%', left: '5%',
        animationDelay: '1.8s',
      }} />

      {/* ── コンテンツ ── */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 flex items-center"
        style={{ minHeight: 'calc(100vh - 68px)' }}>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full py-16">

          {/* 左：テキスト */}
          <div className="flex flex-col gap-7 order-2 lg:order-1">

            {/* グラデーションキャッチコピー */}
            <h1 className="font-black" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', letterSpacing: '-0.03em', lineHeight: 1.06 }}>
              <span style={{ color: '#F1F5F9' }}>学びを、</span>
              <span style={{
                background: 'linear-gradient(135deg, #A78BFA 0%, #F472B6 50%, #FB923C 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>もっと自由に。</span>
              <br />
              <span style={{ color: '#F1F5F9' }}>もっと</span>
              <span style={{
                background: 'linear-gradient(135deg, #38BDF8 0%, #34D399 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>楽しく。</span>
            </h1>

            {/* 説明 */}
            <p style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.05rem)', color: 'rgba(203,213,225,0.82)', maxWidth: '460px', lineHeight: 1.8, fontWeight: 500 }}>
              Studismは、テクノロジーの力で学習体験を変えるアプリを開発する教育テクノロジー企業です。
              英語学習から時間管理まで、すべての人の成長をサポートします。
            </p>

          </div>

          {/* 右：両キャラクター */}
          <div className="relative order-1 lg:order-2 flex items-center justify-center" style={{ minHeight: '540px' }}>

            {/* 背景グローブロブ */}
            <div className="absolute pointer-events-none" style={{
              width: '500px', height: '500px', borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(139,92,246,0.20) 0%, rgba(6,182,212,0.10) 50%, transparent 70%)',
              top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            }} />

            {/* 回転リング */}
            <div className="absolute pointer-events-none animate-spin-slow" style={{
              width: '420px', height: '420px', borderRadius: '50%',
              border: '1.5px dashed rgba(139,92,246,0.22)',
              top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            }} />
            <div className="absolute pointer-events-none" style={{
              width: '340px', height: '340px', borderRadius: '50%',
              border: '1px solid rgba(6,182,212,0.15)',
              top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            }} />

            {/* ── メイン：Studism横影なし ── */}
            <img
              src="/images/Studism横影なし 2.png"
              alt="Studism"
              className="animate-float-slow"
              style={{
                width: 'clamp(220px, 30vw, 360px)',
                height: 'auto',
                position: 'relative',
                zIndex: 2,
                marginLeft: '-40px',
                marginTop: '-20px',
              }}
            />

            {/* ── サブ：ペンギン ── */}
            <img
              src="/images/背景透過 2.png"
              alt="Studismマスコット"
              className="animate-float"
              style={{
                width: 'clamp(150px, 18vw, 240px)',
                height: 'auto',
                position: 'absolute',
                bottom: '4%',
                right: '4%',
                zIndex: 3,
                animationDelay: '1.2s',
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
    <div style={{ background: '#FAFAFE' }}>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
