import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Download, Clock, BookOpen, Smartphone, Globe } from 'lucide-react';
import keyVisual from '../assets/key_visual.png';

const HomePage = () => {
  const apps = [
    {
      id: 'sakuraenglish',
      name: 'SakuraEnglish',
      description: '日常英会話からビジネス英語まで、AIを活用したパーソナルコーチングであなたの英語学習をサポート。',
      icon: '/images/sakuraenglish-icon.png',
      category: '語学学習',
      features: ['AI会話練習', '発音矯正', 'ビジネス英語']
    },
    {
      id: 'timelyze',
      name: 'Timelyze',
      description: 'あなたの学習時間を最適化するスマートな時間管理アプリ。集中力向上を促すポモドーロタイマー機能付き。',
      icon: '/images/timelyze-icon.png',
      category: '生産性',
      features: ['ポモドーロタイマー', '学習記録', '進捗可視化']
    }
  ];

  const news = [
    {
      date: '2025年9月1日',
      title: '「SakuraEnglish」大型アップデート実施！AI会話機能がさらに進化しました。',
      type: 'アップデート'
    },
    {
      date: '2025年8月15日',
      title: '新アプリ「MyDiary」のベータ版テスター募集を開始しました。',
      type: '新機能'
    },
    {
      date: '2025年7月20日',
      title: '夏季休業のお知らせ',
      type: 'お知らせ'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-foreground">Studism</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">会社について</a>
              <a href="#apps" className="text-muted-foreground hover:text-foreground transition-colors">アプリ一覧</a>
              <a href="#news" className="text-muted-foreground hover:text-foreground transition-colors">お知らせ</a>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">お問い合わせ</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  <BookOpen className="w-4 h-4 mr-2" />
                  教育テクノロジー
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  学びを、<br />
                  <span className="text-primary">もっと自由に</span><br />
                  <span className="text-accent">もっと楽しく</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Studismは、教育とテクノロジーを融合させた革新的な学習アプリケーションを開発しています。
                  一人ひとりの学習スタイルに合わせたパーソナライズされた体験を提供し、
                  知的好奇心を刺激し、自律的な学びを支援します。
                </p>
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
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
              <img 
                src={keyVisual} 
                alt="Studismのキービジュアル" 
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
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
                  いつでもどこでも学習できる、モバイル最適化されたアプリケーション
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto">
                  <Globe className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">グローバル対応</h3>
                <p className="text-muted-foreground">
                  世界中の学習者に向けた、多言語・多文化対応のサービス
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">パーソナライズ</h3>
                <p className="text-muted-foreground">
                  AIを活用した個人最適化された学習体験の提供
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section id="apps" className="py-20">
        <div className="container mx-auto px-4">
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
        <div className="container mx-auto px-4">
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

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-background rounded-lg flex items-center justify-center">
                  <span className="text-foreground font-bold text-lg">S</span>
                </div>
                <span className="text-xl font-bold">Studism</span>
              </div>
              <p className="text-background/80 text-sm leading-relaxed">
                学びを、もっと自由に、もっと楽しく。
                教育とテクノロジーの融合で、
                新しい学習体験を提供します。
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">アプリ</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/app/sakuraenglish" className="text-background/80 hover:text-background transition-colors">SakuraEnglish</Link></li>
                <li><Link to="/app/timelyze" className="text-background/80 hover:text-background transition-colors">Timelyze</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">会社情報</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="text-background/80 hover:text-background transition-colors">会社について</a></li>
                <li><a href="#news" className="text-background/80 hover:text-background transition-colors">お知らせ</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">サポート</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/privacy" className="text-background/80 hover:text-background transition-colors">プライバシーポリシー</Link></li>
                <li><a href="/terms" className="text-background/80 hover:text-background transition-colors">利用規約</a></li>
                <li><Link to="/contact" className="text-background/80 hover:text-background transition-colors">お問い合わせ</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center">
            <p className="text-background/60 text-sm">
              © 2025 Studism Inc. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

