import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Download, Smartphone, BarChart, Target, ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const apps = [
  {
    id: 'sakuraenglish',
    name: 'SakuraEnglish',
    description: 'レベル別の英単語クイズで効率的に語彙力を強化。カスタム単語リスト機能で自分だけの学習プランを作成できます。',
    icon: '/images/sakuraenglish.png',
    category: '語学学習',
    features: ['レベル別クイズ', 'カスタム単語リスト', '復習機能'],
    gradient: 'from-pink-500 to-rose-400',
    bgGradient: 'from-pink-50 via-rose-50 to-white',
    accentColor: 'text-rose-500',
    badgeColor: 'bg-rose-100 text-rose-700',
  },
  {
    id: 'timelyze',
    name: 'Timelyze',
    description: '学習時間の記録・管理を簡単に。直感的な操作で学習習慣を身につけ、目標達成まで継続的にサポートします。',
    icon: '/images/timelyze.png',
    category: '生産性',
    features: ['時間記録・追跡', 'データ可視化', '目標管理'],
    gradient: 'from-violet-500 to-indigo-400',
    bgGradient: 'from-violet-50 via-indigo-50 to-white',
    accentColor: 'text-violet-500',
    badgeColor: 'bg-violet-100 text-violet-700',
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

const AppSlideshow = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('next');

  useEffect(() => {
    const timer = setInterval(() => {
      goTo('next');
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const goTo = (dir) => {
    if (isAnimating) return;
    setDirection(dir);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(prev =>
        dir === 'next'
          ? (prev + 1) % apps.length
          : (prev - 1 + apps.length) % apps.length
      );
      setIsAnimating(false);
    }, 350);
  };

  const app = apps[current];

  return (
    <div className={`relative min-h-[calc(100vh-72px)] bg-gradient-to-br ${app.bgGradient} transition-all duration-700 flex flex-col justify-center overflow-hidden`}>

      {/* Decorative blobs */}
      <div className={`absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-gradient-to-br ${app.gradient} opacity-10 blur-3xl pointer-events-none transition-all duration-700`} />
      <div className={`absolute -bottom-24 -left-24 w-[360px] h-[360px] rounded-full bg-gradient-to-tr ${app.gradient} opacity-10 blur-3xl pointer-events-none transition-all duration-700`} />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 transition-all duration-350 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>

          {/* Text side */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-sm shadow-sm border border-white/60">
              <span className={`text-xs font-semibold uppercase tracking-wider ${app.accentColor}`}>{app.category}</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-gray-900 leading-none">
              {app.name}
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              {app.description}
            </p>

            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {app.features.map((f, i) => (
                <span key={i} className={`px-3 py-1 rounded-full text-sm font-medium ${app.badgeColor}`}>{f}</span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
              <Button
                size="lg"
                className={`bg-gradient-to-r ${app.gradient} hover:opacity-90 text-white shadow-lg shadow-pink-200/40 border-0 group`}
                asChild
              >
                <Link to={`/app/${app.id}`}>
                  詳しく見る
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-white/60 backdrop-blur-sm border-white/80 hover:bg-white/90">
                <Download className="w-4 h-4 mr-2" />
                ダウンロード
              </Button>
            </div>
          </div>

          {/* Icon side */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <div className={`relative w-52 h-52 lg:w-72 lg:h-72 rounded-[3rem] bg-gradient-to-br ${app.gradient} shadow-2xl flex items-center justify-center`}>
              <img
                src={app.icon}
                alt={app.name}
                className="w-36 h-36 lg:w-52 lg:h-52 object-contain drop-shadow-xl rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center lg:justify-start gap-6 mt-12">
          {/* Dots */}
          <div className="flex gap-2">
            {apps.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 'next' : 'prev'); if (i !== current) { setIsAnimating(true); setTimeout(() => { setCurrent(i); setIsAnimating(false); }, 350); } }}
                className={`transition-all duration-300 rounded-full ${i === current ? `w-8 h-2.5 bg-gradient-to-r ${app.gradient}` : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'}`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-2">
            <button
              onClick={() => goTo('prev')}
              className="w-10 h-10 rounded-full bg-white/70 backdrop-blur-sm border border-white/80 shadow-sm flex items-center justify-center hover:bg-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={() => goTo('next')}
              className="w-10 h-10 rounded-full bg-white/70 backdrop-blur-sm border border-white/80 shadow-sm flex items-center justify-center hover:bg-white transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Counter */}
          <span className="text-sm text-gray-400 font-mono">{current + 1} / {apps.length}</span>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* App Slideshow Hero */}
      <AppSlideshow />

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Studismについて</h2>
              <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
                「学びを、もっと自由に、もっと楽しく」をミッションに掲げ、教育とテクノロジーを融合させた革新的な学習アプリケーションを開発しています。
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <Smartphone className="w-6 h-6 text-violet-500" />, bg: 'bg-violet-50', title: 'モバイルファースト', desc: 'いつでもどこでも学習できる、シンプルで使いやすいアプリケーション' },
                { icon: <BarChart className="w-6 h-6 text-rose-500" />, bg: 'bg-rose-50', title: '学習データ可視化', desc: '詳細な学習データの記録と分析で、効率的な学習をサポート' },
                { icon: <Target className="w-6 h-6 text-amber-500" />, bg: 'bg-amber-50', title: 'カスタマイズ機能', desc: '自分に合った学習プランと目標設定で、継続的な成長をサポート' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow space-y-4">
                  <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section id="apps" className="py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">アプリ一覧</h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Studismが開発した学習アプリケーションをご紹介します。
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {apps.map((app) => (
              <div
                key={app.id}
                className="group relative bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${app.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative space-y-5">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${app.gradient} flex items-center justify-center shadow-lg`}>
                      <img src={app.icon} alt={app.name} className="w-10 h-10 object-contain rounded-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{app.name}</h3>
                      <span className={`text-xs font-medium ${app.accentColor}`}>{app.category}</span>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{app.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {app.features.map((f, i) => (
                      <span key={i} className={`px-3 py-1 rounded-full text-xs font-medium ${app.badgeColor}`}>{f}</span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Button
                      asChild
                      size="sm"
                      className={`flex-1 bg-gradient-to-r ${app.gradient} hover:opacity-90 text-white border-0 shadow-sm group/btn`}
                    >
                      <Link to={`/app/${app.id}`}>
                        詳細を見る
                        <ArrowRight className="w-4 h-4 ml-1.5 group-hover/btn:translate-x-0.5 transition-transform" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" className="bg-white/80">
                      <Download className="w-4 h-4 mr-1.5" />
                      DL
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">最新情報・お知らせ</h2>
            <p className="text-lg text-gray-500">アプリのアップデート情報や新機能のお知らせ</p>
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            {news.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-start gap-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium flex-shrink-0 ${item.type === 'アップデート' ? 'bg-violet-100 text-violet-700' : 'bg-gray-100 text-gray-600'}`}>
                  {item.type}
                </span>
                <div className="space-y-1">
                  <p className="text-xs text-gray-400">{item.date}</p>
                  <p className="text-sm font-medium text-gray-800 leading-relaxed">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
