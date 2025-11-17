import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/images/studism-logo.png" alt="Studism" className="w-8 h-8 invert" />
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
              <li><a href="/#about" className="text-background/80 hover:text-background transition-colors">会社について</a></li>
              <li><a href="/#news" className="text-background/80 hover:text-background transition-colors">お知らせ</a></li>
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
  );
};

export default Footer;
