import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ background: '#0a0a0a' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 40px 32px' }}>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', gap: '40px', marginBottom: '48px' }}>

          {/* ロゴ＋説明 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
              <img src="/images/studism-logo.png" alt="Studism" style={{ height: '36px', width: 'auto' }} />
              <span style={{ fontWeight: 900, fontSize: '1rem', color: '#fff', letterSpacing: '-0.01em' }}>Studism</span>
            </Link>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>
              学びを<br />もっと自由に、<br />もっと楽しく。
            </p>
          </div>

          {/* リンク列 */}
          {[
            { title: 'アプリ', links: [{ to: '/app/studism', l: 'Studism' }, { to: '/app/sakuraenglish', l: 'SakuraEnglish' }, { to: '/app/timelyze', l: 'Timelyze' }, { to: '/app/mamemame', l: '豆マメ' }, { to: '/app/loopin', l: 'Loopin' }] },
            { title: 'サービス', links: [{ to: 'https://www.youtube.com/channel/UCkoYxm2fTNza2qrjrgrbFgw', l: 'YouTube', external: true }, { to: 'https://www.tiktok.com/@user9530011262997', l: 'TikTok', external: true }] },
            { title: '会社', links: [{ to: '/#news', l: 'お知らせ' }] },
            { title: 'サポート', links: [{ to: '/privacy', l: 'プライバシーポリシー' }, { to: '/contact', l: 'お問い合わせ' }] },
          ].map((col, i) => (
            <div key={i}>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff', letterSpacing: '0.08em', margin: '0 0 16px' }}>{col.title}</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {col.links.map((lk, j) => (
                  <li key={j}>
                    {lk.external ? (
                      <a href={lk.to} target="_blank" rel="noopener noreferrer"
                        style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontWeight: 500 }}
                        onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                      >
                        {lk.l}
                      </a>
                    ) : (
                      <Link to={lk.to} style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontWeight: 500 }}
                        onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                      >
                        {lk.l}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', margin: 0 }}>© 2026 Studism 無断転載を禁じます。</p>
        </div>

      </div>
    </footer>
  );
}
