import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';

const APPS = [
  { id: 'sakuraenglish', name: 'SakuraEnglish', desc: '語学学習アプリ', icon: '/images/sakuraenglish.png', grad: 'linear-gradient(135deg,#EC4899,#F97316)', shadow: 'rgba(236,72,153,0.25)' },
  { id: 'timelyze',      name: 'Timelyze',      desc: '時間管理アプリ', icon: '/images/timelyze.png',      grad: 'linear-gradient(135deg,#6366F1,#06B6D4)', shadow: 'rgba(99,102,241,0.25)' },
];

const NEWS_ITEMS = [
  { date: '2025年11月22日', title: '公式ウェブサイトをリニューアルオープンしました', type: 'お知らせ',    c: '#6D28D9', bg: '#EDE9FE' },
  { date: '2025年11月20日', title: 'お問い合わせフォームのシステムを更新しました',    type: 'アップデート', c: '#0369A1', bg: '#E0F2FE' },
  { date: '2025年11月15日', title: '「SakuraEnglish」に新しい単語リストを追加しました', type: 'アップデート', c: '#9D174D', bg: '#FCE7F3' },
];

function NewsDropdown({ transparent }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const fn = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, []);

  const baseColor = transparent ? 'rgba(255,255,255,0.9)' : '#333';

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(v => !v)}
        className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200"
        style={{ color: open ? (transparent ? '#fff' : '#7C3AED') : baseColor, background: 'transparent' }}
      >
        News
        <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200" style={{ transform: open ? 'rotate(180deg)' : 'none' }} />
      </button>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 rounded-3xl overflow-hidden z-50"
          style={{ background: '#fff', border: '2px solid #EDE9FE', boxShadow: '0 20px 60px rgba(124,58,237,0.15), 0 4px 16px rgba(0,0,0,0.08)' }}>
          <div className="px-4 pt-4 pb-1">
            <p className="text-xs font-black uppercase tracking-widest" style={{ color: '#CBD5E1' }}>最新情報</p>
          </div>
          {NEWS_ITEMS.map((n, i) => (
            <div key={i} className="px-4 py-3 mx-2 mb-1 rounded-2xl" style={{ background: n.bg }}>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-black text-white" style={{ background: n.c }}>{n.type}</span>
                <span className="text-[10px] font-bold" style={{ color: n.c, opacity: 0.6 }}>{n.date}</span>
              </div>
              <p className="text-xs font-bold leading-snug" style={{ color: '#1E1B4B' }}>{n.title}</p>
            </div>
          ))}
          <div className="pb-2" />
        </div>
      )}
    </div>
  );
}

function AppsDropdown({ transparent }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const fn = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, []);

  const baseColor = transparent ? 'rgba(255,255,255,0.9)' : '#333';

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(v => !v)}
        className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200"
        style={{ color: open ? (transparent ? '#fff' : '#7C3AED') : baseColor, background: 'transparent' }}
      >
        Apps
        <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200" style={{ transform: open ? 'rotate(180deg)' : 'none' }} />
      </button>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 rounded-3xl overflow-hidden z-50"
          style={{ background: '#fff', border: '2px solid #EDE9FE', boxShadow: '0 20px 60px rgba(124,58,237,0.15), 0 4px 16px rgba(0,0,0,0.08)' }}>
          <div className="px-4 pt-4 pb-1">
            <p className="text-xs font-black uppercase tracking-widest" style={{ color: '#CBD5E1' }}>アプリ一覧</p>
          </div>

          {APPS.map(app => (
            <Link key={app.id} to={`/app/${app.id}`} onClick={() => setOpen(false)}
              className="group flex items-center gap-3 px-4 py-3.5 mx-2 mb-1 rounded-2xl transition-all duration-200 hover:bg-purple-50">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform"
                style={{ background: app.grad, boxShadow: `0 4px 12px ${app.shadow}` }}>
                <img src={app.icon} alt={app.name} className="w-7 h-7 object-contain" />
              </div>
              <div className="flex-1">
                <p className="font-black text-sm" style={{ color: '#1E1B4B' }}>{app.name}</p>
                <p className="text-xs font-medium" style={{ color: '#94A3B8' }}>{app.desc}</p>
              </div>
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" style={{ color: '#7C3AED' }} />
            </Link>
          ))}

          <div className="mx-4 my-2" style={{ height: 1, background: '#F1F5F9' }} />
          <Link to="/#apps" onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-1.5 py-3 text-xs font-black transition-colors hover:text-purple-700"
            style={{ color: '#94A3B8' }}>
            すべてのアプリ <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const transparent = isHome && !scrolled;

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const textColor = transparent ? 'rgba(255,255,255,0.9)' : '#333';

  return (
    <header className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: transparent ? 'transparent' : '#ffffff',
        borderBottom: transparent ? 'none' : '1px solid #e8e8e8',
        boxShadow: scrolled ? '0 2px 12px rgba(0,0,0,0.06)' : 'none',
      }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>

        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div style={{
            width: '36px', height: '36px', background: '#7C3AED',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontWeight: 900, fontSize: '1rem',
          }}>
            S
          </div>
          <span style={{ fontWeight: 900, fontSize: '1.1rem', color: transparent ? '#fff' : '#0f0f0f', letterSpacing: '-0.01em' }}>Studism</span>
        </Link>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
          <a href="/" style={{ padding: '8px 16px', fontSize: '0.82rem', fontWeight: 600, color: textColor, textDecoration: 'none', letterSpacing: '0.01em' }}
            onMouseEnter={e => e.target.style.color = transparent ? '#fff' : '#7C3AED'}
            onMouseLeave={e => e.target.style.color = textColor}>
            Home
          </a>
          <NewsDropdown transparent={transparent} />
          <AppsDropdown transparent={transparent} />
          <Link to="/contact" style={{
            marginLeft: '16px', padding: '9px 22px',
            background: transparent ? 'rgba(255,255,255,0.2)' : '#7C3AED',
            border: transparent ? '1px solid rgba(255,255,255,0.5)' : 'none',
            color: '#fff',
            textDecoration: 'none', fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.04em',
            borderRadius: transparent ? '6px' : '0',
          }}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
