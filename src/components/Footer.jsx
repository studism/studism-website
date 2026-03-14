import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ background: 'linear-gradient(180deg, #eff6ff 0%, #1e40af 100%)' }}>
      <div className="container mx-auto px-8 md:px-12 lg:px-16 xl:px-20 pt-16 pb-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/images/Studismlogo.png" alt="Studism" className="h-10 w-auto" />
            </div>
            <p className="text-blue-800/70 text-sm leading-relaxed">
              学びを、もっと自由に、もっと楽しく。<br />
              教育とテクノロジーの融合で新しい学習体験を提供します。
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="font-black text-blue-900 text-sm uppercase tracking-wider">アプリ</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/app/sakuraenglish" className="text-blue-700 hover:text-blue-900 transition-colors">SakuraEnglish</Link></li>
              <li><Link to="/app/timelyze" className="text-blue-700 hover:text-blue-900 transition-colors">Timelyze</Link></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-black text-blue-900 text-sm uppercase tracking-wider">会社情報</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#about" className="text-blue-700 hover:text-blue-900 transition-colors">会社について</a></li>
              <li><a href="/#news" className="text-blue-700 hover:text-blue-900 transition-colors">お知らせ</a></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-black text-blue-900 text-sm uppercase tracking-wider">サポート</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="text-blue-700 hover:text-blue-900 transition-colors">プライバシーポリシー</Link></li>
              <li><Link to="/contact" className="text-blue-700 hover:text-blue-900 transition-colors">お問い合わせ</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-200/50 pt-6 text-center">
          <p className="text-white/80 text-sm">
            © 2025 Studism Inc. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
