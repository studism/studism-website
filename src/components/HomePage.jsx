import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/* ════════════════════════════
   HERO
════════════════════════════ */
const FEATURES = [
  { icon: '✦', label: 'レベル別クイズで着実にステップアップ',   sub: 'Adaptive Quiz',       color: '#7C3AED', light: '#EDE9FE' },
  { icon: '✦', label: 'カスタム単語リストで自分だけの学習を',   sub: 'Custom Wordlist',     color: '#DB2777', light: '#FCE7F3' },
  { icon: '✦', label: '復習リマインダーで毎日続けられる',       sub: 'Smart Reminder',      color: '#0369A1', light: '#E0F2FE' },
  { icon: '✦', label: 'ゲーム感覚で楽しく英語力アップ',         sub: 'Gamified Learning',   color: '#059669', light: '#DCFCE7' },
  { icon: '✦', label: '発音チェックでネイティブに近づこう',     sub: 'Pronunciation Check', color: '#B45309', light: '#FEF3C7' },
];

const SCREENSHOTS = [
  '/images/screenshots/SakuraEnglish-ss01.webp',
  '/images/screenshots/SakuraEnglish-ss02.webp',
  '/images/screenshots/SakuraEnglish-ss03.webp',
];

const STATS = [
  { value: '2',   label: 'Apps' },
  { value: '4.8', label: 'Rating' },
  { value: 'Free', label: 'Always' },
];

function Hero() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx(i => (i + 1) % FEATURES.length);
        setVisible(true);
      }, 350);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  const feat = FEATURES[idx];

  return (
    <section className="relative overflow-hidden" style={{ background: '#FAFAFE', minHeight: 'calc(100vh - 68px)' }}>

      {/* ── 背景：メッシュグラデーション ── */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 70% 60% at 80% 10%, rgba(167,139,250,0.13) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 10% 80%, rgba(244,114,182,0.10) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 60% 90%, rgba(251,191,36,0.08) 0%, transparent 60%)',
      }} />
      {/* グリッドパターン */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(124,58,237,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.03) 1px, transparent 1px)',
        backgroundSize: '56px 56px',
      }} />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 flex flex-col justify-center" style={{ minHeight: 'inherit' }}>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center py-16">

          {/* ══ 左カラム ══ */}
          <div className="flex flex-col items-center lg:items-start gap-8 order-2 lg:order-1">

            {/* アイコン */}
            <div className="relative animate-float-slow">
              {/* グロウリング */}
              <div className="absolute inset-0 rounded-full animate-pulse-glow" style={{
                background: 'radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)',
                transform: 'scale(1.6)',
              }} />
              <img
                src="/images/Studismicon.png"
                alt="Studism"
                style={{ width: 'clamp(160px, 22vw, 240px)', height: 'auto', position: 'relative', borderRadius: '28%', filter: 'drop-shadow(0 20px 48px rgba(124,58,237,0.30))' }}
              />
            </div>

            {/* コピー */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black tracking-wider"
                style={{ background: 'linear-gradient(135deg,#EDE9FE,#DDD6FE)', color: '#6D28D9', border: '1px solid #C4B5FD' }}>
                <Sparkles className="w-3 h-3" />
                完全無料の学習アプリ
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <a href="#news"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-black text-sm text-white transition-all duration-200 hover:scale-105 group"
                style={{ background: 'linear-gradient(135deg,#7C3AED,#A855F7)', boxShadow: '0 8px 32px rgba(124,58,237,0.38), inset 0 1px 0 rgba(255,255,255,0.15)' }}>
                アプリを見る
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-black text-sm transition-all duration-200 hover:scale-105"
                style={{ background: '#fff', color: '#7C3AED', border: '2px solid #DDD6FE', boxShadow: '0 4px 16px rgba(124,58,237,0.08)' }}>
                お問い合わせ
              </Link>
            </div>

            {/* スタット */}
            <div className="flex items-center gap-2">
              {STATS.map((s, i) => (
                <React.Fragment key={i}>
                  <div className="text-center px-4 py-2 rounded-2xl" style={{ background: 'rgba(124,58,237,0.05)', border: '1.5px solid #EDE9FE' }}>
                    <div className="text-lg font-black" style={{ color: '#1E1B4B' }}>{s.value}</div>
                    <div className="text-[10px] font-bold uppercase tracking-wider" style={{ color: '#94A3B8' }}>{s.label}</div>
                  </div>
                  {i < STATS.length - 1 && <div style={{ width: 1, height: 28, background: '#E2E8F0' }} />}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* ══ 右カラム：スマホ ══ */}
          <div className="flex items-center justify-center order-1 lg:order-2">
            <div className="relative" style={{ width: 'clamp(220px, 28vw, 300px)' }}>

              {/* グロウ */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 pointer-events-none"
                style={{ width: '80%', height: 60, background: 'radial-gradient(ellipse, rgba(124,58,237,0.35), transparent 70%)', filter: 'blur(16px)' }} />

              {/* スマホ本体 */}
              <div className="relative animate-float rounded-[3rem]"
                style={{
                  padding: '10px 8px',
                  background: 'linear-gradient(160deg,#3B1F8C,#1E1B4B)',
                  boxShadow: '0 40px 90px rgba(30,27,75,0.45), 0 8px 20px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)',
                }}>

                {/* Dynamic Island */}
                <div className="absolute top-3.5 left-1/2 -translate-x-1/2 z-10 rounded-full"
                  style={{ width: 90, height: 22, background: '#0D0B1E' }} />

                {/* サイドボタン装飾 */}
                <div className="absolute right-[-3px] top-24 rounded-r-sm" style={{ width: 3, height: 32, background: 'rgba(255,255,255,0.12)' }} />
                <div className="absolute left-[-3px] top-20 rounded-l-sm" style={{ width: 3, height: 24, background: 'rgba(255,255,255,0.12)' }} />
                <div className="absolute left-[-3px] top-28 rounded-l-sm" style={{ width: 3, height: 24, background: 'rgba(255,255,255,0.12)' }} />

                {/* スクリーン */}
                <div className="rounded-[2.4rem] overflow-hidden" style={{ aspectRatio: '9/19.5', background: '#000' }}>
                  <img
                    src={SCREENSHOTS[idx % SCREENSHOTS.length]}
                    alt="SakuraEnglish"
                    className="w-full h-full object-cover"
                    style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.35s ease' }}
                  />
                </div>

                {/* 画面上のグレア */}
                <div className="absolute top-10 left-4 right-4 rounded-3xl pointer-events-none"
                  style={{ height: '35%', background: 'linear-gradient(180deg, rgba(255,255,255,0.04), transparent)' }} />
              </div>

              {/* アプリバッジ */}
              <div className="absolute z-20 animate-float"
                style={{ top: '10%', right: '-18%', animationDelay: '0.5s' }}>
                <div className="rounded-2xl px-3.5 py-2.5"
                  style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)', boxShadow: '0 8px 32px rgba(236,72,153,0.18), 0 2px 8px rgba(0,0,0,0.06)', border: '1.5px solid rgba(249,168,212,0.4)' }}>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg,#EC4899,#F97316)' }}>
                      <img src="/images/sakuraenglish.png" alt="" className="w-5 h-5 object-contain" />
                    </div>
                    <div>
                      <p className="text-[11px] font-black leading-tight" style={{ color: '#1E1B4B' }}>SakuraEnglish</p>
                      <p className="text-[10px] font-medium" style={{ color: '#94A3B8' }}>語学学習</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 評価バッジ */}
              <div className="absolute z-20 animate-float"
                style={{ bottom: '18%', left: '-16%', animationDelay: '1.2s' }}>
                <div className="rounded-2xl px-3.5 py-2.5"
                  style={{ background: 'rgba(255,251,235,0.95)', backdropFilter: 'blur(12px)', boxShadow: '0 6px 24px rgba(251,191,36,0.22)', border: '1.5px solid #FDE68A' }}>
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3" viewBox="0 0 20 20" fill="#FBBF24">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-[11px] font-black" style={{ color: '#92400E' }}>4.8</span>
                  </div>
                  <p className="text-[9px] font-bold mt-0.5" style={{ color: '#B45309' }}>App Store Rating</p>
                </div>
              </div>

              {/* 装飾ドット */}
              <div className="absolute rounded-full animate-pulse-glow" style={{ top: '28%', left: '-20px', width: 12, height: 12, background: '#A78BFA' }} />
              <div className="absolute rounded-full animate-pulse-glow" style={{ bottom: '38%', right: '-16px', width: 9, height: 9, background: '#34D399', animationDelay: '0.7s' }} />
              <div className="absolute rounded-full animate-pulse-glow" style={{ top: '62%', left: '-10px', width: 7, height: 7, background: '#FBBF24', animationDelay: '1.4s' }} />
            </div>
          </div>

        </div>

        {/* ══ 機能テキスト切り替えバー ══ */}
        <div className="pb-16 flex justify-center">
          <div className="relative overflow-hidden rounded-2xl px-6 py-4 w-full"
            style={{
              maxWidth: 600,
              background: 'rgba(255,255,255,0.85)',
              backdropFilter: 'blur(16px)',
              border: '1.5px solid rgba(124,58,237,0.12)',
              boxShadow: '0 4px 24px rgba(124,58,237,0.08), 0 1px 4px rgba(0,0,0,0.04)',
            }}>
            {/* 左アクセントバー */}
            <div className="absolute left-0 top-3 bottom-3 w-1 rounded-full transition-all duration-500"
              style={{ background: `linear-gradient(180deg, ${feat.color}, ${feat.color}80)` }} />

            <div className="flex items-center gap-4 pl-3"
              style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(6px)', transition: 'opacity 0.35s ease, transform 0.35s ease' }}>
              <div className="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center font-black text-sm text-white"
                style={{ background: `linear-gradient(135deg, ${feat.color}, ${feat.color}bb)`, boxShadow: `0 4px 12px ${feat.color}40` }}>
                ✦
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-black uppercase tracking-widest mb-0.5" style={{ color: feat.color, opacity: 0.7 }}>{feat.sub}</p>
                <p className="text-sm font-black leading-snug" style={{ color: '#1E1B4B' }}>{feat.label}</p>
              </div>
            </div>

            {/* インジケーター */}
            <div className="flex justify-center gap-1.5 mt-3">
              {FEATURES.map((f, i) => (
                <button key={i} onClick={() => { setIdx(i); setVisible(true); }}
                  className="rounded-full transition-all duration-300"
                  style={{ width: i === idx ? 22 : 6, height: 6, background: i === idx ? feat.color : '#E2E8F0', cursor: 'pointer', border: 'none', padding: 0 }} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ════════════════════════════
   MARQUEE
════════════════════════════ */
const WORDS  = ['STUDY SMART', 'LEVEL UP', 'STAY FOCUSED', 'HAVE FUN', 'FREE TO USE', 'iOS & ANDROID', 'LEARN DAILY', 'BE AWESOME'];
const COLORS = ['#7C3AED', '#EC4899', '#F97316', '#059669', '#2563EB', '#DB2777', '#D97706', '#7C3AED'];

const Marquee = () => (
  <div className="overflow-hidden select-none py-4"
    style={{ background: '#1E1B4B', borderTop: '3px solid #7C3AED', borderBottom: '3px solid #7C3AED' }}>
    <div className="flex animate-marquee whitespace-nowrap">
      {[0, 1].map(k => (
        <div key={k} className="flex items-center gap-10 px-10 flex-shrink-0">
          {WORDS.map((w, i) => (
            <span key={i} className="flex items-center gap-4 text-sm font-black tracking-widest">
              <span style={{ color: COLORS[i % 8] }}>{w}</span>
              <span style={{ color: 'rgba(255,255,255,0.15)' }}>◆</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);

/* ════════════════════════════
   NEWS
════════════════════════════ */
const NEWS = [
  { date: '2025年11月22日', title: '公式ウェブサイトをリニューアルオープンしました', type: 'お知らせ',    bg: '#EDE9FE', border: '#C4B5FD', c: '#6D28D9' },
  { date: '2025年11月20日', title: 'お問い合わせフォームのシステムを更新しました',    type: 'アップデート', bg: '#E0F2FE', border: '#7DD3FC', c: '#0369A1' },
  { date: '2025年11月15日', title: '「SakuraEnglish」に新しい単語リストを追加しました', type: 'アップデート', bg: '#FCE7F3', border: '#F9A8D4', c: '#9D174D' },
];

const NewsSection = () => (
  <section id="news" className="py-24 relative overflow-hidden" style={{ background: '#F8F7FF' }}>
    {/* 装飾ブロブ */}
    <div className="absolute pointer-events-none" style={{ top: 0, right: 0, width: 300, height: 300, borderRadius: '0 0 0 100%', background: 'linear-gradient(135deg, #EDE9FE, #DDD6FE)', opacity: 0.5 }} />
    <div className="absolute pointer-events-none" style={{ bottom: 0, left: 0, width: 240, height: 240, borderRadius: '0 100% 0 0', background: 'linear-gradient(135deg, #FCE7F3, #FBCFE8)', opacity: 0.5 }} />

    <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
      <div className="text-center mb-14 space-y-3">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-black text-sm"
          style={{ background: '#EDE9FE', color: '#6D28D9' }}>
          最新情報
        </div>
        <h2 className="font-black" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em', color: '#1E1B4B' }}>
          お知らせ
        </h2>
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        {NEWS.map((n, i) => (
          <div key={i}
            className="flex items-start gap-4 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            style={{ background: n.bg, border: `2px solid ${n.border}` }}>
            <div className="flex-1 space-y-1.5">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full text-xs font-black text-white" style={{ background: n.c }}>
                  {n.type}
                </span>
                <span className="text-xs font-bold" style={{ color: n.c, opacity: 0.6 }}>{n.date}</span>
              </div>
              <p className="text-sm font-bold leading-relaxed" style={{ color: '#1E1B4B' }}>{n.title}</p>
            </div>
            <ArrowRight className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: n.c }} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ════════════════════════════
   PAGE
════════════════════════════ */
export default function HomePage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div style={{ background: '#FAFAFE' }}>
      <Header />
      <Hero />
      <Marquee />
      <NewsSection />
      <Footer />
    </div>
  );
}
