import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ background: '#1E1B4B', borderTop: '3px solid #7C3AED' }}>
      <div className="container mx-auto px-8 md:px-12 lg:px-20 pt-14 pb-8">
        <div className="grid md:grid-cols-4 gap-10 mb-10">

          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl flex items-center justify-center font-black text-white text-base flex-shrink-0"
                style={{ background: 'linear-gradient(135deg,#7C3AED,#A855F7)' }}>S</div>
              <span className="font-black text-lg text-white">Studism</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
              学びを、もっと自由に、もっと楽しく。
              教育とテクノロジーの融合で新しい学習体験を提供します。
            </p>
          </div>

          {[
            { title: 'Apps',    links: [{ to: '/app/sakuraenglish', l: 'SakuraEnglish' }, { to: '/app/timelyze', l: 'Timelyze' }] },
            { title: 'Company', links: [{ to: '/#news', l: 'News' }] },
            { title: 'Support', links: [{ to: '/privacy', l: 'Privacy Policy' }, { to: '/contact', l: 'Contact' }] },
          ].map((col, i) => (
            <div key={i} className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((lk, j) => (
                  <li key={j}>
                    <Link to={lk.to} className="text-sm font-medium transition-all hover:text-purple-300" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      {lk.l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>© 2025 Studism Inc. All Rights Reserved.</p>
          <p className="text-xs font-black tracking-widest uppercase"
            style={{ background: 'linear-gradient(90deg,#A78BFA,#F472B6,#FB923C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            STUDY SMART · HAVE FUN
          </p>
        </div>
      </div>
    </footer>
  );
}
