import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function MobileHeader() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  // サイドバーを開いたらページ全体を左へ押し出す
  useEffect(() => {
    const root = document.getElementById('root');
    if (!root) return;
    root.style.transition = 'transform 0.3s ease';
    root.style.transform = open ? 'translateX(-33.333vw)' : 'translateX(0)';
    return () => { root.style.transform = 'translateX(0)'; };
  }, [open]);

  const scrollToSection = (id) => {
    setOpen(false);
    const go = () => {
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 76;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    };
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(go, 120);
    } else {
      go();
    }
  };

  return (
    <>
    <header style={{
      position: isHome ? 'relative' : 'sticky', top: 0, zIndex: 62,
      background: 'transparent',
      padding: '8px 12px',
      transform: isHome ? 'translateY(var(--header-shift, 0px))' : 'none',
      willChange: isHome ? 'transform' : 'auto',
    }}>
      <div style={{
        background: '#ffffff',
        border: '1px solid rgba(0,0,0,0.06)',
        boxShadow: '0 6px 24px rgba(0,0,0,0.10)',
        borderRadius: '18px',
        overflow: 'hidden',
      }}>
      {/* トップバー */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '52px', padding: '0 16px' }}>
        {/* 左: ロゴ */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
          <img src="/images/studism/icon.png" alt="Studism icon" style={{ height: '30px', width: 'auto', borderRadius: '7px' }} />
          <span style={{ fontWeight: 900, fontSize: '1.05rem', color: '#0f0f0f', letterSpacing: '-0.01em' }}>Studism</span>
        </Link>

        {/* 右: ハンバーガーボタン */}
        <button
          onClick={() => setOpen(prev => !prev)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', display: 'flex', flexDirection: 'column', gap: '5px' }}
          aria-label="メニューを開く"
        >
          <span style={{
            display: 'block', width: '22px', height: '2px', background: '#1a1a1a', borderRadius: '2px',
            transition: 'transform 0.25s ease, opacity 0.25s ease',
            transform: open ? 'translateY(7px) rotate(45deg)' : 'none',
          }} />
          <span style={{
            display: 'block', width: '22px', height: '2px', background: '#1a1a1a', borderRadius: '2px',
            transition: 'opacity 0.25s ease',
            opacity: open ? 0 : 1,
          }} />
          <span style={{
            display: 'block', width: '22px', height: '2px', background: '#1a1a1a', borderRadius: '2px',
            transition: 'transform 0.25s ease, opacity 0.25s ease',
            transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none',
          }} />
        </button>
      </div>

      </div>
    </header>

    {createPortal(
      <>
        {/* オーバーレイ（押し出されたページ側をタップで閉じる） */}
        <div
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed', inset: 0, background: 'transparent', zIndex: 60,
            opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none',
            transition: 'opacity 0.3s ease',
          }}
        />
        {/* 右からのサイドバー（ページと同じ幅だけ押し出す） */}
        <aside
          style={{
            position: 'fixed', top: 0, right: 0, height: '100%', width: '33.333vw', zIndex: 61,
            background: '#eef2f7',
            transform: open ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.3s ease',
            display: 'flex', flexDirection: 'column', padding: '64px 0 16px',
          }}
        >
          <div style={{ textAlign: 'center', padding: '0 0 14px' }}>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f0f0f', letterSpacing: '0.08em', lineHeight: 1.2 }}>Menu</div>
            <div style={{ fontSize: '0.68rem', fontWeight: 600, color: '#8a93a0', letterSpacing: '0.12em' }}>メニュー</div>
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', padding: '8px 0' }}>
            <Link to="/" onClick={() => setOpen(false)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '0 16px', padding: '14px 4px', fontSize: '0.9rem', fontWeight: 600, color: '#333', borderBottom: '1px solid #ffffff', textDecoration: 'none' }}>
              ホーム<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9aa3b0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
            </Link>
            <button onClick={() => scrollToSection('news')} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '0 16px', padding: '14px 4px', fontSize: '0.9rem', fontWeight: 600, color: '#333', background: 'none', border: 'none', borderBottom: '1px solid #ffffff', cursor: 'pointer', textAlign: 'left' }}>
              お知らせ<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9aa3b0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
            </button>
            <button onClick={() => scrollToSection('apps')} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '0 16px', padding: '14px 4px', fontSize: '0.9rem', fontWeight: 600, color: '#333', background: 'none', border: 'none', borderBottom: '1px solid #ffffff', cursor: 'pointer', textAlign: 'left' }}>
              アプリケーション<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9aa3b0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
            </button>
            <button onClick={() => scrollToSection('services')} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '0 16px', padding: '14px 4px', fontSize: '0.9rem', fontWeight: 600, color: '#333', background: 'none', border: 'none', borderBottom: '1px solid #ffffff', cursor: 'pointer', textAlign: 'left' }}>
              サービス<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9aa3b0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
            </button>
            <Link to="/contact" onClick={() => setOpen(false)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '0 16px', padding: '14px 4px', fontSize: '0.9rem', fontWeight: 600, color: '#333', borderBottom: '1px solid #ffffff', textDecoration: 'none' }}>
              お問い合わせ<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9aa3b0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
            </Link>
          </nav>
        </aside>
      </>,
      document.body
    )}
    </>
  );
}
