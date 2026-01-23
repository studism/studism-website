import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Download, ExternalLink, Shield, MessageCircle, Star, Users, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AppDetail = () => {
  const { appSlug } = useParams();
  const { t } = useTranslation();

  // ページ読み込み時にトップにスクロール
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [appSlug]);

  const appData = {
    sakuraenglish: {
      name: t('apps.sakuraenglish.name'),
      icon: '/images/sakuraenglish.jpg',
      category: t('apps.sakuraenglish.category'),
      description: t('apps.sakuraenglish.fullDescription', 'レベル別の英単語クイズで効率的に語彙力を強化できるアプリです。5段階のレベル（Lev1-Lev5）から自分に合った難易度を選択でき、カスタム単語リスト機能で自分だけの学習プランを作成できます。間違えた単語の復習機能や習熟度トラッキングにより、着実に英語力を向上させることができます。'),
      features: [
        { icon: <Zap className="w-5 h-5" />, title: t('apps.sakuraenglish.featureTitle1', 'レベル別クイズ'), description: t('apps.sakuraenglish.featureDesc1', '5段階の難易度で自分に合った学習'), image: '/images/screenshots/SakuraEnglish-ss01.webp' },
        { icon: <Star className="w-5 h-5" />, title: t('apps.sakuraenglish.featureTitle2', 'カスタム単語リスト'), description: t('apps.sakuraenglish.featureDesc2', '自分だけの単語帳を作成可能'), image: '/images/screenshots/SakuraEnglish-ss02.webp' },
        { icon: <Users className="w-5 h-5" />, title: t('apps.sakuraenglish.featureTitle3', '復習＆トラッキング'), description: t('apps.sakuraenglish.featureDesc3', '間違えた単語の復習と習熟度管理'), image: '/images/screenshots/SakuraEnglish-ss03.webp' }
      ],
      screenshots: [
        { title: t('apps.sakuraenglish.screenshotTitle1', 'メイン画面'), description: t('apps.sakuraenglish.screenshotDesc1', 'シンプルで使いやすいインターフェース'), image: '/images/screenshots/SakuraEnglish-ss01.webp' },
        { title: t('apps.sakuraenglish.screenshotTitle2', 'クイズ画面'), description: t('apps.sakuraenglish.screenshotDesc2', 'レベル別の英単語クイズ'), image: '/images/screenshots/SakuraEnglish-ss02.webp' },
        { title: t('apps.sakuraenglish.screenshotTitle3', '学習進捗'), description: t('apps.sakuraenglish.screenshotDesc3', '詳細な学習データと分析'), image: '/images/screenshots/SakuraEnglish-ss03.webp' }
      ],
      appStoreUrl: 'https://apps.apple.com/jp/app/sakuraenglish/id6747013736',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.studism.sakuraenglish'
    },
    timelyze: {
      name: t('apps.timelyze.name'),
      icon: '/images/Timelyze1.0.7.jpg',
      category: t('apps.timelyze.category'),
      description: t('apps.timelyze.fullDescription', '学習時間の記録・管理を簡単にする時間管理アプリです。タイマー機能での測定や手動入力に対応し、教科別に学習時間を集計できます。日別・週別・月別のグラフ表示で学習データを可視化し、目標設定と進捗確認で継続的な学習をサポート。カレンダー機能やメモ機能も搭載し、効率的な学習習慣を身につけることができます。'),
      features: [
        { icon: <Zap className="w-5 h-5" />, title: t('apps.timelyze.featureTitle1', '時間記録・追跡'), description: t('apps.timelyze.featureDesc1', 'タイマー機能と手動入力で教科別集計'), image: '/images/screenshots/Timelyze-ss01.webp' },
        { icon: <Star className="w-5 h-5" />, title: t('apps.timelyze.featureTitle2', 'データ可視化'), description: t('apps.timelyze.featureDesc2', '日別・週別・月別のグラフで分析'), image: '/images/screenshots/Timelyze-ss02.webp' },
        { icon: <Users className="w-5 h-5" />, title: t('apps.timelyze.featureTitle3', '目標管理'), description: t('apps.timelyze.featureDesc3', '進捗確認と達成時の自動通知'), image: '/images/screenshots/Timelyze-ss03.webp' }
      ],
      screenshots: [
        { title: t('apps.timelyze.screenshotTitle1', 'タイマー画面'), description: t('apps.timelyze.screenshotDesc1', 'シンプルで使いやすい時間記録'), image: '/images/screenshots/Timelyze-ss01.webp' },
        { title: t('apps.timelyze.screenshotTitle2', '統計画面'), description: t('apps.timelyze.screenshotDesc2', '詳細な学習データの可視化'), image: '/images/screenshots/Timelyze-ss02.webp' },
        { title: t('apps.timelyze.screenshotTitle3', '目標設定'), description: t('apps.timelyze.screenshotDesc3', '個人に合わせた目標管理'), image: '/images/screenshots/Timelyze-ss03.webp' }
      ],
      appStoreUrl: 'https://apps.apple.com/jp/app/timelyze/id6752543100',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.studism.timelyze'
    },
    studism: {
      name: t('apps.studism.name'),
      icon: '/images/Studism.png',
      category: t('apps.studism.category'),
      description: t('apps.studism.fullDescription', 'Studismは、学生同士がつながり、学び合える新しい学習SNSです。勉強の悩みを共有したり、わからない問題を質問したり、学習に役立つ動画を見つけたり。Studismがあなたの学習をサポートします。'),
      features: [
        { icon: <MessageCircle className="w-5 h-5" />, title: t('apps.studism.featureTitle1', '質問フォーム'), description: t('apps.studism.featureDesc1', '学習中のわからないは質問フォームへ'), image: '/images/screenshots/Studism-ss01.png' },
        { icon: <Zap className="w-5 h-5" />, title: t('apps.studism.featureTitle2', 'アプリ間の連携'), description: t('apps.studism.featureDesc2', '他のアプリとの連携でどれだけ勉強したか共有しよう'), image: '/images/screenshots/Studism-ss02.png' },
        { icon: <Star className="w-5 h-5" />, title: t('apps.studism.featureTitle3', '学習動画'), description: t('apps.studism.featureDesc3', 'ショート動画や長尺動画で解説動画や隙間時間で理解を深めよう'), image: '/images/screenshots/Studism-ss03.png' }
      ],
      screenshots: [
        { title: t('apps.studism.screenshotTitle1', '質問フォーム'), description: t('apps.studism.screenshotDesc1', '学習中のわからないは質問フォームへ'), image: '/images/screenshots/Studism-ss01.png' },
        { title: t('apps.studism.screenshotTitle2', 'アプリ連携'), description: t('apps.studism.screenshotDesc2', '他のアプリとの連携でどれだけ勉強したか共有'), image: '/images/screenshots/Studism-ss02.png' },
        { title: t('apps.studism.screenshotTitle3', '学習動画'), description: t('apps.studism.screenshotDesc3', 'ショート動画や長尺動画で理解を深めよう'), image: '/images/screenshots/Studism-ss03.png' }
      ],
      appStoreUrl: 'https://apps.apple.com/jp/app/studism/id6754665143',
      playStoreUrl: null
    }
  };

  const app = appData[appSlug];

  if (!app) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">{t('appDetail.notFound')}</h1>
          <Button asChild>
            <Link to="/">{t('appDetail.backToHome')}</Link>
          </Button>
        </div>
      </div>
    );
  }

  // 開発中のアプリの場合
  if (app.inDevelopment) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center space-y-8">
              <img src={app.icon} alt={app.name} className="w-24 h-24 rounded-2xl mx-auto shadow-lg" />
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit mx-auto">{app.category}</Badge>
                <h1 className="text-3xl lg:text-4xl font-bold">{app.name}</h1>
              </div>
              <div className="bg-primary/10 rounded-2xl p-8 space-y-4">
                <h2 className="text-2xl font-bold text-primary">{t('appDetail.inDevelopment')}</h2>
                <p className="text-muted-foreground">
                  {t('appDetail.inDevelopmentText')}<br />
                  {t('appDetail.stayTuned')}
                </p>
              </div>
              <Button asChild>
                <Link to="/apps">{t('appDetail.backToApps')}</Link>
              </Button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

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
                  {app.appStoreUrl && (
                    <Button size="lg" className="group" asChild>
                      <a href={app.appStoreUrl} target="_blank" rel="noopener noreferrer">
                        <Download className="w-4 h-4 mr-2" />
                        App Store
                        <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  )}
                  {app.playStoreUrl && (
                    <Button variant="outline" size="lg" asChild>
                      <a href={app.playStoreUrl} target="_blank" rel="noopener noreferrer">
                        <Download className="w-4 h-4 mr-2" />
                        Google Play
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  )}
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
              <h2 className="text-2xl lg:text-3xl font-bold">{t('appDetail.features')}</h2>
              <p className="text-muted-foreground">
                {t('appDetail.featuresDescription', { appName: app.name })}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {app.features.map((feature, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-[9/16] bg-muted overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto text-primary mb-2">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
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

      {/* Support Links */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center space-y-8">
              <h2 className="text-2xl lg:text-3xl font-bold">{t('appDetail.support')}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <Shield className="w-8 h-8 text-primary mx-auto" />
                    <CardTitle>{t('appDetail.privacyPolicy')}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="mb-4">
                      {t('appDetail.privacyDescription')}
                    </CardDescription>
                    <Button variant="outline" asChild className="w-full">
                      <Link to={`/app/${appSlug}/privacy`}>
                        {t('appDetail.viewDetails')}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <MessageCircle className="w-8 h-8 text-primary mx-auto" />
                    <CardTitle>{t('appDetail.contact')}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="mb-4">
                      {t('appDetail.contactDescription')}
                    </CardDescription>
                    <Button variant="outline" asChild className="w-full">
                      <Link to={`/app/${appSlug}/contact`}>
                        {t('appDetail.contact')}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AppDetail;

