import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function MobileHeader() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    setOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(248,250,252,0.95)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(0,0,0,0.06)',
      boxShadow: '0 1px 20px rgba(0,0,0,0.06)',
    }}>
      {/* トップバー */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '56px', padding: '0 16px' }}>
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

      {/* 展開メニュー */}
      <div style={{
        overflow: 'hidden',
        maxHeight: open ? '300px' : '0',
        transition: 'max-height 0.3s ease',
        borderTop: open ? '1px solid rgba(0,0,0,0.06)' : 'none',
      }}>
        <nav style={{ display: 'flex', flexDirection: 'column', padding: '8px 0' }}>
          <Link
            to="/"
            onClick={() => setOpen(false)}
            style={{ padding: '14px 24px', fontSize: '0.95rem', fontWeight: 600, color: '#333', textDecoration: 'none' }}
          >
            ホーム
          </Link>
          <button
            onClick={() => scrollToSection('news')}
            style={{ padding: '14px 24px', fontSize: '0.95rem', fontWeight: 600, color: '#333', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
          >
            お知らせ
          </button>
          <button
            onClick={() => scrollToSection('apps')}
            style={{ padding: '14px 24px', fontSize: '0.95rem', fontWeight: 600, color: '#333', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
          >
            アプリ一覧
          </button>
          <button
            onClick={() => scrollToSection('services')}
            style={{ padding: '14px 24px', fontSize: '0.95rem', fontWeight: 600, color: '#333', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
          >
            サービス一覧
          </button>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            style={{ padding: '14px 24px', fontSize: '0.95rem', fontWeight: 600, color: '#333', textDecoration: 'none' }}
          >
            お問い合わせ
          </Link>
        </nav>
      </div>
    </header>
  );
}
