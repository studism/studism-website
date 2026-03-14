import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/* ════════════════════════════
   HERO
════════════════════════════ */
const Hero = () => (
  <section className="relative overflow-hidden" style={{ minHeight: 'calc(100vh - 68px)', background: '#FAFAFE' }}>

    {/* ── 背景のカラフルなブロブ ── */}
    <div className="absolute pointer-events-none" style={{ top: '-12%', right: '-8%', width: 500, height: 500, borderRadius: '60% 40% 55% 45% / 45% 60% 40% 55%', background: 'linear-gradient(135deg, #FFB3C8, #FF8FAB)', opacity: 0.25, filter: 'blur(2px)' }} />
    <div className="absolute pointer-events-none" style={{ bottom: '-14%', left: '-6%', width: 420, height: 420, borderRadius: '40% 60% 45% 55% / 55% 40% 60% 45%', background: 'linear-gradient(135deg, #B5F0E0, #67E8B0)', opacity: 0.3, filter: 'blur(2px)' }} />
    <div className="absolute pointer-events-none" style={{ top: '55%', right: '30%', width: 220, height: 220, borderRadius: '50%', background: '#FFE5A0', opacity: 0.35, filter: 'blur(1px)' }} />
    <div className="absolute pointer-events-none" style={{ top: '8%', left: '32%', width: 140, height: 140, borderRadius: '50%', background: '#C4B5FD', opacity: 0.3, filter: 'blur(1px)' }} />

    <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 flex items-center" style={{ minHeight: 'inherit' }}>
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-16">

        {/* ── 左：テキスト ── */}
        <div className="space-y-8">

          {/* バッジ */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-black text-sm"
            style={{ background: 'linear-gradient(135deg, #EDE9FE, #DDD6FE)', color: '#6D28D9' }}>
            <Sparkles className="w-4 h-4" />
            学習アプリ — 完全無料
          </div>

          {/* ヘッドライン */}
          <div>
            <p className="text-lg font-bold mb-2" style={{ color: '#94A3B8' }}>勉強が、もっと</p>
            <h1 className="font-black leading-none" style={{ fontSize: 'clamp(3.5rem, 9vw, 7rem)', letterSpacing: '-0.04em', color: '#1E1B4B' }}>
              たのしく
              <br />
              <span style={{ background: 'linear-gradient(135deg, #A78BFA 0%, #F472B6 50%, #FB923C 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                なろう。
              </span>
            </h1>
          </div>

          <p className="text-lg leading-relaxed" style={{ color: '#64748B', maxWidth: '26rem' }}>
            Studismのアプリで、英語学習も時間管理も
            自分のペースで楽しく続けられる。
          </p>

          {/* ボタン */}
          <div className="flex flex-wrap gap-4">
            <a href="#news"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-black text-sm text-white transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              style={{ background: 'linear-gradient(135deg, #7C3AED, #A855F7)', boxShadow: '0 8px 28px rgba(124,58,237,0.35)' }}>
              <Zap className="w-4 h-4" />
              今すぐはじめる
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-black text-sm transition-all hover:scale-105"
              style={{ background: '#fff', color: '#7C3AED', border: '2.5px solid #DDD6FE', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
              お問い合わせ
            </Link>
          </div>

          {/* ミニスタット */}
          <div className="flex items-center gap-6 pt-2 flex-wrap">
            {[
              { n: '2',      l: 'アプリ公開中', bg: '#EDE9FE', c: '#6D28D9' },
              { n: '4.8',    l: '平均評価',     bg: '#FEF3C7', c: '#92400E' },
              { n: '無料',   l: '完全無料',     bg: '#DCFCE7', c: '#166534' },
            ].map((s, i) => (
              <div key={i} className="px-4 py-2.5 rounded-2xl text-center" style={{ background: s.bg }}>
                <div className="text-xl font-black" style={{ color: s.c }}>{s.n}</div>
                <div className="text-xs font-bold" style={{ color: s.c, opacity: 0.7 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 右：カラフルなビジュアル ── */}
        <div className="flex items-center justify-center relative" style={{ minHeight: 460 }}>

          {/* メインの大きな円 */}
          <div className="absolute rounded-full animate-float-slow"
            style={{ width: 320, height: 320, background: 'linear-gradient(145deg, #EDE9FE 0%, #DDD6FE 50%, #C4B5FD 100%)', boxShadow: '0 24px 60px rgba(124,58,237,0.2)' }} />

          {/* 中央カード */}
          <div className="relative z-10 rounded-[2.5rem] px-10 py-10 text-center animate-float-slow"
            style={{ background: '#fff', boxShadow: '0 20px 60px rgba(124,58,237,0.15)', border: '2px solid #EDE9FE', minWidth: 220, animationDelay: '0.3s' }}>
            <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #7C3AED, #A855F7)' }}>
              <span className="font-black text-white text-2xl">S</span>
            </div>
            <p className="font-black text-lg" style={{ color: '#1E1B4B' }}>Studism</p>
            <p className="text-xs font-bold mt-1" style={{ color: '#94A3B8' }}>Learn · Grow · Shine</p>
          </div>

          {/* 浮かぶ小カード — SakuraEnglish */}
          <div className="absolute z-20 rounded-2xl px-4 py-3 animate-float"
            style={{ top: '6%', right: '4%', background: '#fff', boxShadow: '0 8px 28px rgba(244,114,182,0.2)', border: '2px solid #FCE7F3' }}>
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #EC4899, #F97316)' }}>
                <img src="/images/sakuraenglish.png" alt="SakuraEnglish" className="w-6 h-6 object-contain" />
              </div>
              <div>
                <p className="text-xs font-black" style={{ color: '#1E1B4B' }}>SakuraEnglish</p>
                <p className="text-xs" style={{ color: '#94A3B8' }}>語学学習</p>
              </div>
            </div>
          </div>

          {/* 浮かぶ小カード — Timelyze */}
          <div className="absolute z-20 rounded-2xl px-4 py-3 animate-float"
            style={{ bottom: '10%', left: '2%', background: '#fff', boxShadow: '0 8px 28px rgba(99,102,241,0.2)', border: '2px solid #E0E7FF', animationDelay: '1.5s' }}>
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #6366F1, #06B6D4)' }}>
                <img src="/images/timelyze.png" alt="Timelyze" className="w-6 h-6 object-contain" />
              </div>
              <div>
                <p className="text-xs font-black" style={{ color: '#1E1B4B' }}>Timelyze</p>
                <p className="text-xs" style={{ color: '#94A3B8' }}>時間管理</p>
              </div>
            </div>
          </div>

          {/* 評価バッジ */}
          <div className="absolute z-20 rounded-2xl px-4 py-2.5 animate-float"
            style={{ bottom: '22%', right: '0%', background: '#FFFBEB', boxShadow: '0 6px 20px rgba(251,191,36,0.25)', border: '2px solid #FDE68A', animationDelay: '0.8s' }}>
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3" viewBox="0 0 20 20" fill="#FBBF24"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <span className="text-xs font-black" style={{ color: '#92400E' }}>4.8</span>
            </div>
          </div>

          {/* 装飾の小さな円 */}
          <div className="absolute rounded-full animate-pulse-glow" style={{ top: '30%', left: '8%', width: 16, height: 16, background: '#F472B6' }} />
          <div className="absolute rounded-full animate-pulse-glow" style={{ top: '70%', right: '10%', width: 12, height: 12, background: '#34D399', animationDelay: '1s' }} />
          <div className="absolute rounded-full animate-pulse-glow" style={{ top: '15%', left: '22%', width: 10, height: 10, background: '#FBBF24', animationDelay: '0.5s' }} />
        </div>

      </div>
    </div>
  </section>
);

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
