import { useEffect } from 'react';
import { createPortal } from 'react-dom';

// お知らせ詳細をホーム画面の上にかぶせて表示するモーダル。
// PC版はデザイン全体に scale 変形がかかっており position:fixed の基準が
// 変形要素になってしまうため、createPortal で document.body 直下に描画する。
const TYPE_COLORS = {
  'お知らせ': { bg: '#EFF6FF', text: '#2563EB' },
  'アップデート': { bg: '#F0FDF4', text: '#16A34A' },
  'リリース': { bg: '#FFF7ED', text: '#EA580C' },
  '配信中': { bg: '#F0FDF4', text: '#16A34A' },
  '大幅アップデート': { bg: '#F5F3FF', text: '#7C3AED' },
};

export default function NoticeModal({ item, onClose }) {
  useEffect(() => {
    if (!item) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';   // 背面のホーム画面のスクロールを止める
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [item, onClose]);

  if (!item) return null;

  const isPoster = item._kind === 'poster';
  const tc = TYPE_COLORS[item.type] || { bg: '#F1F5F9', text: '#64748B' };
  const img = isPoster ? item.img : item.image?.url;
  const date = isPoster
    ? item.date
    : (item.publishedAt ? new Date(item.publishedAt).toLocaleDateString('ja-JP') : '');
  const body = isPoster ? item.body : item.content;

  return createPortal(
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      style={{
        position: 'fixed', inset: 0, zIndex: 10000,
        background: 'rgba(15,23,42,0.55)', backdropFilter: 'blur(2px)',
        display: 'flex', justifyContent: 'center', alignItems: 'flex-start',
        overflowY: 'auto', padding: '5vh 16px',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative', background: '#fff', borderRadius: '20px',
          width: '100%', maxWidth: '760px', margin: 'auto',
          boxShadow: '0 24px 70px rgba(0,0,0,0.35)', overflow: 'hidden',
        }}
      >
        {/* 閉じるボタン */}
        <button
          onClick={onClose}
          aria-label="閉じる"
          style={{
            position: 'absolute', top: '14px', right: '14px', zIndex: 2,
            width: '40px', height: '40px', borderRadius: '50%', border: 'none',
            background: 'rgba(17,29,59,0.6)', color: '#fff', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.5rem', lineHeight: 1,
          }}
        >×</button>

        {img && (
          <img src={img} alt={item.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
        )}

        <div style={{ padding: '32px 36px 40px' }}>
          {item.type && (
            <span style={{
              fontSize: '0.8rem', fontWeight: 700, background: tc.bg, color: tc.text,
              padding: '3px 12px', borderRadius: '999px', display: 'inline-block', marginBottom: '14px',
            }}>{item.type}</span>
          )}
          <h2 style={{ fontSize: '1.7rem', fontWeight: 900, color: '#0a0a0a', margin: '0 0 10px', lineHeight: 1.3, letterSpacing: '-0.02em' }}>
            {item.title}
          </h2>
          {date && <p style={{ fontSize: '0.85rem', color: '#94A3B8', margin: '0 0 24px' }}>{date}</p>}
          {body && (
            <div style={{ fontSize: '0.98rem', lineHeight: 1.8, color: '#333' }} dangerouslySetInnerHTML={{ __html: body }} />
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
