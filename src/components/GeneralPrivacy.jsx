import React, { useEffect } from 'react';
import { ArrowLeft, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const GeneralPrivacy = () => {
  // ページ読み込み時にトップにスクロール
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
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

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center space-y-6 mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl lg:text-4xl font-bold">プライバシーポリシー</h1>
              <p className="text-muted-foreground">
                個人情報の取り扱いについて詳しくご説明します
              </p>
            </div>
          </div>

          {/* Privacy Policy Content */}
          <Card>
            <CardContent className="p-8 prose prose-gray max-w-none">
              <p className="text-muted-foreground mb-8">
                このプライバシーポリシーは、株式会社Studism（以下「当社」といいます）が提供するサービスにおける、
                ユーザーの個人情報および利用者情報の取扱いについて定めるものです。
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">1. 取得する情報および取得方法</h2>
              <p>当社では、以下の情報を、以下の方法により取得します。</p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">(1) ユーザーにご提供いただく情報</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>メールアドレス（お問い合わせ時など）</li>
                <li>お名前（お問い合わせ時など）</li>
                <li>その他、ユーザーが任意で入力する情報</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">(2) サービスのご利用にあたって当社が取得する情報</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>端末情報（OS、端末識別子など）</li>
                <li>ログ情報（IPアドレス、アクセス日時、操作履歴など）</li>
                <li>クッキー（Cookie）および匿名ID</li>
                <li>サービスの利用状況に関する情報</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">2. 利用目的</h2>
              <p>当社は、取得した情報を以下の目的で利用します。</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>サービスの提供、運営、維持、改善のため</li>
                <li>ユーザーからのお問い合わせに対応するため</li>
                <li>サービスに関する情報（アップデート情報、キャンペーン情報など）を提供するため</li>
                <li>サービスの利用状況を分析し、サービス改善や新機能開発に役立てるため</li>
                <li>統計データとして、個人を特定できない形式に加工して利用するため</li>
                <li>不正行為の防止および対応のため</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">3. 第三者提供</h2>
              <p>
                当社は、法令で認められる場合を除き、ユーザーの同意なく個人情報を第三者に提供することはありません。
                ただし、以下の場合には、ユーザーの同意なく個人情報を第三者に提供することがあります。
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難である場合</li>
                <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難である場合</li>
                <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがある場合</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">4. 個人情報の開示、訂正、利用停止など</h2>
              <p>
                ユーザーは、当社が保有するご自身の個人情報について、開示、訂正、利用停止などを求めることができます。
                ご希望の場合は、下記「お問い合わせ」よりご連絡ください。
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">5. 個人情報の安全管理</h2>
              <p>
                当社は、個人情報の漏洩、滅失または毀損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">6. 本プライバシーポリシーの変更</h2>
              <p>
                当社は、必要に応じて本プライバシーポリシーを変更することがあります。
                変更した場合は、当社のウェブサイト上で告知いたします。
                変更後のプライバシーポリシーは、告知された時点から効力を生じるものとします。
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">7. お問い合わせ</h2>
              <p>本プライバシーポリシーに関するお問い合わせは、以下の窓口までご連絡ください。</p>
              <div className="bg-muted/50 p-4 rounded-lg mt-4">
                <p className="font-medium">株式会社Studism</p>
                <Button variant="link" className="p-0 h-auto" asChild>
                  <Link to="/contact">お問い合わせフォーム</Link>
                </Button>
              </div>

              <div className="mt-8 pt-8 border-t">
                <p className="text-sm text-muted-foreground">制定日: 2025年9月8日</p>
              </div>
            </CardContent>
          </Card>

          {/* Back to Home */}
          <div className="mt-12 text-center">
            <Button asChild>
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                ホームに戻る
              </Link>
            </Button>
          </div>
        </div>
      </main>

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

export default GeneralPrivacy;

