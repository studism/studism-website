import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useIsMobile from '@/hooks/useIsMobile';
import MobileHeader from '@/components/mobile/MobileHeader';

const navLinkStyle = {
  padding: '8px 16px', fontSize: '0.88rem', fontWeight: 600,
  color: '#333', textDecoration: 'none', letterSpacing: '0.01em',
  transition: 'color 0.15s', cursor: 'pointer', background: 'none', border: 'none',
};

export default function Header() {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const scrollToSection = (id) => {
    const go = () => {
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    };
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(go, 100);
    } else {
      go();
    }
  };

  if (isMobile) return <MobileHeader />;

  return (
    <header
      style={{
        position: isHome ? 'relative' : 'sticky', top: 0, zIndex: 50,
        background: 'transparent',
        padding: '10px 16px',
        transform: isHome ? 'translateY(var(--header-shift, 0px))' : 'none',
        willChange: isHome ? 'transform' : 'auto',
      }}>
      <div style={{
        maxWidth: '1280px', margin: '0 auto',
        background: '#ffffff',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(0,0,0,0.06)',
        boxShadow: '0 6px 24px rgba(0,0,0,0.10)',
        borderRadius: '18px',
        padding: '0 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '56px',
      }}>

        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <img src="/images/studism/icon.png" alt="Studism icon" style={{ height: '34px', width: 'auto', borderRadius: '8px' }} />
          <span style={{ fontWeight: 900, fontSize: '1.1rem', color: '#0f0f0f', letterSpacing: '-0.01em' }}>Studism</span>
        </Link>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
          <Link to="/" style={navLinkStyle}
            onMouseEnter={e => e.currentTarget.style.color = '#1D4ED8'}
            onMouseLeave={e => e.currentTarget.style.color = '#333'}>
            ホーム
          </Link>
          <button style={navLinkStyle}
            onClick={() => scrollToSection('apps')}
            onMouseEnter={e => e.currentTarget.style.color = '#1D4ED8'}
            onMouseLeave={e => e.currentTarget.style.color = '#333'}>
            アプリケーション
          </button>
          <button style={navLinkStyle}
            onClick={() => scrollToSection('services')}
            onMouseEnter={e => e.currentTarget.style.color = '#1D4ED8'}
            onMouseLeave={e => e.currentTarget.style.color = '#333'}>
            サービス
          </button>
          <button style={navLinkStyle}
            onClick={() => scrollToSection('news')}
            onMouseEnter={e => e.currentTarget.style.color = '#1D4ED8'}
            onMouseLeave={e => e.currentTarget.style.color = '#333'}>
            お知らせ
          </button>
          <Link to="/contact" style={navLinkStyle}
            onMouseEnter={e => e.currentTarget.style.color = '#1D4ED8'}
            onMouseLeave={e => e.currentTarget.style.color = '#333'}>
            お問い合わせ
          </Link>
        </nav>
      </div>
    </header>
  );
}
