import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SCREENSHOTS = [
  '/images/screenshots/SakuraEnglish-ss01.webp',
  '/images/screenshots/SakuraEnglish-ss02.webp',
  '/images/screenshots/SakuraEnglish-ss03.webp',
];

const FEATURES = [
  { text: 'レベル別クイズで着実にステップアップ',   grad: 'linear-gradient(135deg,#7C3AED,#A855F7)' },
  { text: 'カスタム単語リストで自分だけの学習を',   grad: 'linear-gradient(135deg,#EC4899,#F97316)' },
  { text: '復習リマインダーで毎日続けられる',       grad: 'linear-gradient(135deg,#0EA5E9,#06B6D4)' },
  { text: 'ゲーム感覚で楽しく英語力アップ',         grad: 'linear-gradient(135deg,#10B981,#34D399)' },
  { text: '発音チェックでネイティブに近づこう',     grad: 'linear-gradient(135deg,#F59E0B,#FB923C)' },
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
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const feat = FEATURES[idx];
  const ssIdx = idx % SCREENSHOTS.length;

  return (
    <section className="relative overflow-hidden" style={{ background: '#5DCFEA', minHeight: 'calc(100vh - 68px)' }}>

      {/* ── 背景：学習記号 ── */}
      {[
        { s: '∑',     top: '6%',  left: '3%',  size: 52, rot: -15, op: 0.18, delay: '0s'   },
        { s: '∫',     top: '18%', left: '8%',  size: 44, rot: 10,  op: 0.15, delay: '0.5s' },
        { s: 'π',     top: '38%', left: '2%',  size: 48, rot: -8,  op: 0.18, delay: '1s'   },
        { s: '√',     top: '58%', left: '6%',  size: 40, rot: 5,   op: 0.15, delay: '1.5s' },
        { s: '∞',     top: '72%', left: '12%', size: 36, rot: -12, op: 0.18, delay: '0.8s' },
        { s: 'Δ',     top: '85%', left: '4%',  size: 44, rot: 8,   op: 0.15, delay: '2s'   },
        { s: 'θ',     top: '92%', left: '20%', size: 38, rot: -6,  op: 0.16, delay: '0.3s' },
        { s: 'E=mc²', top: '5%',  left: '22%', size: 22, rot: -10, op: 0.20, delay: '0.6s' },
        { s: 'α',     top: '14%', left: '30%', size: 42, rot: 12,  op: 0.15, delay: '1.2s' },
        { s: 'λ',     top: '30%', left: '25%', size: 36, rot: -5,  op: 0.15, delay: '1.8s' },
        { s: 'H₂O',   top: '48%', left: '20%', size: 24, rot: 8,   op: 0.20, delay: '0.4s' },
        { s: '≈',     top: '62%', left: '28%', size: 44, rot: -10, op: 0.16, delay: '2.2s' },
        { s: 'CO₂',   top: '78%', left: '22%', size: 22, rot: 6,   op: 0.20, delay: '1.1s' },
        { s: 'F=ma',  top: '88%', left: '35%', size: 20, rot: -8,  op: 0.20, delay: '0.7s' },
        { s: 'β',     top: '8%',  left: '48%', size: 40, rot: 15,  op: 0.14, delay: '1.4s' },
        { s: '±',     top: '22%', left: '55%', size: 46, rot: -12, op: 0.16, delay: '0.9s' },
        { s: 'pH',    top: '42%', left: '50%', size: 26, rot: 7,   op: 0.18, delay: '2.4s' },
        { s: '∂',     top: '68%', left: '52%', size: 42, rot: -9,  op: 0.15, delay: '0.2s' },
        { s: 'mol',   top: '82%', left: '48%', size: 22, rot: 11,  op: 0.18, delay: '1.6s' },
        { s: 'γ',     top: '10%', left: '68%', size: 38, rot: -14, op: 0.15, delay: '0.5s' },
        { s: 'NaCl',  top: '25%', left: '72%', size: 20, rot: 9,   op: 0.18, delay: '1.3s' },
        { s: 'ω',     top: '44%', left: '68%', size: 40, rot: -7,  op: 0.16, delay: '2.0s' },
        { s: '÷',     top: '60%', left: '74%', size: 44, rot: 13,  op: 0.15, delay: '0.6s' },
        { s: 'σ',     top: '75%', left: '68%', size: 36, rot: -11, op: 0.16, delay: '1.7s' },
        { s: 'v=λf',  top: '90%', left: '65%', size: 18, rot: 6,   op: 0.20, delay: '0.4s' },
        { s: 'φ',     top: '4%',  left: '82%', size: 42, rot: -8,  op: 0.15, delay: '1.0s' },
        { s: '×',     top: '18%', left: '88%', size: 40, rot: 20,  op: 0.16, delay: '2.1s' },
        { s: 'ε',     top: '35%', left: '84%', size: 36, rot: -15, op: 0.15, delay: '0.3s' },
        { s: '∇',     top: '55%', left: '88%', size: 40, rot: 8,   op: 0.16, delay: '1.5s' },
        { s: 'ℏ',     top: '70%', left: '82%', size: 38, rot: -10, op: 0.15, delay: '0.8s' },
        { s: 'O₂',    top: '82%', left: '88%', size: 22, rot: 12,  op: 0.18, delay: '2.3s' },
        { s: 'μ',     top: '94%', left: '80%', size: 36, rot: -6,  op: 0.15, delay: '1.2s' },
      ].map((item, i) => (
        <div key={i} className="absolute pointer-events-none select-none animate-float"
          style={{
            top: item.top, left: item.left,
            fontSize: item.size, fontWeight: 900,
            color: '#ffffff',
            opacity: item.op,
            transform: `rotate(${item.rot}deg)`,
            animationDelay: item.delay,
            fontFamily: 'Georgia, serif',
            lineHeight: 1,
          }}>
          {item.s}
        </div>
      ))}

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 flex flex-col" style={{ minHeight: 'inherit', paddingTop: 0, paddingBottom: 0 }}>

        {/* ══ 上段：機能テキスト（最上部固定） ══ */}
        <div className="pt-8 pb-4 text-center"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(8px)', transition: 'opacity 0.35s ease, transform 0.35s ease' }}>
          <h1 className="font-black"
            style={{
              fontSize: 'clamp(1.4rem, 2.8vw, 2.2rem)',
              letterSpacing: '-0.02em',
              color: '#1E1B4B',
            }}>
            {feat.text}
          </h1>
          <div className="flex justify-center gap-2 mt-5">
            {FEATURES.map((f, i) => (
              <button key={i} onClick={() => { setIdx(i); setVisible(true); }}
                style={{
                  width: i === idx ? 28 : 8, height: 8, borderRadius: 99,
                  background: i === idx ? feat.grad : 'rgba(124,58,237,0.2)',
                  border: 'none', padding: 0, cursor: 'pointer',
                  transition: 'width 0.3s ease',
                }} />
            ))}
          </div>
        </div>

        {/* ══ 下段：アイコン（左）＋スマホ（右） ══ */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center flex-1 pb-10">

          {/* ── 左：アイコン＋検索ボックス ── */}
          <div className="flex flex-col items-center justify-center gap-6 order-2 lg:order-1">
            <div className="relative animate-float-slow">
              <div className="absolute inset-0 animate-pulse-glow pointer-events-none" style={{
                background: 'radial-gradient(circle, rgba(124,58,237,0.22) 0%, transparent 65%)',
                transform: 'scale(1.7)', borderRadius: '50%',
              }} />
              <img
                src="/images/Studismicon.png"
                alt="Studism"
                style={{ width: 'clamp(220px, 30vw, 320px)', height: 'auto', position: 'relative', borderRadius: '28%', filter: 'drop-shadow(0 24px 56px rgba(124,58,237,0.32))' }}
              />
            </div>
            <div style={{ width: 'clamp(220px, 30vw, 320px)' }}>
              <div className="flex items-center gap-3 px-4 py-3.5 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(16px)', border: '1.5px solid #EDE9FE', boxShadow: '0 4px 20px rgba(124,58,237,0.10)' }}>
                <Search className="w-4 h-4 flex-shrink-0" style={{ color: '#A78BFA' }} />
                <span className="font-black text-sm" style={{ color: '#1E1B4B' }}>Studism</span>
                <span className="ml-auto text-[10px] font-bold px-2.5 py-1 rounded-full"
                  style={{ background: 'linear-gradient(135deg,#7C3AED,#A855F7)', color: '#fff' }}>
                  無料
                </span>
              </div>
            </div>
          </div>

          {/* ── 右：スマホ×2 ── */}
          <div className="flex items-center justify-center gap-14 order-1 lg:order-2">
            {[0, 1].map((offset) => {
              const ssIdx = (idx + offset) % SCREENSHOTS.length;
              const isMain = offset === 0;
              return (
                <div key={offset} className="relative flex-shrink-0"
                  style={{ width: 'clamp(200px, 26vw, 310px)' }}>
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-0 pointer-events-none"
                    style={{ width: '80%', height: 40, background: 'radial-gradient(ellipse, rgba(124,58,237,0.3), transparent 70%)', filter: 'blur(12px)' }} />
                  <div className={`relative rounded-[2.6rem] ${isMain ? 'animate-float' : 'animate-float-slow'}`}
                    style={{ padding: '8px 6px', background: 'linear-gradient(160deg,#3B1F8C,#1E1B4B)', boxShadow: isMain ? '0 32px 72px rgba(30,27,75,0.45), inset 0 1px 0 rgba(255,255,255,0.08)' : '0 20px 48px rgba(30,27,75,0.30), inset 0 1px 0 rgba(255,255,255,0.06)', animationDelay: isMain ? '0s' : '1s' }}>
                    <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-10 rounded-full" style={{ width: 64, height: 16, background: '#0D0B1E' }} />
                    <div className="absolute right-[-2px] top-16 rounded-r-sm" style={{ width: 2, height: 24, background: 'rgba(255,255,255,0.12)' }} />
                    <div className="absolute left-[-2px] top-14 rounded-l-sm" style={{ width: 2, height: 18, background: 'rgba(255,255,255,0.12)' }} />
                    <div className="absolute left-[-2px] top-20 rounded-l-sm" style={{ width: 2, height: 18, background: 'rgba(255,255,255,0.12)' }} />
                    <div className="rounded-[2.1rem] overflow-hidden" style={{ aspectRatio: '9/19.5', background: '#000' }}>
                      <img src={SCREENSHOTS[ssIdx]} alt="SakuraEnglish" className="w-full h-full object-cover"
                        style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.35s ease' }} />
                    </div>
                    <div className="absolute top-8 left-3 right-3 rounded-3xl pointer-events-none"
                      style={{ height: '30%', background: 'linear-gradient(180deg, rgba(255,255,255,0.04), transparent)' }} />
                  </div>
                </div>
              );
            })}
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
