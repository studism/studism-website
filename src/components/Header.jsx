import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
      <div className="container mx-auto px-8 md:px-12 lg:px-16 xl:px-20 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <img src="/images/studism-logo.png" alt="Studism" className="w-12 h-12" />
            <span className="text-xl font-bold text-foreground">Studism</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <a href="/#about" className="font-semibold text-foreground py-2 border-b-2 border-transparent hover:border-primary transition-all duration-300 ease-in-out">会社について</a>
            <a href="/#apps" className="font-semibold text-foreground py-2 border-b-2 border-transparent hover:border-primary transition-all duration-300 ease-in-out">アプリ一覧</a>
            <a href="/#news" className="font-semibold text-foreground py-2 border-b-2 border-transparent hover:border-primary transition-all duration-300 ease-in-out">お知らせ</a>
            <Link to="/contact" className="font-semibold text-foreground py-2 border-b-2 border-transparent hover:border-primary transition-all duration-300 ease-in-out">お問い合わせ</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
