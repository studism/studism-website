import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileHeader from '@/components/mobile/MobileHeader';
import MobileFooter from '@/components/mobile/MobileFooter';
import useIsMobile from '@/hooks/useIsMobile';
import Breadcrumb from '@/components/Breadcrumb';
import { getPosterBySlug } from '@/data/newsPosters';

const TYPE_COLORS = {
  'お知らせ': { bg: '#EFF6FF', text: '#2563EB' },
  'アップデート': { bg: '#F0FDF4', text: '#16A34A' },
  'リリース': { bg: '#FFF7ED', text: '#EA580C' },
  '配信中': { bg: '#F0FDF4', text: '#16A34A' },
  '大幅アップデート': { bg: '#F5F3FF', text: '#7C3AED' },
};

function NoticeContent({ item }) {
  const typeColor = TYPE_COLORS[item.type] || { bg: '#F1F5F9', text: '#64748B' };
  return (
    <>
      {item.type && (
        <span style={{
          fontSize: '0.72rem', fontWeight: 700,
          background: typeColor.bg, color: typeColor.text,
          padding: '2px 10px', borderRadius: '999px', display: 'inline-block', marginBottom: '16px',
        }}>{item.type}</span>
      )}
      <h1 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#0a0a0a', margin: '0 0 12px', lineHeight: 1.3, letterSpacing: '-0.02em' }}>
        {item.title}
      </h1>
      {item.date && (
        <p style={{ fontSize: '0.8rem', color: '#94A3B8', margin: '0 0 24px' }}>{item.date}</p>
      )}
      {/* 画像の全体像（トリミングせず全体を表示） */}
      <img
        src={item.img}
        alt={item.title}
        style={{ width: '100%', height: 'auto', borderRadius: '12px', marginBottom: '24px', display: 'block' }}
      />
      {item.body && (
        <div
          style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#333' }}
          dangerouslySetInnerHTML={{ __html: item.body }}
        />
      )}
      {(item.appStoreUrl || item.playStoreUrl) && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '28px' }}>
          {item.appStoreUrl && (
            <a href={item.appStoreUrl} target="_blank" rel="noopener noreferrer" style={storeBadgeStyle}>
              <svg width="20" height="20" viewBox="0 0 384 512" fill="#fff" aria-hidden="true"><path d="M318.7 268c-.2-37 16.4-64.9 50-85.6-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C71.3 139.5 24 184.1 24 274.5q0 39.9 14.6 82.4c13 36.8 60 127.1 109 125.6 25.6-.6 43.7-18.2 77-18.2 32.3 0 49 18.2 77.4 18.2 49.5-.7 92-82.7 104.4-119.6-66.3-31.3-63.7-91.7-63.7-93.9zm-58.2-168.5c28.1-33.3 25.5-63.6 24.7-74.5-24.8 1.4-53.5 16.9-69.9 35.9-18 20.4-28.6 45.6-26.3 74 26.8 2.1 51.3-11.7 71.5-35.4z" /></svg>
              <span style={storeBadgeTextStyle}><span style={{ fontSize: '0.6rem', opacity: 0.85 }}>Download on the</span><span style={{ fontSize: '1rem', fontWeight: 700 }}>App Store</span></span>
            </a>
          )}
          {item.playStoreUrl && (
            <a href={item.playStoreUrl} target="_blank" rel="noopener noreferrer" style={storeBadgeStyle}>
              <svg width="18" height="20" viewBox="0 0 512 512" fill="#fff" aria-hidden="true"><path d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm278.3 234.3L104.6 13l280.8 161.2-60.1 60.1zm88.9 21.7l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l220.7-221.3 60.1 60.1L104.6 499z" /></svg>
              <span style={storeBadgeTextStyle}><span style={{ fontSize: '0.6rem', opacity: 0.85 }}>GET IT ON</span><span style={{ fontSize: '1rem', fontWeight: 700 }}>Google Play</span></span>
            </a>
          )}
        </div>
      )}
    </>
  );
}

const storeBadgeStyle = {
  display: 'inline-flex', alignItems: 'center', gap: '10px',
  background: '#000', color: '#fff', borderRadius: '12px',
  padding: '9px 16px', textDecoration: 'none', border: '1px solid rgba(0,0,0,0.1)',
};
const storeBadgeTextStyle = { display: 'flex', flexDirection: 'column', lineHeight: 1.15 };

export default function NoticeDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const item = getPosterBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const goToNews = () => {
    const go = () => {
      const el = document.getElementById('news');
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    };
    navigate('/');
    setTimeout(go, 100);
  };

  const breadcrumb = (
    <Breadcrumb items={[{ label: 'ホーム', to: '/' }, { label: 'お知らせ', onClick: goToNews }, { label: item ? item.title : '記事' }]} />
  );
  const content = item
    ? <NoticeContent item={item} />
    : <p style={{ color: '#94A3B8' }}>お知らせが見つかりません</p>;

  if (isMobile) return (
    <div style={{ minHeight: '100vh', background: '#f0f4f8' }}>
      <MobileHeader />
      <div style={{ padding: '32px 16px 48px' }}>
        {breadcrumb}
        {content}
      </div>
      <MobileFooter />
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', background: '#f0f4f8' }}>
      <Header />
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 40px 80px' }}>
        {breadcrumb}
        {content}
      </div>
      <Footer />
    </div>
  );
}
