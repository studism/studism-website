import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer>
    {/* rainbow top */}
    <div style={{ height: 6, background: 'linear-gradient(90deg,#ef4444,#f97316,#facc15,#4ade80,#60a5fa,#a855f7,#ec4899)' }} />
    <div style={{ background: 'linear-gradient(180deg,#1e3a8a 0%,#1e1b4b 100%)' }}>
      <div className="container mx-auto px-8 md:px-12 lg:px-20 pt-14 pb-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/images/背景透過 2.png" alt="bird" className="h-10 w-auto" />
              <img src="/images/Studism横影なし 2.png" alt="Studism" className="h-8 w-auto brightness-0 invert" />
            </div>
            <p className="text-sm leading-relaxed" style={{ color:'rgba(255,255,255,0.6)' }}>
              学びを、もっと自由に、もっと楽しく。<br />
              教育とテクノロジーの融合で新しい学習体験を提供します。
            </p>
          </div>
          {[
            { title:'アプリ', links:[{ to:'/app/sakuraenglish', label:'SakuraEnglish' },{ to:'/app/timelyze', label:'Timelyze' }] },
            { title:'会社情報', links:[{ to:'/#about', label:'会社について' },{ to:'/#news', label:'お知らせ' }] },
            { title:'サポート', links:[{ to:'/privacy', label:'プライバシーポリシー' },{ to:'/contact', label:'お問い合わせ' }] },
          ].map((col, i) => (
            <div key={i} className="space-y-4">
              <h4 className="font-black text-sm uppercase tracking-wider text-white">{col.title}</h4>
              <ul className="space-y-2 text-sm">
                {col.links.map((l, j) => (
                  <li key={j}>
                    <Link to={l.to} className="transition-colors hover:text-yellow-300 font-medium"
                      style={{ color:'rgba(255,255,255,0.6)' }}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-sm" style={{ color:'rgba(255,255,255,0.4)' }}>
            © 2025 Studism Inc. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
