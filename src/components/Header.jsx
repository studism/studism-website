import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-85 transition-opacity">
            <img src="/images/Studismlogo.png" alt="Studism" className="h-12 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {[
              { href: '/',       label: 'Home' },
              { href: '/#about', label: 'About' },
              { href: '/#apps',  label: 'Features' },
              { href: '/#news',  label: 'Blog' },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="px-4 py-2 rounded-lg text-sm font-semibold text-blue-700 hover:text-blue-900 hover:bg-blue-50 transition-all duration-200"
              >
                {label}
              </a>
            ))}
            <Link
              to="/contact"
              className="ml-3 px-6 py-2.5 rounded-full text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)', boxShadow: '0 4px 14px rgba(59,130,246,0.4)' }}
            >
              Sign Up
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
