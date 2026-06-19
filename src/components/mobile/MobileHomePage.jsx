import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { NEWS_POSTERS } from '@/data/newsPosters';
import NoticeModal from '@/components/NoticeModal';
import { CITY_MASK } from '@/lib/cityMask';

const TYPE_COLORS = {
  'お知らせ': { bg: '#EFF6FF', text: '#2563EB' },
  'アップデート': { bg: '#F0FDF4', text: '#16A34A' },
  'リリース': { bg: '#FFF7ED', text: '#EA580C' },
  '配信中': { bg: '#F0FDF4', text: '#16A34A' },
  '大幅アップデート': { bg: '#F5F3FF', text: '#7C3AED' },
};

// 見出しの左に置く縦書きラベル（App / Service / News）。見出しは右へ寄せて表示。
function MHeadingLabel({ label, fontSize = '0.85rem', fontWeight = 800, left = '2px' }) {
  return (
    <span aria-hidden="true" style={{
      position: 'absolute', left, top: '50%', transform: 'translateY(-50%)',
      writingMode: 'vertical-rl', textOrientation: 'mixed',
      fontSize, fontWeight, letterSpacing: '0.12em', textTransform: 'uppercase',
      color: '#111d3b', opacity: 0.85, whiteSpace: 'nowrap', pointerEvents: 'none',
    }}>{label}</span>
  );
}

function MobileNewsCarousel() {
  const [idx, setIdx] = useState(1);
  const [animated, setAnimated] = useState(true);
  const [paused, setPaused] = useState(false);       // スワイプ中の一時停止
  const [userPaused, setUserPaused] = useState(false); // 一時停止ボタンによる手動停止
  const containerRef = useRef(null);
  const [cw, setCw] = useState(0);
  const touchStartX = useRef(0);
  const [openItem, setOpenItem] = useState(null); // 詳細モーダルで開いているお知らせ

  useEffect(() => {
    const update = () => { if (containerRef.current) setCw(containerRef.current.offsetWidth); };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const allItems = [
    ...NEWS_POSTERS.map(p => ({ ...p, _kind: 'poster' })),
    // microCMS のお知らせは内容が古いため非表示にしている。
    // 再度表示する場合は getNewsList の fetch と news state を復活させ、
    // ...news.map(n => ({ ...n, _kind: 'news' })) をここに追加する。
  ];
  const total = allItems.length;
  const extended = total > 0 ? [allItems[total - 1], ...allItems, allItems[0]] : [];

  const GAP = 24;
  const slideW = cw > 0 ? Math.round(cw * 0.75) - GAP : 0;
  const step   = slideW + GAP;
  const tx     = cw > 0 ? (cw - slideW) / 2 - idx * step : 0;

  const handleTransitionEnd = () => {
    if (idx === total + 1) { setAnimated(false); setIdx(1); }
    else if (idx === 0)    { setAnimated(false); setIdx(total); }
  };
  useEffect(() => {
    if (!animated) requestAnimationFrame(() => requestAnimationFrame(() => setAnimated(true)));
  }, [animated]);

  useEffect(() => {
    if (paused || userPaused || total === 0 || cw === 0) return;
    const id = setInterval(() => setIdx(i => i + 1), 4000);
    return () => clearInterval(id);
  }, [paused, userPaused, total, cw]);

  const realIdx = total > 0 ? ((idx - 1) % total + total) % total : 0;

  if (total === 0) return null;

  return (
    <section id="news" style={{ background: 'transparent', padding: '24px 0 72px', position: 'relative' }}>
      {/* 背後のネイビーのハーフトーン（都会の街並みシルエット）。黄色の上から覗く */}
      <div aria-hidden="true" style={{
        position: 'absolute', left: 0, right: 0, top: '-72px', aspectRatio: '1440 / 400', zIndex: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(#111d3b 1.2px, transparent 1.4px)', backgroundSize: '5px 5px',
        WebkitMaskImage: CITY_MASK,
        maskImage: CITY_MASK,
        WebkitMaskSize: '100% 100%', maskSize: '100% 100%', WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat',
      }} />
      {/* 黄色の波の背景。お知らせセクション上端から固定px（top:-50px）で配置 */}
      <div aria-hidden="true" style={{ position: 'absolute', left: 0, right: 0, top: '-50px', bottom: 0, zIndex: 0, display: 'flex', flexDirection: 'column', pointerEvents: 'none' }}>
        <svg viewBox="0 0 375 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '120px', display: 'block' }}>
          <path d="M0,46 Q15.625,22 31.25,46 Q46.875,70 62.5,46 Q78.125,22 93.75,46 Q109.375,70 125,46 Q140.625,22 156.25,46 Q171.875,70 187.5,46 Q203.125,22 218.75,46 Q234.375,70 250,46 Q265.625,22 281.25,46 Q296.875,70 312.5,46 Q328.125,22 343.75,46 Q359.375,70 375,46 L375,120 L0,120 Z" fill="#FFE066" />
          <circle cx="160" cy="14" r="6" fill="#FFE066" />
          <circle cx="300" cy="20" r="5" fill="#FFE066" />
          <circle cx="50" cy="22" r="4" fill="#FFE066" />
        </svg>
        <div style={{ flex: 1, background: '#FFE066' }} />
      </div>
      <button
        onClick={() => {
          const el = document.getElementById('news');
          if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY, behavior: 'smooth' });
        }}
        style={{ background: 'none', border: 'none', padding: '0 16px 0 50px', cursor: 'pointer', textAlign: 'left', display: 'block', marginBottom: '20px', position: 'relative', zIndex: 1 }}
      >
        <MHeadingLabel label="News" fontSize="1.05rem" fontWeight={900} left="18px" />
        <h2 style={{ fontSize: '2.5rem', fontWeight: 900, WebkitTextStroke: '0.4px #111d3b', color: '#111d3b', margin: 0, letterSpacing: '-0.02em' }}>
          お知らせ
        </h2>
      </button>

      <div
        ref={containerRef}
        style={{ overflow: 'hidden', padding: '14px 0 24px', position: 'relative', zIndex: 1 }}
        onTouchStart={e => { touchStartX.current = e.touches[0].clientX; setPaused(true); }}
        onTouchEnd={e => {
          const diff = touchStartX.current - e.changedTouches[0].clientX;
          if (Math.abs(diff) > 40) setIdx(i => i + (diff > 0 ? 1 : -1));
          setPaused(false);
        }}
      >
        {cw > 0 && (
          <div
            style={{
              display: 'flex',
              transform: `translateX(${tx}px)`,
              transition: animated ? 'transform 0.5s cubic-bezier(0.4,0,0.2,1)' : 'none',
              willChange: 'transform',
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extended.map((item, i) => {
              const isPoster = item._kind === 'poster';
              const c = TYPE_COLORS[item.type] || { bg: '#F1F5F9', text: '#64748B' };
              return (
                <div key={i} style={{ width: slideW, minWidth: slideW, flexShrink: 0, marginRight: GAP, display: 'flex' }}>
                  <div className="service-card" style={{ position: 'relative', flex: 1, display: 'flex' }}>
                    {/* 右下にずらした四角いシャドウ（カードと一緒に拡大） */}
                    <div aria-hidden="true" style={{ position: 'absolute', top: '12px', left: '12px', right: '-12px', bottom: '-16px', borderRadius: '16px', background: 'rgba(17, 29, 59, 0.14)', zIndex: 0 }} />
                    <div onClick={() => setOpenItem(item)} style={{ background: '#FBFBFD', borderRadius: '16px', boxShadow: '0 6px 24px rgba(0,0,0,0.10)', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column', flex: 1, cursor: 'pointer', position: 'relative', zIndex: 1 }}>
                    {isPoster
                      ? <img src={item.img} alt={item.title} style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', objectPosition: item.pos || 'top', display: 'block' }} />
                      : item.image && <img src={item.image.url} alt={item.title} style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', display: 'block' }} />
                    }
                    <div style={{ padding: '18px 20px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <span style={{ fontSize: '0.78rem', fontWeight: 700, background: c.bg, color: c.text, padding: '3px 12px', borderRadius: '999px', display: 'inline-block', marginBottom: '10px', alignSelf: 'flex-start' }}>{item.type}</span>
                      <p style={{ fontSize: '1.15rem', fontWeight: 700, color: '#1a1a1a', margin: '0 0 6px', lineHeight: 1.4 }}>{item.title}</p>
                      {isPoster && item.note && <p style={{ color: '#5b6470', fontSize: '0.88rem', fontWeight: 500, margin: '0 0 8px', lineHeight: 1.5 }}>{item.note}</p>}
                      {/* 下段：日付（左）＋虫眼鏡ボタン（右下） */}
                      <div style={{ marginTop: 'auto', paddingTop: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                        <p style={{ fontSize: '0.85rem', color: '#94A3B8', margin: 0 }}>
                          {isPoster ? item.date : new Date(item.publishedAt).toLocaleDateString('ja-JP')}
                        </p>
                        <span className="notice-zoom-wrap">
                          <button
                            onClick={(e) => { e.stopPropagation(); setOpenItem(item); }}
                            aria-label="詳細を見る"
                            className="notice-zoom-btn"
                            style={{ '--sz': '38px' }}
                          >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="10.5" cy="10.5" r="6.5" /><line x1="20" y1="20" x2="15.5" y2="15.5" />
                            </svg>
                          </button>
                          <span className="notice-zoom-label" aria-hidden="true">
                            <svg viewBox="0 0 110 55" style={{ width: '100%', height: '100%' }}>
                              <defs>
                                <path id={`nzpm-${i}`} d="M 11,55 A 44,44 0 1,1 99,55" />
                              </defs>
                              <text textAnchor="middle"><textPath href={`#nzpm-${i}`} startOffset="50%">詳しくみてみる</textPath></text>
                            </svg>
                          </span>
                        </span>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* スライドコントロール（左右矢印・ドット・一時停止） */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', marginTop: '24px', position: 'relative', zIndex: 1 }}>
        <button
          aria-label="前のお知らせ"
          onClick={() => { setIdx(i => i - 1); setPaused(false); }}
          className="carousel-nav"
          style={{ width: '44px', height: '44px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0, flexShrink: 0 }}
        >
          <svg className="arrow-ic arrow-ic-left" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
          </svg>
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {allItems.map((_, i) => (
              <button key={i} aria-label={`${i + 1}番目のお知らせ`} onClick={() => { setIdx(i + 1); setPaused(false); }} style={{
                width: '9px', height: '9px', borderRadius: '50%', cursor: 'pointer', padding: 0,
                border: i === realIdx ? 'none' : '1.5px solid #c4c8d2',
                background: i === realIdx ? '#111d3b' : 'transparent',
                transition: 'all 0.3s ease',
              }} />
            ))}
          </div>
          <button
            aria-label={userPaused ? '自動再生を開始' : '自動再生を停止'}
            onClick={() => setUserPaused(p => !p)}
            className="carousel-play"
            style={{ width: '34px', height: '34px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0, flexShrink: 0 }}
          >
            {userPaused
              ? <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><polygon points="7 4 19 12 7 20" /></svg>
              : <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg>
            }
          </button>
        </div>

        <button
          aria-label="次のお知らせ"
          onClick={() => { setIdx(i => i + 1); setPaused(false); }}
          className="carousel-nav"
          style={{ width: '44px', height: '44px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0, flexShrink: 0 }}
        >
          <svg className="arrow-ic arrow-ic-right" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>

      {/* 詳細はホーム画面の上にモーダルで重ねて表示 */}
      <NoticeModal item={openItem} onClose={() => setOpenItem(null)} />
    </section>
  );
}



/* ════════════════════════════
   アプリデータ
════════════════════════════ */
const APPS = [
  {
    slug: 'studism',
    name: 'Studism',
    category: '教育テクノロジー',
    icon: '/images/studism/icon.png',
    lead: '学びを、もっと自由に、楽しく。',
    accent: '#0EA5E9',
    accentLight: '#E0F2FE',
    shadowColor: 'rgba(14,165,233,0.14)',
    comingSoon: false,
  },
  {
    slug: 'sakuraenglish',
    name: 'SakuraEnglish',
    category: '語学学習',
    icon: '/images/sakuraenglish/icon.png',
    lead: '英語学習を、もっと楽しく。',
    accent: '#2563EB',
    accentLight: '#DBEAFE',
    shadowColor: 'rgba(37,99,235,0.14)',
    comingSoon: false,
  },
  {
    slug: 'mamemame',
    name: '豆マメ',
    category: '近日公開',
    icon: '/images/mamemame/icon.png',
    lead: '古文学習を、もっと楽しく。',
    accent: '#1D4ED8',
    accentLight: '#DBEAFE',
    shadowColor: 'rgba(29,78,216,0.14)',
    comingSoon: false,
  },
  {
    slug: 'loopin',
    name: 'Loopin',
    category: '近日公開',
    icon: '/images/loopin/icon.png',
    lead: '毎日の習慣を、ループさせよう。',
    accent: '#1D4ED8',
    accentLight: '#DBEAFE',
    shadowColor: 'rgba(29,78,216,0.14)',
    comingSoon: false,
  },
  {
    slug: 'timelyze',
    name: 'Timelyze',
    category: '生産性・時間管理',
    icon: '/images/timelyze/icon.png',
    lead: '学習時間を、見える化する。',
    accent: '#2563EB',
    accentLight: '#DBEAFE',
    shadowColor: 'rgba(37,99,235,0.14)',
    comingSoon: false,
  },
];

/* ════════════════════════════
   サービスデータ
════════════════════════════ */
const SERVICES = [
  {
    title: 'YouTube',
    description: '英単語の動画を投稿しています。毎日の学習に役立つ単語や表現をわかりやすく解説。チャンネル登録してぜひご活用ください。',
    link: 'https://www.youtube.com/channel/UCkoYxm2fTNza2qrjrgrbFgw',
    renderThumb: () => (
      <div style={{ width: '100%', height: '100%', position: 'relative', background: 'linear-gradient(145deg, #FF0000 0%, #8B0000 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px', borderRadius: '50%', border: '40px solid rgba(255,255,255,0.06)' }} />
        <div style={{ position: 'absolute', bottom: '-60px', left: '-30px', width: '220px', height: '220px', borderRadius: '50%', border: '40px solid rgba(255,255,255,0.04)' }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ background: 'white', borderRadius: '18px', width: '110px', height: '78px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 12px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)' }}>
            <svg width="52" height="36" viewBox="0 0 90 63"><polygon points="36,12 36,51 65,32" fill="#FF0000" /></svg>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.72rem', fontWeight: 700, textAlign: 'center', marginTop: '12px', letterSpacing: '0.1em' }}>YOUTUBE</p>
        </div>
      </div>
    ),
  },
  {
    title: 'TikTok',
    description: '英単語の動画を投稿しています。短い動画でサクッと学べるので、スキマ時間の学習にぴったりです。フォローお待ちしています。',
    link: 'https://www.tiktok.com/@user9530011262997',
    renderThumb: () => (
      <div style={{ width: '100%', height: '100%', position: 'relative', background: '#010101', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '10%', right: '10%', width: '160px', height: '160px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(105,201,208,0.18) 0%, transparent 70%)' }} />
        <div style={{ position: 'absolute', bottom: '5%', left: '5%', width: '140px', height: '140px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(238,29,82,0.18) 0%, transparent 70%)' }} />
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
          <div style={{ position: 'relative', width: '60px', height: '68px' }}>
            <svg viewBox="0 0 60 70" width="60" height="68" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.7 }}>
              <path d="M42,0 C43,10 50,17 60,18 L60,30 C54,30 48,28 44,24 L44,46 C44,58 34,68 22,68 C10,68 0,58 0,46 C0,34 10,24 22,24 C24,24 26,24 28,25 L28,37 C26,36 24,36 22,36 C16,36 12,40 12,46 C12,52 16,56 22,56 C28,56 32,52 32,46 L32,0 Z" fill="#69C9D0" />
            </svg>
            <svg viewBox="0 0 60 70" width="60" height="68" style={{ position: 'absolute', top: '3px', left: '3px', opacity: 0.7 }}>
              <path d="M42,0 C43,10 50,17 60,18 L60,30 C54,30 48,28 44,24 L44,46 C44,58 34,68 22,68 C10,68 0,58 0,46 C0,34 10,24 22,24 C24,24 26,24 28,25 L28,37 C26,36 24,36 22,36 C16,36 12,40 12,46 C12,52 16,56 22,56 C28,56 32,52 32,46 L32,0 Z" fill="#EE1D52" />
            </svg>
            <svg viewBox="0 0 60 70" width="60" height="68" style={{ position: 'absolute', top: '1.5px', left: '1.5px' }}>
              <path d="M42,0 C43,10 50,17 60,18 L60,30 C54,30 48,28 44,24 L44,46 C44,58 34,68 22,68 C10,68 0,58 0,46 C0,34 10,24 22,24 C24,24 26,24 28,25 L28,37 C26,36 24,36 22,36 C16,36 12,40 12,46 C12,52 16,56 22,56 C28,56 32,52 32,46 L32,0 Z" fill="white" />
            </svg>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', margin: 0 }}>TIKTOK</p>
        </div>
      </div>
    ),
  },
];

/* ════════════════════════════
   MobileHomePage
════════════════════════════ */
export default function MobileHomePage() {
  const [appActive, setAppActive] = useState(0);
  const [appPlaying, setAppPlaying] = useState(true);

  useEffect(() => {
    if (!appPlaying) return;
    const id = setTimeout(() => setAppActive(a => (a + 1) % APPS.length), 3500);
    return () => clearTimeout(id);
  }, [appPlaying, appActive]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ヒーローをスクロール分だけピン留め（次パネルが上を覆って滑り込む）
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const heroVis = Math.max(1, window.innerHeight - 68); // ヘッダー分
        const lagVis = Math.min(window.scrollY, heroVis) * 0.5;
        const p = Math.min(1, Math.max(0, window.scrollY / heroVis));
        const st = document.documentElement.style;
        st.setProperty('--hero-pin', lagVis + 'px');
        st.setProperty('--header-shift', lagVis + 'px');
        st.setProperty('--fold', String(p));
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.documentElement.style.setProperty('--header-shift', '0px');
      document.documentElement.style.setProperty('--hero-pin', '0px');
      document.documentElement.style.setProperty('--fold', '0');
    };
  }, []);

  return (
    <div style={{ background: '#f0f4f8' }}>

      {/* ヒーローセクション */}
      <section className="hero-fold" style={{
        position: 'relative', width: '100%', overflow: 'hidden',
        minHeight: 'calc(100dvh - 68px)', boxSizing: 'border-box',
        background: '#ffffff',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: '40px 24px 32px',
      }}>
        {/* カラフルなスプラッター */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
          {/* 左エリア */}
          <div style={{ position: 'absolute', top: '6%',  left: '3%',  width: 42, height: 56, background: '#FF3D8B', borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%', transform: 'rotate(20deg)',  opacity: 0.8 }} />
          <div style={{ position: 'absolute', top: '14%', left: '3%',  width: 10, height: 10, background: '#FF3D8B', borderRadius: '50%', opacity: 0.65 }} />
          <div style={{ position: 'absolute', top: '10%', left: '8%',  width: 7,  height: 7,  background: '#FF3D8B', borderRadius: '50%', opacity: 0.55 }} />
          <div style={{ position: 'absolute', top: '55%', left: '4%',  width: 46, height: 36, background: '#FFD600', borderRadius: '40% 60% 30% 70% / 60% 40% 55% 45%', transform: 'rotate(-18deg)', opacity: 0.85 }} />
          <div style={{ position: 'absolute', top: '62%', left: '12%', width: 8,  height: 8,  background: '#FFD600', borderRadius: '50%', opacity: 0.65 }} />
          <div style={{ position: 'absolute', bottom: '8%', left: '6%', width: 38, height: 50, background: '#06B6D4', borderRadius: '50% 50% 40% 60% / 60% 30% 70% 40%', transform: 'rotate(12deg)',  opacity: 0.8 }} />
          <div style={{ position: 'absolute', bottom: '5%', left: '14%', width: 9, height: 9, background: '#06B6D4', borderRadius: '50%', opacity: 0.6 }} />
          <div style={{ position: 'absolute', top: '35%', left: '2%',  width: 28, height: 36, background: '#A855F7', borderRadius: '70% 30% 50% 50% / 40% 60% 40% 60%', transform: 'rotate(-30deg)', opacity: 0.75 }} />
          <div style={{ position: 'absolute', top: '40%', left: '10%', width: 7,  height: 7,  background: '#A855F7', borderRadius: '50%', opacity: 0.6 }} />
          {/* 中央エリア */}
          <div style={{ position: 'absolute', top: '5%',  left: '30%', width: 18, height: 14, background: '#06B6D4', borderRadius: '55% 45% 40% 60%', transform: 'rotate(-20deg)', opacity: 0.75 }} />
          <div style={{ position: 'absolute', top: '3%',  left: '44%', width: 44, height: 34, background: '#FF6B00', borderRadius: '50% 50% 40% 60% / 60% 30% 70% 40%', transform: 'rotate(8deg)',   opacity: 0.8 }} />
          <div style={{ position: 'absolute', top: '8%',  left: '50%', width: 9,  height: 9,  background: '#FF6B00', borderRadius: '50%', opacity: 0.65 }} />
          <div style={{ position: 'absolute', bottom: '5%', left: '38%', width: 40, height: 52, background: '#22C55E', borderRadius: '70% 30% 50% 50% / 40% 60% 40% 60%', transform: 'rotate(28deg)',  opacity: 0.8 }} />
          <div style={{ position: 'absolute', bottom: '8%', left: '46%', width: 10, height: 10, background: '#22C55E', borderRadius: '50%', opacity: 0.65 }} />
          <div style={{ position: 'absolute', top: '45%', left: '45%', width: 30, height: 22, background: '#FF3D8B', borderRadius: '40% 60% 50% 50%', transform: 'rotate(40deg)',  opacity: 0.7 }} />
          {/* 右エリア */}
          <div style={{ position: 'absolute', top: '8%',  left: '52%', width: 38, height: 52, background: '#FF3D8B', borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%', transform: 'rotate(20deg)',  opacity: 0.8 }} />
          <div style={{ position: 'absolute', top: '12%', left: '60%', width: 12, height: 12, background: '#FF3D8B', borderRadius: '50%', opacity: 0.65 }} />
          <div style={{ position: 'absolute', top: '18%', right: '6%', width: 52, height: 44, background: '#FFD600', borderRadius: '40% 60% 30% 70% / 60% 40% 55% 45%', transform: 'rotate(-15deg)', opacity: 0.85 }} />
          <div style={{ position: 'absolute', top: '15%', right: '14%', width: 8, height: 8,  background: '#FFD600', borderRadius: '50%', opacity: 0.65 }} />
          <div style={{ position: 'absolute', bottom: '22%', left: '55%', width: 44, height: 58, background: '#22C55E', borderRadius: '70% 30% 50% 50% / 40% 60% 40% 60%', transform: 'rotate(35deg)',  opacity: 0.8 }} />
          <div style={{ position: 'absolute', bottom: '18%', left: '64%', width: 8, height: 8,  background: '#22C55E', borderRadius: '50%', opacity: 0.6 }} />
          <div style={{ position: 'absolute', top: '55%', right: '12%', width: 48, height: 36, background: '#A855F7', borderRadius: '30% 70% 60% 40% / 55% 45% 60% 40%', transform: 'rotate(-30deg)', opacity: 0.85 }} />
          <div style={{ position: 'absolute', top: '62%', right: '18%', width: 7,  height: 7,  background: '#A855F7', borderRadius: '50%', opacity: 0.65 }} />
          <div style={{ position: 'absolute', bottom: '10%', right: '8%', width: 56, height: 42, background: '#FF6B00', borderRadius: '50% 50% 40% 60% / 60% 30% 70% 40%', transform: 'rotate(10deg)',  opacity: 0.8 }} />
          <div style={{ position: 'absolute', bottom: '14%', right: '4%', width: 10, height: 10, background: '#FF6B00', borderRadius: '50%', opacity: 0.65 }} />
          <div style={{ position: 'absolute', top: '30%', left: '58%', width: 32, height: 40, background: '#06B6D4', borderRadius: '40% 60% 55% 45% / 65% 35% 55% 45%', transform: 'rotate(-25deg)', opacity: 0.8 }} />
          <div style={{ position: 'absolute', top: '38%', left: '66%', width: 8,  height: 8,  background: '#06B6D4', borderRadius: '50%', opacity: 0.6 }} />
        </div>

        {/* 画像（上部中央に配置） */}
        <div style={{ position: 'absolute', zIndex: 2, top: '-3%', left: '50%', transform: 'translateX(-50%)', width: '46%', maxWidth: '185px' }}>
          <img src="/images/polipoli3.png" alt="ポリポリ" className="hero-float" style={{ width: '100%', display: 'block' }} />
        </div>

        {/* テキスト */}
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'left', paddingLeft: '13%', marginTop: '80px' }}>
          <h1 style={{
            color: '#111d3b',
            fontSize: 'clamp(2.4rem, 10vw, 3.5rem)',
            fontWeight: 900,
            letterSpacing: '0.08em',
            lineHeight: 1.35,
            margin: 0,
          }}>
            <span className="hero-text-line hero-text-line-1" style={{ display: 'block' }}><span style={{ fontSize: '1.1em' }}>学び</span><span style={{ fontSize: '0.9em' }}>を</span></span>
            <span className="hero-text-line hero-text-line-2" style={{ display: 'block', marginTop: '-0.2em' }}>もっと<span style={{ fontSize: '1.1em' }}>自由に、</span></span>
            <span className="hero-text-line hero-text-line-3" style={{ display: 'block', whiteSpace: 'nowrap' }}>もっ<span style={{ letterSpacing: '0.15em' }}>と</span><span style={{ fontSize: '1.1em' }}><span style={{ letterSpacing: '0.2em' }}>楽しく</span>。</span></span>
          </h1>
        </div>

      </section>

      {/* 次セクションがせり上がってヒーローに重なるパネル */}
      <div style={{ position: 'relative', zIndex: 2, background: '#f0f4f8', borderRadius: '28px 28px 0 0', marginTop: '-32px' }}>
        {/* パネル上端中央の丸いスクロール矢印 */}
        <button
          className="scroll-arrow"
          aria-label="次のセクションへ"
          onClick={() => {
            const el = document.getElementById('apps');
            if (el) {
              const y = el.getBoundingClientRect().top + window.scrollY - 76;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }}
          style={{
            position: 'absolute', left: '50%', top: 0, marginLeft: '-24px', marginTop: '-24px', zIndex: 25,
            width: '48px', height: '48px', borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.22)',
            backdropFilter: 'blur(8px) saturate(160%)', WebkitBackdropFilter: 'blur(8px) saturate(160%)',
            border: '1.5px solid #111d3b',
            boxShadow: 'none',
            color: '#111d3b',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer',
          }}>
          <svg className="arrow-ic arrow-ic-down" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>

      {/* アプリ一覧セクション */}
      <section id="apps" style={{ background: '#EAF3FF', padding: '40px 16px 24px', position: 'relative', overflow: 'hidden', isolation: 'isolate' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: -1, pointerEvents: 'none', opacity: 0.7 }}>
          {/* 背面のドット格子（同系色・ずらす方向ランダム） */}
          {/* 黄円：右上へ */}
          <div style={{ position: 'absolute', top: 'calc(4% - 12px)', left: 'calc(6% + 12px)', width: '60px', height: '60px', borderRadius: '50%', backgroundImage: 'radial-gradient(#E0A800 24%, transparent 26%)', backgroundSize: '9px 9px' }} />
          {/* シアン三角：左上へ */}
          <div style={{ position: 'absolute', bottom: 'calc(20% + 12px)', left: 'calc(8% - 12px)', width: '56px', height: '48px', clipPath: 'polygon(50% 0, 0 100%, 100% 100%)', backgroundImage: 'radial-gradient(#0E7490 24%, transparent 26%)', backgroundSize: '9px 9px', transform: 'rotate(-12deg)' }} />
          {/* ベタ塗り図形 */}
          <div style={{ position: 'absolute', top: '4%', left: '6%', width: '60px', height: '60px', borderRadius: '50%', background: '#FFD600' }} />
          <div style={{ position: 'absolute', top: '14%', right: '8%', width: '48px', height: '48px', borderRadius: '12px', background: '#FF3D8B', transform: 'rotate(18deg)' }} />
          <div style={{ position: 'absolute', bottom: '20%', left: '8%', width: 0, height: 0, borderLeft: '28px solid transparent', borderRight: '28px solid transparent', borderBottom: '48px solid #06B6D4', transform: 'rotate(-12deg)' }} />
          <div style={{ position: 'absolute', bottom: '8%', right: '10%', width: '44px', height: '44px', borderRadius: '50%', background: '#A855F7' }} />
          {/* 前面のドット格子（同系色・ずらす方向ランダム） */}
          {/* ピンク四角：左下へ */}
          <div style={{ position: 'absolute', top: 'calc(14% + 12px)', right: 'calc(8% + 12px)', width: '48px', height: '48px', borderRadius: '12px', backgroundImage: 'radial-gradient(#C9166A 24%, transparent 26%)', backgroundSize: '9px 9px', transform: 'rotate(18deg)' }} />
          {/* 紫円：左上へ */}
          <div style={{ position: 'absolute', bottom: 'calc(8% + 12px)', right: 'calc(10% + 12px)', width: '44px', height: '44px', borderRadius: '50%', backgroundImage: 'radial-gradient(#7C3AED 24%, transparent 26%)', backgroundSize: '9px 9px' }} />
        </div>
        <div style={{ position: 'relative', paddingLeft: '34px' }}>
          <MHeadingLabel label="App" fontSize="1.4rem" fontWeight={900} />
          <Link to="/apps" style={{ textDecoration: 'none' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, WebkitTextStroke: '0.4px #111d3b', color: '#111d3b', margin: '0 0 24px', letterSpacing: '-0.02em' }}>
              アプリケーションはこちら。
            </h2>
          </Link>
        </div>
        {/* 自動回転カルーセル */}
        <div style={{ position: 'relative', height: '420px', overflow: 'hidden' }}>
          {APPS.map((app, i) => {
            const n = APPS.length;
            let d = i - appActive;
            if (d > n / 2) d -= n;
            if (d < -n / 2) d += n;
            const isCenter = d === 0;
            const visible = Math.abs(d) <= 1;
            const SPACING = 200;
            return (
              <div key={app.slug} style={{
                position: 'absolute', top: '8px', left: '50%', width: '190px', marginLeft: '-95px',
                transform: `translateX(${d * SPACING}px) translateY(${isCenter ? 0 : 36}px) scale(${isCenter ? 1 : 0.55})`,
                transformOrigin: 'top center',
                opacity: visible ? (isCenter ? 1 : 0.35) : 0,
                transition: 'transform 0.8s ease, opacity 0.8s ease',
                zIndex: isCenter ? 3 : 1, pointerEvents: isCenter ? 'auto' : 'none',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
              }}>
                <p style={{ fontSize: '1.05rem', fontWeight: 600, color: '#444', lineHeight: 1.6, minHeight: '1.7em', margin: '0 0 14px', textAlign: 'center', width: '90vw', maxWidth: '360px', whiteSpace: 'nowrap', textOverflow: 'ellipsis', opacity: isCenter ? 1 : 0, transition: 'opacity 0.5s ease' }}>{app.lead.split('\n')[0]}</p>
                <Link to={`/app/${app.slug}`} style={{ textDecoration: 'none' }}>
                  <img src={app.icon} alt={app.name} style={{ width: '190px', height: '190px', borderRadius: '42px', boxShadow: `0 2px 4px rgba(0,0,0,0.08), 0 8px 16px rgba(0,0,0,0.10), 0 20px 40px ${app.shadowColor}`, display: 'block' }} />
                </Link>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginTop: '16px', opacity: isCenter ? 1 : 0, transition: 'opacity 0.5s ease' }}>
                  <p style={{ margin: '0 0 6px', color: '#1a1a1a', fontSize: '1.15rem', fontWeight: 800, textAlign: 'center' }}>{app.name}</p>
                  <Link to={`/app/${app.slug}`} className="bubble-btn" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '16px', padding: '12px 26px', borderRadius: '999px', border: '2.5px solid #111d3b', background: 'transparent', color: '#111d3b', fontSize: '1rem', fontWeight: 700, boxShadow: '3px 5px 0 rgba(17,29,59,0.18)' }}>
                    さらに詳しく
                    <svg className="arrow-ic arrow-ic-right" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        {/* 操作バー */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginTop: '4px' }}>
          <button onClick={() => setAppActive(a => (a - 1 + APPS.length) % APPS.length)} aria-label="前へ" className="carousel-nav" style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <svg className="arrow-ic arrow-ic-left" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 5l-7 7 7 7" /></svg>
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {APPS.map((_, i) => (
              <button key={i} onClick={() => setAppActive(i)} aria-label={`${i + 1}番目`} style={{ width: '9px', height: '9px', borderRadius: '50%', padding: 0, border: 'none', cursor: 'pointer', background: i === appActive ? '#111d3b' : '#fff', boxShadow: i === appActive ? 'none' : 'inset 0 0 0 1.5px #c4cad6' }} />
            ))}
            <button onClick={() => setAppPlaying(p => !p)} aria-label={appPlaying ? '一時停止' : '再生'} className="carousel-play" style={{ width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', marginLeft: '4px' }}>
              {appPlaying ? (<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg>) : (<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>)}
            </button>
          </div>
          <button onClick={() => setAppActive(a => (a + 1) % APPS.length)} aria-label="次へ" className="carousel-nav" style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <svg className="arrow-ic arrow-ic-right" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </button>
        </div>
      </section>

      {/* アプリ帯とサービス帯の間の余白（薄青） */}
      <div style={{ height: '40px', background: '#EAF3FF' }} />
      {/* サービス＆お知らせを横断する共通の背景（グリッド）。黄色の波・街並みはお知らせ側に配置 */}
      <div style={{
        backgroundColor: '#ffffff',
        backgroundImage: 'repeating-linear-gradient(90deg, rgba(37,99,235,0.32) 0 2.5px, transparent 2.5px 40px), repeating-linear-gradient(0deg, rgba(255,61,139,0.32) 0 2.5px, transparent 2.5px 40px)',
        backgroundSize: '40px 40px, 40px 40px',
        backgroundRepeat: 'repeat, repeat',
      }}>
      {/* サービス一覧セクション */}
      <section id="services" style={{ background: 'transparent', padding: '24px 16px 56px', position: 'relative', zIndex: 1 }}>
        <div style={{ position: 'relative', paddingLeft: '34px' }}>
          <MHeadingLabel label="Service" fontSize="0.9rem" fontWeight={800} />
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, WebkitTextStroke: '0.4px #111d3b', color: '#111d3b', margin: '0 0 24px', letterSpacing: '-0.02em' }}>
            サービス
          </h2>
        </div>
        {SERVICES.map((s, i) => (
          <div key={i} className="service-card" style={{ position: 'relative', width: '88%', margin: '0 auto 24px' }}>
            {/* 右下にずらした四角いシャドウ（カードと一緒に拡大） */}
            <div aria-hidden="true" style={{ position: 'absolute', top: '12px', left: '12px', right: '-12px', bottom: '-16px', borderRadius: '8px', background: 'rgba(17, 29, 59, 0.14)' }} />
            <div
              onClick={() => s.link && window.open(s.link, '_blank')}
              style={{
                borderRadius: '8px', overflow: 'hidden',
                cursor: 'pointer',
                background: '#ffffff',
                boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                position: 'relative',
              }}
            >
              <div style={{ aspectRatio: '16/9', position: 'relative', overflow: 'hidden' }}>
                {s.renderThumb()}
              </div>
              <div style={{ padding: '12px 16px 16px' }}>
                <p style={{ fontSize: '0.92rem', fontWeight: 700, color: '#1a1a1a', margin: '0 0 6px' }}>
                  {s.title}
                </p>
                <p style={{ fontSize: '0.85rem', fontWeight: 500, color: '#555', lineHeight: 1.55, margin: 0 }}>
                  {s.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* お知らせセクション */}
      <MobileNewsCarousel />
      </div>
      </div>

    </div>
  );
}
