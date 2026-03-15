import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/* ════════════════════════════
   Hero セクション
════════════════════════════ */
function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#ffffff', minHeight: 'calc(100vh - 68px)' }}>

      {/* 上部アクセントライン */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
        background: 'linear-gradient(90deg, #7C3AED 0%, #A855F7 40%, #5DCFEA 100%)',
      }} />

      {/* 右側カラーブロック */}
      <div className="absolute top-0 right-0 bottom-0 pointer-events-none hidden lg:block" style={{
        width: '46%',
        background: 'linear-gradient(160deg, #F5F0FF 0%, #EEF6FF 100%)',
      }} />

      <div className="container mx-auto px-8 md:px-14 lg:px-20 relative z-10 flex items-center"
        style={{ minHeight: 'calc(100vh - 68px)' }}>
        <div className="grid lg:grid-cols-2 gap-0 items-center w-full py-20">

          {/* 左：テキスト */}
          <div className="flex flex-col gap-8 order-2 lg:order-1 lg:pr-16">

            {/* 小見出し */}
            <p className="font-bold text-sm tracking-widest uppercase"
              style={{ color: '#7C3AED', letterSpacing: '0.15em' }}>
              Education Technology
            </p>

            {/* 大見出し */}
            <h1 className="font-black leading-none"
              style={{ fontSize: 'clamp(3rem, 6vw, 5.2rem)', color: '#0f0f0f', letterSpacing: '-0.04em', lineHeight: 1.0 }}>
              学びを、<br />
              もっと<br />
              <span style={{ color: '#7C3AED' }}>自由に。</span>
            </h1>

            {/* 区切り */}
            <div style={{ width: '48px', height: '3px', background: '#7C3AED', borderRadius: '2px' }} />

            {/* 説明 */}
            <p style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.9, fontWeight: 400, maxWidth: '400px' }}>
              Studismは、テクノロジーの力で学習体験を変えるアプリを開発する教育テクノロジー企業です。英語学習から時間管理まで、すべての人の成長をサポートします。
            </p>

            {/* CTAボタン */}
            <div className="flex gap-4 flex-wrap pt-2">
              <Link to="/app/sakuraenglish"
                className="inline-flex items-center gap-2 px-8 py-4 font-bold text-sm transition-all duration-200 hover:opacity-80"
                style={{
                  background: '#7C3AED', color: '#fff',
                  textDecoration: 'none', letterSpacing: '0.02em',
                }}>
                アプリを見る
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 font-bold text-sm transition-all duration-200 hover:bg-gray-50"
                style={{
                  background: 'transparent', color: '#0f0f0f',
                  border: '1.5px solid #0f0f0f', textDecoration: 'none',
                  letterSpacing: '0.02em',
                }}>
                お問い合わせ
              </Link>
            </div>
          </div>

          {/* 右：キャラクター */}
          <div className="relative order-1 lg:order-2 flex items-end justify-center"
            style={{ minHeight: '500px' }}>

            {/* Studism横影なし（大・後ろ） */}
            <img
              src="/images/Studism横影なし 2.png"
              alt="Studism"
              className="animate-float-slow"
              style={{
                width: 'clamp(200px, 28vw, 380px)',
                height: 'auto',
                position: 'absolute',
                bottom: '0',
                left: '4%',
                zIndex: 1,
              }}
            />

            {/* ペンギン（前・右） */}
            <img
              src="/images/背景透過 2.png"
              alt="Studismマスコット"
              className="animate-float"
              style={{
                width: 'clamp(170px, 22vw, 320px)',
                height: 'auto',
                position: 'absolute',
                bottom: '0',
                right: '4%',
                zIndex: 2,
                animationDelay: '1.2s',
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════
   Apps セクション（リクルート風カード）
════════════════════════════ */
const APPS = [
  {
    slug: 'sakuraenglish',
    name: 'SakuraEnglish',
    icon: '/images/sakuraenglish.png',
    category: '語学学習',
    description: 'レベル別英単語クイズで効率的に語彙力を強化。5段階の難易度とカスタム単語リスト機能で自分だけの学習プランを作成できます。',
    accent: '#7C3AED',
  },
  {
    slug: 'timelyze',
    name: 'Timelyze',
    icon: '/images/timelyze.png',
    category: '生産性',
    description: '学習時間の記録・管理を簡単に。タイマー機能、教科別集計、グラフ可視化で継続的な学習習慣をサポートします。',
    accent: '#0EA5E9',
  },
];

function Apps() {
  return (
    <section style={{ background: '#f7f7f7', padding: '100px 0' }}>
      <div className="container mx-auto px-8 md:px-14 lg:px-20">

        {/* セクションヘッダー */}
        <div className="flex items-end justify-between mb-14"
          style={{ borderBottom: '1px solid #e0e0e0', paddingBottom: '24px' }}>
          <div>
            <p className="font-bold text-xs tracking-widest uppercase mb-3" style={{ color: '#7C3AED', letterSpacing: '0.15em' }}>
              Our Apps
            </p>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#0f0f0f', letterSpacing: '-0.03em' }}>
              サービス一覧
            </h2>
          </div>
          <Link to="/app/sakuraenglish"
            className="hidden md:inline-flex items-center gap-2 font-bold text-sm transition-all hover:gap-3"
            style={{ color: '#7C3AED', textDecoration: 'none' }}>
            すべて見る
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* カードグリッド */}
        <div className="grid md:grid-cols-2 gap-1">
          {APPS.map((app) => (
            <Link key={app.slug} to={`/app/${app.slug}`}
              className="group block transition-all duration-300"
              style={{ textDecoration: 'none' }}>
              <div className="relative overflow-hidden transition-all duration-300 group-hover:-translate-y-1"
                style={{ background: '#ffffff' }}>
                {/* 上部カラーライン */}
                <div style={{ height: '3px', background: app.accent }} />

                <div className="p-10">
                  <div className="flex items-start gap-6">
                    <img src={app.icon} alt={app.name}
                      style={{ width: 64, height: 64, borderRadius: '16px', flexShrink: 0 }} />
                    <div className="flex-1 pt-1">
                      <p className="text-xs font-bold uppercase tracking-wider mb-2"
                        style={{ color: app.accent, letterSpacing: '0.12em' }}>
                        {app.category}
                      </p>
                      <h3 className="font-black mb-4"
                        style={{ fontSize: '1.5rem', color: '#0f0f0f', letterSpacing: '-0.02em' }}>
                        {app.name}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: '#666', lineHeight: 1.85 }}>
                        {app.description}
                      </p>
                    </div>
                  </div>

                  {/* 詳細リンク */}
                  <div className="flex items-center gap-2 mt-8 font-bold text-sm transition-all duration-200 group-hover:gap-3"
                    style={{ color: app.accent }}>
                    詳細を見る
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════
   会社概要ストリップ
════════════════════════════ */
function CompanyStrip() {
  return (
    <section style={{ background: '#0f0f0f', padding: '80px 0' }}>
      <div className="container mx-auto px-8 md:px-14 lg:px-20">
        <div className="grid md:grid-cols-3 gap-0" style={{ borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
          {[
            { num: '2',    unit: 'アプリ',   label: 'リリース済みアプリ数' },
            { num: '100%', unit: '無料',     label: 'すべての基本機能' },
            { num: 'iOS',  unit: '対応',     label: 'モバイルプラットフォーム' },
          ].map((s, i) => (
            <div key={i} className="px-12 py-8"
              style={{ borderRight: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-black text-5xl" style={{ color: '#ffffff', letterSpacing: '-0.03em' }}>{s.num}</span>
                <span className="font-bold text-lg" style={{ color: '#7C3AED' }}>{s.unit}</span>
              </div>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)', letterSpacing: '0.02em' }}>{s.label}</p>
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
    <div style={{ background: '#ffffff' }}>
      <Header />
      <Hero />
      <Apps />
      <CompanyStrip />
      <Footer />
    </div>
  );
}
