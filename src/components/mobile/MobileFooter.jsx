import React from 'react';
import { Link } from 'react-router-dom';

export default function MobileFooter() {
  return (
    <footer style={{ background: '#0a0a0a', minHeight: '100%', paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <div style={{ padding: '40px 24px 28px' }}>

        {/* ロゴ＋タグライン縦積み */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <img src="/images/studism-logo.png" alt="Studism" style={{ height: '46px', width: 'auto' }} />
            <span style={{ fontWeight: 900, fontSize: '1.25rem', color: '#fff', letterSpacing: '-0.01em' }}>Studism</span>
          </Link>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>
            学びを、もっと自由に、もっと楽しく。
          </p>
        </div>

        {/* リンク列 2列グリッド */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px 24px', marginBottom: '32px' }}>
          {[
            { title: 'Apps', links: [{ to: '/app/studism', l: 'Studism' }, { to: '/app/sakuraenglish', l: 'SakuraEnglish' }, { to: '/app/timelyze', l: 'Timelyze' }, { to: '/app/mamemame', l: '豆マメ' }, { to: '/app/loopin', l: 'Loopin' }] },
            { title: 'Services', links: [{ to: 'https://www.youtube.com/channel/UCkoYxm2fTNza2qrjrgrbFgw', l: 'YouTube', external: true }, { to: 'https://www.tiktok.com/@user9530011262997', l: 'TikTok', external: true }] },
            { title: 'Company', links: [{ to: '/#news', l: 'News' }] },
            { title: 'Support', links: [{ to: '/privacy', l: 'Privacy Policy' }, { to: '/contact', l: 'Contact' }] },
          ].map((col, i) => (
            <div key={i}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'rgba(255,255,255,0.8)', letterSpacing: '0.12em', textTransform: 'uppercase', margin: '0 0 12px' }}>{col.title}</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {col.links.map((lk, j) => (
                  <li key={j}>
                    {lk.external ? (
                      <a href={lk.to} target="_blank" rel="noopener noreferrer"
                        style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontWeight: 500 }}>
                        {lk.l}
                      </a>
                    ) : (
                      <Link to={lk.to}
                        style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontWeight: 500 }}>
                        {lk.l}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '20px' }}>
          <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', margin: 0 }}>© 2025 Studism Inc. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}
