import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Shield } from 'lucide-react';

const PrivacyPolicy = () => {
  const { appSlug } = useParams();

  // ページ読み込み時にトップにスクロール
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [appSlug]);

  const appNames = {
    sakuraenglish: 'SakuraEnglish',
    timelyze: 'Timelyze'
  };

  const appName = appNames[appSlug] || 'アプリ';

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

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl lg:text-4xl font-bold">{appName} プライバシーポリシー</h1>
              <p className="text-muted-foreground">
                個人情報の取り扱いについて詳しくご説明します
              </p>
            </div>
          </div>

          <Card>
            <CardContent className="p-8 space-y-8">
              <div className="prose prose-gray max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  このプライバシーポリシーは、株式会社Studism（以下「当社」といいます）が提供するアプリケーション「{appName}」（以下「本アプリ」といいます）における、ユーザーの個人情報および利用者情報の取扱いについて定めるものです。
                </p>

                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold mb-4">1. 取得する情報および取得方法</h2>
                    <p className="text-muted-foreground mb-4">本アプリでは、以下の情報を、以下の方法により取得します。</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium mb-2">(1) ユーザーにご提供いただく情報</h3>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                          <li>メールアドレス（お問い合わせ時など）</li>
                          <li>その他、ユーザーが任意で入力する情報</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-medium mb-2">(2) 本アプリのご利用にあたって当社が取得する情報</h3>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                          <li>端末情報（OS、端末識別子など）</li>
                          <li>ログ情報（IPアドレス、アクセス日時、操作履歴など）</li>
                          <li>クッキー（Cookie）および匿名ID</li>
                          <li>アプリケーションの利用状況に関する情報（アプリの起動回数、利用時間、機能利用状況など）</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-4">2. 利用目的</h2>
                    <p className="text-muted-foreground mb-4">当社は、取得した情報を以下の目的で利用します。</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                      <li>本アプリの提供、運営、維持、改善のため</li>
                      <li>ユーザーからのお問い合わせに対応するため</li>
                      <li>本アプリに関する情報（アップデート情報、キャンペーン情報など）を提供するため</li>
                      <li>本アプリの利用状況を分析し、サービス改善や新機能開発に役立てるため</li>
                      <li>統計データとして、個人を特定できない形式に加工して利用するため</li>
                      <li>不正行為の防止および対応のため</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-4">3. 第三者提供</h2>
                    <p className="text-muted-foreground">
                      当社は、法令で認められる場合を除き、ユーザーの同意なく個人情報を第三者に提供することはありません。
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-4">4. 個人情報の開示、訂正、利用停止など</h2>
                    <p className="text-muted-foreground">
                      ユーザーは、当社が保有するご自身の個人情報について、開示、訂正、利用停止などを求めることができます。ご希望の場合は、下記「お問い合わせ」よりご連絡ください。
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-4">5. 本プライバシーポリシーの変更</h2>
                    <p className="text-muted-foreground">
                      当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更した場合は、本アプリ内または当社のウェブサイト上で告知いたします。変更後のプライバシーポリシーは、告知された時点から効力を生じるものとします。
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-4">6. お問い合わせ</h2>
                    <p className="text-muted-foreground mb-4">
                      本プライバシーポリシーに関するお問い合わせは、以下の窓口までご連絡ください。
                    </p>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="font-medium">株式会社Studism</p>
                      <Button variant="link" className="p-0 h-auto" asChild>
                        <Link to={`/app/${appSlug}/contact`}>
                          お問い合わせフォーム
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <p className="text-sm text-muted-foreground">制定日: 2025年9月8日</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <Button asChild>
              <Link to={`/app/${appSlug}`}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                {appName}に戻る
              </Link>
            </Button>
          </div>
        </div>
      </div>

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

export default PrivacyPolicy;

