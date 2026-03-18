import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const navLinkStyle = {
  padding: '8px 16px', fontSize: '0.88rem', fontWeight: 600,
  color: '#333', textDecoration: 'none', letterSpacing: '0.01em',
  transition: 'color 0.15s', cursor: 'pointer', background: 'none', border: 'none',
};

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fn = () => {
      const y = window.scrollY;
      setHidden(y > lastY.current && y > 80);
      lastY.current = y;
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const scrollToSection = (id) => {
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
    <header className="sticky top-0 z-50"
      style={{
        background: 'rgba(248,250,252,0.90)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
        boxShadow: '0 1px 20px rgba(0,0,0,0.06)',
        transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'transform 0.3s ease',
      }}>
      <div style={{ width: '100%', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>

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
            onClick={() => scrollToSection('news')}
            onMouseEnter={e => e.currentTarget.style.color = '#1D4ED8'}
            onMouseLeave={e => e.currentTarget.style.color = '#333'}>
            お知らせ
          </button>
          <button style={navLinkStyle}
            onClick={() => scrollToSection('apps')}
            onMouseEnter={e => e.currentTarget.style.color = '#1D4ED8'}
            onMouseLeave={e => e.currentTarget.style.color = '#333'}>
            アプリ一覧
          </button>
          <button style={navLinkStyle}
            onClick={() => scrollToSection('services')}
            onMouseEnter={e => e.currentTarget.style.color = '#1D4ED8'}
            onMouseLeave={e => e.currentTarget.style.color = '#333'}>
            サービス一覧
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
