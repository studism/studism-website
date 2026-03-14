import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/* ════════════════════════════
   HERO
════════════════════════════ */
const FEATURES = [
  { label: 'レベル別クイズで着実にステップアップ',   color: '#7C3AED', bg: '#EDE9FE' },
  { label: 'カスタム単語リストで自分だけの学習を',   color: '#DB2777', bg: '#FCE7F3' },
  { label: '復習リマインダーで毎日続けられる',       color: '#0369A1', bg: '#E0F2FE' },
  { label: 'ゲーム感覚で楽しく英語力アップ',         color: '#166534', bg: '#DCFCE7' },
  { label: '発音チェック機能でネイティブに近づこう', color: '#92400E', bg: '#FEF3C7' },
];

const SCREENSHOTS = [
  '/images/screenshots/SakuraEnglish-ss01.webp',
  '/images/screenshots/SakuraEnglish-ss02.webp',
  '/images/screenshots/SakuraEnglish-ss03.webp',
];

function Hero() {
  const [featureIdx, setFeatureIdx] = useState(0);
  const [ssIdx, setSsIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setFeatureIdx(i => (i + 1) % FEATURES.length);
        setSsIdx(i => (i + 1) % SCREENSHOTS.length);
        setFade(true);
      }, 300);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const feat = FEATURES[featureIdx];

  return (
    <section className="relative overflow-hidden" style={{ minHeight: 'calc(100vh - 68px)', background: '#FAFAFE' }}>

      {/* 背景ブロブ */}
      <div className="absolute pointer-events-none" style={{ top: '-10%', right: '-6%', width: 480, height: 480, borderRadius: '60% 40% 55% 45% / 45% 60% 40% 55%', background: 'linear-gradient(135deg,#FFB3C8,#FF8FAB)', opacity: 0.22, filter: 'blur(2px)' }} />
      <div className="absolute pointer-events-none" style={{ bottom: '-12%', left: '-5%', width: 400, height: 400, borderRadius: '40% 60% 45% 55% / 55% 40% 60% 45%', background: 'linear-gradient(135deg,#B5F0E0,#67E8B0)', opacity: 0.28, filter: 'blur(2px)' }} />
      <div className="absolute pointer-events-none" style={{ top: '50%', right: '28%', width: 200, height: 200, borderRadius: '50%', background: '#FFE5A0', opacity: 0.32, filter: 'blur(1px)' }} />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 flex flex-col justify-center" style={{ minHeight: 'inherit' }}>

        {/* ── 上段：左＝Studismアイコン ／ 右＝スマホ ── */}
        <div className="grid lg:grid-cols-2 gap-10 items-center pt-16 pb-10">

          {/* 左：Studismアイコン＋キャッチコピー */}
          <div className="flex flex-col items-center lg:items-start gap-7">
            <div className="animate-float-slow">
              <img
                src="/images/Studismicon.png"
                alt="Studism"
                className="drop-shadow-2xl"
                style={{ width: 'clamp(180px, 28vw, 300px)', height: 'auto' }}
              />
            </div>
            <div className="text-center lg:text-left space-y-3">
              <h1 className="font-black leading-tight" style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', letterSpacing: '-0.04em', color: '#1E1B4B' }}>
                勉強が、もっと
                <br />
                <span style={{ background: 'linear-gradient(135deg,#A78BFA 0%,#F472B6 50%,#FB923C 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  たのしく。
                </span>
              </h1>
              <p className="text-base leading-relaxed" style={{ color: '#64748B', maxWidth: '24rem' }}>
                Studismのアプリで、英語学習も時間管理も
                自分のペースで楽しく続けられる。
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <a href="#news"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-black text-sm text-white transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                style={{ background: 'linear-gradient(135deg,#7C3AED,#A855F7)', boxShadow: '0 8px 28px rgba(124,58,237,0.35)' }}>
                <Zap className="w-4 h-4" />
                今すぐはじめる
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-black text-sm transition-all hover:scale-105"
                style={{ background: '#fff', color: '#7C3AED', border: '2.5px solid #DDD6FE', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
                お問い合わせ
              </Link>
            </div>
          </div>

          {/* 右：スマホフレーム＋スクリーンショット */}
          <div className="flex items-center justify-center">
            <div className="relative animate-float" style={{ width: 'clamp(200px, 26vw, 280px)' }}>
              {/* スマホ外枠 */}
              <div className="relative rounded-[2.8rem] overflow-hidden"
                style={{ padding: '10px', background: 'linear-gradient(145deg,#2D2064,#7C3AED)', boxShadow: '0 30px 80px rgba(124,58,237,0.4), 0 8px 24px rgba(0,0,0,0.2)' }}>
                {/* インカメラ */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 w-20 h-5 rounded-full" style={{ background: '#1A1040' }} />
                {/* スクリーン */}
                <div className="rounded-[2.2rem] overflow-hidden" style={{ aspectRatio: '9/19.5', background: '#000' }}>
                  <img
                    src={SCREENSHOTS[ssIdx]}
                    alt="SakuraEnglish screenshot"
                    className="w-full h-full object-cover transition-opacity duration-300"
                    style={{ opacity: fade ? 1 : 0 }}
                  />
                </div>
              </div>

              {/* 浮かぶバッジ：アプリ名 */}
              <div className="absolute -right-6 top-8 rounded-2xl px-3.5 py-2.5 animate-float"
                style={{ background: '#fff', boxShadow: '0 8px 28px rgba(236,72,153,0.2)', border: '2px solid #FCE7F3', animationDelay: '0.4s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg,#EC4899,#F97316)' }}>
                    <img src="/images/sakuraenglish.png" alt="" className="w-5 h-5 object-contain" />
                  </div>
                  <div>
                    <p className="text-xs font-black" style={{ color: '#1E1B4B' }}>SakuraEnglish</p>
                    <p className="text-xs" style={{ color: '#94A3B8' }}>語学学習</p>
                  </div>
                </div>
              </div>

              {/* 評価バッジ */}
              <div className="absolute -left-6 bottom-16 rounded-2xl px-3 py-2 animate-float"
                style={{ background: '#FFFBEB', boxShadow: '0 6px 20px rgba(251,191,36,0.25)', border: '2px solid #FDE68A', animationDelay: '1s' }}>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3" viewBox="0 0 20 20" fill="#FBBF24">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-xs font-black ml-0.5" style={{ color: '#92400E' }}>4.8</span>
                </div>
              </div>

              {/* 装飾ドット */}
              <div className="absolute rounded-full animate-pulse-glow" style={{ top: '20%', left: '-14px', width: 14, height: 14, background: '#F472B6' }} />
              <div className="absolute rounded-full animate-pulse-glow" style={{ bottom: '30%', right: '-12px', width: 11, height: 11, background: '#34D399', animationDelay: '0.8s' }} />
            </div>
          </div>
        </div>

        {/* ── 下段：機能テキスト切り替え ── */}
        <div className="pb-16 flex justify-center">
          <div className="rounded-3xl px-8 py-5 text-center transition-all duration-300"
            style={{
              background: feat.bg,
              border: `2px solid ${feat.color}22`,
              boxShadow: `0 8px 32px ${feat.color}18`,
              minWidth: 'clamp(260px, 60vw, 540px)',
              opacity: fade ? 1 : 0,
              transform: fade ? 'translateY(0)' : 'translateY(8px)',
              transition: 'opacity 0.3s ease, transform 0.3s ease',
            }}>
            <p className="text-base md:text-lg font-black" style={{ color: feat.color }}>
              {feat.label}
            </p>
            {/* インジケーター */}
            <div className="flex justify-center gap-1.5 mt-3">
              {FEATURES.map((_, i) => (
                <div key={i} className="rounded-full transition-all duration-300"
                  style={{ width: i === featureIdx ? 20 : 6, height: 6, background: i === featureIdx ? feat.color : `${feat.color}40` }} />
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
