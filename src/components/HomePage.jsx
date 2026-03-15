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
   Mission セクション
════════════════════════════ */
const MISSION_CARDS = [
  {
    icon: '🆓',
    title: '完全無料',
    description: 'すべての基本機能を無料でお使いいただけます。課金なしでも充実した学習体験を。',
    grad: 'linear-gradient(135deg, #7C3AED, #A855F7)',
  },
  {
    icon: '✨',
    title: '使いやすさ',
    description: 'シンプルで直感的なUIデザイン。アプリを開いた瞬間から学習をスタートできます。',
    grad: 'linear-gradient(135deg, #0EA5E9, #5DCFEA)',
  },
  {
    icon: '🔥',
    title: '毎日続けられる',
    description: 'リマインダーや習熟度トラッキングで、学習を楽しく継続できる仕組みを提供します。',
    grad: 'linear-gradient(135deg, #EC4899, #F97316)',
  },
];

function Mission() {
  return (
    <section style={{ background: '#E0F9FF', padding: '80px 0' }}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="inline-block text-xs font-black px-3 py-1 rounded-full mb-4"
            style={{ background: 'rgba(93,207,234,0.25)', color: '#0EA5E9', letterSpacing: '0.1em' }}>
            MISSION
          </span>
          <h2 className="font-black mb-5"
            style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.4rem)', color: '#1E1B4B', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
            私たちのミッション
          </h2>
          <p className="font-medium leading-relaxed" style={{ color: '#64748B', fontSize: '1rem' }}>
            テクノロジーと教育の力で、すべての人の学びをもっと楽しく、もっと効果的にする
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {MISSION_CARDS.map((card, i) => (
            <div key={i}
              className="rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.85)',
                backdropFilter: 'blur(20px)',
                border: '1.5px solid rgba(255,255,255,0.90)',
                boxShadow: '0 4px 32px rgba(93,207,234,0.15)',
              }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                style={{ background: card.grad, fontSize: '1.6rem' }}>
                {card.icon}
              </div>
              <h3 className="font-black mb-3" style={{ fontSize: '1.1rem', color: '#1E1B4B' }}>
                {card.title}
              </h3>
              <p className="text-sm font-medium leading-relaxed" style={{ color: '#64748B' }}>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════
   Apps セクション
════════════════════════════ */
const APPS = [
  {
    slug: 'sakuraenglish',
    name: 'SakuraEnglish',
    icon: '/images/sakuraenglish.png',
    category: '語学学習',
    description: 'レベル別英単語クイズで効率的に語彙力を強化。5段階の難易度とカスタム単語リスト機能で自分だけの学習プランを作成できます。',
    grad: 'linear-gradient(135deg, #7C3AED 0%, #5DCFEA 100%)',
    badgeColor: '#7C3AED',
    badgeBg: 'rgba(124,58,237,0.08)',
  },
  {
    slug: 'timelyze',
    name: 'Timelyze',
    icon: '/images/timelyze.png',
    category: '生産性',
    description: '学習時間の記録・管理を簡単に。タイマー機能、教科別集計、グラフ可視化で継続的な学習習慣をサポートします。',
    grad: 'linear-gradient(135deg, #0EA5E9 0%, #A855F7 100%)',
    badgeColor: '#0EA5E9',
    badgeBg: 'rgba(14,165,233,0.08)',
  },
];

function Apps() {
  return (
    <section style={{ background: '#FAFAFE', padding: '80px 0' }}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-black px-3 py-1 rounded-full mb-4"
            style={{ background: 'rgba(124,58,237,0.08)', color: '#7C3AED', letterSpacing: '0.1em' }}>
            APPS
          </span>
          <h2 className="font-black"
            style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.4rem)', color: '#1E1B4B', letterSpacing: '-0.02em' }}>
            私たちのアプリ
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {APPS.map((app) => (
            <div key={app.slug} style={{ padding: '2px', borderRadius: '28px', background: app.grad, boxShadow: '0 4px 24px rgba(124,58,237,0.15)' }}
              className="transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="rounded-3xl overflow-hidden" style={{ background: '#ffffff' }}>
                {/* カラーバー */}
                <div className="h-1.5 w-full" style={{ background: app.grad }} />

                <div className="p-8">
                  {/* アイコン＋カテゴリ */}
                  <div className="flex items-start gap-5 mb-5">
                    <img
                      src={app.icon}
                      alt={app.name}
                      style={{ width: 72, height: 72, borderRadius: '22%', flexShrink: 0, boxShadow: '0 4px 16px rgba(124,58,237,0.15)' }}
                    />
                    <div className="flex flex-col gap-2 pt-1">
                      <span className="inline-block text-xs font-black px-2.5 py-1 rounded-full w-fit"
                        style={{ background: app.badgeBg, color: app.badgeColor, letterSpacing: '0.05em' }}>
                        {app.category}
                      </span>
                      <h3 className="font-black" style={{ fontSize: '1.4rem', color: '#1E1B4B', letterSpacing: '-0.02em' }}>
                        {app.name}
                      </h3>
                    </div>
                  </div>

                  {/* 説明 */}
                  <p className="text-sm font-medium leading-relaxed mb-7" style={{ color: '#64748B' }}>
                    {app.description}
                  </p>

                  {/* ボタン */}
                  <Link to={`/app/${app.slug}`}
                    className="inline-flex items-center justify-center w-full gap-2 py-3.5 rounded-2xl font-black text-sm transition-all duration-200 hover:opacity-90"
                    style={{
                      background: app.grad,
                      color: '#ffffff',
                      textDecoration: 'none',
                      boxShadow: '0 4px 16px rgba(124,58,237,0.18)',
                    }}>
                    詳細を見る
                  </Link>
                </div>
              </div>
            </div>
          ))}
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
      <Mission />
      <Apps />
      <Footer />
    </div>
  );
}
