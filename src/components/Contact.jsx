import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, MessageCircle, Send, Shield } from 'lucide-react';

const Contact = () => {
  const { appSlug } = useParams();

  // ページ読み込み時にトップにスクロール
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [appSlug]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const appNames = {
    sakuraenglish: 'SakuraEnglish',
    timelyze: 'Timelyze'
  };

  const appName = appNames[appSlug] || 'アプリ';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const endpoint = import.meta.env.VITE_CONTACT_FORM_URL || import.meta.env.VITE_CONTACT_API_URL;
    if (!endpoint) {
      setSubmitStatus({ type: 'error', message: '送信先URLが設定されていません。.env に VITE_CONTACT_FORM_URL を設定してください。' });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({
          ...formData,
          app: appName
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: data.message });
        setFormData({ name: '', email: '', category: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'エラーが発生しました' });
      }
    } catch (error) {
      console.error('Submit error:', error);
      setSubmitStatus({ type: 'error', message: 'ネットワークエラーが発生しました' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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
        <div className="max-w-2xl mx-auto">
          <div className="text-center space-y-6 mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <MessageCircle className="w-8 h-8 text-primary" />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl lg:text-4xl font-bold">{appName} お問い合わせ</h1>
              <p className="text-muted-foreground">
                ご質問やご要望がございましたら、お気軽にお問い合わせください
              </p>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Send className="w-5 h-5" />
                <span>お問い合わせフォーム</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="app">アプリ名</Label>
                  <Input
                    id="app"
                    value={appName}
                    disabled
                    className="bg-muted"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">お名前 <span className="text-destructive">*</span></Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="山田太郎"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">メールアドレス <span className="text-destructive">*</span></Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="example@email.com"
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">お問い合わせ種別 <span className="text-destructive">*</span></Label>
                  <Select value={formData.category} onValueChange={(value) => handleChange('category', value)} required>
                    <SelectTrigger id="category" name="category" autoComplete="off" aria-required="true">
                      <SelectValue placeholder="お問い合わせの種別を選択してください" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bug">不具合報告</SelectItem>
                      <SelectItem value="feature">機能要望</SelectItem>
                      <SelectItem value="usage">使い方について</SelectItem>
                      <SelectItem value="account">アカウントについて</SelectItem>
                      <SelectItem value="other">その他</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">詳細 <span className="text-destructive">*</span></Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="具体的な内容をご記載ください"
                    rows={6}
                    autoComplete="off"
                    required
                  />
                </div>

                <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                  <h3 className="font-medium flex items-center space-x-2">
                    <Shield className="w-4 h-4" />
                    <span>個人情報の取り扱いについて</span>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    いただいた個人情報は、お問い合わせへの対応のみに利用し、当社のプライバシーポリシーに基づき適切に管理いたします。
                  </p>
                  <Button variant="link" className="p-0 h-auto text-sm" asChild>
                    <Link to={`/app/${appSlug}/privacy`}>
                      プライバシーポリシーを確認する
                    </Link>
                  </Button>
                </div>

                {submitStatus && (
                  <div className={`p-4 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                    {submitStatus.message}
                  </div>
                )}

                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? '送信中...' : '送信する'}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">ご注意</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• お問い合わせの内容によっては、ご返信までにお時間をいただく場合がございます。</li>
                  <li>• 土日祝日および年末年始は、お返事が遅れる場合がございます。</li>
                  <li>• お問い合わせの内容によっては、お答えできない場合もございます。</li>
                </ul>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button asChild>
                <Link to={`/app/${appSlug}`}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {appName}に戻る
                </Link>
              </Button>
            </div>
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

export default Contact;

