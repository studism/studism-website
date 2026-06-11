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
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>
            学びを<br />もっと自由に、<br />もっと楽しく。
          </p>
        </div>

        {/* リンク列 2列グリッド */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px 24px', marginBottom: '32px' }}>
          {[
            { title: 'アプリ', links: [{ to: '/app/studism', l: 'Studism' }, { to: '/app/sakuraenglish', l: 'SakuraEnglish' }, { to: '/app/timelyze', l: 'Timelyze' }, { to: '/app/mamemame', l: '豆マメ' }, { to: '/app/loopin', l: 'Loopin' }] },
            { title: 'サービス', links: [{ to: 'https://www.youtube.com/channel/UCkoYxm2fTNza2qrjrgrbFgw', l: 'YouTube', external: true }, { to: 'https://www.tiktok.com/@user9530011262997', l: 'TikTok', external: true }] },
            { title: '会社', links: [{ to: '/#news', l: 'お知らせ' }] },
            { title: 'サポート', links: [{ to: '/privacy', l: 'プライバシーポリシー' }, { to: '/contact', l: 'お問い合わせ' }] },
          ].map((col, i) => (
            <div key={i}>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff', letterSpacing: '0.08em', margin: '0 0 12px' }}>{col.title}</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {col.links.map((lk, j) => (
                  <li key={j}>
                    {lk.external ? (
                      <a href={lk.to} target="_blank" rel="noopener noreferrer"
                        style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontWeight: 500 }}>
                        {lk.l}
                      </a>
                    ) : (
                      <Link to={lk.to}
                        style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontWeight: 500 }}>
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
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', margin: 0 }}>© 2026 Studism 無断転載を禁じます。</p>
        </div>

      </div>
    </footer>
  );
}
