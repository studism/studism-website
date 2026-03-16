import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ background: '#0a0a0a' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 40px 32px' }}>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '40px', marginBottom: '48px' }}>

          {/* ロゴ＋説明 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
              <img src="/images/studism-logo.png" alt="Studism" style={{ height: '36px', width: 'auto' }} />
              <span style={{ fontWeight: 900, fontSize: '1rem', color: '#fff', letterSpacing: '-0.01em' }}>Studism</span>
            </Link>
            <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>
              学びを、もっと自由に、もっと楽しく。
            </p>
          </div>

          {/* リンク列 */}
          {[
            { title: 'Apps',    links: [{ to: '/app/sakuraenglish', l: 'SakuraEnglish' }, { to: '/app/timelyze', l: 'Timelyze' }] },
            { title: 'Company', links: [{ to: '/#news', l: 'News' }] },
            { title: 'Support', links: [{ to: '/privacy', l: 'Privacy Policy' }, { to: '/contact', l: 'Contact' }] },
          ].map((col, i) => (
            <div key={i}>
              <h4 style={{ fontSize: '0.72rem', fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.12em', textTransform: 'uppercase', margin: '0 0 16px' }}>{col.title}</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {col.links.map((lk, j) => (
                  <li key={j}>
                    <Link to={lk.to} style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontWeight: 500 }}
                      onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                    >
                      {lk.l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', margin: 0 }}>© 2025 Studism Inc. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}
