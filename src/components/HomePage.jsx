import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/* ════════════════════════════
   Hero セクション
════════════════════════════ */
function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#FAFAFE', minHeight: 'calc(100vh - 68px)' }}>
      {/* 薄い紫グラデーション装飾 */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 80% 60% at 70% 50%, rgba(168,85,247,0.07) 0%, transparent 70%)',
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 50% 40% at 20% 80%, rgba(93,207,234,0.08) 0%, transparent 60%)',
      }} />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 flex items-center"
        style={{ minHeight: 'calc(100vh - 68px)' }}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full py-16">

          {/* 左：テキスト */}
          <div className="flex flex-col gap-7 order-2 lg:order-1">
            <div>
              <img
                src="/images/studism-logo.png"
                alt="Studism"
                style={{ height: 'clamp(36px, 6vw, 52px)', width: 'auto', objectFit: 'contain' }}
              />
            </div>

            <h1 className="font-black leading-tight"
              style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.4rem)',
                color: '#1E1B4B',
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
              }}>
              学びを、もっと自由に。<br />
              もっと楽しく。
            </h1>

            <p className="font-medium leading-relaxed"
              style={{
                fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
                color: '#64748B',
                maxWidth: '480px',
              }}>
              Studismは、テクノロジーの力で学習体験を変えるアプリを開発しています。
              英語学習から時間管理まで、あなたの成長をサポートします。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link to="/app/sakuraenglish"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-black text-sm transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, #7C3AED, #A855F7)',
                  color: '#ffffff',
                  boxShadow: '0 8px 24px rgba(124,58,237,0.30)',
                  textDecoration: 'none',
                }}>
                アプリを見る
              </Link>
              <a href="https://apps.apple.com/jp/developer/studism/id1234567890"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-black text-sm transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  background: 'rgba(124,58,237,0.06)',
                  color: '#7C3AED',
                  border: '1.5px solid rgba(124,58,237,0.20)',
                  textDecoration: 'none',
                }}>
                App Storeで探す
              </a>
            </div>
          </div>

          {/* 右：ペンギンマスコット */}
          <div className="flex items-center justify-center order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 animate-pulse-glow pointer-events-none" style={{
                background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 65%)',
                transform: 'scale(1.5)', borderRadius: '50%',
              }} />
              <img
                src="/images/背景透過 2.png"
                alt="Studismマスコット"
                className="animate-float-slow"
                style={{
                  width: 'clamp(260px, 36vw, 460px)',
                  height: 'auto',
                  position: 'relative',
                  filter: 'drop-shadow(0 24px 56px rgba(124,58,237,0.18))',
                }}
              />
            </div>
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
