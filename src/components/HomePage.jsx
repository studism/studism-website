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

      {/* ドットグリッド背景 */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(rgba(124,58,237,0.07) 1.5px, transparent 1.5px)',
        backgroundSize: '28px 28px',
      }} />

      {/* 背景グラデーション装飾 */}
      <div className="absolute pointer-events-none" style={{
        width: '700px', height: '700px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 65%)',
        top: '-200px', right: '-150px',
      }} />
      <div className="absolute pointer-events-none" style={{
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(93,207,234,0.08) 0%, transparent 65%)',
        bottom: '-120px', left: '-120px',
      }} />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 flex items-center"
        style={{ minHeight: 'calc(100vh - 68px)' }}>
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full py-16">

          {/* 左：テキスト */}
          <div className="flex flex-col gap-8 order-2 lg:order-1">

            {/* 会社バッジ */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black"
                style={{
                  background: 'rgba(124,58,237,0.07)',
                  color: '#7C3AED',
                  border: '1px solid rgba(124,58,237,0.15)',
                  letterSpacing: '0.04em',
                }}>
                <span className="w-1.5 h-1.5 rounded-full inline-block animate-pulse"
                  style={{ background: '#A855F7' }} />
                Education Technology Company
              </span>
            </div>

            {/* Studismロゴ */}
            <div>
              <img
                src="/images/studism-logo.png"
                alt="Studism"
                style={{ height: 'clamp(42px, 6vw, 62px)', width: 'auto', objectFit: 'contain' }}
              />
            </div>

            {/* キャッチコピー */}
            <h1 className="font-black"
              style={{
                fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
                color: '#1E1B4B',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
              }}>
              学びを、もっと自由に。<br />
              もっと楽しく。
            </h1>

            {/* 説明 */}
            <p className="font-medium leading-relaxed"
              style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)', color: '#64748B', maxWidth: '460px' }}>
              Studismは、テクノロジーの力で学習体験を変えるアプリを開発する
              教育テクノロジー企業です。英語学習から時間管理まで、
              すべての人の成長をサポートします。
            </p>

            {/* スタッツ */}
            <div className="flex gap-10 py-2">
              {[
                { num: '2', label: 'Apps' },
                { num: '無料', label: 'Free to Use' },
                { num: 'iOS', label: 'Platform' },
              ].map((s, i) => (
                <div key={i} className="flex flex-col gap-0.5">
                  <span className="font-black text-2xl" style={{ color: '#7C3AED', letterSpacing: '-0.02em' }}>{s.num}</span>
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#B0BAC6' }}>{s.label}</span>
                </div>
              ))}
            </div>

            {/* CTAボタン */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/app/sakuraenglish"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-black text-sm transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, #7C3AED, #A855F7)',
                  color: '#ffffff',
                  boxShadow: '0 8px 28px rgba(124,58,237,0.32)',
                  textDecoration: 'none',
                  letterSpacing: '0.01em',
                }}>
                アプリを見る →
              </Link>
              <Link to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-black text-sm transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  background: 'rgba(124,58,237,0.05)',
                  color: '#7C3AED',
                  border: '1.5px solid rgba(124,58,237,0.18)',
                  textDecoration: 'none',
                }}>
                お問い合わせ
              </Link>
            </div>
          </div>

          {/* 右：マスコット＋フローティングカード */}
          <div className="flex items-center justify-center order-1 lg:order-2 relative" style={{ minHeight: '460px' }}>

            {/* ペンギンマスコット（影なし） */}
            <img
              src="/images/背景透過 2.png"
              alt="Studismマスコット"
              className="animate-float-slow"
              style={{
                width: 'clamp(260px, 36vw, 440px)',
                height: 'auto',
                position: 'relative',
                zIndex: 1,
              }}
            />

            {/* SakuraEnglishカード */}
            <div className="absolute animate-float"
              style={{
                left: '0', top: '10%', zIndex: 2,
                background: 'rgba(255,255,255,0.96)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderRadius: '18px',
                padding: '12px 16px',
                boxShadow: '0 8px 32px rgba(124,58,237,0.12), 0 2px 8px rgba(0,0,0,0.06)',
                border: '1.5px solid rgba(255,255,255,1)',
                display: 'flex', alignItems: 'center', gap: '10px',
                animationDelay: '0.5s',
              }}>
              <img src="/images/sakuraenglish.png" alt="SakuraEnglish"
                style={{ width: 38, height: 38, borderRadius: '11px', flexShrink: 0 }} />
              <div>
                <p className="font-black text-xs" style={{ color: '#1E1B4B' }}>SakuraEnglish</p>
                <p style={{ fontSize: '10px', color: '#94A3B8', fontWeight: 600 }}>語学学習アプリ</p>
              </div>
            </div>

            {/* Timelyzeカード */}
            <div className="absolute animate-float"
              style={{
                right: '0', bottom: '18%', zIndex: 2,
                background: 'rgba(255,255,255,0.96)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderRadius: '18px',
                padding: '12px 16px',
                boxShadow: '0 8px 32px rgba(14,165,233,0.12), 0 2px 8px rgba(0,0,0,0.06)',
                border: '1.5px solid rgba(255,255,255,1)',
                display: 'flex', alignItems: 'center', gap: '10px',
                animationDelay: '2s',
              }}>
              <img src="/images/timelyze.png" alt="Timelyze"
                style={{ width: 38, height: 38, borderRadius: '11px', flexShrink: 0 }} />
              <div>
                <p className="font-black text-xs" style={{ color: '#1E1B4B' }}>Timelyze</p>
                <p style={{ fontSize: '10px', color: '#94A3B8', fontWeight: 600 }}>時間管理アプリ</p>
              </div>
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
