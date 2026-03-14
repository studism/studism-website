import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Search } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BIRD_IMG    = '/images/背景透過 2.png';
const RAINBOW_BG  = '/images/8E34414B-EDC1-41FA-A1EA-8A78ECF21D80 2.png';

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
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-blue-100 overflow-hidden relative">
        <div className="relative flex flex-col sm:flex-row items-center gap-6">
          <div
            className="w-20 h-20 flex-shrink-0 rounded-[1.4rem] flex items-center justify-center shadow-xl"
            style={{ background: `linear-gradient(145deg, ${app.color}dd, ${app.color}88)`, boxShadow: `0 12px 40px ${app.shadow}` }}
          >
            <img src={app.icon} alt={app.name} className="w-14 h-14 object-contain rounded-xl" />
          </div>
          <div className="flex-1 text-center sm:text-left space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full inline-block" style={{ background: `${app.color}18`, color: app.color }}>{app.category}</span>
            <h3 className="text-xl font-black text-blue-900">{app.name}</h3>
            <p className="text-sm text-blue-500/80 leading-relaxed">{app.description}</p>
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
              <Download className="w-3.5 h-3.5" /> ダウンロード
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
            style={{ width: i === current ? 24 : 8, height: 8, background: i === current ? apps[current].color : '#cbd5e1' }}
          />
        ))}
      </div>
    </div>
  );
};

/* ─── Feature Card ─── */
const FeatureCard = ({ icon, title, desc, btnLabel, btnStyle }) => (
  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center space-y-5 border border-blue-50">
    <div className="w-20 h-20 flex items-center justify-center">
      <img src={icon} alt={title} className="w-full h-full object-contain drop-shadow-lg" />
    </div>
    <div className="space-y-2">
      <h3 className="text-xl font-black text-blue-900">{title}</h3>
      <p className="text-sm text-blue-400/80 leading-relaxed">{desc}</p>
    </div>
    <button
      className="px-7 py-2.5 rounded-full text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:opacity-90"
      style={btnStyle}
    >
      {btnLabel}
    </button>
  </div>
);

/* ─── Main Page ─── */
const HomePage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#f0f8ff' }}>
      <Header />

      {/* ═══════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ minHeight: 'calc(100vh - 72px)', background: 'linear-gradient(160deg, #ffffff 0%, #e0f2fe 40%, #bae6fd 100%)' }}>

        {/* Rainbow background image — right half */}
        <img
          src={RAINBOW_BG}
          alt=""
          aria-hidden="true"
          className="absolute right-0 top-0 h-full w-full object-cover object-right pointer-events-none select-none"
          style={{ opacity: 0.85 }}
        />

        {/* Soft white gradient on the left to blend text area */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(90deg, rgba(240,248,255,1) 0%, rgba(240,248,255,0.85) 35%, rgba(240,248,255,0.1) 65%, transparent 100%)' }}
        />

        {/* Content */}
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 h-full flex items-center" style={{ minHeight: 'inherit' }}>
          <div className="grid lg:grid-cols-2 gap-8 items-center w-full py-16">

            {/* ── Left: Text ── */}
            <div className="space-y-7">
              <div className="space-y-4">
                <h1 className="font-black leading-tight" style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', color: '#1d4ed8' }}>
                  Welcome to<br />
                  <span style={{
                    background: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 60%, #06b6d4 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    Studism!
                  </span>
                </h1>
                <p className="text-base lg:text-lg leading-relaxed max-w-md" style={{ color: '#334155' }}>
                  Elevate your studying with our tools,<br />
                  tips, and community. Join Studism and make<br />
                  learning fun and effective!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#apps"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-white text-base transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  style={{
                    background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                    boxShadow: '0 8px 28px rgba(37,99,235,0.45)',
                  }}
                >
                  Get Started
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-base bg-white/80 border-2 border-blue-300 transition-all duration-300 hover:scale-105 hover:border-blue-500 hover:bg-white"
                  style={{ color: '#2563eb' }}
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* ── Right: Bird mascot ── */}
            <div className="flex items-end justify-center lg:justify-end relative">
              <img
                src={BIRD_IMG}
                alt="Studism マスコット"
                className="relative z-10 w-auto animate-float-slow"
                style={{
                  maxHeight: 'clamp(280px, 45vw, 480px)',
                  filter: 'drop-shadow(0 20px 40px rgba(59,130,246,0.25))',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WELCOME / FEATURES SECTION
      ═══════════════════════════════════════ */}
      <section id="about" className="relative pt-20 pb-0 overflow-hidden" style={{ background: 'linear-gradient(180deg, #f8fbff 0%, #ffffff 100%)' }}>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          {/* Heading */}
          <div className="text-center space-y-3 mb-14">
            <h2
              className="font-black"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#1d4ed8' }}
            >
              Welcome to
            </h2>
            <p className="text-base lg:text-lg" style={{ color: '#64748b' }}>
              Studyism anw tr•plce.{' '}
              <span className="font-bold" style={{ color: '#2563eb' }}>Start now:</span>
              {' '}for a Premium in just sening!
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-7 max-w-5xl mx-auto pb-4">
            <FeatureCard
              icon="/images/sakuraenglish.png"
              title="Study Tools"
              desc="Powerful tools to help you stay organized and focused while studying."
              btnLabel="Learn More"
              btnStyle={{
                background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                boxShadow: '0 6px 20px rgba(37,99,235,0.4)',
              }}
            />
            <FeatureCard
              icon="/images/Studismicon.png"
              title="Study Tips"
              desc="Effective tips and techniques to improve your study habits."
              btnLabel="Learn More"
              btnStyle={{
                background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                boxShadow: '0 6px 20px rgba(245,158,11,0.4)',
              }}
            />
            <FeatureCard
              icon="/images/timelyze.png"
              title="Community Support"
              desc="Join our community of students and share your journey."
              btnLabel="Learn More"
              btnStyle={{
                background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                boxShadow: '0 6px 20px rgba(34,197,94,0.4)',
              }}
            />
          </div>
        </div>

        {/* Rainbow wave bottom */}
        <div className="relative mt-12 -mb-1 pointer-events-none" style={{ lineHeight: 0 }}>
          <img src={RAINBOW_BG} alt="" aria-hidden className="w-full" style={{ objectFit: 'cover', maxHeight: '200px', objectPosition: 'center bottom', opacity: 0.9 }} />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          APPS SECTION
      ═══════════════════════════════════════ */}
      <section id="apps" className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #eff6ff 0%, #dbeafe 100%)' }}>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="text-center space-y-4 mb-14">
            <h2 className="text-4xl lg:text-5xl font-black" style={{ color: '#1d4ed8' }}>アプリ一覧</h2>
            <p className="text-base lg:text-lg" style={{ color: '#64748b' }}>Studismが開発した学習アプリをご紹介します</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <AppSlideshow />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SEARCH / CTA
      ═══════════════════════════════════════ */}
      <section className="relative py-20 overflow-hidden" style={{ background: '#ffffff' }}>

        {/* Rainbow background at bottom */}
        <div className="absolute bottom-0 left-0 w-full pointer-events-none" style={{ lineHeight: 0 }}>
          <img src={RAINBOW_BG} alt="" aria-hidden className="w-full" style={{ objectFit: 'cover', maxHeight: '260px', objectPosition: 'center bottom', opacity: 0.85 }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-lg mx-auto">
            <div
              className="flex items-center bg-white rounded-2xl shadow-2xl border border-blue-100 overflow-hidden px-4 py-1"
              style={{ boxShadow: '0 8px 40px rgba(59,130,246,0.2)' }}
            >
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 py-3.5 text-base text-blue-900 placeholder-blue-300 outline-none bg-transparent"
              />
              <button
                className="w-11 h-11 rounded-xl flex items-center justify-center text-white flex-shrink-0 transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)' }}
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          NEWS
      ═══════════════════════════════════════ */}
      <section id="news" className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center space-y-4 mb-14">
            <h2 className="text-4xl font-black" style={{ color: '#1d4ed8' }}>最新情報・お知らせ</h2>
            <p style={{ color: '#64748b' }}>アプリのアップデート情報や新機能のお知らせ</p>
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              { date: '2025年11月22日', title: '公式ウェブサイトをリニューアルオープンしました', type: 'お知らせ', color: '#3b82f6' },
              { date: '2025年11月20日', title: 'お問い合わせフォームのシステムを更新しました', type: 'アップデート', color: '#a855f7' },
              { date: '2025年11月15日', title: '「SakuraEnglish」に新しい単語リストを追加しました', type: 'アップデート', color: '#22c55e' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-md border border-blue-50 hover:shadow-lg transition-shadow">
                <span className="px-3 py-1.5 rounded-full text-xs font-bold text-white flex-shrink-0" style={{ background: item.color }}>
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
