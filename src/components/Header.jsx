import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // クリック外で閉じる
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
      <div className="bg-primary relative">
        <div className="container mx-auto px-4 md:px-8">
          <nav className="flex items-center justify-center md:justify-start space-x-1 md:space-x-2 overflow-x-auto">
            {/* 企業情報 Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-white text-sm md:text-base font-medium px-4 py-3 hover:bg-white/20 transition-colors whitespace-nowrap flex items-center gap-1"
              >
                企業情報
                <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
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

      {/* Full-width Dropdown Menu */}
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute left-0 right-0 bg-white shadow-xl border-t-4 border-primary z-40"
        >
          <div className="container mx-auto px-4 md:px-8 py-8">
            {/* Header */}
            <Link
              to="/#about"
              className="text-2xl font-bold text-primary hover:underline flex items-center gap-2 mb-8"
              onClick={() => setIsDropdownOpen(false)}
            >
              企業情報トップ
              <span className="text-lg">→</span>
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Column 1 */}
              <div>
                <h3 className="text-base font-bold text-gray-800 border-b-2 border-primary pb-2 mb-4">
                  Studismについて
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="/#about"
                      className="text-gray-600 hover:text-primary hover:underline"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Studismが望む未来
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#apps"
                      className="text-gray-600 hover:text-primary hover:underline"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      開発アプリ一覧
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#news"
                      className="text-gray-600 hover:text-primary hover:underline"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      お知らせ
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 2 */}
              <div>
                <h3 className="text-base font-bold text-gray-800 border-b-2 border-primary pb-2 mb-4">
                  ポリシー
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/privacy"
                      className="text-gray-600 hover:text-primary hover:underline"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      プライバシーポリシー
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3 */}
              <div>
                <h3 className="text-base font-bold text-gray-800 border-b-2 border-primary pb-2 mb-4">
                  お問い合わせ
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/contact"
                      className="text-gray-600 hover:text-primary hover:underline"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      お問い合わせフォーム
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
