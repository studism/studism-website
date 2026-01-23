import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAppsDropdownOpen, setIsAppsDropdownOpen] = useState(false);
  const [isNewsDropdownOpen, setIsNewsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const appsDropdownRef = useRef(null);
  const appsButtonRef = useRef(null);
  const newsDropdownRef = useRef(null);
  const newsButtonRef = useRef(null);
  const searchRef = useRef(null);
  const searchInputRef = useRef(null);

  // 検索対象データ（翻訳対応）
  const getSearchData = () => [
    { title: t('searchData.sakuraenglish.title'), description: t('searchData.sakuraenglish.description'), category: t('searchData.sakuraenglish.category'), path: '/app/sakuraenglish', keywords: ['英語', '英単語', 'クイズ', '語学', '学習', 'english', 'vocabulary', 'quiz'] },
    { title: t('searchData.timelyze.title'), description: t('searchData.timelyze.description'), category: t('searchData.timelyze.category'), path: '/app/timelyze', keywords: ['時間', '管理', '記録', '生産性', '目標', 'time', 'management', 'productivity'] },
    { title: t('searchData.home.title'), description: t('searchData.home.description'), category: t('searchData.home.category'), path: '/', keywords: ['トップ', 'メイン', 'home', 'top'] },
    { title: t('searchData.contact.title'), description: t('searchData.contact.description'), category: t('searchData.contact.category'), path: '/contact', keywords: ['連絡', '質問', 'フォーム', 'contact', 'form'] },
    { title: t('searchData.privacy.title'), description: t('searchData.privacy.description'), category: t('searchData.privacy.category'), path: '/privacy', keywords: ['個人情報', 'ポリシー', '規約', 'privacy', 'policy'] },
    { title: t('searchData.news.title'), description: t('searchData.news.description'), category: t('searchData.news.category'), path: '/#news', keywords: ['お知らせ', '更新', '新着', 'news', 'announcement'] },
    { title: t('searchData.appList.title'), description: t('searchData.appList.description'), category: t('searchData.appList.category'), path: '/#apps', keywords: ['アプリ', '製品', 'apps', 'products'] },
    { title: t('searchData.about.title'), description: t('searchData.about.description'), category: t('searchData.about.category'), path: '/#about', keywords: ['会社', '企業', 'ミッション', 'ビジョン', 'company', 'about', 'mission'] },
  ];

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
      // お知らせドロップダウン
      if (
        newsDropdownRef.current &&
        !newsDropdownRef.current.contains(event.target) &&
        newsButtonRef.current &&
        !newsButtonRef.current.contains(event.target)
      ) {
        setIsNewsDropdownOpen(false);
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
    const searchData = getSearchData();
    const results = searchData.filter(item =>
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.keywords.some(keyword => keyword.toLowerCase().includes(query))
    );
    setSearchResults(results);
  }, [searchQuery, i18n.language]);

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
    setIsNewsDropdownOpen(false);
  };

  const toggleAppsDropdown = () => {
    setIsAppsDropdownOpen((prev) => !prev);
    setIsDropdownOpen(false);
    setIsNewsDropdownOpen(false);
  };

  const toggleNewsDropdown = () => {
    setIsNewsDropdownOpen((prev) => !prev);
    setIsDropdownOpen(false);
    setIsAppsDropdownOpen(false);
  };

  return (
    <header className="relative z-50">
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
                <span className="text-xl font-bold text-foreground">{t('common.siteName')}</span>
                <span className="text-sm text-muted-foreground hidden sm:inline">| {t('common.tagline')}</span>
              </div>
            </Link>

            <div className="flex items-center gap-2 md:gap-4">
              {/* SNSリンク */}
              <div className="flex items-center gap-1">
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
                    placeholder={t('common.search')}
                    className="w-32 md:w-48 pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50 focus:bg-white transition-colors"
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
                  <p className="text-sm text-gray-500 text-center">{t('common.noResults')}</p>
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
                {t('header.companyInfo')}
                <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* お知らせ Dropdown */}
            <div className="relative">
              <button
                ref={newsButtonRef}
                onClick={toggleNewsDropdown}
                className="text-white text-sm md:text-base font-medium px-4 py-3 hover:bg-white/20 transition-colors whitespace-nowrap flex items-center gap-1"
              >
                {t('header.news')}
                <ChevronDown className={`w-4 h-4 transition-transform ${isNewsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
            <Link
              to="/contact"
              className="text-white text-sm md:text-base font-medium px-4 py-3 hover:bg-white/20 transition-colors whitespace-nowrap"
            >
              {t('header.contact')}
            </Link>
          </nav>
        </div>
      </div>

      {/* Full-width Dropdown Menu - 企業情報 */}
      <div
        ref={dropdownRef}
        className={`absolute left-0 right-0 bg-white shadow-xl border-t-4 border-primary z-40 overflow-hidden transition-[max-height] duration-1000 linear ${
          isDropdownOpen ? 'max-h-[600px]' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 py-8">
            {/* Header */}
            <Link
              to="/about"
              className="text-2xl font-bold text-primary hover:underline flex items-center gap-2 mb-8"
              onClick={() => setIsDropdownOpen(false)}
            >
              {t('header.companyInfoTop')}
              <span className="text-lg">→</span>
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Column 1 - Studismについて */}
              <div>
                <h3 className="text-base font-bold text-gray-800 border-b-2 border-primary pb-2 mb-4">
                  {t('header.aboutStudism')}
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/about/message"
                      className="text-gray-600 hover:text-primary hover:underline"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      トップメッセージ
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about/company"
                      className="text-gray-600 hover:text-primary hover:underline"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      会社概要
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about/officers"
                      className="text-gray-600 hover:text-primary hover:underline"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      役員一覧
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about/philosophy"
                      className="text-gray-600 hover:text-primary hover:underline"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      企業理念
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 2 - サービス・プロダクト */}
              <div>
                <h3 className="text-base font-bold text-gray-800 border-b-2 border-primary pb-2 mb-4">
                  サービス・プロダクト
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/apps"
                      className="text-gray-600 hover:text-primary hover:underline"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      アプリ一覧
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/app/sakuraenglish"
                      className="text-gray-600 hover:text-primary hover:underline"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      SakuraEnglish
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/app/timelyze"
                      className="text-gray-600 hover:text-primary hover:underline"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Timelyze
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/app/studism"
                      className="text-gray-600 hover:text-primary hover:underline"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Studism
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3 - サポート */}
              <div>
                <h3 className="text-base font-bold text-gray-800 border-b-2 border-primary pb-2 mb-4">
                  サポート
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/privacy"
                      className="text-gray-600 hover:text-primary hover:underline"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {t('header.privacyPolicy')}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="text-gray-600 hover:text-primary hover:underline"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {t('header.contactForm')}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      {/* Full-width Dropdown Menu - お知らせ */}
      <div
        ref={newsDropdownRef}
        className={`absolute left-0 right-0 bg-white shadow-xl border-t-4 border-primary z-40 overflow-hidden transition-[max-height] duration-1000 linear ${
          isNewsDropdownOpen ? 'max-h-[400px]' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 py-8">
            {/* Header */}
            <a
              href="/#news"
              className="text-2xl font-bold text-primary hover:underline flex items-center gap-2 mb-8"
              onClick={() => setIsNewsDropdownOpen(false)}
            >
              {t('header.newsTop')}
              <span className="text-lg">→</span>
            </a>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* ニュース */}
              <div>
                <h3 className="text-base font-bold text-gray-800 border-b-2 border-primary pb-2 mb-4">
                  {t('header.newsCategory')}
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/news"
                      className="text-gray-600 hover:text-primary hover:underline"
                      onClick={() => setIsNewsDropdownOpen(false)}
                    >
                      {t('header.newsAll')}
                    </Link>
                  </li>
                </ul>
              </div>

              {/* トピック */}
              <div>
                <h3 className="text-base font-bold text-gray-800 border-b-2 border-primary pb-2 mb-4">
                  {t('header.topicsCategory')}
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/topics"
                      className="text-gray-600 hover:text-primary hover:underline"
                      onClick={() => setIsNewsDropdownOpen(false)}
                    >
                      {t('header.topicsAll')}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </header>
  );
};

export default Header;
