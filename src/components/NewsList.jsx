import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileHeader from '@/components/mobile/MobileHeader';
import MobileFooter from '@/components/mobile/MobileFooter';
import useIsMobile from '@/hooks/useIsMobile';
import { getNewsList } from '@/lib/microcms';

const TYPE_COLORS = {
  'お知らせ': { bg: '#EFF6FF', text: '#2563EB' },
  'アップデート': { bg: '#F0FDF4', text: '#16A34A' },
  'リリース': { bg: '#FFF7ED', text: '#EA580C' },
};

function NewsCard({ item, showImage = true }) {
  const typeColor = TYPE_COLORS[item.type] || { bg: '#F1F5F9', text: '#64748B' };
  return (
    <Link to={`/news/${item.id}`} style={{ textDecoration: 'none' }}>
    <div style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
      {showImage && item.image && (
        <img src={item.image.url} alt={item.title} style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', display: 'block' }} />
      )}
      <div style={{ padding: '16px' }}>
        {item.type && (
          <span style={{
            fontSize: '0.72rem', fontWeight: 700,
            background: typeColor.bg, color: typeColor.text,
            padding: '2px 10px', borderRadius: '999px', display: 'inline-block', marginBottom: '8px',
          }}>{item.type}</span>
        )}
        <p style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1a1a1a', margin: '0 0 6px', lineHeight: 1.4 }}>{item.title}</p>
        <p style={{ fontSize: '0.75rem', color: '#94A3B8', margin: 0 }}>
          {new Date(item.publishedAt).toLocaleDateString('ja-JP')}
        </p>
      </div>
    </div>
    </Link>
  );
}

function PCNewsList({ news, loading }) {
  return (
    <div style={{ minHeight: '100vh', background: '#f0f4f8' }}>
      <Header />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 40px 80px' }}>
        <h1 style={{ fontSize: '2.6rem', fontWeight: 900, color: '#0f0f0f', margin: '0 0 48px', letterSpacing: '-0.02em' }}>
          お知らせ
        </h1>
        {loading ? (
          <p style={{ color: '#94A3B8' }}>読み込み中...</p>
        ) : news.length === 0 ? (
          <div style={{
            width: '340px', aspectRatio: '4/3',
            background: 'linear-gradient(135deg, #e8edf5, #f4f6f9)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px',
            border: '2px dashed #d0d7e3', borderRadius: '4px',
          }}>
            <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#94A3B8', letterSpacing: '0.12em' }}>COMING SOON</span>
            <span style={{ fontSize: '0.8rem', color: '#b0bac8', fontWeight: 500 }}>お知らせは準備中です</span>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
            {news.map(item => <NewsCard key={item.id} item={item} />)}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

function MobileNewsList({ news, loading }) {
  return (
    <div style={{ minHeight: '100vh', background: '#f0f4f8' }}>
      <MobileHeader />
      <section style={{ padding: '32px 16px 48px' }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#0f0f0f', margin: '0 0 24px', letterSpacing: '-0.02em' }}>
          お知らせ
        </h1>
        {loading ? (
          <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>読み込み中...</p>
        ) : news.length === 0 ? (
          <div style={{
            width: '100%', aspectRatio: '4/3',
            background: 'linear-gradient(135deg, #e8edf5, #f4f6f9)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px',
            border: '2px dashed #d0d7e3', borderRadius: '4px',
          }}>
            <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#94A3B8', letterSpacing: '0.12em' }}>COMING SOON</span>
            <span style={{ fontSize: '0.8rem', color: '#b0bac8', fontWeight: 500 }}>お知らせは準備中です</span>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {news.map(item => <NewsCard key={item.id} item={item} />)}
          </div>
        )}
      </section>
      <MobileFooter />
    </div>
  );
}

export default function NewsList() {
  const isMobile = useIsMobile();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    getNewsList(50).then(res => {
      setNews(res.contents);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  return isMobile
    ? <MobileNewsList news={news} loading={loading} />
    : <PCNewsList news={news} loading={loading} />;
}
