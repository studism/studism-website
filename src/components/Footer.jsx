import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ background:'#030308', borderTop:'1px solid rgba(255,255,255,0.05)' }}>
      <div className="container mx-auto px-8 md:px-12 lg:px-20 pt-16 pb-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">

          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-white text-base flex-shrink-0"
                style={{ background:'linear-gradient(135deg,#6366f1,#8b5cf6)' }}>S</div>
              <span className="font-black text-white text-lg">Studism</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color:'rgba(255,255,255,0.3)' }}>
              学びを、もっと自由に、もっと楽しく。<br />
              教育とテクノロジーの融合で新しい学習体験を提供します。
            </p>
          </div>

          {[
            { title:'Apps',    links:[{ to:'/app/sakuraenglish', l:'SakuraEnglish' },{ to:'/app/timelyze', l:'Timelyze' }] },
            { title:'Company', links:[{ to:'/#about', l:'About' },{ to:'/#news', l:'News' }] },
            { title:'Support', links:[{ to:'/privacy', l:'Privacy Policy' },{ to:'/contact', l:'Contact' }] },
          ].map((col,i) => (
            <div key={i} className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest" style={{ color:'rgba(255,255,255,0.25)' }}>{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((lk,j) => (
                  <li key={j}>
                    <Link to={lk.to} className="text-sm font-medium transition-all hover:text-indigo-400"
                      style={{ color:'rgba(255,255,255,0.4)' }}>
                      {lk.l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6"
          style={{ borderTop:'1px solid rgba(255,255,255,0.05)' }}>
          <p className="text-xs" style={{ color:'rgba(255,255,255,0.18)' }}>© 2025 Studism Inc. All Rights Reserved.</p>
          <p className="text-xs font-black tracking-widest uppercase" style={{ background:'linear-gradient(90deg,#818cf8,#67e8f9,#c084fc)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
            STUDY SMART · HAVE FUN
          </p>
        </div>
      </div>
    </footer>
  );
}
