import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Smartphone, BarChart3, Target, ChevronLeft, ChevronRight, Star, Users, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/* ─── App data ─── */
const apps = [
  {
    id: 'sakuraenglish',
    name: 'SakuraEnglish',
    tagline: '英語力を、桜のように咲かせよう',
    description: 'レベル別の英単語クイズで効率的に語彙力を強化。カスタム単語リスト機能で自分だけの学習プランを作成できます。',
    icon: '/images/sakuraenglish.png',
    category: '語学学習',
    features: ['レベル別クイズ', 'カスタム単語リスト', '復習機能', 'オフライン対応'],
    // Hero background aurora colors
    aurora: ['#ff6b9d', '#ff4f6d', '#ff8c42'],
    // Glow color for icon
    glow: 'rgba(255,107,157,0.5)',
    // Section accent
    accent: '#ff4f6d',
    accentLight: '#fff0f3',
    accentBadge: 'bg-rose-100 text-rose-700 border-rose-200',
    gradientFrom: '#ff6b9d',
    gradientTo: '#ff4f6d',
    btnClass: 'from-rose-500 to-pink-500',
    orbColor: 'rgba(255,107,157,0.15)',
  },
  {
    id: 'timelyze',
    name: 'Timelyze',
    tagline: '時間を、自分の味方につけよう',
    description: '学習時間の記録・管理を簡単に。直感的な操作で学習習慣を身につけ、目標達成まで継続的にサポートします。',
    icon: '/images/timelyze.png',
    category: '生産性',
    features: ['時間記録・追跡', 'データ可視化', '目標管理', 'ウィジェット'],
    aurora: ['#7c3aed', '#6366f1', '#38bdf8'],
    glow: 'rgba(124,58,237,0.5)',
    accent: '#7c3aed',
    accentLight: '#f5f3ff',
    accentBadge: 'bg-violet-100 text-violet-700 border-violet-200',
    gradientFrom: '#7c3aed',
    gradientTo: '#6366f1',
    btnClass: 'from-violet-600 to-indigo-500',
    orbColor: 'rgba(124,58,237,0.15)',
  }
];

/* ─── Floating particles ─── */
const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  size: 4 + Math.random() * 6,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 4,
  duration: 4 + Math.random() * 5,
}));

/* ─── Hero Slideshow ─── */
const AppSlideshow = () => {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [transitioning, setTransitioning] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const timerRef = useRef(null);

  const goTo = useCallback((nextIndex) => {
    if (transitioning || nextIndex === current) return;
    setPrev(current);
    setTransitioning(true);
    setCurrent(nextIndex);
    setProgressKey(k => k + 1);
    setTimeout(() => { setPrev(null); setTransitioning(false); }, 600);
  }, [current, transitioning]);

  const goNext = useCallback(() => goTo((current + 1) % apps.length), [current, goTo]);
  const goPrev = useCallback(() => goTo((current - 1 + apps.length) % apps.length), [current, goTo]);

  useEffect(() => {
    timerRef.current = setTimeout(goNext, 5000);
    return () => clearTimeout(timerRef.current);
  }, [current, goNext]);

  const app = apps[current];

  return (
    <section className="relative min-h-[calc(100vh-72px)] overflow-hidden bg-[#06060f] flex flex-col">

      {/* ── Aurora Background ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute inset-0 transition-all duration-1000"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 70% 50%, ${app.aurora[0]}22, transparent 70%),
                         radial-gradient(ellipse 50% 50% at 20% 80%, ${app.aurora[1]}18, transparent 60%),
                         radial-gradient(ellipse 40% 40% at 80% 10%, ${app.aurora[2]}14, transparent 60%)`,
          }}
        />
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-overlay opacity-60" />
      </div>

      {/* ── Floating Particles ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        {PARTICLES.map(p => (
          <div
            key={p.id}
            className="absolute rounded-full"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
              background: app.glow,
              animation: `particle-drift ${p.duration}s ease-in-out ${p.delay}s infinite`,
              filter: 'blur(1px)',
            }}
          />
        ))}
      </div>

      {/* ── Main content ── */}
      <div className="flex-1 flex items-center relative z-10">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left: Text */}
            <div
              key={`text-${current}`}
              className="space-y-8 animate-fade-up"
              style={{ animationDelay: '0.05s' }}
            >
              {/* Category pill */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass border"
                style={{ borderColor: `${app.accent}40` }}>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: app.accent }} />
                <span className="text-xs font-bold uppercase tracking-widest text-white/70">{app.category}</span>
              </div>

              {/* App name */}
              <div>
                <h1
                  className="text-6xl lg:text-8xl font-black leading-none tracking-tighter gradient-text"
                  style={{ backgroundImage: `linear-gradient(135deg, #fff 30%, ${app.aurora[0]})` }}
                >
                  {app.name}
                </h1>
                <p className="mt-3 text-lg lg:text-xl font-medium text-white/50 tracking-wide">
                  {app.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="text-base lg:text-lg text-white/60 leading-relaxed max-w-md">
                {app.description}
              </p>

              {/* Feature badges */}
              <div className="flex flex-wrap gap-2">
                {app.features.map((f, i) => (
                  <span
                    key={f}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold text-white glass"
                    style={{
                      borderColor: `${app.accent}50`,
                      animationDelay: `${i * 0.08}s`,
                    }}
                  >
                    {f}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  to={`/app/${app.id}`}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-white text-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
                  style={{
                    background: `linear-gradient(135deg, ${app.gradientFrom}, ${app.gradientTo})`,
                    boxShadow: `0 8px 32px ${app.glow}`,
                  }}
                >
                  詳しく見る
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-white/80 text-sm glass hover:bg-white/10 transition-all duration-300">
                  <Download className="w-4 h-4" />
                  ダウンロード
                </button>
              </div>
            </div>

            {/* Right: App icon with orbs */}
            <div
              key={`icon-${current}`}
              className="flex items-center justify-center animate-slide-right"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="relative flex items-center justify-center w-64 h-64 lg:w-80 lg:h-80">

                {/* Outer spinning ring */}
                <div
                  className="absolute inset-0 rounded-full animate-spin-slow"
                  style={{
                    background: `conic-gradient(from 0deg, transparent 60%, ${app.gradientFrom}80, transparent 100%)`,
                  }}
                />

                {/* Pulsing glow ring */}
                <div
                  className="absolute inset-4 rounded-full animate-pulse-glow"
                  style={{ background: `radial-gradient(circle, ${app.glow}, transparent 70%)` }}
                />

                {/* Orbiting dot */}
                <div
                  className="absolute w-4 h-4 rounded-full"
                  style={{
                    background: app.gradientFrom,
                    boxShadow: `0 0 12px ${app.glow}`,
                    animation: `orbit 8s linear infinite`,
                    top: '50%',
                    left: '50%',
                    marginTop: '-8px',
                    marginLeft: '-8px',
                  }}
                />

                {/* Icon container */}
                <div
                  className="relative z-10 w-44 h-44 lg:w-56 lg:h-56 rounded-[2.5rem] flex items-center justify-center animate-float shadow-2xl"
                  style={{
                    background: `linear-gradient(145deg, ${app.gradientFrom}dd, ${app.gradientTo}dd)`,
                    boxShadow: `0 30px 80px ${app.glow}, 0 0 0 1px ${app.accent}30`,
                  }}
                >
                  {/* Gloss overlay */}
                  <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
                    <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-white/10 rounded-full blur-xl" />
                  </div>
                  <img
                    src={app.icon}
                    alt={app.name}
                    className="w-28 h-28 lg:w-36 lg:h-36 object-contain rounded-2xl relative z-10 drop-shadow-xl"
                  />
                </div>

                {/* Floating mini badges */}
                <div
                  className="absolute -top-2 -right-2 lg:top-4 lg:right-0 glass px-3 py-2 rounded-2xl animate-float-slow text-white/90 text-xs font-bold shadow-xl"
                  style={{ animationDelay: '1s', borderColor: `${app.accent}40` }}
                >
                  ⭐ 4.8
                </div>
                <div
                  className="absolute -bottom-2 -left-4 lg:bottom-6 lg:-left-4 glass px-3 py-2 rounded-2xl animate-float-slow text-white/90 text-xs font-bold shadow-xl"
                  style={{ animationDelay: '2.5s', borderColor: `${app.accent}40` }}
                >
                  🎯 無料
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Controls ── */}
      <div className="relative z-10 pb-8 px-6 md:px-12 lg:px-20">
        {/* Progress bars */}
        <div className="flex gap-2 mb-6">
          {apps.map((a, i) => (
            <div key={i} className="h-0.5 flex-1 rounded-full bg-white/15 overflow-hidden">
              {i === current && (
                <div
                  key={progressKey}
                  className="h-full rounded-full hero-progress-bar"
                  style={{ background: `linear-gradient(90deg, ${app.gradientFrom}, ${app.gradientTo})` }}
                />
              )}
              {i < current && (
                <div className="h-full w-full rounded-full" style={{ background: app.gradientFrom, opacity: 0.5 }} />
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          {/* Dot indicators + app names */}
          <div className="flex items-center gap-4">
            {apps.map((a, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="flex items-center gap-2 group"
              >
                <div
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{
                    background: i === current ? app.accent : 'rgba(255,255,255,0.2)',
                    transform: i === current ? 'scale(1.4)' : 'scale(1)',
                  }}
                />
                <span className={`text-xs font-medium transition-all duration-300 ${i === current ? 'text-white' : 'text-white/30 group-hover:text-white/60'}`}>
                  {a.name}
                </span>
              </button>
            ))}
          </div>

          {/* Arrow controls */}
          <div className="flex gap-2">
            <button
              onClick={goPrev}
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/15 transition-colors text-white/70 hover:text-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goNext}
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/15 transition-colors text-white/70 hover:text-white"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── Stats Band ─── */
const StatsBand = () => (
  <div className="bg-[#0d0d1a] border-y border-white/5 py-10">
    <div className="container mx-auto px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { value: '2', label: 'アプリ公開中', icon: <Smartphone className="w-5 h-5" /> },
          { value: '4.8', label: '平均評価', icon: <Star className="w-5 h-5" /> },
          { value: '無料', label: '全アプリ', icon: <Zap className="w-5 h-5" /> },
          { value: 'iOS/Android', label: '対応プラットフォーム', icon: <Users className="w-5 h-5" /> },
        ].map((s, i) => (
          <div key={i} className="space-y-2">
            <div className="flex justify-center text-white/30 mb-1">{s.icon}</div>
            <div className="text-3xl font-black text-white">{s.value}</div>
            <div className="text-xs text-white/40 uppercase tracking-wider">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ─── About Section ─── */
const AboutSection = () => (
  <section id="about" className="py-28 bg-[#0a0a14] relative overflow-hidden">
    {/* Subtle grid */}
    <div className="absolute inset-0 grid-overlay opacity-40 pointer-events-none" />

    {/* Gradient blobs */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-violet-900/20 blur-[120px] pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-rose-900/15 blur-[100px] pointer-events-none" />

    <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-5 mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-white/50 glass border border-white/10">
            About Us
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
            Studismについて
          </h2>
          <p className="text-lg text-white/50 leading-relaxed max-w-2xl mx-auto">
            「学びを、もっと自由に、もっと楽しく」をミッションに掲げ、
            教育とテクノロジーを融合させた革新的な学習アプリケーションを開発しています。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Smartphone className="w-7 h-7" />,
              color: '#7c3aed',
              title: 'モバイルファースト',
              desc: 'いつでもどこでも学習できる、シンプルで使いやすいアプリケーション設計'
            },
            {
              icon: <BarChart3 className="w-7 h-7" />,
              color: '#ff4f6d',
              title: '学習データ可視化',
              desc: '詳細な学習データの記録と分析で、効率的な学習サイクルをサポート'
            },
            {
              icon: <Target className="w-7 h-7" />,
              color: '#f59e0b',
              title: 'カスタマイズ機能',
              desc: '自分に合った学習プランと目標設定で、継続的な成長を実現'
            },
          ].map((item, i) => (
            <div
              key={i}
              className="relative group p-8 rounded-3xl glass border border-white/8 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                style={{ background: `radial-gradient(ellipse at 50% 100%, ${item.color}20, transparent 70%)` }}
              />
              <div className="relative z-10 space-y-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: `${item.color}20`, color: item.color }}
                >
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─── Apps Section ─── */
const AppsSection = () => (
  <section id="apps" className="py-28 bg-[#06060f] relative overflow-hidden">
    <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />

    <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
      <div className="text-center space-y-5 mb-20">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-white/50 glass border border-white/10">
          Our Apps
        </span>
        <h2 className="text-4xl lg:text-5xl font-black text-white">アプリ一覧</h2>
        <p className="text-lg text-white/40 max-w-xl mx-auto">
          Studismが開発した学習アプリケーションをご紹介します。
        </p>
      </div>

      <div className="space-y-8 max-w-4xl mx-auto">
        {apps.map((app, idx) => (
          <div
            key={app.id}
            className="group relative rounded-3xl overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            {/* Background glow on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{ background: `radial-gradient(ellipse 80% 80% at ${idx === 0 ? '80%' : '20%'} 50%, ${app.glow.replace('0.5', '0.08')}, transparent 70%)` }}
            />

            <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">

              {/* Icon */}
              <div className="flex-shrink-0">
                <div
                  className="w-24 h-24 md:w-28 md:h-28 rounded-[1.75rem] flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  style={{
                    background: `linear-gradient(145deg, ${app.gradientFrom}, ${app.gradientTo})`,
                    boxShadow: `0 20px 60px ${app.glow}`,
                  }}
                >
                  <img src={app.icon} alt={app.name} className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-xl" />
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 space-y-4 text-center md:text-left">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: app.accent }}>{app.category}</span>
                  <h3 className="text-3xl font-black text-white mt-1">{app.name}</h3>
                </div>
                <p className="text-white/50 text-sm leading-relaxed max-w-lg">{app.description}</p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {app.features.map(f => (
                    <span
                      key={f}
                      className="px-3 py-1 rounded-full text-xs font-medium text-white/70"
                      style={{ background: `${app.accent}18`, border: `1px solid ${app.accent}30` }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex-shrink-0 flex flex-col gap-3">
                <Link
                  to={`/app/${app.id}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-white text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl group/btn"
                  style={{
                    background: `linear-gradient(135deg, ${app.gradientFrom}, ${app.gradientTo})`,
                    boxShadow: `0 4px 20px ${app.glow}`,
                  }}
                >
                  詳細を見る
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                </Link>
                <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-semibold text-white/60 text-sm glass hover:bg-white/10 transition-all duration-300">
                  <Download className="w-4 h-4" />
                  ダウンロード
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── News Section ─── */
const typeStyles = {
  'アップデート': { dot: '#7c3aed', badge: 'text-violet-400 bg-violet-950 border-violet-800' },
  'お知らせ':     { dot: '#ff4f6d', badge: 'text-rose-400 bg-rose-950 border-rose-800' },
  '新機能':       { dot: '#f59e0b', badge: 'text-amber-400 bg-amber-950 border-amber-800' },
};

const news = [
  { date: '2025年11月22日', title: '公式ウェブサイトをリニューアルオープンしました', type: 'お知らせ' },
  { date: '2025年11月20日', title: 'お問い合わせフォームのシステムを更新し、よりスムーズにご利用いただけるようになりました', type: 'アップデート' },
  { date: '2025年11月15日', title: '「SakuraEnglish」に新しい単語リストを追加しました', type: 'アップデート' },
];

const NewsSection = () => (
  <section id="news" className="py-28 bg-[#0a0a14] relative overflow-hidden">
    <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none" />

    <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
      <div className="text-center space-y-5 mb-20">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-white/50 glass border border-white/10">
          News
        </span>
        <h2 className="text-4xl lg:text-5xl font-black text-white">最新情報・お知らせ</h2>
        <p className="text-lg text-white/40">アプリのアップデート情報や新機能のお知らせ</p>
      </div>

      <div className="max-w-2xl mx-auto relative">
        {/* Vertical timeline line */}
        <div className="absolute left-4 top-4 bottom-4 w-px bg-gradient-to-b from-violet-700/60 via-rose-700/40 to-transparent" />

        <div className="space-y-6 pl-12">
          {news.map((item, i) => {
            const style = typeStyles[item.type] || typeStyles['お知らせ'];
            return (
              <div
                key={i}
                className="relative group p-6 rounded-2xl glass border border-white/8 hover:border-white/20 transition-all duration-400 hover:bg-white/5"
              >
                {/* Timeline dot */}
                <div
                  className="absolute -left-[2.55rem] top-7 w-3 h-3 rounded-full ring-2 ring-[#0a0a14] shadow-lg"
                  style={{ background: style.dot, boxShadow: `0 0 10px ${style.dot}80` }}
                />

                <div className="flex items-start gap-4">
                  <span className={`px-2.5 py-1 rounded-lg text-xs font-bold border flex-shrink-0 ${style.badge}`}>
                    {item.type}
                  </span>
                  <div className="space-y-1.5">
                    <p className="text-xs text-white/30 font-mono">{item.date}</p>
                    <p className="text-sm text-white/80 font-medium leading-relaxed group-hover:text-white transition-colors">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

/* ─── Main Page ─── */
const HomePage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#06060f]">
      <Header />
      <AppSlideshow />
      <StatsBand />
      <AboutSection />
      <AppsSection />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default HomePage;
