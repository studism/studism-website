import React from 'react';
import { Link } from 'react-router-dom';
import MobileHeader from '@/components/mobile/MobileHeader';
import MobileFooter from '@/components/mobile/MobileFooter';

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.36.6 1.24 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z"/>
    </svg>
  );
}

export default function MobileAppDetail({ app, appSlug }) {
  return (
    <div style={{ minHeight: '100vh', background: '#ffffff' }}>
      <MobileHeader />

      {/* ヒーローセクション */}
      <section style={{ padding: '40px 24px 32px', background: 'linear-gradient(160deg, #f8faff 0%, #ffffff 60%, #f0f7ff 100%)', position: 'relative', overflow: 'hidden' }}>
        {/* 背景グロー */}
        <div style={{
          position: 'absolute', top: '-20%', right: '-20%',
          width: '300px', height: '300px', borderRadius: '50%',
          background: `radial-gradient(circle, ${app.color}20 0%, transparent 70%)`,
          pointerEvents: 'none',
        }} />

        {/* アイコン＋アプリ名 */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
          <img src={app.icon} alt={app.name} style={{
            width: '100px', height: '100px', borderRadius: '24px',
            boxShadow: '0 16px 48px rgba(0,0,0,0.18)',
            border: '2px solid rgba(0,0,0,0.06)',
          }} />
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '0.8rem', fontWeight: 600, color: app.color, margin: '0 0 6px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{app.category}</p>
            <h1 style={{ fontSize: '2rem', fontWeight: 900, color: '#0a0a0a', margin: '0 0 8px', letterSpacing: '-0.03em' }}>{app.name}</h1>
            <p style={{ fontSize: '0.95rem', color: 'rgba(0,0,0,0.55)', margin: 0, lineHeight: 1.6 }}>{app.description}</p>
          </div>
        </div>

        {/* ダウンロードボタン */}
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          {app.appStoreUrl !== '#' ? (
            <a href={app.appStoreUrl} target="_blank" rel="noopener noreferrer" style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '12px 20px', borderRadius: '14px',
              background: '#0a0a0a', color: '#fff',
              textDecoration: 'none', fontWeight: 700, fontSize: '0.85rem',
              boxShadow: '0 4px 16px rgba(0,0,0,0.20)',
            }}>
              <AppleIcon /> App Store
            </a>
          ) : (
            <span style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '12px 20px', borderRadius: '14px',
              background: '#d1d5db', color: '#9ca3af',
              fontWeight: 700, fontSize: '0.85rem',
            }}>
              <AppleIcon /> App Store
            </span>
          )}
          {app.playStoreUrl !== '#' ? (
            <a href={app.playStoreUrl} target="_blank" rel="noopener noreferrer" style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '12px 20px', borderRadius: '14px',
              background: '#fff', color: '#0a0a0a',
              textDecoration: 'none', fontWeight: 700, fontSize: '0.85rem',
              border: '1.5px solid #e2e8f0',
              boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
            }}>
              <PlayIcon /> Google Play
            </a>
          ) : (
            <span style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '12px 20px', borderRadius: '14px',
              background: '#fff', color: '#d1d5db',
              fontWeight: 700, fontSize: '0.85rem',
              border: '1.5px solid #e2e8f0',
            }}>
              <PlayIcon /> Google Play
            </span>
          )}
        </div>
      </section>

      {/* 機能リスト */}
      <section style={{ padding: '36px 24px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 900, color: '#0a0a0a', margin: '0 0 20px', letterSpacing: '-0.02em' }}>主な機能</h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {app.features.map((f, i) => (
            <li key={i} style={{
              display: 'flex', alignItems: 'center', gap: '16px',
              padding: '16px 0',
              borderBottom: i < app.features.length - 1 ? '1px solid #f0f2f5' : 'none',
            }}>
              <span style={{ fontSize: '1rem', fontWeight: 900, color: app.color, opacity: 0.6, minWidth: '32px' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span style={{ fontSize: '1rem', fontWeight: 700, color: '#1a1a1a' }}>{f.text}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* スクリーンショット横スクロール */}
      <section style={{ padding: '0 0 40px' }}>
        <div style={{
          display: 'flex', gap: '16px',
          overflowX: 'auto', overflowY: 'hidden',
          padding: '8px 24px 16px',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}>
          {app.screenshots.map((src, i) => (
            <div key={i} style={{
              flexShrink: 0,
              width: '200px',
              borderRadius: '24px', overflow: 'hidden',
              boxShadow: '0 16px 48px rgba(0,0,0,0.18)',
              border: '8px solid #1a1a1a',
              background: '#1a1a1a',
              scrollSnapAlign: 'start',
            }}>
              <img src={src} alt={`スクリーンショット${i + 1}`} style={{ width: '100%', display: 'block' }} />
            </div>
          ))}
        </div>
      </section>

      <MobileFooter />
    </div>
  );
}
