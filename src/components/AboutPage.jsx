import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, FileText, ExternalLink } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const AboutPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-primary py-12">
          <div className="container mx-auto px-4 md:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white">企業情報</h1>
            <p className="text-white/80 mt-2">Studismについて</p>
          </div>
        </section>

        {/* Company Info */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto space-y-12">

              {/* 基本情報 */}
              <div className="bg-white rounded-xl shadow-sm border p-8">
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-primary">基本情報</h2>
                <dl className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 py-3 border-b border-gray-100">
                    <dt className="font-medium text-gray-700">名称</dt>
                    <dd className="md:col-span-2 text-gray-900">Studism</dd>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 py-3 border-b border-gray-100">
                    <dt className="font-medium text-gray-700">設立日</dt>
                    <dd className="md:col-span-2 text-gray-400 italic">準備中</dd>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 py-3 border-b border-gray-100">
                    <dt className="font-medium text-gray-700">事業内容</dt>
                    <dd className="md:col-span-2 text-gray-900">教育アプリケーションの企画・開発・運営</dd>
                  </div>
                </dl>
              </div>

              {/* ミッション・ビジョン */}
              <div className="bg-white rounded-xl shadow-sm border p-8">
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-primary">ミッション・ビジョン</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">ミッション</h3>
                    <p className="text-xl font-medium text-gray-900">学びを、もっと自由に、もっと楽しく</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">ビジョン</h3>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {t('about.description')}
                    </p>
                  </div>
                </div>
              </div>

              {/* サービス・事業 */}
              <div className="bg-white rounded-xl shadow-sm border p-8">
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-primary">サービス・事業</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Studismでは、学習をサポートする様々なアプリケーションを開発・提供しています。
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <Link
                      to="/app/sakuraenglish"
                      className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <img src="/images/sakuraenglish.jpg" alt="SakuraEnglish" className="w-12 h-12 rounded-lg" />
                      <div>
                        <p className="font-medium">SakuraEnglish</p>
                        <p className="text-sm text-gray-500">語学学習</p>
                      </div>
                    </Link>
                    <Link
                      to="/app/timelyze"
                      className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <img src="/images/timelyze.png" alt="Timelyze" className="w-12 h-12 rounded-lg" />
                      <div>
                        <p className="font-medium">Timelyze</p>
                        <p className="text-sm text-gray-500">生産性</p>
                      </div>
                    </Link>
                    <Link
                      to="/app/studism"
                      className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <img src="/images/Studism.png" alt="Studism" className="w-12 h-12 rounded-lg" />
                      <div>
                        <p className="font-medium">Studism</p>
                        <p className="text-sm text-yellow-600">開発中</p>
                      </div>
                    </Link>
                  </div>
                  <div className="mt-4 text-right">
                    <Link to="/apps" className="text-primary hover:underline text-sm">
                      アプリ一覧を見る →
                    </Link>
                  </div>
                </div>
              </div>

              {/* 連絡先・サポート */}
              <div className="bg-white rounded-xl shadow-sm border p-8">
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-primary">連絡先・サポート</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Link
                    to="/contact"
                    className="flex items-center gap-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">お問い合わせ</p>
                      <p className="text-sm text-gray-500">ご質問・ご要望はこちら</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
                  </Link>
                  <Link
                    to="/privacy"
                    className="flex items-center gap-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">プライバシーポリシー</p>
                      <p className="text-sm text-gray-500">個人情報の取り扱いについて</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
