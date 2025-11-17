import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Download, ExternalLink, Shield, MessageCircle, Star, Users, Zap } from 'lucide-react';

const AppDetail = () => {
  const { appSlug } = useParams();

  // ページ読み込み時にトップにスクロール
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [appSlug]);

  const appData = {
    sakuraenglish: {
      name: 'SakuraEnglish',
      icon: '/images/sakuraenglish.png',
      category: '語学学習',
      description: 'レベル別の英単語クイズで効率的に語彙力を強化できるアプリです。5段階のレベル（Lev1-Lev5）から自分に合った難易度を選択でき、カスタム単語リスト機能で自分だけの学習プランを作成できます。間違えた単語の復習機能や習熟度トラッキングにより、着実に英語力を向上させることができます。',
      features: [
        { icon: <Zap className="w-5 h-5" />, title: 'レベル別クイズ', description: '5段階の難易度で自分に合った学習' },
        { icon: <Star className="w-5 h-5" />, title: 'カスタム単語リスト', description: '自分だけの単語帳を作成可能' },
        { icon: <Users className="w-5 h-5" />, title: '復習＆トラッキング', description: '間違えた単語の復習と習熟度管理' }
      ],
      screenshots: [
        { title: 'メイン画面', description: 'シンプルで使いやすいインターフェース', image: '/images/screenshots/SakuraEnglish-ss01.webp' },
        { title: 'クイズ画面', description: 'レベル別の英単語クイズ', image: '/images/screenshots/SakuraEnglish-ss02.webp' },
        { title: '学習進捗', description: '詳細な学習データと分析', image: '/images/screenshots/SakuraEnglish-ss03.webp' }
      ],
      appStoreUrl: 'https://apps.apple.com/jp/app/sakuraenglish/id6747013736',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.studism.sakuraenglish'
    },
    timelyze: {
      name: 'Timelyze',
      icon: '/images/timelyze.png',
      category: '生産性',
      description: '学習時間の記録・管理を簡単にする時間管理アプリです。タイマー機能での測定や手動入力に対応し、教科別に学習時間を集計できます。日別・週別・月別のグラフ表示で学習データを可視化し、目標設定と進捗確認で継続的な学習をサポート。カレンダー機能やメモ機能も搭載し、効率的な学習習慣を身につけることができます。',
      features: [
        { icon: <Zap className="w-5 h-5" />, title: '時間記録・追跡', description: 'タイマー機能と手動入力で教科別集計' },
        { icon: <Star className="w-5 h-5" />, title: 'データ可視化', description: '日別・週別・月別のグラフで分析' },
        { icon: <Users className="w-5 h-5" />, title: '目標管理', description: '進捗確認と達成時の自動通知' }
      ],
      screenshots: [
        { title: 'タイマー画面', description: 'シンプルで使いやすい時間記録', image: '/images/screenshots/Timelyze-ss01.webp' },
        { title: '統計画面', description: '詳細な学習データの可視化', image: '/images/screenshots/Timelyze-ss02.webp' },
        { title: '目標設定', description: '個人に合わせた目標管理', image: '/images/screenshots/Timelyze-ss03.webp' }
      ],
      appStoreUrl: 'https://apps.apple.com/jp/app/timelyze/id6752543100',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.studism.timelyze'
    }
  };

  const app = appData[appSlug];

  if (!app) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">アプリが見つかりません</h1>
          <Button asChild>
            <Link to="/">ホームに戻る</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-8 md:px-12 lg:px-16 xl:px-20 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <img src="/images/studism-logo.png" alt="Studism" className="w-8 h-8" />
              <span className="text-xl font-bold text-foreground">Studism</span>
            </Link>
          </div>
        </div>
      </header>

      {/* App Hero */}
      <section className="py-12 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
              <img src={app.icon} alt={app.name} className="w-16 h-16 rounded-xl" />
              <div className="flex-1 space-y-4">
                <div className="space-y-2">
                  <Badge variant="secondary" className="w-fit">{app.category}</Badge>
                  <h1 className="text-3xl lg:text-4xl font-bold">{app.name}</h1>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {app.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="group" asChild>
                    <a href={app.appStoreUrl} target="_blank" rel="noopener noreferrer">
                      <Download className="w-4 h-4 mr-2" />
                      App Store
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href={app.playStoreUrl} target="_blank" rel="noopener noreferrer">
                      <Download className="w-4 h-4 mr-2" />
                      Google Play
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-2xl lg:text-3xl font-bold">主な機能</h2>
              <p className="text-muted-foreground">
                {app.name}の特徴的な機能をご紹介します
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {app.features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto text-primary">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-2xl lg:text-3xl font-bold">スクリーンショット</h2>
              <p className="text-muted-foreground">
                アプリの画面をご覧いただけます
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {app.screenshots.map((screenshot, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-[9/16] bg-muted overflow-hidden">
                    <img
                      src={screenshot.image}
                      alt={screenshot.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold">{screenshot.title}</h3>
                    <p className="text-sm text-muted-foreground">{screenshot.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support Links */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center space-y-8">
              <h2 className="text-2xl lg:text-3xl font-bold">サポート</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <Shield className="w-8 h-8 text-primary mx-auto" />
                    <CardTitle>プライバシーポリシー</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="mb-4">
                      個人情報の取り扱いについて
                    </CardDescription>
                    <Button variant="outline" asChild className="w-full">
                      <Link to={`/app/${appSlug}/privacy`}>
                        詳細を見る
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <MessageCircle className="w-8 h-8 text-primary mx-auto" />
                    <CardTitle>お問い合わせ</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="mb-4">
                      ご質問やサポートが必要な場合
                    </CardDescription>
                    <Button variant="outline" asChild className="w-full">
                      <Link to={`/app/${appSlug}/contact`}>
                        お問い合わせ
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-8 h-8 bg-background rounded-lg flex items-center justify-center">
                <span className="text-foreground font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold">Studism</span>
            </div>
            <p className="text-background/60 text-sm">
              © 2025 Studism Inc. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AppDetail;

