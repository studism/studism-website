import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(7,7,17,0.92)' : 'rgba(7,7,17,0.5)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderBottom: `1px solid ${scrolled ? 'rgba(99,102,241,0.15)' : 'rgba(255,255,255,0.04)'}`,
        boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.6)' : 'none',
      }}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-white text-base"
            style={{ background:'linear-gradient(135deg,#6366f1,#8b5cf6)', boxShadow:'0 4px 14px rgba(99,102,241,0.4)' }}>
            S
          </div>
          <span className="font-black text-white text-lg tracking-tight">Studism</span>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {[
            { href:'/',       label:'Home'     },
            { href:'/#about', label:'About'    },
            { href:'/#apps',  label:'Apps'     },
            { href:'/#news',  label:'News'     },
          ].map(({ href, label }) => (
            <a key={href} href={href}
              className="px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 hover:bg-white/6 hover:text-white"
              style={{ color:'rgba(255,255,255,0.5)' }}>
              {label}
            </a>
          ))}
          <Link to="/contact"
            className="ml-3 px-6 py-2.5 rounded-xl text-sm font-black text-white transition-all hover:scale-105"
            style={{ background:'linear-gradient(135deg,#6366f1,#8b5cf6)', boxShadow:'0 4px 16px rgba(99,102,241,0.35)' }}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
