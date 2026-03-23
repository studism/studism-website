import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MobileHeader from '@/components/mobile/MobileHeader';
import MobileFooter from '@/components/mobile/MobileFooter';
import Breadcrumb from '@/components/Breadcrumb';

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

export default function MobileAppList() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#f0f4f8' }}>
      <MobileHeader />

      <section style={{ padding: '32px 16px 48px' }}>
        <Breadcrumb items={[{ label: 'ホーム', to: '/' }, { label: 'アプリ一覧' }]} />
        <h1 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#0f0f0f', margin: '0 0 24px', letterSpacing: '-0.02em' }}>
          アプリ一覧
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          {APPS.map(app => (
            <Link key={app.slug} to={`/app/${app.slug}`} style={{ textDecoration: 'none' }}>
              <div>
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
                <p style={{ fontSize: '0.9rem', fontWeight: 800, color: '#1a1a1a', margin: '8px 0 4px' }}>
                  {app.name}
                </p>
                <span style={{
                  fontSize: '0.68rem', fontWeight: 700, color: app.accent,
                  border: `1px solid ${app.accent}`, padding: '2px 8px', borderRadius: '999px', whiteSpace: 'nowrap',
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
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ fontSize: '0.62rem', fontWeight: 800, color: '#94A3B8', letterSpacing: '0.12em' }}>COMING SOON</span>
            </div>
            <p style={{ fontSize: '0.9rem', fontWeight: 800, color: '#94A3B8', margin: '8px 0 4px' }}>近日公開</p>
          </div>
        </div>
      </section>

      <MobileFooter />
    </div>
  );
}
