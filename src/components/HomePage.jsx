import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BIRD       = '/images/背景透過 2.png';
const RAINBOW_BG = '/images/8E34414B-EDC1-41FA-A1EA-8A78ECF21D80 2.png';

/* ── rainbow divider ── */
const RainbowBar = () => (
  <div style={{ height: 8, background: 'linear-gradient(90deg,#ef4444,#f97316,#facc15,#4ade80,#60a5fa,#a855f7,#ec4899)', borderRadius: 0 }} />
);

/* ── section label ── */
const SectionLabel = ({ children, color = '#3b82f6' }) => (
  <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-black text-sm mb-4 text-white shadow-lg"
    style={{ background: color }}>
    {children}
  </div>
);

/* ════════════════════════
   HERO
════════════════════════ */
const Hero = () => (
  <section className="relative overflow-hidden" style={{ background: '#f0f8ff', minHeight: 'calc(100vh - 68px)' }}>

    {/* full-bleed rainbow background image */}
    <img
      src={RAINBOW_BG} alt="" aria-hidden
      className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
      style={{ opacity: 0.75 }}
    />
    {/* soft white gradient so left text stays readable */}
    <div className="absolute inset-0 pointer-events-none"
      style={{ background: 'linear-gradient(100deg,rgba(240,248,255,0.95) 0%,rgba(240,248,255,0.80) 40%,rgba(240,248,255,0.20) 70%,transparent 100%)' }} />

    <div className="container mx-auto px-6 md:px-14 lg:px-20 relative z-10 flex items-center" style={{ minHeight: 'inherit' }}>
      <div className="grid lg:grid-cols-2 items-end w-full gap-8 pt-10 pb-0">

        {/* left text */}
        <div className="space-y-7 pb-16 lg:pb-24">

          {/* rainbow badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-black shadow-lg"
            style={{ background: 'linear-gradient(135deg,#3b82f6,#a855f7)', color: '#fff' }}>
            🎉 学習アプリ — 完全無料！
          </div>

          <div>
            <h1 className="font-black leading-tight" style={{ fontSize: 'clamp(2.8rem,7vw,5.2rem)', color: '#1e3a8a' }}>
              Welcome to<br />
              <span style={{
                background: 'linear-gradient(135deg,#f97316,#facc15,#4ade80,#3b82f6,#a855f7)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>Studism!</span>
            </h1>
            <p className="mt-4 text-lg font-semibold leading-relaxed max-w-md" style={{ color: '#334155' }}>
              ツール・ヒント・コミュニティで学びをパワーアップ。<br />
              Studismと一緒に、学習を楽しくしよう！
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="#apps"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-black text-white text-base shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
              style={{ background: 'linear-gradient(135deg,#3b82f6,#2563eb)', boxShadow: '0 8px 28px rgba(59,130,246,0.5)' }}>
              Get Started
            </a>
            <a href="#about"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-black text-base shadow-md transition-all hover:scale-105 bg-white"
              style={{ color: '#2563eb', border: '3px solid #bfdbfe' }}>
              Learn More
            </a>
          </div>

          {/* mini badges */}
          <div className="flex flex-wrap gap-3 pt-1">
            {[
              { label: '📱 無料', bg: '#fef9c3', text: '#854d0e' },
              { label: '⭐ 4.8評価', bg: '#fce7f3', text: '#9d174d' },
              { label: '🍎 iOS対応', bg: '#e0f2fe', text: '#0369a1' },
              { label: '🤖 Android対応', bg: '#dcfce7', text: '#166534' },
            ].map((b, i) => (
              <span key={i} className="px-4 py-1.5 rounded-full text-sm font-black shadow-sm"
                style={{ background: b.bg, color: b.text }}>
                {b.label}
              </span>
            ))}
          </div>
        </div>

        {/* right: bird */}
        <div className="hidden lg:flex items-end justify-center pb-0 relative">
          <img src={BIRD} alt="Studismマスコット"
            className="relative z-10 animate-float-slow select-none"
            style={{ maxHeight: 480, objectFit: 'contain', filter: 'drop-shadow(0 20px 40px rgba(59,130,246,0.3))' }}
          />
        </div>
      </div>
    </div>
  </section>
);

/* ════════════════════════
   MARQUEE
════════════════════════ */
const MARQUEE = ['📚 LEARN','🚀 GROW','✏️ STUDY SMART','🎯 LEVEL UP','💡 HAVE FUN','🆓 FREE','📱 iOS & Android','⭐ 4.8 RATED'];
const Marquee = () => (
  <div style={{ background: '#1e3a8a' }}>
    <RainbowBar />
    <div className="py-3.5 overflow-hidden select-none">
      <div className="flex animate-marquee whitespace-nowrap">
        {[0,1].map(k => (
          <div key={k} className="flex items-center gap-8 px-8 flex-shrink-0">
            {MARQUEE.map((item, i) => (
              <span key={i} className="flex items-center gap-3 text-sm font-black tracking-widest">
                <span style={{ color: ['#facc15','#fb923c','#4ade80','#60a5fa','#f472b6','#a78bfa','#34d399','#fbbf24'][i % 8] }}>
                  {item}
                </span>
                <span style={{ color: 'rgba(255,255,255,0.25)' }}>✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
    <RainbowBar />
  </div>
);

/* ════════════════════════
   FEATURES
════════════════════════ */
const FEATURE_CARDS = [
  {
    emoji: '📖',
    title: 'Study Tools',
    desc: 'Powerful tools to help you stay organized and focused while studying.',
    btnLabel: 'Learn More',
    btnBg: 'linear-gradient(135deg,#3b82f6,#2563eb)',
    btnShadow: 'rgba(59,130,246,0.45)',
    cardBg: 'linear-gradient(160deg,#eff6ff,#dbeafe)',
    border: '#bfdbfe',
    titleColor: '#1e40af',
    icon: '/images/sakuraenglish.png',
    app: 'sakuraenglish',
  },
  {
    emoji: '💡',
    title: 'Study Tips',
    desc: 'Effective tips and techniques to improve your study habits.',
    btnLabel: 'Learn More',
    btnBg: 'linear-gradient(135deg,#f59e0b,#d97706)',
    btnShadow: 'rgba(245,158,11,0.45)',
    cardBg: 'linear-gradient(160deg,#fffbeb,#fef3c7)',
    border: '#fde68a',
    titleColor: '#92400e',
    icon: '/images/Studismicon.png',
    app: 'sakuraenglish',
  },
  {
    emoji: '🏆',
    title: 'Community Support',
    desc: 'Join our community of students and share your journey.',
    btnLabel: 'Learn More',
    btnBg: 'linear-gradient(135deg,#22c55e,#16a34a)',
    btnShadow: 'rgba(34,197,94,0.45)',
    cardBg: 'linear-gradient(160deg,#f0fdf4,#dcfce7)',
    border: '#bbf7d0',
    titleColor: '#14532d',
    icon: '/images/timelyze.png',
    app: 'timelyze',
  },
];

const FeaturesSection = () => (
  <section id="about" className="py-24 relative overflow-hidden" style={{ background: '#f8faff' }}>
    {/* rainbow top strip */}
    <div className="absolute top-0 left-0 w-full h-2 pointer-events-none"
      style={{ background: 'linear-gradient(90deg,#ef4444,#f97316,#facc15,#4ade80,#60a5fa,#a855f7)' }} />

    {/* decorative blobs */}
    <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full pointer-events-none"
      style={{ background: 'radial-gradient(circle,rgba(96,165,250,0.15),transparent 70%)', filter:'blur(40px)' }} />
    <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full pointer-events-none"
      style={{ background: 'radial-gradient(circle,rgba(168,85,247,0.12),transparent 70%)', filter:'blur(40px)' }} />

    <div className="container mx-auto px-6 md:px-14 lg:px-20 relative z-10">
      <div className="text-center mb-14 space-y-3">
        <SectionLabel color="linear-gradient(135deg,#a855f7,#6366f1)">✨ なんで楽しいの？</SectionLabel>
        <h2 className="font-black" style={{ fontSize:'clamp(2rem,5vw,3.2rem)', color:'#1e3a8a' }}>
          Welcome to Studism
        </h2>
        <p className="text-base font-semibold max-w-lg mx-auto" style={{ color:'#64748b' }}>
          学びを楽しくする3つの柱。今すぐ無料ではじめよう！
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-7 max-w-5xl mx-auto">
        {FEATURE_CARDS.map((c, i) => (
          <div key={i}
            className="rounded-3xl p-8 flex flex-col items-center text-center gap-5 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 group"
            style={{ background: c.cardBg, border: `2.5px solid ${c.border}` }}>

            {/* icon with rainbow ring */}
            <div className="relative">
              <div className="absolute inset-0 rounded-full"
                style={{ background:'linear-gradient(135deg,#ef4444,#facc15,#4ade80,#60a5fa,#a855f7)', padding:3, borderRadius:'50%' }} />
              <div className="relative w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-md overflow-hidden"
                style={{ outline: '3px solid white' }}>
                <img src={c.icon} alt={c.title} className="w-12 h-12 object-contain" />
              </div>
              <span className="absolute -top-1 -right-1 text-xl">{c.emoji}</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-black" style={{ color: c.titleColor }}>{c.title}</h3>
              <p className="text-sm leading-relaxed font-medium" style={{ color:'#475569' }}>{c.desc}</p>
            </div>

            <Link to={`/app/${c.app}`}
              className="w-full py-3 rounded-2xl font-black text-sm text-white shadow-lg transition-all hover:scale-105 hover:opacity-90"
              style={{ background: c.btnBg, boxShadow: `0 6px 20px ${c.btnShadow}` }}>
              {c.btnLabel}
            </Link>
          </div>
        ))}
      </div>
    </div>

    {/* rainbow bottom strip */}
    <div className="absolute bottom-0 left-0 w-full h-2 pointer-events-none"
      style={{ background:'linear-gradient(90deg,#a855f7,#60a5fa,#4ade80,#facc15,#f97316,#ef4444)' }} />
  </section>
);

/* ════════════════════════
   APPS
════════════════════════ */
const APPS = [
  {
    id: 'sakuraenglish', name: 'SakuraEnglish',
    catchcopy: '英語を、桜のように咲かせよう 🌸',
    desc: 'レベル別クイズ・カスタム単語リスト・復習機能で、スマホひとつで本格英語学習。',
    icon: '/images/sakuraenglish.png',
    badge: '語学学習',
    features: [{ e:'🎯', t:'レベル別クイズ' },{ e:'📝', t:'カスタム単語リスト' },{ e:'🔄', t:'スマート復習' }],
    gradient: 'linear-gradient(135deg,#ec4899,#f97316,#facc15)',
    shadow: 'rgba(236,72,153,0.4)',
    labelBg: 'rgba(255,255,255,0.25)',
  },
  {
    id: 'timelyze', name: 'Timelyze',
    catchcopy: '時間を、最強の武器にしよう ⏱',
    desc: '学習時間の記録・グラフ化・目標管理がこれ一本。毎日の習慣を楽しく続けられる。',
    icon: '/images/timelyze.png',
    badge: '生産性',
    features: [{ e:'⏱', t:'時間記録・追跡' },{ e:'📊', t:'データ可視化' },{ e:'🎯', t:'目標管理' }],
    gradient: 'linear-gradient(135deg,#6366f1,#22d3ee)',
    shadow: 'rgba(99,102,241,0.4)',
    labelBg: 'rgba(255,255,255,0.25)',
  },
];

const AppsSection = () => (
  <section id="apps" className="py-24" style={{ background:'#ffffff' }}>
    <div className="container mx-auto px-6 md:px-14 lg:px-20">
      <div className="text-center mb-14 space-y-3">
        <SectionLabel color="linear-gradient(135deg,#f97316,#facc15)">🚀 アプリ紹介</SectionLabel>
        <h2 className="font-black" style={{ fontSize:'clamp(2rem,5vw,3.2rem)', color:'#1e3a8a' }}>
          2つのアプリで学びが変わる
        </h2>
      </div>

      <div className="space-y-8 max-w-4xl mx-auto">
        {APPS.map((app, i) => (
          <div key={app.id}
            className="group rounded-3xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-all duration-500"
            style={{ background: app.gradient, boxShadow: `0 20px 60px ${app.shadow}` }}>
            {/* gloss */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
              style={{ background:'linear-gradient(135deg,rgba(255,255,255,0.18) 0%,transparent 50%)' }} />

            <div className="relative p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
              {/* icon */}
              <div className="flex-shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-[2rem] bg-white/25 backdrop-blur-sm flex items-center justify-center shadow-2xl border-2 border-white/40 group-hover:rotate-3 transition-transform duration-300">
                <img src={app.icon} alt={app.name} className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-xl" />
              </div>

              {/* text */}
              <div className="flex-1 text-center md:text-left space-y-3">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-black text-white/90 bg-white/20 border border-white/30">{app.badge}</span>
                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">{app.name}</h3>
                <p className="font-bold text-white/80">{app.catchcopy}</p>
                <p className="text-white/70 text-sm leading-relaxed max-w-md">{app.desc}</p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {app.features.map((f, j) => (
                    <span key={j} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 border border-white/30 text-white text-xs font-bold">
                      {f.e} {f.t}
                    </span>
                  ))}
                </div>
              </div>

              {/* cta */}
              <div className="flex-shrink-0 flex flex-col gap-3">
                <Link to={`/app/${app.id}`}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-black text-sm transition-all hover:scale-105 group/btn"
                  style={{ background:'rgba(255,255,255,0.95)', color:'#1e3a8a', boxShadow:'0 4px 20px rgba(0,0,0,0.15)' }}>
                  詳細を見る <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                </Link>
                <button className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm text-white bg-white/15 border border-white/30 hover:bg-white/25 transition-colors">
                  <Download className="w-4 h-4" /> ダウンロード
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ════════════════════════
   MASCOT CTA
════════════════════════ */
const MascotCTA = () => (
  <section className="relative overflow-hidden py-0" style={{ background:'#f0f8ff' }}>
    <RainbowBar />
    <div className="relative overflow-hidden" style={{ background:'linear-gradient(135deg,#1e3a8a 0%,#312e81 50%,#1e1b4b 100%)' }}>
      {/* glow blobs */}
      <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full pointer-events-none"
        style={{ background:'radial-gradient(circle,rgba(250,204,21,0.15),transparent 70%)', filter:'blur(50px)' }} />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full pointer-events-none"
        style={{ background:'radial-gradient(circle,rgba(236,72,153,0.15),transparent 70%)', filter:'blur(50px)' }} />

      <div className="container mx-auto px-6 md:px-14 lg:px-20 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-5xl mx-auto">
          {/* bird */}
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 rounded-full blur-3xl"
              style={{ background:'radial-gradient(circle,rgba(250,204,21,0.35),transparent 70%)' }} />
            <img src={BIRD} alt="マスコット"
              className="relative z-10 animate-float"
              style={{ width:220, filter:'drop-shadow(0 16px 40px rgba(250,204,21,0.5))' }} />
          </div>

          {/* text */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div>
              {/* rainbow heading */}
              <p className="font-black text-lg mb-1 tracking-wide uppercase"
                style={{ background:'linear-gradient(90deg,#facc15,#fb923c,#f472b6)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                さあ、はじめよう！🎉
              </p>
              <h2 className="font-black leading-tight text-white" style={{ fontSize:'clamp(2rem,5vw,3.2rem)' }}>
                今日から学びが<br />
                <span style={{ background:'linear-gradient(135deg,#facc15,#fb923c,#f472b6,#a78bfa)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                  もっと楽しくなる。
                </span>
              </h2>
            </div>
            <p className="text-lg leading-relaxed" style={{ color:'rgba(255,255,255,0.7)' }}>
              無料で今すぐダウンロード。<br />英語学習も時間管理も、楽しく続けられる。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#apps"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-black text-base text-white transition-all hover:scale-105"
                style={{ background:'linear-gradient(135deg,#facc15,#f97316)', color:'#1e1b4b', boxShadow:'0 8px 32px rgba(250,204,21,0.45)' }}>
                🚀 無料でダウンロード
              </a>
              <Link to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-white text-base transition-all hover:scale-105"
                style={{ border:'2.5px solid rgba(255,255,255,0.3)', background:'rgba(255,255,255,0.08)' }}>
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <RainbowBar />
  </section>
);

/* ════════════════════════
   NEWS
════════════════════════ */
const NEWS = [
  { date:'2025年11月22日', title:'公式ウェブサイトをリニューアルオープンしました', type:'お知らせ', emoji:'🎉', color:'#3b82f6', bg:'#eff6ff', border:'#bfdbfe' },
  { date:'2025年11月20日', title:'お問い合わせフォームのシステムを更新しました', type:'アップデート', emoji:'🔧', color:'#a855f7', bg:'#faf5ff', border:'#e9d5ff' },
  { date:'2025年11月15日', title:'「SakuraEnglish」に新しい単語リストを追加しました', type:'アップデート', emoji:'📚', color:'#22c55e', bg:'#f0fdf4', border:'#bbf7d0' },
];

const NewsSection = () => (
  <section id="news" className="py-24 relative overflow-hidden" style={{ background:'#f8faff' }}>
    <div className="absolute top-0 left-0 w-full h-2 pointer-events-none"
      style={{ background:'linear-gradient(90deg,#ef4444,#f97316,#facc15,#4ade80,#60a5fa,#a855f7)' }} />

    <div className="container mx-auto px-6 md:px-14 lg:px-20 relative z-10">
      <div className="text-center mb-14 space-y-3">
        <SectionLabel color="linear-gradient(135deg,#22c55e,#3b82f6)">📢 最新情報</SectionLabel>
        <h2 className="font-black" style={{ fontSize:'clamp(2rem,4vw,3rem)', color:'#1e3a8a' }}>
          お知らせ
        </h2>
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        {NEWS.map((item, i) => (
          <div key={i}
            className="flex items-start gap-4 rounded-2xl p-5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            style={{ background: item.bg, border:`2.5px solid ${item.border}` }}>
            <span className="text-3xl flex-shrink-0">{item.emoji}</span>
            <div className="flex-1 space-y-1.5 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full text-xs font-black text-white shadow-sm" style={{ background: item.color }}>{item.type}</span>
                <span className="text-xs font-mono font-bold" style={{ color:'#94a3b8' }}>{item.date}</span>
              </div>
              <p className="text-sm font-bold leading-relaxed" style={{ color:'#1e3a8a' }}>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ════════════════════════
   PAGE
════════════════════════ */
const HomePage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen" style={{ background:'#f0f8ff' }}>
      <Header />
      <Hero />
      <Marquee />
      <FeaturesSection />
      <AppsSection />
      <MascotCTA />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default HomePage;
