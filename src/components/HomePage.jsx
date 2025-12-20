import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Download, Clock, BookOpen, Smartphone, BarChart, Target } from 'lucide-react';
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
  const SLIDE_DURATION = 4000; // 4秒

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
      category: t('apps.sakuraenglish.category'),
      features: t('apps.sakuraenglish.features', { returnObjects: true })
    },
    {
      id: 'timelyze',
      name: t('apps.timelyze.name'),
      description: t('apps.timelyze.description'),
      icon: '/images/Timelyze1.0.7.jpg',
      category: t('apps.timelyze.category'),
      features: t('apps.timelyze.features', { returnObjects: true })
    }
  ];


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
        className="py-40 md:py-64 relative bg-cover bg-center"
        style={{ backgroundImage: "url('/images/Networkarth.jpg')" }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center text-gray-800">
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

      {/* Apps Section */}
      <section id="apps" className="py-20">
        <div className="container mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">{t('apps.title')}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('apps.description')}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {apps.map((app) => (
                <Card key={app.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <img src={app.icon} alt={app.name} className="w-12 h-12 rounded-lg" />
                      <div className="space-y-1">
                        <CardTitle className="text-xl">{app.name}</CardTitle>
                        <Badge variant="secondary">{app.category}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-base leading-relaxed">
                      {app.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {app.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-3 pt-4">
                      <Button asChild size="sm" className="flex-1">
                        <Link to={`/app/${app.id}`}>
                          {t('common.learnMore')}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        {t('common.download')}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
