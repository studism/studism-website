import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, Search } from 'lucide-react';

// 検索対象データ
const searchData = [
  // アプリ
  { title: 'SakuraEnglish', description: 'レベル別の英単語クイズで効率的に語彙力を強化', category: 'アプリ', path: '/app/sakuraenglish', keywords: ['英語', '英単語', 'クイズ', '語学', '学習'] },
  { title: 'Timelyze', description: '学習時間の記録・管理を簡単に', category: 'アプリ', path: '/app/timelyze', keywords: ['時間', '管理', '記録', '生産性', '目標'] },
  // ページ
  { title: 'ホーム', description: 'Studismトップページ', category: 'ページ', path: '/', keywords: ['トップ', 'メイン'] },
  { title: 'お問い合わせ', description: 'ご質問・ご要望はこちら', category: 'ページ', path: '/contact', keywords: ['連絡', '質問', 'フォーム'] },
  { title: 'プライバシーポリシー', description: '個人情報の取り扱いについて', category: 'ページ', path: '/privacy', keywords: ['個人情報', 'ポリシー', '規約'] },
  { title: 'ニュース', description: '最新のお知らせ', category: 'ページ', path: '/#news', keywords: ['お知らせ', '更新', '新着'] },
  { title: 'アプリ一覧', description: 'Studismの開発アプリ', category: 'ページ', path: '/#apps', keywords: ['アプリ', '製品'] },
  { title: 'Studismについて', description: '企業情報・ミッション', category: 'ページ', path: '/#about', keywords: ['会社', '企業', 'ミッション', 'ビジョン'] },
];

const Header = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAppsDropdownOpen, setIsAppsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const appsDropdownRef = useRef(null);
  const appsButtonRef = useRef(null);
  const searchRef = useRef(null);
  const searchInputRef = useRef(null);

  // クリック外で閉じる
  useEffect(() => {
    const handleClickOutside = (event) => {
      // 企業情報ドロップダウン
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
      // アプリ一覧ドロップダウン
      if (
        appsDropdownRef.current &&
        !appsDropdownRef.current.contains(event.target) &&
        appsButtonRef.current &&
        !appsButtonRef.current.contains(event.target)
      ) {
        setIsAppsDropdownOpen(false);
      }
      // 検索ドロップダウン
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 検索クエリが変更されたときに結果をフィルター
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }
    const query = searchQuery.toLowerCase();
    const results = searchData.filter(item =>
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.keywords.some(keyword => keyword.toLowerCase().includes(query))
    );
    setSearchResults(results);
  }, [searchQuery]);

  // 検索結果をクリックしたときの処理
  const handleSearchResultClick = (path) => {
    setSearchQuery('');
    setIsSearchOpen(false);
    if (path.startsWith('/#')) {
      // ハッシュリンクの場合
      window.location.href = path;
    } else {
      navigate(path);
    }
  };

  // 検索を開く
  const openSearch = () => {
    setIsSearchOpen(true);
    setTimeout(() => searchInputRef.current?.focus(), 100);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
    setIsAppsDropdownOpen(false);
  };

  const toggleAppsDropdown = () => {
    setIsAppsDropdownOpen((prev) => !prev);
    setIsDropdownOpen(false);
  };

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

            <div className="flex items-center gap-4">
              {/* SNSリンク */}
              <div className="flex items-center gap-2">
                <a
                  href="https://x.com/Studism_Stdism"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-black transition-colors"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/studism_stdism/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-pink-600 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>

              {/* 検索 */}
              <div className="relative" ref={searchRef}>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchOpen(true)}
                    placeholder="サイト内検索"
                    className="w-40 md:w-56 pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50 focus:bg-white transition-colors"
                  />
                </div>

              {/* 検索結果ドロップダウン */}
              {isSearchOpen && searchResults.length > 0 && (
                <div className="absolute top-full right-0 mt-2 w-72 md:w-80 bg-white rounded-lg shadow-xl border z-50 max-h-80 overflow-y-auto">
                  {searchResults.map((result, index) => (
                    <button
                      key={index}
                      onClick={() => handleSearchResultClick(result.path)}
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 border-b last:border-b-0 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary font-medium">
                          {result.category}
                        </span>
                        <span className="font-medium text-gray-800">{result.title}</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{result.description}</p>
                    </button>
                  ))}
                </div>
              )}

              {/* 検索結果なし */}
              {isSearchOpen && searchQuery.trim() !== '' && searchResults.length === 0 && (
                <div className="absolute top-full right-0 mt-2 w-72 md:w-80 bg-white rounded-lg shadow-xl border z-50 p-4">
                  <p className="text-sm text-gray-500 text-center">検索結果がありません</p>
                </div>
              )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Header - Navigation */}
      <div className="bg-primary relative">
        <div className="container mx-auto px-4 md:px-8">
          <nav className="flex items-center justify-center md:justify-start space-x-1 md:space-x-2 overflow-x-auto">
            {/* 企業情報 Dropdown */}
            <div className="relative">
              <button
                ref={buttonRef}
                onClick={toggleDropdown}
                className="text-white text-sm md:text-base font-medium px-4 py-3 hover:bg-white/20 transition-colors whitespace-nowrap flex items-center gap-1"
              >
                企業情報
                <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* アプリ一覧 Dropdown */}
            <div className="relative">
              <button
                ref={appsButtonRef}
                onClick={toggleAppsDropdown}
                className="text-white text-sm md:text-base font-medium px-4 py-3 hover:bg-white/20 transition-colors whitespace-nowrap flex items-center gap-1"
              >
                アプリ一覧
                <ChevronDown className={`w-4 h-4 transition-transform ${isAppsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
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

      {/* Full-width Dropdown Menu - 企業情報 */}
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

      {/* Full-width Dropdown Menu - アプリ一覧 */}
      {isAppsDropdownOpen && (
        <div
          ref={appsDropdownRef}
          className="absolute left-0 right-0 bg-white shadow-xl border-t-4 border-primary z-40"
        >
          <div className="container mx-auto px-4 md:px-8 py-8">
            {/* Header */}
            <a
              href="/#apps"
              className="text-2xl font-bold text-primary hover:underline flex items-center gap-2 mb-8"
              onClick={() => setIsAppsDropdownOpen(false)}
            >
              アプリ一覧トップ
              <span className="text-lg">→</span>
            </a>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 学習カテゴリ */}
              <div>
                <h3 className="text-base font-bold text-gray-800 border-b-2 border-primary pb-2 mb-4">
                  学習
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/app/sakuraenglish"
                      className="text-gray-600 hover:text-primary hover:underline flex items-center gap-2"
                      onClick={() => setIsAppsDropdownOpen(false)}
                    >
                      <img src="/images/sakuraenglish.jpg" alt="SakuraEnglish" className="w-6 h-6 rounded" />
                      SakuraEnglish
                    </Link>
                  </li>
                </ul>
              </div>

              {/* サポートカテゴリ */}
              <div>
                <h3 className="text-base font-bold text-gray-800 border-b-2 border-primary pb-2 mb-4">
                  サポート
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/app/timelyze"
                      className="text-gray-600 hover:text-primary hover:underline flex items-center gap-2"
                      onClick={() => setIsAppsDropdownOpen(false)}
                    >
                      <img src="/images/timelyze.png" alt="Timelyze" className="w-6 h-6 rounded" />
                      Timelyze
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
