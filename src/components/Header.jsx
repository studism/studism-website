import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';

const APPS = [
  {
    id: 'sakuraenglish',
    name: 'SakuraEnglish',
    desc: '英語学習アプリ',
    icon: '/images/sakuraenglish.png',
    color: '#ec4899',
    grad: 'linear-gradient(135deg,#ec4899,#f97316)',
  },
  {
    id: 'timelyze',
    name: 'Timelyze',
    desc: '時間管理アプリ',
    icon: '/images/timelyze.png',
    color: '#6366f1',
    grad: 'linear-gradient(135deg,#6366f1,#06b6d4)',
  },
];

function AppsDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const fn = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(v => !v)}
        className="flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 hover:bg-white/6 hover:text-white"
        style={{ color: open ? '#fff' : 'rgba(255,255,255,0.5)' }}
      >
        Apps <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200" style={{ transform: open ? 'rotate(180deg)' : 'none' }} />
      </button>

      {open && (
        <div
          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 rounded-2xl overflow-hidden z-50"
          style={{ background: 'rgba(10,10,24,0.97)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 24px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(99,102,241,0.1)' }}
        >
          {/* top label */}
          <div className="px-4 pt-4 pb-2">
            <p className="text-xs font-black uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.25)' }}>アプリ一覧</p>
          </div>

          {APPS.map(app => (
            <Link
              key={app.id}
              to={`/app/${app.id}`}
              onClick={() => setOpen(false)}
              className="group flex items-center gap-4 px-4 py-3.5 mx-2 mb-1 rounded-xl transition-all duration-200 hover:bg-white/5"
            >
              {/* icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform"
                style={{ background: app.grad, boxShadow: `0 4px 14px ${app.color}40` }}
              >
                <img src={app.icon} alt={app.name} className="w-7 h-7 object-contain" />
              </div>
              {/* text */}
              <div className="flex-1 min-w-0">
                <p className="font-black text-sm text-white leading-tight">{app.name}</p>
                <p className="text-xs font-medium mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>{app.desc}</p>
              </div>
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" style={{ color: app.color }} />
            </Link>
          ))}

          {/* bottom divider + view all */}
          <div className="mx-4 my-2" style={{ height: 1, background: 'rgba(255,255,255,0.06)' }} />
          <Link
            to="/#apps"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-1.5 px-4 py-3 text-xs font-black uppercase tracking-widest transition-colors hover:text-white"
            style={{ color: 'rgba(255,255,255,0.3)' }}
          >
            すべて見る <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(7,7,17,0.95)' : 'rgba(7,7,17,0.6)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderBottom: `1px solid ${scrolled ? 'rgba(99,102,241,0.15)' : 'rgba(255,255,255,0.04)'}`,
        boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.6)' : 'none',
      }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-white text-base flex-shrink-0"
            style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', boxShadow: '0 4px 14px rgba(99,102,241,0.4)' }}
          >
            S
          </div>
          <span className="font-black text-white text-lg tracking-tight">Studism</span>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {[
            { href: '/',       label: 'Home'  },
            { href: '/#about', label: 'About' },
            { href: '/#news',  label: 'News'  },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 hover:bg-white/6 hover:text-white"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              {label}
            </a>
          ))}

          {/* Apps dropdown */}
          <AppsDropdown />

          <Link
            to="/contact"
            className="ml-3 px-6 py-2.5 rounded-xl text-sm font-black text-white transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', boxShadow: '0 4px 16px rgba(99,102,241,0.35)' }}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
