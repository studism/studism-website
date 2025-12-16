import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sticky top-0 z-50">
      {/* Upper Header - Logo & Tagline */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 md:px-8 py-3">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <img src="/images/studism-logo.png" alt="Studism" className="w-10 h-10" />
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold text-foreground">Studism</span>
                <span className="text-sm text-muted-foreground hidden sm:inline">| 学びを、もっと自由に</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Lower Header - Navigation */}
      <div className="bg-primary">
        <div className="container mx-auto px-4 md:px-8">
          <nav className="flex items-center justify-center md:justify-start space-x-1 md:space-x-2 overflow-x-auto">
            <a
              href="/#about"
              className="text-white text-sm md:text-base font-medium px-4 py-3 hover:bg-white/20 transition-colors whitespace-nowrap"
            >
              Studismが望む未来
            </a>
            <a
              href="/#apps"
              className="text-white text-sm md:text-base font-medium px-4 py-3 hover:bg-white/20 transition-colors whitespace-nowrap"
            >
              アプリ一覧
            </a>
            <a
              href="/#news"
              className="text-white text-sm md:text-base font-medium px-4 py-3 hover:bg-white/20 transition-colors whitespace-nowrap"
            >
              お知らせ
            </a>
            <Link
              to="/contact"
              className="text-white text-sm md:text-base font-medium px-4 py-3 hover:bg-white/20 transition-colors whitespace-nowrap"
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
