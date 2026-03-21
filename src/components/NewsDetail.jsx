import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileHeader from '@/components/mobile/MobileHeader';
import MobileFooter from '@/components/mobile/MobileFooter';
import useIsMobile from '@/hooks/useIsMobile';
import { client } from '@/lib/microcms';

const TYPE_COLORS = {
  'お知らせ': { bg: '#EFF6FF', text: '#2563EB' },
  'アップデート': { bg: '#F0FDF4', text: '#16A34A' },
  'リリース': { bg: '#FFF7ED', text: '#EA580C' },
};

function NewsContent({ item }) {
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
      <p style={{ fontSize: '0.8rem', color: '#94A3B8', margin: '0 0 24px' }}>
        {new Date(item.publishedAt).toLocaleDateString('ja-JP')}
      </p>
      {item.image && (
        <img src={item.image.url} alt={item.title} style={{ width: '100%', borderRadius: '12px', marginBottom: '24px', display: 'block' }} />
      )}
      {item.content && (
        <div
          style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#333' }}
          dangerouslySetInnerHTML={{ __html: item.content }}
        />
      )}
    </>
  );
}

export default function NewsDetail() {
  const { newsId } = useParams();
  const isMobile = useIsMobile();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    client.get({ endpoint: 'news', contentId: newsId })
      .then(res => { setItem(res); setLoading(false); })
      .catch(() => setLoading(false));
  }, [newsId]);

  if (isMobile) return (
    <div style={{ minHeight: '100vh', background: '#f0f4f8' }}>
      <MobileHeader />
      <div style={{ padding: '32px 16px 48px' }}>
        <Link to="/news" style={{ fontSize: '0.85rem', color: '#2563EB', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← お知らせ一覧</Link>
        {loading ? <p style={{ color: '#94A3B8' }}>読み込み中...</p>
          : item ? <NewsContent item={item} />
          : <p style={{ color: '#94A3B8' }}>記事が見つかりません</p>}
      </div>
      <MobileFooter />
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', background: '#f0f4f8' }}>
      <Header />
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 40px 80px' }}>
        <Link to="/news" style={{ fontSize: '0.85rem', color: '#2563EB', textDecoration: 'none', display: 'inline-block', marginBottom: '32px' }}>← お知らせ一覧</Link>
        {loading ? <p style={{ color: '#94A3B8' }}>読み込み中...</p>
          : item ? <NewsContent item={item} />
          : <p style={{ color: '#94A3B8' }}>記事が見つかりません</p>}
      </div>
      <Footer />
    </div>
  );
}
