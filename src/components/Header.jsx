import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, Search, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [_isAppsDropdownOpen, setIsAppsDropdownOpen] = useState(false);
  const [isNewsDropdownOpen, setIsNewsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
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
    { title: t('searchData.studism.title'), description: t('searchData.studism.description'), category: t('searchData.studism.category'), path: '/app/studism', keywords: ['SNS', '学習', '質問', '動画', '共有', 'social', 'learning', 'study'] },
    { title: t('searchData.mamemame.title'), description: t('searchData.mamemame.description'), category: t('searchData.mamemame.category'), path: '/app/mamemame', keywords: ['古文', '単語', 'クイズ', '受験', '古典', 'classical', 'japanese', 'vocabulary'] },
    { title: t('searchData.loopin.title'), description: t('searchData.loopin.description'), category: t('searchData.loopin.category'), path: '/app/loopin', keywords: ['開発中', 'coming soon', 'loop', 'loopin'] },
    { title: t('searchData.home.title'), description: t('searchData.home.description'), category: t('searchData.home.category'), path: '/', keywords: ['トップ', 'メイン', 'home', 'top'] },
    { title: t('searchData.contact.title'), description: t('searchData.contact.description'), category: t('searchData.contact.category'), path: '/contact', keywords: ['連絡', '質問', 'フォーム', 'contact', 'form'] },
    { title: t('searchData.privacy.title'), description: t('searchData.privacy.description'), category: t('searchData.privacy.category'), path: '/privacy', keywords: ['個人情報', 'ポリシー', '規約', 'privacy', 'policy'] },
    { title: t('searchData.news.title'), description: t('searchData.news.description'), category: t('searchData.news.category'), path: '/#news', keywords: ['お知らせ', '更新', '新着', 'news', 'announcement'] },
    { title: t('searchData.appList.title'), description: t('searchData.appList.description'), category: t('searchData.appList.category'), path: '/#apps', keywords: ['アプリ', '製品', 'apps', 'products'] },
    { title: t('searchData.about.title'), description: t('searchData.about.description'), category: t('searchData.about.category'), path: '/#about', keywords: ['会社', '企業', 'ミッション', 'ビジョン', 'company', 'about', 'mission'] },
  ];

  // モバイルメニューが開いているときはスクロールを無効化
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

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
    setIsMobileMenuOpen(false);
    if (path.startsWith('/#')) {
      // ハッシュリンクの場合
      window.location.href = path;
    } else {
      navigate(path);
    }
  };

  // 検索を開く
  const _openSearch = () => {
    setIsSearchOpen(true);
    setTimeout(() => searchInputRef.current?.focus(), 100);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
    setIsAppsDropdownOpen(false);
    setIsNewsDropdownOpen(false);
  };

  const _toggleAppsDropdown = () => {
    setIsAppsDropdownOpen((prev) => !prev);
    setIsDropdownOpen(false);
    setIsNewsDropdownOpen(false);
  };

  const toggleNewsDropdown = () => {
    setIsNewsDropdownOpen((prev) => !prev);
    setIsDropdownOpen(false);
    setIsAppsDropdownOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileSubmenu(null);
  };

  return (
    <header className="relative z-50">
      {/* Upper Header - Logo & Tagline */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 md:px-8 py-3">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center space-x-2 md:space-x-3 hover:opacity-80 transition-opacity cursor-pointer"
              onClick={closeMobileMenu}
            >
              <img src="/images/studism-logo.png" alt="Studism" className="w-8 h-8 md:w-10 md:h-10" />
              <div className="flex items-center space-x-2">
                <span className="text-lg md:text-xl font-bold text-foreground">{t('common.siteName')}</span>
                <span className="text-sm text-muted-foreground hidden md:inline">| {t('common.tagline')}</span>
              </div>
            </Link>

            <div className="flex items-center gap-2 md:gap-4">
              {/* SNSリンク - デスクトップのみ */}
              <div className="hidden md:flex items-center gap-1">
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

              {/* 検索 - デスクトップのみ */}
              <div className="relative hidden md:block" ref={searchRef}>
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

              {/* ハンバーガーメニュー - モバイルのみ */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="メニュー"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Header - Navigation (デスクトップのみ) */}
      <div className="bg-primary relative hidden md:block">
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

      {/* モバイルメニュー */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMobileMenu}
      />
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 md:hidden transform transition-transform duration-300 ease-out overflow-y-auto ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 border-b flex items-center justify-between">
          <span className="font-bold text-lg">メニュー</span>
          <button onClick={closeMobileMenu} className="p-2">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* モバイル検索 */}
        <div className="p-4 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('common.search')}
              className="w-full pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          {searchResults.length > 0 && (
            <div className="mt-2 border rounded-lg max-h-48 overflow-y-auto">
              {searchResults.map((result, index) => (
                <button
                  key={index}
                  onClick={() => handleSearchResultClick(result.path)}
                  className="w-full px-3 py-2 text-left hover:bg-gray-50 border-b last:border-b-0 text-sm"
                >
                  <span className="font-medium">{result.title}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* モバイルナビゲーション */}
        <nav className="p-4">
          {/* 企業情報 */}
          <div className="border-b">
            <button
              onClick={() => setMobileSubmenu(mobileSubmenu === 'company' ? null : 'company')}
              className="w-full flex items-center justify-between py-3 text-left font-medium"
            >
              {t('header.companyInfo')}
              <ChevronDown className={`w-5 h-5 transition-transform ${mobileSubmenu === 'company' ? 'rotate-180' : ''}`} />
            </button>
            {mobileSubmenu === 'company' && (
              <div className="pb-3 pl-4 space-y-2">
                <Link to="/about" onClick={closeMobileMenu} className="block py-2 text-gray-600">{t('header.companyInfoTop')}</Link>
                <Link to="/about/message" onClick={closeMobileMenu} className="block py-2 text-gray-600">トップメッセージ</Link>
                <Link to="/about/company" onClick={closeMobileMenu} className="block py-2 text-gray-600">会社概要</Link>
                <Link to="/about/officers" onClick={closeMobileMenu} className="block py-2 text-gray-600">役員一覧</Link>
                <Link to="/about/philosophy" onClick={closeMobileMenu} className="block py-2 text-gray-600">企業理念</Link>
              </div>
            )}
          </div>

          {/* アプリ */}
          <div className="border-b">
            <button
              onClick={() => setMobileSubmenu(mobileSubmenu === 'apps' ? null : 'apps')}
              className="w-full flex items-center justify-between py-3 text-left font-medium"
            >
              アプリ
              <ChevronDown className={`w-5 h-5 transition-transform ${mobileSubmenu === 'apps' ? 'rotate-180' : ''}`} />
            </button>
            {mobileSubmenu === 'apps' && (
              <div className="pb-3 pl-4 space-y-2">
                <Link to="/apps" onClick={closeMobileMenu} className="block py-2 text-gray-600">アプリ一覧</Link>
                <Link to="/app/sakuraenglish" onClick={closeMobileMenu} className="block py-2 text-gray-600">SakuraEnglish</Link>
                <Link to="/app/timelyze" onClick={closeMobileMenu} className="block py-2 text-gray-600">Timelyze</Link>
                <Link to="/app/studism" onClick={closeMobileMenu} className="block py-2 text-gray-600">Studism</Link>
                <Link to="/app/mamemame" onClick={closeMobileMenu} className="block py-2 text-gray-600">豆マメ</Link>
                <Link to="/app/loopin" onClick={closeMobileMenu} className="block py-2 text-gray-600">Loopin</Link>
              </div>
            )}
          </div>

          {/* お知らせ */}
          <div className="border-b">
            <button
              onClick={() => setMobileSubmenu(mobileSubmenu === 'news' ? null : 'news')}
              className="w-full flex items-center justify-between py-3 text-left font-medium"
            >
              {t('header.news')}
              <ChevronDown className={`w-5 h-5 transition-transform ${mobileSubmenu === 'news' ? 'rotate-180' : ''}`} />
            </button>
            {mobileSubmenu === 'news' && (
              <div className="pb-3 pl-4 space-y-2">
                <Link to="/news" onClick={closeMobileMenu} className="block py-2 text-gray-600">ニュース一覧</Link>
                <Link to="/topics" onClick={closeMobileMenu} className="block py-2 text-gray-600">トピック一覧</Link>
              </div>
            )}
          </div>

          {/* お問い合わせ */}
          <Link to="/contact" onClick={closeMobileMenu} className="block py-3 font-medium border-b">
            {t('header.contact')}
          </Link>

          {/* プライバシーポリシー */}
          <Link to="/privacy" onClick={closeMobileMenu} className="block py-3 font-medium border-b">
            {t('header.privacyPolicy')}
          </Link>
        </nav>

        {/* SNSリンク */}
        <div className="p-4 border-t mt-auto">
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://x.com/Studism_Stdism"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-gray-600 hover:text-black transition-colors bg-gray-100 rounded-full"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/studism_stdism/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-gray-600 hover:text-pink-600 transition-colors bg-gray-100 rounded-full"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Full-width Dropdown Menu - 企業情報 (デスクトップのみ) */}
      <div
        ref={dropdownRef}
        className={`absolute left-0 right-0 bg-white shadow-xl border-t-4 border-primary z-40 overflow-hidden transition-[max-height] duration-1000 linear hidden md:block ${
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
                  <li>
                    <Link
                      to="/app/mamemame"
                      className="text-gray-600 hover:text-primary hover:underline"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      豆マメ
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/app/loopin"
                      className="text-gray-600 hover:text-primary hover:underline"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Loopin
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

      {/* Full-width Dropdown Menu - お知らせ (デスクトップのみ) */}
      <div
        ref={newsDropdownRef}
        className={`absolute left-0 right-0 bg-white shadow-xl border-t-4 border-primary z-40 overflow-hidden transition-[max-height] duration-1000 linear hidden md:block ${
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
