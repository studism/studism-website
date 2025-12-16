import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
            {/* 企業情報 Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className="text-white text-sm md:text-base font-medium px-4 py-3 hover:bg-white/20 transition-colors whitespace-nowrap flex items-center gap-1"
              >
                企業情報
                <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 w-[600px] bg-white shadow-xl border-t-4 border-primary">
                  <div className="p-6">
                    {/* Header */}
                    <Link
                      to="/#about"
                      className="text-xl font-bold text-primary hover:underline flex items-center gap-2 mb-6"
                    >
                      企業情報トップ
                      <span className="text-sm">→</span>
                    </Link>

                    <div className="grid grid-cols-2 gap-8">
                      {/* Left Column */}
                      <div>
                        <h3 className="text-base font-bold text-gray-800 border-b border-gray-300 pb-2 mb-3">
                          Studismについて
                        </h3>
                        <ul className="space-y-2">
                          <li>
                            <a href="/#about" className="text-sm text-gray-600 hover:text-primary hover:underline">
                              Studismが望む未来
                            </a>
                          </li>
                          <li>
                            <a href="/#apps" className="text-sm text-gray-600 hover:text-primary hover:underline">
                              開発アプリ一覧
                            </a>
                          </li>
                          <li>
                            <Link to="/privacy" className="text-sm text-gray-600 hover:text-primary hover:underline">
                              プライバシーポリシー
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Right Column */}
                      <div>
                        <h3 className="text-base font-bold text-gray-800 border-b border-gray-300 pb-2 mb-3">
                          お問い合わせ
                        </h3>
                        <ul className="space-y-2">
                          <li>
                            <Link to="/contact" className="text-sm text-gray-600 hover:text-primary hover:underline">
                              お問い合わせフォーム
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

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
