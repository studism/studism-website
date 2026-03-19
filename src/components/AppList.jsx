import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import useIsMobile from '@/hooks/useIsMobile';
import MobileAppList from '@/components/mobile/MobileAppList';

const APPS = [
  {
    slug: 'studism',
    name: 'Studism',
    category: '教育テクノロジー',
    icon: '/images/studism/icon.png',
    lead: '学びを、もっと自由に、楽しく。',
    accent: '#0EA5E9',
    shadowColor: 'rgba(14,165,233,0.14)',
  },
  {
    slug: 'sakuraenglish',
    name: 'SakuraEnglish',
    category: '語学学習',
    icon: '/images/sakuraenglish/icon.png',
    lead: '英語学習を、もっと楽しく。',
    accent: '#2563EB',
    shadowColor: 'rgba(37,99,235,0.14)',
  },
  {
    slug: 'mamemame',
    name: '豆マメ',
    category: '近日公開',
    icon: '/images/mamemame/icon.png',
    lead: '',
    accent: '#1D4ED8',
    shadowColor: 'rgba(29,78,216,0.14)',
  },
  {
    slug: 'loopin',
    name: 'Loopin',
    category: '近日公開',
    icon: '/images/loopin/icon.png',
    lead: '',
    accent: '#1D4ED8',
    shadowColor: 'rgba(29,78,216,0.14)',
  },
  {
    slug: 'timelyze',
    name: 'Timelyze',
    category: '生産性・時間管理',
    icon: '/images/timelyze/icon.png',
    lead: '学習時間を、見える化する。',
    accent: '#2563EB',
    shadowColor: 'rgba(37,99,235,0.14)',
  },
];

function PCAppList() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#f0f4f8' }}>
      <Header />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 40px 80px' }}>
        <h1 style={{ fontSize: '2.6rem', fontWeight: 900, color: '#0f0f0f', margin: '0 0 48px', letterSpacing: '-0.02em' }}>
          アプリ一覧
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '32px' }}>
          {APPS.map(app => (
            <Link key={app.slug} to={`/app/${app.slug}`} style={{ textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.querySelector('.card').style.transform = 'translateY(-4px)'}
              onMouseLeave={e => e.currentTarget.querySelector('.card').style.transform = 'translateY(0)'}
            >
              <div className="card" style={{ transition: 'transform 0.2s ease' }}>
                <img
                  src={app.icon}
                  alt={app.name}
                  style={{
                    width: '100%',
                    borderRadius: '24px',
                    boxShadow: `0 2px 4px rgba(0,0,0,0.08), 0 8px 16px rgba(0,0,0,0.10), 0 20px 40px ${app.shadowColor}`,
                    display: 'block',
                  }}
                />
                <p style={{ fontSize: '1rem', fontWeight: 800, color: '#1a1a1a', margin: '12px 0 6px' }}>
                  {app.name}
                </p>
                {app.lead && (
                  <p style={{ fontSize: '0.82rem', color: '#555', margin: '0 0 8px', lineHeight: 1.5 }}>
                    {app.lead}
                  </p>
                )}
                <span style={{
                  fontSize: '0.72rem', fontWeight: 700, color: app.accent,
                  border: `1px solid ${app.accent}`, padding: '2px 10px', borderRadius: '999px',
                  display: 'inline-block',
                }}>
                  {app.category}
                </span>
              </div>
            </Link>
          ))}

          {/* Coming Soon */}
          <div>
            <div style={{
              width: '100%', aspectRatio: '1/1',
              borderRadius: '24px',
              background: 'linear-gradient(135deg, #e8edf5, #f4f6f9)',
              border: '2px dashed #d0d7e3',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px',
            }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#94A3B8', letterSpacing: '0.12em' }}>COMING SOON</span>
            </div>
            <p style={{ fontSize: '1rem', fontWeight: 800, color: '#94A3B8', margin: '12px 0 6px' }}>近日公開</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default function AppList() {
  const isMobile = useIsMobile();
  return isMobile ? <MobileAppList /> : <PCAppList />;
}
