import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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

function NewsDropdown() {
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
        className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 hover:bg-purple-50"
        style={{ color: open ? '#FF6B9D' : '#64748B' }}
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
        className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 hover:bg-purple-50"
        style={{ color: open ? '#FF6B9D' : '#64748B' }}
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
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,252,254,0.95)' : 'rgba(255,252,254,0.75)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${scrolled ? 'rgba(255,107,157,0.15)' : 'transparent'}`,
        boxShadow: scrolled ? '0 4px 24px rgba(255,107,157,0.08)' : 'none',
      }}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-4 flex items-center justify-between">

        <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
          <div className="w-9 h-9 rounded-2xl flex items-center justify-center font-black text-white text-base flex-shrink-0"
            style={{ background: 'linear-gradient(135deg,#FF6B9D,#A78BFA)', boxShadow: '0 4px 14px rgba(255,107,157,0.35)' }}>
            S
          </div>
          <span className="font-black text-lg" style={{ color: '#1E1B4B' }}>Studism</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <a href="/"
            className="px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 hover:bg-pink-50 hover:text-pink-500"
            style={{ color: '#64748B' }}>
            Home
          </a>
          <NewsDropdown />
          <AppsDropdown />
          <Link to="/contact"
            className="ml-3 px-6 py-2.5 rounded-2xl text-sm font-black text-white transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg,#FF6B9D,#A78BFA)', boxShadow: '0 4px 16px rgba(255,107,157,0.35)' }}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
