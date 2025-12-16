import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Download, Clock, BookOpen, Smartphone, BarChart, Target } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HomePage = () => {
  // スライドショー用の画像
  const heroImages = [
    { src: '/images/SakuraEnglishVer2.1.8.png', alt: 'SakuraEnglish' },
    { src: '/images/timelyze.png', alt: 'Timelyze' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // ページ読み込み時にトップにスクロール
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // スライドショーの自動切り替え
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000); // 4秒ごとに切り替え

    return () => clearInterval(timer);
  }, [heroImages.length]);

  const apps = [
    {
      id: 'sakuraenglish',
      name: 'SakuraEnglish',
      description: 'レベル別の英単語クイズで効率的に語彙力を強化。カスタム単語リスト機能で自分だけの学習プランを作成。',
      icon: '/images/sakuraenglish.png',
      category: '語学学習',
      features: ['レベル別クイズ', 'カスタム単語リスト', '復習機能']
    },
    {
      id: 'timelyze',
      name: 'Timelyze',
      description: '学習時間の記録・管理を簡単に。直感的な操作で学習習慣を身につけ、目標達成まで継続的にサポート。',
      icon: '/images/timelyze.png',
      category: '生産性',
      features: ['時間記録・追跡', 'データ可視化', '目標管理']
    }
  ];

  const news = [
    {
      date: '2025年11月22日',
      title: '公式ウェブサイトをリニューアルオープンしました',
      type: 'お知らせ'
    },
    {
      date: '2025年11月20日',
      title: 'お問い合わせフォームのシステムを更新し、よりスムーズにご利用いただけるようになりました',
      type: 'アップデート'
    },
    {
      date: '2025年11月15日',
      title: '「SakuraEnglish」に新しい単語リストを追加しました',
      type: 'アップデート'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden">
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

        {/* White gradient overlay - left to right */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/20 to-transparent"></div>

        <div className="container mx-auto px-8 md:px-12 lg:px-16 xl:px-20 relative z-10 h-full flex items-start pt-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            <div className="space-y-8 p-8 rounded-2xl">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
                  学びを、<br />
                  <span className="text-primary brightness-110">もっと自由に</span><br />
                  <span className="text-accent brightness-110">もっと楽しく</span>
                </h1>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group" asChild>
                  <a href="#apps">
                    アプリを見る
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#about">
                    会社について
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative lg:block hidden">
              {/* Empty space on the right to maintain layout */}
            </div>
          </div>
        </div>
      </section>

      {/* Promotion Banners Section */}
      <section className="py-4 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-8 md:gap-16">
            <Link
              to="/app/sakuraenglish"
              className={`flex items-center gap-3 group transition-opacity ${currentSlide === 0 ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`}
              onMouseEnter={() => setCurrentSlide(0)}
            >
              <img
                src="/images/SakuraEnglish.JPG"
                alt="SakuraEnglish"
                className="w-10 h-10 md:w-12 md:h-12 rounded-lg object-cover"
              />
              <span className="text-sm md:text-base font-medium text-gray-800">SakuraEnglish</span>
            </Link>
            <Link
              to="/app/timelyze"
              className={`flex items-center gap-3 group transition-opacity ${currentSlide === 1 ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`}
              onMouseEnter={() => setCurrentSlide(1)}
            >
              <img
                src="/images/timelyze.png"
                alt="Timelyze"
                className="w-10 h-10 md:w-12 md:h-12 rounded-lg object-cover"
              />
              <span className="text-sm md:text-base font-medium text-gray-800">Timelyze</span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">Studismについて</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                株式会社Studismは、「学びを、もっと自由に、もっと楽しく」をミッションに掲げ、
                教育とテクノロジーを融合させた革新的な学習アプリケーションを開発しています。
                私たちは、一人ひとりの学習スタイルに合わせたパーソナライズされた体験を提供し、
                知的好奇心を刺激し、自律的な学びを支援することを目指しています。
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">モバイルファースト</h3>
                <p className="text-muted-foreground">
                  いつでもどこでも学習できる、シンプルで使いやすいアプリケーション
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto">
                  <BarChart className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">学習データ可視化</h3>
                <p className="text-muted-foreground">
                  詳細な学習データの記録と分析で、効率的な学習をサポート
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">カスタマイズ機能</h3>
                <p className="text-muted-foreground">
                  自分に合った学習プランと目標設定で、継続的な成長をサポート
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
              <h2 className="text-3xl lg:text-4xl font-bold">アプリ一覧</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Studismが開発した学習アプリケーションをご紹介します。
                それぞれのアプリが、あなたの学びをサポートします。
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
                          詳細を見る
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        ダウンロード
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-muted/30">
        <div className="container mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">最新情報・お知らせ</h2>
              <p className="text-lg text-muted-foreground">
                アプリのアップデート情報や新機能のお知らせをご確認いただけます。
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {news.map((item, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <Badge variant={item.type === 'アップデート' ? 'default' : item.type === '新機能' ? 'secondary' : 'outline'}>
                          {item.type}
                        </Badge>
                      </div>
                      <div className="flex-1 space-y-2">
                        <p className="text-sm text-muted-foreground">{item.date}</p>
                        <h3 className="font-medium leading-relaxed">{item.title}</h3>
                      </div>
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

