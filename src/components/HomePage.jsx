import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Search } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/* ─── App data ─── */
const apps = [
  {
    id: 'sakuraenglish',
    name: 'SakuraEnglish',
    description: 'レベル別の英単語クイズで効率的に語彙力を強化。カスタム単語リストで自分だけの学習プランを作成。',
    icon: '/images/sakuraenglish.png',
    category: '語学学習',
    features: ['レベル別クイズ', 'カスタム単語リスト', '復習機能'],
    color: '#3b82f6',
    btnGradient: 'linear-gradient(135deg, #3b82f6, #2563eb)',
    shadow: 'rgba(59,130,246,0.35)',
  },
  {
    id: 'timelyze',
    name: 'Timelyze',
    description: '学習時間の記録・管理を簡単に。直感的な操作で学習習慣を身につけ、目標達成をサポート。',
    icon: '/images/timelyze.png',
    category: '生産性',
    features: ['時間記録・追跡', 'データ可視化', '目標管理'],
    color: '#f59e0b',
    btnGradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
    shadow: 'rgba(245,158,11,0.35)',
  },
];

/* ─── Floating bubbles config ─── */
const BUBBLES = [
  { size: 18, x: 8,  y: 12, delay: 0,   dur: 5,   color: '#f87171' },
  { size: 12, x: 15, y: 35, delay: 1.2, dur: 6,   color: '#fbbf24' },
  { size: 22, x: 88, y: 8,  delay: 0.5, dur: 7,   color: '#34d399' },
  { size: 14, x: 92, y: 30, delay: 2,   dur: 5.5, color: '#60a5fa' },
  { size: 10, x: 75, y: 15, delay: 0.8, dur: 6.5, color: '#a78bfa' },
  { size: 16, x: 60, y: 5,  delay: 1.5, dur: 4.5, color: '#f472b6' },
  { size: 8,  x: 45, y: 25, delay: 3,   dur: 5,   color: '#fbbf24' },
  { size: 20, x: 30, y: 10, delay: 0.3, dur: 7.5, color: '#34d399' },
  { size: 11, x: 82, y: 50, delay: 2.5, dur: 6,   color: '#f87171' },
  { size: 14, x: 5,  y: 55, delay: 1,   dur: 5.5, color: '#60a5fa' },
];

/* ─── Rainbow Wave SVG ─── */
const RainbowWave = ({ flip = false }) => (
  <div className={`w-full pointer-events-none select-none ${flip ? 'rotate-180' : ''}`} style={{ lineHeight: 0 }}>
    <svg viewBox="0 0 1440 180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
      <defs>
        <linearGradient id="rw1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#ef4444" />
          <stop offset="20%"  stopColor="#f97316" />
          <stop offset="40%"  stopColor="#facc15" />
          <stop offset="60%"  stopColor="#4ade80" />
          <stop offset="80%"  stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <linearGradient id="rw2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#f97316" />
          <stop offset="25%"  stopColor="#facc15" />
          <stop offset="50%"  stopColor="#34d399" />
          <stop offset="75%"  stopColor="#818cf8" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
        <linearGradient id="rw3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#fde68a" />
          <stop offset="33%"  stopColor="#6ee7b7" />
          <stop offset="66%"  stopColor="#93c5fd" />
          <stop offset="100%" stopColor="#f9a8d4" />
        </linearGradient>
      </defs>
      {/* Main thick ribbon */}
      <path d="M0,120 C200,40 400,160 720,80 C1040,0 1240,140 1440,60 L1440,180 L0,180 Z" fill="url(#rw1)" opacity="0.9" />
      <path d="M0,140 C300,60 500,170 800,90 C1100,10 1300,150 1440,80 L1440,180 L0,180 Z" fill="url(#rw2)" opacity="0.7" />
      <path d="M0,155 C250,100 600,170 900,110 C1150,60 1350,160 1440,100 L1440,180 L0,180 Z" fill="url(#rw3)" opacity="0.5" />
      {/* White foam on top */}
      <path d="M0,118 C200,38 400,158 720,78 C1040,-2 1240,138 1440,58" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="3" />
    </svg>
  </div>
);

/* ─── Feature Card ─── */
const FeatureCard = ({ icon, title, desc, btnLabel, btnGradient, shadow }) => (
  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center space-y-5 border border-blue-50">
    <div className="w-20 h-20 flex items-center justify-center">
      <img src={icon} alt={title} className="w-full h-full object-contain drop-shadow-lg" />
    </div>
    <div className="space-y-2">
      <h3 className="text-xl font-black text-blue-900">{title}</h3>
      <p className="text-sm text-blue-400/80 leading-relaxed">{desc}</p>
    </div>
    <button
      className="px-7 py-2.5 rounded-full text-sm font-bold text-white transition-all duration-300 hover:scale-105"
      style={{ background: btnGradient, boxShadow: `0 6px 20px ${shadow}` }}
    >
      {btnLabel}
    </button>
  </div>
);

/* ─── App Slideshow ─── */
const AppSlideshow = () => {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const timerRef = useRef(null);

  const goTo = useCallback((idx) => {
    if (idx === current) return;
    setFading(true);
    setTimeout(() => { setCurrent(idx); setFading(false); }, 300);
  }, [current]);

  useEffect(() => {
    timerRef.current = setTimeout(() => goTo((current + 1) % apps.length), 5000);
    return () => clearTimeout(timerRef.current);
  }, [current, goTo]);

  const app = apps[current];

  return (
    <div className={`transition-all duration-300 ${fading ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
      <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-50 overflow-hidden relative">
        {/* Glow bg */}
        <div className="absolute inset-0 opacity-5 rounded-3xl" style={{ background: `radial-gradient(ellipse at 80% 50%, ${app.color}, transparent)` }} />

        <div className="relative flex flex-col sm:flex-row items-center gap-6">
          <div
            className="w-20 h-20 flex-shrink-0 rounded-[1.4rem] flex items-center justify-center shadow-xl"
            style={{ background: `linear-gradient(145deg, ${app.color}dd, ${app.color}99)`, boxShadow: `0 12px 40px ${app.shadow}` }}
          >
            <img src={app.icon} alt={app.name} className="w-14 h-14 object-contain rounded-xl" />
          </div>
          <div className="flex-1 text-center sm:text-left space-y-2">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full" style={{ background: `${app.color}18`, color: app.color }}>{app.category}</span>
            </div>
            <h3 className="text-xl font-black text-blue-900">{app.name}</h3>
            <p className="text-sm text-blue-400/80 leading-relaxed">{app.description}</p>
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start pt-1">
              {app.features.map(f => (
                <span key={f} className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: `${app.color}15`, color: app.color }}>{f}</span>
              ))}
            </div>
          </div>
          <div className="flex-shrink-0 flex flex-col gap-2">
            <Link
              to={`/app/${app.id}`}
              className="flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-bold text-white transition-all duration-300 hover:scale-105"
              style={{ background: app.btnGradient, boxShadow: `0 6px 20px ${app.shadow}` }}
            >
              詳しく見る <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <button className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-semibold text-blue-400 bg-blue-50 hover:bg-blue-100 transition-colors">
              <Download className="w-3.5 h-3.5" /> DL
            </button>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {apps.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? 24 : 8,
              height: 8,
              background: i === current ? apps[current].color : '#cbd5e1',
            }}
          />
        ))}
      </div>
    </div>
  );
};

/* ─── Main Page ─── */
const HomePage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #e8f4fd 0%, #f0f8ff 40%, #ffffff 100%)' }}>
      <Header />

      {/* ───── Hero ───── */}
      <section className="relative overflow-hidden pt-10 pb-0">
        {/* Floating bubbles */}
        {BUBBLES.map((b, i) => (
          <div
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: b.size,
              height: b.size,
              left: `${b.x}%`,
              top: `${b.y}%`,
              background: b.color,
              opacity: 0.7,
              animation: `float ${b.dur}s ease-in-out ${b.delay}s infinite`,
            }}
          />
        ))}

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[480px]">

            {/* Left */}
            <div className="space-y-7">
              <div className="space-y-3">
                <h1 className="text-5xl lg:text-6xl font-black leading-tight" style={{ color: '#1e40af' }}>
                  Welcome to<br />
                  <span style={{ background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    Studism!
                  </span>
                </h1>
                <p className="text-lg text-blue-500/80 leading-relaxed max-w-md">
                  アプリを通じて学びをもっと自由に、もっと楽しく。<br />
                  Studismと一緒に、毎日の学習を充実させよう！
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#apps"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-white text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)', boxShadow: '0 8px 24px rgba(59,130,246,0.4)' }}
                >
                  Get Started
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-blue-600 text-sm bg-white border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:scale-105"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Right — mascot */}
            <div className="flex items-end justify-center lg:justify-end relative">
              <img
                src="/images/poripori.png"
                alt="Studism マスコット"
                className="w-auto max-h-[400px] lg:max-h-[480px] object-contain drop-shadow-2xl animate-float-slow"
                style={{ filter: 'drop-shadow(0 20px 40px rgba(59,130,246,0.25))' }}
              />
            </div>
          </div>
        </div>

        {/* Rainbow wave */}
        <div className="relative -mb-1 mt-4">
          <RainbowWave />
        </div>
      </section>

      {/* ───── Feature/App intro ───── */}
      <section id="about" className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(180deg, #fff 0%, #eff6ff 100%)' }}>
        {/* Floating bubbles (subtle) */}
        {BUBBLES.slice(0, 5).map((b, i) => (
          <div
            key={i}
            className="absolute rounded-full pointer-events-none opacity-30"
            style={{
              width: b.size * 1.4,
              height: b.size * 1.4,
              left: `${b.x}%`,
              bottom: `${b.y / 2}%`,
              background: b.color,
              animation: `float ${b.dur + 1}s ease-in-out ${b.delay + 0.5}s infinite`,
            }}
          />
        ))}

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="text-center space-y-4 mb-14">
            <h2 className="text-4xl lg:text-5xl font-black" style={{ color: '#1e40af' }}>
              Welcome to
            </h2>
            <p className="text-lg text-blue-500">
              Studismのアプリで学びを加速させよう。
              <span className="font-bold text-blue-600"> 今すぐ無料で</span>はじめられます！
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-7 max-w-5xl mx-auto">
            <FeatureCard
              icon="/images/sakuraenglish.png"
              title="語学学習ツール"
              desc="レベル別クイズで英語力を効率よくアップ。自分のペースで楽しく学習できます。"
              btnLabel="Learn More"
              btnGradient="linear-gradient(135deg, #3b82f6, #2563eb)"
              shadow="rgba(59,130,246,0.4)"
            />
            <FeatureCard
              icon="/images/Studismicon.png"
              title="学習のヒント"
              desc="効果的な学習法・テクニックを紹介。習慣化のコツをつかもう。"
              btnLabel="Learn More"
              btnGradient="linear-gradient(135deg, #f59e0b, #d97706)"
              shadow="rgba(245,158,11,0.4)"
            />
            <FeatureCard
              icon="/images/timelyze.png"
              title="時間管理サポート"
              desc="学習時間を記録・可視化して、目標達成をサポートします。"
              btnLabel="Learn More"
              btnGradient="linear-gradient(135deg, #22c55e, #16a34a)"
              shadow="rgba(34,197,94,0.4)"
            />
          </div>
        </div>

        {/* Rainbow wave bottom */}
        <div className="relative mt-16 -mb-1">
          <RainbowWave />
        </div>
      </section>

      {/* ───── Apps Section ───── */}
      <section id="apps" className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #fff 0%, #e8f4fd 100%)' }}>
        {BUBBLES.slice(5).map((b, i) => (
          <div
            key={i}
            className="absolute rounded-full pointer-events-none opacity-40"
            style={{
              width: b.size,
              height: b.size,
              right: `${b.x / 5}%`,
              top: `${b.y}%`,
              background: b.color,
              animation: `float ${b.dur}s ease-in-out ${b.delay}s infinite`,
            }}
          />
        ))}

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="text-center space-y-4 mb-14">
            <h2 className="text-4xl lg:text-5xl font-black" style={{ color: '#1e40af' }}>アプリ一覧</h2>
            <p className="text-lg text-blue-400/80">Studismが開発した学習アプリをご紹介します</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <AppSlideshow />
          </div>
        </div>
      </section>

      {/* ───── Search / CTA ───── */}
      <section className="py-16 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #e8f4fd 0%, #dbeafe 100%)' }}>
        {/* Rainbow wave top */}
        <div className="absolute top-0 left-0 w-full rotate-180 pointer-events-none" style={{ lineHeight: 0 }}>
          <RainbowWave />
        </div>

        {BUBBLES.map((b, i) => (
          <div
            key={i}
            className="absolute rounded-full pointer-events-none opacity-40"
            style={{
              width: b.size,
              height: b.size,
              left: `${b.x}%`,
              bottom: `${b.y / 2}%`,
              background: b.color,
              animation: `float ${b.dur}s ease-in-out ${b.delay}s infinite`,
            }}
          />
        ))}

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-lg mx-auto">
            <div className="flex items-center bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden px-4 py-1">
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 py-3 text-sm text-blue-900 placeholder-blue-300 outline-none bg-transparent"
              />
              <button
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0 transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)' }}
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ───── News Section ───── */}
      <section id="news" className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center space-y-4 mb-14">
            <h2 className="text-4xl font-black" style={{ color: '#1e40af' }}>最新情報・お知らせ</h2>
            <p className="text-blue-400/80">アプリのアップデート情報や新機能のお知らせ</p>
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              { date: '2025年11月22日', title: '公式ウェブサイトをリニューアルオープンしました', type: 'お知らせ', color: '#3b82f6' },
              { date: '2025年11月20日', title: 'お問い合わせフォームのシステムを更新しました', type: 'アップデート', color: '#a855f7' },
              { date: '2025年11月15日', title: '「SakuraEnglish」に新しい単語リストを追加しました', type: 'アップデート', color: '#22c55e' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-md border border-blue-50 hover:shadow-lg transition-shadow">
                <span
                  className="px-3 py-1.5 rounded-full text-xs font-bold text-white flex-shrink-0"
                  style={{ background: item.color }}
                >
                  {item.type}
                </span>
                <div className="space-y-1">
                  <p className="text-xs text-blue-300">{item.date}</p>
                  <p className="text-sm font-semibold text-blue-900">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
