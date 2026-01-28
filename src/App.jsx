import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import AppDetail from './components/AppDetail';
import PrivacyPolicy from './components/PrivacyPolicy';
import Contact from './components/Contact';
import GeneralContact from './components/GeneralContact';
import GeneralPrivacy from './components/GeneralPrivacy';
import NewsDetail from './components/NewsDetail';
import NewsList from './components/NewsList';
import TopicDetail from './components/TopicDetail';
import TopicsList from './components/TopicsList';
import AppsPage from './components/AppsPage';
import AboutPage from './components/AboutPage';
import TopMessage from './components/about/TopMessage';
import Company from './components/about/Company';
import Officers from './components/about/Officers';
import Philosophy from './components/about/Philosophy';

// GitHub Pages用のベースパス
const basename = import.meta.env.BASE_URL;

// 404リダイレクト処理用コンポーネント
function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectPath = sessionStorage.getItem('redirectPath');
    if (redirectPath) {
      sessionStorage.removeItem('redirectPath');
      // パスをそのままナビゲート
      const path = redirectPath || '/';
      navigate(path, { replace: true });
    }
  }, [navigate]);

  return null;
}

function App() {
  // 毎回スプラッシュを表示
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    // 動画終了後1秒待ってからフェードアウト開始
    setTimeout(() => {
      setFadeOut(true);
      // フェードアウトアニメーション後にスプラッシュを非表示
      setTimeout(() => {
        setShowSplash(false);
      }, 500);
    }, 1000);
  };

  // モバイルで動画を自動再生
  useEffect(() => {
    if (showSplash && videoRef.current) {
      const playVideo = async () => {
        try {
          await videoRef.current.play();
        } catch (error) {
          // 自動再生が失敗した場合はスプラッシュをスキップ
          console.log('Video autoplay failed:', error);
          setShowSplash(false);
        }
      };
      playVideo();
    }
  }, [showSplash]);

  // スプラッシュスクリーン表示中はスクロールを無効化
  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showSplash]);

  return (
    <Router basename={basename}>
      {/* 404リダイレクト処理 */}
      <RedirectHandler />

      {/* Splash Screen */}
      {showSplash && (
        <div
          className={`fixed inset-0 z-[9999] bg-white flex items-center justify-center transition-opacity duration-700 ease-out ${
            fadeOut ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            webkit-playsinline="true"
            onEnded={handleVideoEnd}
            className="w-auto h-auto max-w-full max-h-full object-contain md:w-full md:h-full md:object-cover"
          >
            <source src={`${basename}images/animation/StudismRogoM1.mp4`} type="video/mp4" />
          </video>
        </div>
      )}

      {/* メインコンテンツ - スプラッシュ終了後にマウント */}
      {!showSplash && (
        <div className="min-h-screen bg-background animate-fade-in overflow-x-hidden">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<GeneralContact />} />
            <Route path="/privacy" element={<GeneralPrivacy />} />
            <Route path="/news" element={<NewsList />} />
            <Route path="/news/:newsId" element={<NewsDetail />} />
            <Route path="/topics" element={<TopicsList />} />
            <Route path="/topics/:topicId" element={<TopicDetail />} />
            <Route path="/apps" element={<AppsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about/message" element={<TopMessage />} />
            <Route path="/about/company" element={<Company />} />
            <Route path="/about/officers" element={<Officers />} />
            <Route path="/about/philosophy" element={<Philosophy />} />
            <Route path="/app/:appSlug" element={<AppDetail />} />
            <Route path="/app/:appSlug/privacy" element={<PrivacyPolicy />} />
            <Route path="/app/:appSlug/contact" element={<Contact />} />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;
