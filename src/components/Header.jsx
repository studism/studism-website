import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8" style={{ background: 'rgba(6,6,15,0.75)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
      <div className="container mx-auto px-8 md:px-12 lg:px-16 xl:px-20 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <img src="/images/studism-logo.png" alt="Studism" className="w-10 h-10 invert" />
            <span className="text-lg font-black text-white tracking-tight">Studism</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-1">
            {[
              { href: '/#about', label: '会社について' },
              { href: '/#apps',  label: 'アプリ一覧' },
              { href: '/#news',  label: 'お知らせ' },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="px-4 py-2 rounded-xl text-sm font-medium text-white/60 hover:text-white hover:bg-white/8 transition-all duration-200"
              >
                {label}
              </a>
            ))}
            <Link
              to="/contact"
              className="ml-2 px-5 py-2 rounded-xl text-sm font-bold text-white border border-white/15 hover:border-white/30 hover:bg-white/8 transition-all duration-200"
            >
              お問い合わせ
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
