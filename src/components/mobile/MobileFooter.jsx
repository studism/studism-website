import React from 'react';
import { Link } from 'react-router-dom';

export default function MobileFooter() {
  return (
    <footer style={{ background: '#0a0a0a' }}>
      <div style={{ padding: '40px 24px 28px' }}>

        {/* ロゴ＋タグライン横一列 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', flexShrink: 0 }}>
            <img src="/images/studism-logo.png" alt="Studism" style={{ height: '32px', width: 'auto' }} />
            <span style={{ fontWeight: 900, fontSize: '1rem', color: '#fff', letterSpacing: '-0.01em' }}>Studism</span>
          </Link>
          <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.4 }}>
            学びを、もっと自由に、もっと楽しく。
          </p>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '20px' }}>
          <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', margin: 0 }}>© 2025 Studism Inc. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}
