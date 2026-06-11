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
    </>
  );
}

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
