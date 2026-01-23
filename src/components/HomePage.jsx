import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ArrowLeft, ArrowUp, Download, Clock, BookOpen, Smartphone, BarChart, Target, ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getNewsList, getTopicsList, getPopularTopics } from '@/lib/microcms';

const HomePage = () => {
  const { t, i18n } = useTranslation();

  // スライドショー用の画像
  const heroImages = [
    { src: '/images/sakuraenglish-promo.png', alt: 'SakuraEnglish' },
    { src: '/images/Timelyze1.0.7.jpg', alt: 'Timelyze' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [news, setNews] = useState([]);
  const [latestTopics, setLatestTopics] = useState([]);
  const [popularTopics, setPopularTopics] = useState([]);
  const [selectedAppIndex, setSelectedAppIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [hasDragged, setHasDragged] = useState(false);
  const [isDetailsVisible, setIsDetailsVisible] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftStart, setScrollLeftStart] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [lastX, setLastX] = useState(0);
  const [lastTime, setLastTime] = useState(0);
  const appCarouselRef = React.useRef(null);
  const momentumRef = React.useRef(null);
  const SLIDE_DURATION = 4000; // 4秒

  // スクロール位置を監視してトップボタンの表示を制御
  useEffect(() => {
    const handleScroll = () => {
      // ヘッダーの高さ（約120px）を超えたら表示
      setShowScrollTop(window.scrollY > 120);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // トップにスクロール
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ページ読み込み時にトップにスクロール & データ取得
  useEffect(() => {
    window.scrollTo(0, 0);

    // microCMSからデータ取得
    const fetchData = async () => {
      try {
        const [newsData, latestData, popularData] = await Promise.all([
          getNewsList(5),
          getTopicsList(3),
          getPopularTopics(3),
        ]);
        setNews(newsData);
        setLatestTopics(latestData);
        setPopularTopics(popularData);
      } catch (error) {
        console.error('Failed to fetch data from microCMS:', error);
      }
    };
    fetchData();
  }, []);

  // スライドショーの自動切り替えとプログレスバー
  useEffect(() => {
    setProgress(0);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + (100 / (SLIDE_DURATION / 50)); // 50msごとに更新
      });
    }, 50);

    const slideTimer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, SLIDE_DURATION);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(slideTimer);
    };
  }, [currentSlide, heroImages.length]);

  const apps = [
    {
      id: 'sakuraenglish',
      name: t('apps.sakuraenglish.name'),
      description: t('apps.sakuraenglish.description'),
      icon: '/images/sakuraenglish.jpg',
      promoImage: '/images/sakuraenglish-promo.png',
      category: t('apps.sakuraenglish.category'),
      features: t('apps.sakuraenglish.features', { returnObjects: true }),
      color: '#FFB7C5'
    },
    {
      id: 'timelyze',
      name: t('apps.timelyze.name'),
      description: t('apps.timelyze.description'),
      icon: '/images/Timelyze1.0.7.jpg',
      promoImage: '/images/Timelyze1.0.7.jpg',
      category: t('apps.timelyze.category'),
      features: t('apps.timelyze.features', { returnObjects: true }),
      color: '#7DD3FC'
    },
    {
      id: 'studism',
      name: t('apps.studism.name'),
      description: t('apps.studism.description'),
      icon: '/images/studism-logo.png',
      promoImage: '/images/studism-logo.png',
      category: t('apps.studism.category'),
      features: [],
      color: '#A78BFA',
      inDevelopment: true
    }
  ];

  // アプリカルーセルのナビゲーション
  const scrollToApp = (index) => {
    // 同じアプリの場合は何もしない
    if (index === selectedAppIndex) return;

    // まず詳細を閉じる
    setIsDetailsVisible(false);

    // 少し待ってからスクロール開始
    setTimeout(() => {
      setSelectedAppIndex(index);
      // カルーセルを中央にスクロール
      if (appCarouselRef.current) {
        const container = appCarouselRef.current;
        const cards = container.querySelectorAll('[data-app-card]');
        if (cards[index]) {
          const card = cards[index];
          const containerWidth = container.offsetWidth;
          const cardLeft = card.offsetLeft;
          const cardWidth = card.offsetWidth;
          const scrollPosition = cardLeft - (containerWidth / 2) + (cardWidth / 2);
          smoothScrollTo(container, scrollPosition, 250, () => {
            // スクロール完了後に詳細を表示
            setIsDetailsVisible(true);
          });
        }
      }
    }, 150);
  };

  // カスタムスムーススクロール関数
  const smoothScrollTo = (element, target, duration, onComplete) => {
    const start = element.scrollLeft;
    const change = target - start;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // easeOutCubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      element.scrollLeft = start + change * easeOut;

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else if (onComplete) {
        onComplete();
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const nextApp = () => {
    const newIndex = (selectedAppIndex + 1) % apps.length;
    scrollToApp(newIndex);
  };

  const prevApp = () => {
    const newIndex = (selectedAppIndex - 1 + apps.length) % apps.length;
    scrollToApp(newIndex);
  };

  // スクロール位置から選択アプリを更新
  const handleCarouselScroll = () => {
    if (appCarouselRef.current) {
      const container = appCarouselRef.current;
      const containerCenter = container.scrollLeft + container.offsetWidth / 2;
      const cards = container.querySelectorAll('[data-app-card]');

      let closestIndex = 0;
      let closestDistance = Infinity;

      cards.forEach((card, index) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(containerCenter - cardCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      if (closestIndex !== selectedAppIndex) {
        setSelectedAppIndex(closestIndex);
      }
    }
  };

  // ドラッグスクロール機能
  const handleMouseDown = (e) => {
    if (!appCarouselRef.current) return;
    e.preventDefault();
    // 慣性アニメーション中なら停止
    if (momentumRef.current) {
      cancelAnimationFrame(momentumRef.current);
      momentumRef.current = null;
    }
    setIsDragging(true);
    setHasDragged(false);
    const x = e.pageX - appCarouselRef.current.offsetLeft;
    setStartX(x);
    setLastX(x);
    setLastTime(Date.now());
    setScrollLeftStart(appCarouselRef.current.scrollLeft);
    setVelocity(0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !appCarouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - appCarouselRef.current.offsetLeft;
    const now = Date.now();
    const dt = now - lastTime;

    // カーソルに追従（1:1）
    const walk = x - startX;
    appCarouselRef.current.scrollLeft = scrollLeftStart - walk;

    // 一定距離以上動いたらドラッグとして判定
    if (Math.abs(walk) > 5) {
      setHasDragged(true);
      // ドラッグ開始時に詳細を閉じる
      setIsDetailsVisible(false);
    }

    // 速度を計算
    if (dt > 0) {
      const newVelocity = (lastX - x) / dt;
      setVelocity(newVelocity);
    }

    setLastX(x);
    setLastTime(now);
  };

  const handleMouseUp = () => {
    if (!appCarouselRef.current) return;
    setIsDragging(false);
    // ドラッグした場合のみ慣性スクロールを適用
    if (hasDragged) {
      applyMomentum();
    }
  };

  const handleMouseLeave = () => {
    if (!appCarouselRef.current) return;
    if (isDragging) {
      setIsDragging(false);
      if (hasDragged) {
        applyMomentum();
      }
    }
  };

  // 慣性スクロール（スナップへの滑らかな遷移付き）
  const applyMomentum = () => {
    if (!appCarouselRef.current) return;

    const container = appCarouselRef.current;
    let currentVelocity = velocity * 15;
    const friction = 0.92;
    const snapThreshold = 2; // スナップ開始する速度閾値

    const animate = () => {
      // 速度が十分に遅くなったら滑らかにスナップへ移行
      if (Math.abs(currentVelocity) < snapThreshold) {
        momentumRef.current = null;
        smoothSnapToClosest();
        return;
      }

      container.scrollLeft += currentVelocity;
      currentVelocity *= friction;

      momentumRef.current = requestAnimationFrame(animate);
    };

    if (Math.abs(currentVelocity) > snapThreshold) {
      momentumRef.current = requestAnimationFrame(animate);
    } else {
      smoothSnapToClosest();
    }
  };

  // 滑らかにスナップ（現在の位置から最寄りのアプリへ）
  const smoothSnapToClosest = () => {
    if (!appCarouselRef.current) return;
    const container = appCarouselRef.current;
    const containerCenter = container.scrollLeft + container.offsetWidth / 2;
    const cards = container.querySelectorAll('[data-app-card]');

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    const targetCard = cards[closestIndex];
    if (targetCard) {
      const containerWidth = container.offsetWidth;
      const cardLeft = targetCard.offsetLeft;
      const cardWidth = targetCard.offsetWidth;
      const targetScroll = cardLeft - (containerWidth / 2) + (cardWidth / 2);
      const startScroll = container.scrollLeft;
      const distance = targetScroll - startScroll;

      // 距離に応じてアニメーション時間を調整（より自然に）
      const duration = Math.min(Math.max(Math.abs(distance) * 2, 150), 400);

      let startTime = null;

      const animateSnap = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // easeOutQuart - より滑らかな減速
        const easeOut = 1 - Math.pow(1 - progress, 4);
        container.scrollLeft = startScroll + distance * easeOut;

        if (progress < 1) {
          requestAnimationFrame(animateSnap);
        } else {
          setSelectedAppIndex(closestIndex);
          // スナップ完了後に即座に詳細を表示
          setIsDetailsVisible(true);
        }
      };

      requestAnimationFrame(animateSnap);
      setSelectedAppIndex(closestIndex);
    }
  };

  // タッチ対応
  const handleTouchStart = (e) => {
    if (!appCarouselRef.current) return;
    if (momentumRef.current) {
      cancelAnimationFrame(momentumRef.current);
      momentumRef.current = null;
    }
    setIsDragging(true);
    setHasDragged(false);
    const x = e.touches[0].pageX - appCarouselRef.current.offsetLeft;
    setStartX(x);
    setLastX(x);
    setLastTime(Date.now());
    setScrollLeftStart(appCarouselRef.current.scrollLeft);
    setVelocity(0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !appCarouselRef.current) return;
    const x = e.touches[0].pageX - appCarouselRef.current.offsetLeft;
    const now = Date.now();
    const dt = now - lastTime;

    const walk = x - startX;
    appCarouselRef.current.scrollLeft = scrollLeftStart - walk;

    if (Math.abs(walk) > 5) {
      setHasDragged(true);
      setIsDetailsVisible(false);
    }

    if (dt > 0) {
      const newVelocity = (lastX - x) / dt;
      setVelocity(newVelocity);
    }

    setLastX(x);
    setLastTime(now);
  };

  const handleTouchEnd = () => {
    if (!appCarouselRef.current) return;
    setIsDragging(false);
    if (hasDragged) {
      applyMomentum();
    }
  };



  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[calc(100vh-220px)] overflow-hidden">
        {/* Background Slideshow */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-contain bg-slate-100"
              />
            </div>
          ))}
        </div>

      </section>

      {/* Promotion Banners Section */}
      <section className="py-4 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-8 md:gap-16">
            <div className="flex flex-col">
              {/* Progress Bar */}
              <div className="h-1 bg-gray-200 rounded-full mb-2 overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-100 ease-linear"
                  style={{ width: currentSlide === 0 ? `${progress}%` : '0%' }}
                />
              </div>
              <Link
                to="/app/sakuraenglish"
                className={`flex items-center gap-3 group transition-opacity ${currentSlide === 0 ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`}
                onMouseEnter={() => setCurrentSlide(0)}
              >
                <img
                  src="/images/sakuraenglish.jpg"
                  alt="SakuraEnglish"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-lg object-cover"
                />
                <span className="text-sm md:text-base font-medium text-gray-800">SakuraEnglish</span>
              </Link>
            </div>
            <div className="flex flex-col">
              {/* Progress Bar */}
              <div className="h-1 bg-gray-200 rounded-full mb-2 overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-100 ease-linear"
                  style={{ width: currentSlide === 1 ? `${progress}%` : '0%' }}
                />
              </div>
              <Link
                to="/app/timelyze"
                className={`flex items-center gap-3 group transition-opacity ${currentSlide === 1 ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`}
                onMouseEnter={() => setCurrentSlide(1)}
              >
                <img
                  src="/images/Timelyze1.0.7.jpg"
                  alt="Timelyze"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-lg object-cover"
                />
                <span className="text-sm md:text-base font-medium text-gray-800">Timelyze</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section
        className="py-48 md:py-72 relative bg-cover bg-center"
        style={{ backgroundImage: "url('/images/Network1.1.png')" }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center text-white drop-shadow-lg">
            わかる、つながる、世界が変わる
          </h2>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-primary pb-2">{t('news.title')}</h2>
          <div className="space-y-4">
            {news.map((item) => (
              <Link
                key={item.id}
                to={`/news/${item.id}`}
                className="flex flex-wrap items-center gap-2 md:gap-4 py-3 border-b border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <span className="text-sm text-gray-500 font-mono">
                  {new Date(item.publishedAt).toLocaleDateString(i18n.language === 'ja' ? 'ja-JP' : 'en-US')}
                </span>
                <span className={`text-xs px-2 py-1 rounded ${
                  item.type === 'お知らせ' ? 'bg-blue-100 text-blue-700' :
                  item.type === 'アップデート' ? 'bg-green-100 text-green-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {item.type === 'お知らせ' ? t('news.announcement') :
                   item.type === 'アップデート' ? t('news.update') :
                   (item.type || t('common.other'))}
                </span>
                <span className="text-gray-800 hover:text-primary">{item.title}</span>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-right">
            <Link to="/news" className="text-primary hover:underline text-sm">
              {t('common.viewAll')}
            </Link>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          {/* Latest Topics */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">{t('topics.latest')}</h2>
            <Link to="/topics" className="text-primary hover:underline text-sm">
              {t('common.viewAll')}
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {latestTopics.slice(0, 4).map((topic) => (
              <Link
                key={topic.id}
                to={`/topics/${topic.id}`}
                className="group"
              >
                <div className="aspect-video overflow-hidden rounded-lg mb-2">
                  <img
                    src={topic.image?.url || '/images/studism-logo.png'}
                    alt={topic.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-2">
                  {topic.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  {new Date(topic.publishedAt).toLocaleDateString('ja-JP')}
                </p>
              </Link>
            ))}
          </div>

          {/* Popular Topics */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">{t('topics.popular')}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {popularTopics.slice(0, 4).map((topic) => (
              <Link
                key={topic.id}
                to={`/topics/${topic.id}`}
                className="group"
              >
                <div className="aspect-video overflow-hidden rounded-lg mb-2">
                  <img
                    src={topic.image?.url || '/images/studism-logo.png'}
                    alt={topic.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-2">
                  {topic.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  {new Date(topic.publishedAt).toLocaleDateString('ja-JP')}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#00ACFA]/20">
        <div className="container mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">{t('about.title')}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                {t('about.description')}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{t('about.mobileFirst')}</h3>
                <p className="text-muted-foreground">
                  {t('about.mobileFirstDesc')}
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto">
                  <BarChart className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">{t('about.dataVisualization')}</h3>
                <p className="text-muted-foreground">
                  {t('about.dataVisualizationDesc')}
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{t('about.customization')}</h3>
                <p className="text-muted-foreground">
                  {t('about.customizationDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apps Section - Nintendo Style Carousel */}
      <section id="apps" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">{t('apps.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('apps.description')}
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevApp}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
              aria-label="Previous app"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={nextApp}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
              aria-label="Next app"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>

            {/* App Cards Carousel */}
            <div
              ref={appCarouselRef}
              onScroll={handleCarouselScroll}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className="flex items-center gap-6 md:gap-10 px-[calc(50%-6rem)] md:px-[calc(50%-8rem)] py-8 overflow-x-auto scrollbar-hide select-none"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {apps.map((app, index) => {
                const isSelected = index === selectedAppIndex;

                return (
                  <div
                    key={app.id}
                    data-app-card
                    onClick={() => !hasDragged && scrollToApp(index)}
                    className={`relative flex-shrink-0 transition-all duration-300 ease-out
                      ${isSelected
                        ? 'scale-100 opacity-100'
                        : 'scale-90 opacity-50 hover:opacity-70'
                      }`}
                  >
                    <div
                      className={`relative w-32 md:w-44 aspect-square rounded-2xl overflow-hidden shadow-xl transition-all duration-300
                        ${isSelected ? 'shadow-2xl ring-4 ring-primary/30' : 'shadow-lg'}`}
                      style={{ backgroundColor: app.color + '30' }}
                    >
                      <img
                        src={app.icon}
                        alt={app.name}
                        className="w-full h-full object-cover pointer-events-none"
                        draggable="false"
                      />
                      {app.inDevelopment && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <span className="text-white font-bold text-sm px-3 py-1 bg-yellow-500 rounded-full">
                            {t('apps.studism.inDevelopment')}
                          </span>
                        </div>
                      )}
                    </div>
                    {/* App Name Label */}
                    <div className={`mt-3 text-center transition-all duration-300 ${isSelected ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
                      <span className="text-xs font-medium text-gray-700">{app.name}</span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Selected App Details with Icon */}
          <div
            className="mt-6 max-w-4xl mx-auto overflow-visible"
            style={{
              perspective: '1000px',
            }}
          >
            {apps.map((app, index) => (
              <div
                key={app.id}
                className={`transition-all duration-300 ${
                  index === selectedAppIndex
                    ? 'opacity-100'
                    : 'opacity-0 absolute pointer-events-none'
                }`}
                style={{ display: index === selectedAppIndex ? 'block' : 'none' }}
              >
                <div
                  className={`flex flex-col md:flex-row items-center gap-6 md:gap-10 transition-all ease-out ${
                    isDetailsVisible
                      ? 'opacity-100 translate-y-0 scale-100 duration-300'
                      : 'opacity-0 -translate-y-32 scale-0 duration-300'
                  }`}
                  style={{
                    transformOrigin: 'center top',
                  }}
                >
                  {/* App Icon - Center */}
                  <div
                    className={`flex-shrink-0 transition-all ease-out ${
                      isDetailsVisible
                        ? 'scale-100 rotate-0 opacity-100 duration-300'
                        : 'scale-0 rotate-180 opacity-0 duration-300'
                    }`}
                    style={{
                      transformOrigin: 'center top',
                    }}
                  >
                    <div
                      className="relative w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden shadow-2xl"
                      style={{ backgroundColor: app.color + '30' }}
                    >
                      <img
                        src={app.icon}
                        alt={app.name}
                        className="w-full h-full object-cover"
                      />
                      {app.inDevelopment && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <span className="text-white font-bold text-sm px-3 py-1 bg-yellow-500 rounded-full">
                            {t('apps.studism.inDevelopment')}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* App Details */}
                  <div
                    className={`flex-1 text-center md:text-left space-y-3 transition-all ease-out ${
                      isDetailsVisible
                        ? 'opacity-100 translate-x-0 duration-300 delay-75'
                        : 'opacity-0 -translate-x-8 md:-translate-x-16 duration-200'
                    }`}
                  >
                    <div>
                      <Badge
                        className="text-xs mb-2"
                        style={{ backgroundColor: app.color, color: '#fff' }}
                      >
                        {app.category}
                      </Badge>
                      <h3 className="text-xl md:text-2xl font-bold">{app.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground whitespace-nowrap">
                      {app.description}
                    </p>

                    {app.features.length > 0 && (
                      <div className="flex flex-wrap justify-center md:justify-start gap-2">
                        {app.features.map((feature, featureIndex) => (
                          <Badge key={featureIndex} variant="outline" className="text-sm px-4 py-1">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
                      <Button asChild size="default">
                        <Link to={`/app/${app.id}`}>
                          {t('common.learnMore')}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                      {!app.inDevelopment && (
                        <Button variant="outline" size="default">
                          <Download className="w-4 h-4 mr-2" />
                          {t('common.download')}
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 w-12 h-12 bg-primary text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-primary/90 hover:scale-110 ${
          showScrollTop
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="ページトップへ戻る"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
};

export default HomePage;
