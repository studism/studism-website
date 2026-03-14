import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NAV = [
  { href: '/',       label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#apps',  label: 'Features' },
  { href: '/#news',  label: 'Blog' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.80)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '3px solid transparent' : '3px solid transparent',
        backgroundClip: 'padding-box',
        boxShadow: scrolled ? '0 4px 24px rgba(59,130,246,0.12)' : 'none',
      }}>

      {/* rainbow underline */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 w-full h-0.5"
          style={{ background: 'linear-gradient(90deg,#ef4444,#f97316,#facc15,#4ade80,#60a5fa,#a855f7)' }} />
      )}

      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-3.5">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-85 transition-opacity group">
            <img src="/images/背景透過 2.png" alt="bird" className="h-10 w-auto group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300" />
            <img src="/images/Studism横影なし 2.png" alt="Studism" className="h-8 w-auto" />
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map(({ href, label }) => (
              <a key={href} href={href}
                className="px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 hover:bg-blue-50"
                style={{ color: '#1e40af' }}>
                {label}
              </a>
            ))}
            <Link to="/contact"
              className="ml-3 px-6 py-2.5 rounded-full text-sm font-black text-white transition-all hover:scale-105 hover:shadow-lg"
              style={{
                background: 'linear-gradient(135deg,#3b82f6,#2563eb)',
                boxShadow: '0 4px 16px rgba(59,130,246,0.4)',
              }}>
              Sign Up
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
