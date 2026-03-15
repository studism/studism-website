import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/* ════════════════════════════
   Hero（フルワイド・写真風）
════════════════════════════ */
function Hero() {
  return (
    <section style={{ position: 'relative', width: '100%', height: '90vh', overflow: 'hidden', background: '#0f0520' }}>

      {/* 写真風グラデーション背景 */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, #0f0520 0%, #2d0d5e 35%, #5b21b6 65%, #7c3aed 100%)',
      }} />
      {/* オーバーレイ */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.45) 100%)',
      }} />
      {/* テクスチャーパターン */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.06,
        backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }} />

      {/* キャラクター：Studism横影なし（左寄り） */}
      <img
        src="/images/Studism横影なし 2.png"
        alt="Studism"
        className="animate-float-slow"
        style={{
          position: 'absolute',
          bottom: '0',
          left: '50%',
          transform: 'translateX(-55%)',
          height: '82%',
          width: 'auto',
          objectFit: 'contain',
          zIndex: 2,
          opacity: 0.92,
        }}
      />
      {/* キャラクター：ペンギン（右寄り） */}
      <img
        src="/images/背景透過 2.png"
        alt="マスコット"
        className="animate-float"
        style={{
          position: 'absolute',
          bottom: '0',
          right: '8%',
          height: '68%',
          width: 'auto',
          objectFit: 'contain',
          zIndex: 3,
          animationDelay: '1.2s',
          opacity: 0.95,
        }}
      />

      {/* テキスト：左下 */}
      <div style={{
        position: 'absolute', bottom: '14%', left: '5%',
        zIndex: 10, maxWidth: '580px',
      }}>
        <p style={{
          color: 'rgba(255,255,255,0.65)', fontSize: '0.8rem',
          fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
          marginBottom: '16px',
        }}>
          Education Technology
        </p>
        <h1 style={{
          color: '#ffffff',
          fontSize: 'clamp(3rem, 6.5vw, 5.5rem)',
          fontWeight: 900,
          letterSpacing: '-0.04em',
          lineHeight: 1.0,
          margin: 0,
        }}>
          学びを、もっと<br />自由に、<br />楽しく。
        </h1>
      </div>

      {/* スクロールインジケーター */}
      <div style={{
        position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
        zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
      }}>
        <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em' }}>
          SCROLL
        </span>
        <div style={{
          width: '1px', height: '48px',
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.5), rgba(255,255,255,0))',
        }} />
      </div>

    </section>
  );
}

/* ════════════════════════════
   サービス紹介
════════════════════════════ */
const APPS = [
  {
    slug: 'sakuraenglish',
    name: 'SakuraEnglish',
    category: '語学学習',
    icon: '/images/sakuraenglish.png',
    lead: '英語学習を、もっと楽しく。',
    description: 'レベル別英単語クイズで効率的に語彙力を強化。5段階の難易度とカスタム単語リスト機能で、自分だけの学習プランを作成できます。',
    photoBg: 'linear-gradient(135deg, #4c1d95 0%, #7c3aed 40%, #ec4899 100%)',
    accent: '#7C3AED',
  },
  {
    slug: 'timelyze',
    name: 'Timelyze',
    category: '生産性・時間管理',
    icon: '/images/timelyze.png',
    lead: '学習時間を、見える化する。',
    description: '学習時間の記録・管理を簡単に。タイマー機能、教科別集計、グラフ可視化で、継続的な学習習慣をサポートします。',
    photoBg: 'linear-gradient(135deg, #0c4a6e 0%, #0ea5e9 50%, #06b6d4 100%)',
    accent: '#0EA5E9',
  },
];

function Services() {
  return (
    <section style={{ background: '#fff', padding: '80px 0 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>

        {/* セクションヘッダー */}
        <div style={{ marginBottom: '48px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', borderBottom: '1px solid #e8e8e8', paddingBottom: '20px' }}>
          <div>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', color: '#7C3AED', textTransform: 'uppercase', marginBottom: '8px' }}>
              Our Services
            </p>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 900, color: '#0f0f0f', letterSpacing: '-0.03em', margin: 0 }}>
              サービス
            </h2>
          </div>
          <Link to="/app/sakuraenglish" style={{ textDecoration: 'none', color: '#7C3AED', fontSize: '0.82rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
            すべて見る
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>

        {/* サービスカード */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2px' }}>
          {APPS.map(app => (
            <Link key={app.slug} to={`/app/${app.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
              <article style={{ background: '#fff', overflow: 'hidden' }}
                onMouseEnter={e => e.currentTarget.querySelector('.card-inner').style.transform = 'translateY(-4px)'}
                onMouseLeave={e => e.currentTarget.querySelector('.card-inner').style.transform = 'translateY(0)'}>
                <div className="card-inner" style={{ transition: 'transform 0.3s ease' }}>
                  {/* 写真ブロック */}
                  <div style={{
                    width: '100%', aspectRatio: '16/8',
                    background: app.photoBg,
                    position: 'relative', overflow: 'hidden',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {/* テクスチャ */}
                    <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                    {/* アプリアイコン */}
                    <img src={app.icon} alt={app.name} style={{
                      width: '80px', height: '80px', borderRadius: '22px',
                      boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
                      position: 'relative', zIndex: 1,
                    }} />
                    {/* カテゴリラベル */}
                    <div style={{
                      position: 'absolute', top: '20px', left: '24px',
                      background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)',
                      padding: '5px 12px', borderRadius: '4px',
                      color: '#fff', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em',
                    }}>
                      {app.category}
                    </div>
                  </div>

                  {/* テキスト */}
                  <div style={{ padding: '28px 28px 36px' }}>
                    <p style={{ fontSize: '0.75rem', color: app.accent, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
                      {app.name}
                    </p>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#0f0f0f', letterSpacing: '-0.02em', marginBottom: '14px', lineHeight: 1.3 }}>
                      {app.lead}
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.85 }}>
                      {app.description}
                    </p>
                    <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '6px', color: app.accent, fontSize: '0.82rem', fontWeight: 700 }}>
                      詳細を見る
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════
   ニュース
════════════════════════════ */
const NEWS = [
  { date: '2025.11.22', category: 'お知らせ', title: '公式ウェブサイトをリニューアルオープンしました', bg: 'linear-gradient(135deg, #4c1d95, #7c3aed)' },
  { date: '2025.11.20', category: 'アップデート', title: 'お問い合わせフォームのシステムを更新しました', bg: 'linear-gradient(135deg, #0c4a6e, #0ea5e9)' },
  { date: '2025.11.15', category: 'アップデート', title: '「SakuraEnglish」に新しい単語リストを追加しました', bg: 'linear-gradient(135deg, #831843, #ec4899)' },
];

function NewsSection() {
  return (
    <section style={{ background: '#f5f5f5', padding: '80px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>

        {/* ヘッダー */}
        <div style={{ marginBottom: '40px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', borderBottom: '1px solid #ddd', paddingBottom: '20px' }}>
          <div>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', color: '#7C3AED', textTransform: 'uppercase', marginBottom: '8px' }}>
              News
            </p>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 900, color: '#0f0f0f', letterSpacing: '-0.03em', margin: 0 }}>
              ニュース
            </h2>
          </div>
        </div>

        {/* カードグリッド */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }}>
          {NEWS.map((n, i) => (
            <article key={i} style={{ background: '#fff', overflow: 'hidden', cursor: 'pointer' }}>
              {/* サムネイル写真風 */}
              <div style={{
                width: '100%', aspectRatio: '16/9',
                background: n.bg,
                position: 'relative',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                <span style={{ fontSize: '2.5rem', opacity: 0.4 }}>
                  {i === 0 ? '📢' : i === 1 ? '⚙️' : '📚'}
                </span>
              </div>

              {/* テキスト */}
              <div style={{ padding: '20px 22px 26px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <span style={{
                    fontSize: '0.68rem', fontWeight: 700, color: '#7C3AED',
                    border: '1px solid #7C3AED', padding: '2px 8px', letterSpacing: '0.06em',
                  }}>
                    {n.category}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#999', fontWeight: 500 }}>{n.date}</span>
                </div>
                <p style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f0f0f', lineHeight: 1.6, margin: 0 }}>
                  {n.title}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════
   会社ミッションバナー
════════════════════════════ */
function MissionBanner() {
  return (
    <section style={{
      position: 'relative', overflow: 'hidden',
      background: '#0f0520', padding: '100px 0',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(124,58,237,0.30) 0%, transparent 70%)',
      }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.2em', color: 'rgba(167,139,250,0.8)', textTransform: 'uppercase', marginBottom: '24px' }}>
          Our Mission
        </p>
        <h2 style={{
          fontSize: 'clamp(2rem, 5vw, 4rem)',
          fontWeight: 900, color: '#ffffff',
          letterSpacing: '-0.04em', lineHeight: 1.1,
          margin: '0 0 28px',
        }}>
          テクノロジーと教育の力で、<br />
          <span style={{ color: '#a78bfa' }}>すべての人の学びを変える。</span>
        </h2>
        <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.9, maxWidth: '560px', margin: '0 auto 40px' }}>
          Studismは、「学びを、もっと自由に、もっと楽しく」というビジョンのもと、最高の教育テクノロジーアプリを届け続けます。
        </p>
        <Link to="/contact" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '14px 36px', background: '#7C3AED', color: '#fff',
          textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.04em',
        }}>
          お問い合わせ
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </Link>
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
    <div style={{ background: '#fff' }}>
      <Header />
      <Hero />
      <Services />
      <NewsSection />
      <MissionBanner />
      <Footer />
    </div>
  );
}
