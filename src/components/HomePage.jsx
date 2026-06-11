import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import useIsMobile from '@/hooks/useIsMobile';
import MobileHomePage from '@/components/mobile/MobileHomePage';
import MobileFooter from '@/components/mobile/MobileFooter';
import { getNewsList } from '@/lib/microcms';
import { NEWS_POSTERS } from '@/data/newsPosters';
import NoticeModal from '@/components/NoticeModal';

/* ════════════════════════════
   スライドデータ
════════════════════════════ */
const HERO = {
  heading: '学びをもっと\n自由に、もっと\n楽しく。',
};

/* ════════════════════════════
   Hero
════════════════════════════ */
function HeroSection() {
  return (
    <section className="hero-fold" style={{
      position: 'relative', width: '100%', height: 'var(--hero-h, 560px)', overflow: 'hidden',
      background: '#ffffff',
      boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
      display: 'flex', alignItems: 'center',
    }}>
      {/* 絵の具スプラッター（全体） */}
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
        {/* オーバーレイなし */}
      </div>

      {/* 左半分：画像（浮遊アニメーション） */}
      <div style={{ position: 'relative', width: '42%', height: '100%', flexShrink: 0, zIndex: 2 }}>
        <img src="/images/polipoli3.png" alt="ポリポリ"
          className="hero-float"
          style={{ position: 'absolute', bottom: '-33%', left: '6%',
            height: '160%', width: 'auto', zIndex: 2, objectFit: 'contain' }} />
      </div>

      {/* 右半分：テキスト（右からスライドイン） */}
      <div style={{ flex: 1, paddingRight: '5%', marginLeft: '5%', transform: 'translateY(-28px)', zIndex: 10, overflow: 'hidden' }}>
        <h1 className="hero-h1" style={{
          color: '#111d3b', fontSize: 'var(--hero-font, 6.3rem)',
          fontWeight: 900, letterSpacing: '0.08em', lineHeight: 1.35, margin: 0, whiteSpace: 'nowrap',
        }}>
          <span className="hero-text-line hero-text-line-1" style={{ display: 'block' }}><span style={{ fontSize: '1.1em' }}>学び</span><span style={{ fontSize: '0.9em' }}>を</span></span>
          <span className="hero-text-line hero-text-line-2" style={{ display: 'block', marginTop: '-0.2em' }}>もっと<span style={{ fontSize: '1.1em' }}>自由に、</span></span>
          <span className="hero-text-line hero-text-line-3" style={{ display: 'block', whiteSpace: 'nowrap' }}>もっ<span style={{ letterSpacing: '0.15em' }}>と</span><span style={{ fontSize: '1.1em' }}><span style={{ letterSpacing: '0.2em' }}>楽しく</span>。</span></span>
        </h1>
      </div>
    </section>
  );
}

/* ════════════════════════════
   サービス紹介
════════════════════════════ */
const APPS = [
  {
    slug: 'studism',
    name: 'Studism',
    category: '教育テクノロジー',
    icon: '/images/studism/icon.png',
    lead: '学びを、もっと自由に、楽しく。\n勉強をSNSでシェアして仲間と一緒に高め合える学習コミュニティアプリ。',
    description: 'Studismは、テクノロジーの力で学習体験を変える教育テクノロジー企業のフラッグシップアプリです。',
    photoBg: 'linear-gradient(135deg, #0C4A6E 0%, #0EA5E9 55%, #BAE6FD 100%)',
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
    lead: '英語学習を、もっと楽しく。\nレベル別英単語クイズで語彙力をしっかり伸ばせる英語学習アプリ。',
    description: 'レベル別英単語クイズで効率的に語彙力を強化。5段階の難易度とカスタム単語リスト機能で、自分だけの学習プランを作成できます。',
    photoBg: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 55%, #93C5FD 100%)',
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
    lead: '古文学習を、もっと楽しく。\n古文単語の暗記に特化したフラッシュカードアプリ。',
    description: '',
    photoBg: 'linear-gradient(135deg, #1E3A8A 0%, #1D4ED8 55%, #BFDBFE 100%)',
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
    lead: '毎日の習慣を、ループさせよう。\n継続したい習慣やルーティンをかんたんに管理できるアプリ。',
    description: '',
    photoBg: 'linear-gradient(135deg, #172554 0%, #1D4ED8 55%, #BFDBFE 100%)',
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
    lead: '学習時間を、見える化する。\nタイマーで記録した勉強時間をグラフで可視化する学習管理アプリ。',
    description: '学習時間の記録・管理を簡単に。タイマー機能、教科別集計、グラフ可視化で、継続的な学習習慣をサポートします。',
    photoBg: 'linear-gradient(135deg, #1D4ED8 0%, #3B82F6 55%, #BAE6FD 100%)',
    accent: '#2563EB',
    accentLight: '#DBEAFE',
    shadowColor: 'rgba(37,99,235,0.14)',
    comingSoon: false,
  },
];

/* ポップな幾何学背景（アプリ／お知らせセクション共通）。
   親に position:relative・overflow:hidden・isolation:isolate を付与して使う。 */
function PopGeoBackground() {
  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: -1, pointerEvents: 'none', opacity: 0.7 }}>
      {/* 背面のドット格子（同系色・ずらす方向ランダム） */}
      {/* 黄円：右上へ */}
      <div style={{ position: 'absolute', top: 'calc(10% - 16px)', left: 'calc(6% + 18px)', width: '90px', height: '90px', borderRadius: '50%', backgroundImage: 'radial-gradient(#E0A800 24%, transparent 26%)', backgroundSize: '11px 11px' }} />
      {/* シアン三角：左上へ */}
      <div style={{ position: 'absolute', bottom: 'calc(16% + 18px)', left: 'calc(11% - 16px)', width: '92px', height: '80px', clipPath: 'polygon(50% 0, 0 100%, 100% 100%)', backgroundImage: 'radial-gradient(#0E7490 24%, transparent 26%)', backgroundSize: '11px 11px', transform: 'rotate(-12deg)' }} />
      {/* 緑四角：右下へ */}
      <div style={{ position: 'absolute', top: 'calc(44% + 16px)', left: 'calc(2% + 18px)', width: '54px', height: '54px', borderRadius: '14px', backgroundImage: 'radial-gradient(#15803D 24%, transparent 26%)', backgroundSize: '10px 10px', transform: 'rotate(28deg)' }} />
      {/* ベタ塗り図形 */}
      <div style={{ position: 'absolute', top: '10%', left: '6%', width: '90px', height: '90px', borderRadius: '50%', background: '#FFD600' }} />
      <div style={{ position: 'absolute', top: '22%', right: '8%', width: '72px', height: '72px', borderRadius: '18px', background: '#FF3D8B', transform: 'rotate(18deg)' }} />
      <div style={{ position: 'absolute', bottom: '16%', left: '11%', width: 0, height: 0, borderLeft: '46px solid transparent', borderRight: '46px solid transparent', borderBottom: '80px solid #06B6D4', transform: 'rotate(-12deg)' }} />
      <div style={{ position: 'absolute', bottom: '12%', right: '13%', width: '64px', height: '64px', borderRadius: '50%', background: '#A855F7' }} />
      <div style={{ position: 'absolute', top: '44%', left: '2%', width: '54px', height: '54px', borderRadius: '14px', background: '#22C55E', transform: 'rotate(28deg)' }} />
      <div style={{ position: 'absolute', top: '12%', left: '45%', width: 0, height: 0, borderLeft: '32px solid transparent', borderRight: '32px solid transparent', borderBottom: '56px solid #FF6B00', transform: 'rotate(16deg)' }} />
      {/* 前面のドット格子（同系色・ずらす方向ランダム） */}
      {/* ピンク四角：左下へ */}
      <div style={{ position: 'absolute', top: 'calc(22% + 18px)', right: 'calc(8% + 18px)', width: '72px', height: '72px', borderRadius: '18px', backgroundImage: 'radial-gradient(#C9166A 24%, transparent 26%)', backgroundSize: '11px 11px', transform: 'rotate(18deg)' }} />
      {/* 紫円：左上へ */}
      <div style={{ position: 'absolute', bottom: 'calc(12% + 18px)', right: 'calc(13% + 18px)', width: '64px', height: '64px', borderRadius: '50%', backgroundImage: 'radial-gradient(#7C3AED 24%, transparent 26%)', backgroundSize: '11px 11px' }} />
      {/* オレンジ三角：右上へ */}
      <div style={{ position: 'absolute', top: 'calc(12% - 16px)', left: 'calc(45% + 18px)', width: '64px', height: '56px', clipPath: 'polygon(50% 0, 0 100%, 100% 100%)', backgroundImage: 'radial-gradient(#C2410C 24%, transparent 26%)', backgroundSize: '10px 10px', transform: 'rotate(16deg)' }} />
    </div>
  );
}

function Services() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) return;
    const id = setTimeout(() => setActive(a => (a + 1) % APPS.length), 3500);
    return () => clearTimeout(id);
  }, [playing, active]);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 1);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  };

  useEffect(() => {
    updateScrollState();
    window.addEventListener('resize', updateScrollState);
    return () => window.removeEventListener('resize', updateScrollState);
  }, []);

  // 見出しの後にアイコン行＋ボタンをスクロールインでフェード表示
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      setRevealed(e.isIntersecting);
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir * 416, behavior: 'smooth' });
  };

  return (
    <section id="apps" style={{ background: '#EAF3FF', padding: '80px 0 32px', position: 'relative', overflow: 'hidden', isolation: 'isolate' }}>
      {/* ポップな幾何学背景 */}
      <PopGeoBackground />
      {/* ヘッダー＋ボタン */}
      <div style={{ padding: '0 40px 0 120px' }}>

        {/* ヘッダー行 */}
        <div style={{ marginBottom: '48px' }}>
          <Link to="/apps" style={{ textDecoration: 'none' }}>
            <h2 style={{ fontSize: '4rem', fontWeight: 900, color: '#111d3b', margin: 0, letterSpacing: '-0.02em', lineHeight: 1, textRendering: 'geometricPrecision', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>
              アプリケーションはこちら。
            </h2>
          </Link>
        </div>
      </div>

      {/* 自動回転カルーセル（中央のアイコンを拡大＋説明表示、ループ） */}
      <div ref={scrollRef} style={{
        position: 'relative', height: '620px', overflow: 'hidden',
        opacity: revealed ? 1 : 0,
        transition: revealed ? 'opacity 0.8s ease 0.3s' : 'opacity 0.3s ease',
      }}>
        {APPS.map((app, i) => {
          const n = APPS.length;
          let d = i - active;
          if (d > n / 2) d -= n;
          if (d < -n / 2) d += n;
          const isCenter = d === 0;
          const visible = Math.abs(d) <= 1;
          const SPACING = 440;
          return (
            <div key={app.slug} style={{
              position: 'absolute', top: '35px', left: '50%', width: '340px', marginLeft: '-170px',
              transform: `translateX(${d * SPACING}px) translateY(${isCenter ? 0 : 68}px) scale(${isCenter ? 1 : 0.6})`,
              transformOrigin: 'top center',
              opacity: visible ? (isCenter ? 1 : 0.4) : 0,
              transition: 'transform 0.9s ease, opacity 0.9s ease',
              zIndex: isCenter ? 3 : 1,
              pointerEvents: isCenter ? 'auto' : 'none',
              display: 'flex', flexDirection: 'column', alignItems: 'center',
            }}>
              {/* アイコン上部：説明文（中央のときだけフェード表示） */}
              {app.lead && (
                <p style={{ fontSize: '1.6rem', fontWeight: 600, color: '#444', lineHeight: 1.5, margin: '0 0 22px', textAlign: 'center', opacity: isCenter ? 1 : 0, transition: 'opacity 0.6s ease' }}>
                  {app.lead.split('\n')[0]}
                </p>
              )}
              {/* アイコン */}
              <Link to={`/app/${app.slug}`} style={{ textDecoration: 'none' }}>
                {app.comingSoon ? (
                  <div style={{ width: '340px', height: '340px', borderRadius: '74px', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#94A3B8', letterSpacing: '0.08em' }}>COMING SOON</span>
                  </div>
                ) : (
                  <div style={{ position: 'relative', display: 'block' }}>
                    <img src={app.icon} alt={app.name} style={{ width: '340px', height: '340px', borderRadius: '74px', boxShadow: '0 2px 4px rgba(0,0,0,0.08), 0 8px 16px rgba(0,0,0,0.10), 0 20px 40px rgba(0,0,0,0.14)', display: 'block' }} />
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '55%', borderRadius: '74px 74px 50% 50% / 74px 74px 30% 30%', background: 'linear-gradient(180deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0) 100%)', pointerEvents: 'none' }} />
                  </div>
                )}
              </Link>
              {/* 中央のときだけアプリ名＋ボタンをフェード表示 */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginTop: '24px', opacity: isCenter ? 1 : 0, transition: 'opacity 0.6s ease' }}>
                <p style={{ margin: '0 0 8px', color: '#1a1a1a', fontSize: '1.8rem', fontWeight: 800, letterSpacing: '0.01em', textAlign: 'center' }}>
                  {app.comingSoon ? 'Coming Soon' : app.name}
                </p>
                {!app.comingSoon && (
                  <Link to={`/app/${app.slug}`} className="bubble-btn" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '28px', padding: '14px 32px', borderRadius: '999px', border: '1.5px solid #111d3b', background: 'transparent', color: '#111d3b', fontSize: '1.1rem', fontWeight: 700, transition: 'background 0.2s ease' }}>
                    さらに詳しく
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* 操作バー（手動移動・ドット・再生/一時停止） */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', marginTop: '8px', opacity: revealed ? 1 : 0, transition: 'opacity 1.4s ease' }}>
        <button onClick={() => setActive(a => (a - 1 + APPS.length) % APPS.length)} aria-label="前へ"
          style={{ width: '48px', height: '48px', borderRadius: '50%', border: 'none', background: '#111d3b', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 5l-7 7 7 7" /></svg>
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {APPS.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} aria-label={`${i + 1}番目`}
              style={{ width: '11px', height: '11px', borderRadius: '50%', padding: 0, cursor: 'pointer', border: 'none', background: i === active ? '#111d3b' : '#ffffff', boxShadow: i === active ? 'none' : 'inset 0 0 0 1.5px #c4cad6', transition: 'background 0.2s ease' }} />
          ))}
          <button onClick={() => setPlaying(p => !p)} aria-label={playing ? '一時停止' : '再生'}
            style={{ width: '34px', height: '34px', borderRadius: '50%', border: '1.5px solid #111d3b', background: '#fff', color: '#111d3b', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', marginLeft: '6px' }}>
            {playing ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
            )}
          </button>
        </div>
        <button onClick={() => setActive(a => (a + 1) % APPS.length)} aria-label="次へ"
          style={{ width: '48px', height: '48px', borderRadius: '50%', border: 'none', background: '#111d3b', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </button>
      </div>
    </section>
  );
}

/* ════════════════════════════
   サービス
════════════════════════════ */
const SERVICES = [
  {
    title: 'YouTube',
    category: '動画',
    categoryColor: '#DC2626',
    description: '英単語の動画を投稿しています。毎日の学習に役立つ単語や表現をわかりやすく解説。\nチャンネル登録してぜひご活用ください。',
    link: 'https://www.youtube.com/channel/UCkoYxm2fTNza2qrjrgrbFgw',
    renderThumb: () => (
      <div style={{ width: '100%', height: '100%', position: 'relative', background: 'linear-gradient(145deg, #FF0000 0%, #8B0000 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        {/* 背景の幾何学模様 */}
        <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px', borderRadius: '50%', border: '40px solid rgba(255,255,255,0.06)' }}/>
        <div style={{ position: 'absolute', bottom: '-60px', left: '-30px', width: '220px', height: '220px', borderRadius: '50%', border: '40px solid rgba(255,255,255,0.04)' }}/>
        {/* YouTubeロゴ */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ background: 'white', borderRadius: '18px', width: '110px', height: '78px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 12px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)' }}>
            <svg width="52" height="36" viewBox="0 0 90 63"><polygon points="36,12 36,51 65,32" fill="#FF0000"/></svg>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.72rem', fontWeight: 700, textAlign: 'center', marginTop: '12px', letterSpacing: '0.1em' }}>YOUTUBE</p>
        </div>
      </div>
    ),
  },
  {
    title: 'TikTok',
    category: '動画',
    categoryColor: '#010101',
    description: '英単語の動画を投稿しています。短い動画でサクッと学べるので、スキマ時間の学習にぴったりです。フォローお待ちしています。',
    link: 'https://www.tiktok.com/@user9530011262997',
    renderThumb: () => (
      <div style={{ width: '100%', height: '100%', position: 'relative', background: '#010101', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        {/* ネオングロー */}
        <div style={{ position: 'absolute', top: '10%', right: '10%', width: '160px', height: '160px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(105,201,208,0.18) 0%, transparent 70%)' }}/>
        <div style={{ position: 'absolute', bottom: '5%', left: '5%', width: '140px', height: '140px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(238,29,82,0.18) 0%, transparent 70%)' }}/>
        {/* TikTokロゴ（RGB分離エフェクト） */}
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
          <div style={{ position: 'relative', width: '70px', height: '80px' }}>
            <svg viewBox="0 0 60 70" width="70" height="80" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.7 }}>
              <path d="M42,0 C43,10 50,17 60,18 L60,30 C54,30 48,28 44,24 L44,46 C44,58 34,68 22,68 C10,68 0,58 0,46 C0,34 10,24 22,24 C24,24 26,24 28,25 L28,37 C26,36 24,36 22,36 C16,36 12,40 12,46 C12,52 16,56 22,56 C28,56 32,52 32,46 L32,0 Z" fill="#69C9D0"/>
            </svg>
            <svg viewBox="0 0 60 70" width="70" height="80" style={{ position: 'absolute', top: '3px', left: '3px', opacity: 0.7 }}>
              <path d="M42,0 C43,10 50,17 60,18 L60,30 C54,30 48,28 44,24 L44,46 C44,58 34,68 22,68 C10,68 0,58 0,46 C0,34 10,24 22,24 C24,24 26,24 28,25 L28,37 C26,36 24,36 22,36 C16,36 12,40 12,46 C12,52 16,56 22,56 C28,56 32,52 32,46 L32,0 Z" fill="#EE1D52"/>
            </svg>
            <svg viewBox="0 0 60 70" width="70" height="80" style={{ position: 'absolute', top: '1.5px', left: '1.5px' }}>
              <path d="M42,0 C43,10 50,17 60,18 L60,30 C54,30 48,28 44,24 L44,46 C44,58 34,68 22,68 C10,68 0,58 0,46 C0,34 10,24 22,24 C24,24 26,24 28,25 L28,37 C26,36 24,36 22,36 C16,36 12,40 12,46 C12,52 16,56 22,56 C28,56 32,52 32,46 L32,0 Z" fill="white"/>
            </svg>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', margin: 0 }}>TIKTOK</p>
        </div>
      </div>
    ),
  },
];

function ServiceSection() {
  const scrollRef = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      setRevealed(e.isIntersecting);
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="services" style={{ backgroundColor: '#ffffff', backgroundImage: 'linear-gradient(115deg, transparent 0 48%, #FFE066 48% 100%), repeating-linear-gradient(90deg, rgba(37,99,235,0.32) 0 2.5px, transparent 2.5px 52px), repeating-linear-gradient(0deg, rgba(255,61,139,0.32) 0 2.5px, transparent 2.5px 52px)', backgroundSize: '100% 100%, 52px 52px, 52px 52px', backgroundRepeat: 'no-repeat, repeat, repeat', padding: '60px 0 64px' }}>
      <div style={{ padding: '0 40px 0 120px' }}>
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '4rem', fontWeight: 900, color: '#111d3b', margin: 0, letterSpacing: '-0.02em', lineHeight: 1, textRendering: 'geometricPrecision', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>
            サービス
          </h2>
        </div>
      </div>
      <div ref={scrollRef} style={{
        display: 'flex', gap: '40px',
        overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none',
        paddingLeft: '120px', paddingTop: '24px', paddingBottom: '40px',
        opacity: revealed ? 1 : 0,
        transform: revealed ? 'translateY(0)' : 'translateY(28px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}>
        {SERVICES.map((s, i) => (
          <div key={i} style={{ position: 'relative', minWidth: '600px', maxWidth: '600px', flexShrink: 0 }}>
            <article
              className="service-card"
              onClick={() => s.link && window.open(s.link, '_blank')}
              style={{ cursor: s.link ? 'pointer' : 'default', position: 'relative', height: '100%' }}
            >
              {/* 右下にずらした四角いシャドウ（カードと一緒に拡大） */}
              <div aria-hidden="true" style={{ position: 'absolute', top: '12px', left: '12px', right: '-12px', bottom: '-16px', borderRadius: '20px', background: 'rgba(17, 29, 59, 0.14)', zIndex: 0 }} />
              <div style={{ position: 'relative', zIndex: 1, background: '#FFFCF4', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 2px 16px rgba(0,0,0,0.08)', height: '100%' }}>
                <div className="service-thumb" style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', position: 'relative' }}>
                  {s.renderThumb()}
                </div>
                <div style={{ padding: '20px 20px 28px', opacity: revealed ? 1 : 0, transform: revealed ? 'translateY(0)' : 'translateY(28px)', transition: 'opacity 0.8s ease, transform 0.8s ease' }}>
                  <p style={{ fontSize: '1.8rem', fontWeight: 700, color: '#1a1a1a', margin: '0 0 12px', textAlign: 'center' }}>
                    {s.title}
                  </p>
                  <p style={{ fontSize: '1.4rem', fontWeight: 500, color: '#555', lineHeight: 1.7, margin: 0, textAlign: 'left', whiteSpace: 'pre-line' }}>
                    {s.description}
                  </p>
                </div>
              </div>
            </article>
          </div>
        ))}
        <div style={{ minWidth: '40px', flexShrink: 0 }} />
      </div>
    </section>
  );
}

/* ════════════════════════════
   ニュース
════════════════════════════ */

const TYPE_COLORS = {
  'お知らせ': { bg: '#EFF6FF', text: '#2563EB' },
  'アップデート': { bg: '#F0FDF4', text: '#16A34A' },
  'リリース': { bg: '#FFF7ED', text: '#EA580C' },
  '配信中': { bg: '#F0FDF4', text: '#16A34A' },
  '大幅アップデート': { bg: '#F5F3FF', text: '#7C3AED' },
};

// 無限ループ用に前後へ付与するクローン枚数（3枚表示でも端で隙間が出ないよう表示枚数分を確保）
const NEWS_CLONES = 3;

function NewsSection() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [idx, setIdx] = useState(NEWS_CLONES); // 先頭の実アイテム = クローン数番目
  const [animated, setAnimated] = useState(true);
  const [paused, setPaused] = useState(false);      // ホバー中の一時停止
  const [userPaused, setUserPaused] = useState(false); // 一時停止ボタンによる手動停止
  const containerRef = useRef(null);
  const [cw, setCw] = useState(0);
  // ウィンドウ幅。広いほど中央カードを細く＝両サイドのカードの覗きを広くする
  const [winW, setWinW] = useState(typeof window !== 'undefined' ? window.innerWidth : 1440);
  const [openItem, setOpenItem] = useState(null); // 詳細モーダルで開いているお知らせ

  useEffect(() => {
    getNewsList(10).then(res => {
      setNews(res.contents);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  // コンテナ幅の計測
  useEffect(() => {
    const update = () => {
      if (containerRef.current) setCw(containerRef.current.offsetWidth);
      setWinW(window.innerWidth);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [loading]);

  const allItems = [
    ...NEWS_POSTERS.map(p => ({ ...p, _kind: 'poster' })),
    ...news.map(n => ({ ...n, _kind: 'news' })),
  ];
  const total = allItems.length;

  // クローン付き配列: 前後へ NEWS_CLONES 枚ずつ複製（3枚表示でも端で隙間が出ない）
  const extended = total > 0
    ? [...allItems.slice(-NEWS_CLONES), ...allItems, ...allItems.slice(0, NEWS_CLONES)]
    : [];

  // ── レイアウト計算 ──
  // 大きい画面(>=1280px)では3枚表示で固定。そこから縮小するにつれて
  // 両サイドの覗きが徐々に狭まり、768pxで元の1枚表示になる。
  const GAP = 48;
  const slideW3 = (cw - GAP * 2) / 3 + 2; // 3枚表示（左右端ぴったり＝背景の隙間なし。+2pxで丸め誤差ぶんの隙間も防ぐ）
  const slideW1 = cw * 0.6 - GAP;        // 元の1枚表示時の中央カード幅
  const t = Math.min(1, Math.max(0, (winW - 768) / (1280 - 768)));
  const slideW = cw > 0 ? Math.round(slideW1 + (slideW3 - slideW1) * t) : 0;
  const step   = slideW + GAP;
  // idx番のスライドを中央に置くtranslateX
  const tx = cw > 0 ? (cw - slideW) / 2 - idx * step : 0;

  // トランジション終了後にクローン→実アイテムへ瞬時ジャンプ
  const handleTransitionEnd = () => {
    if (idx >= total + NEWS_CLONES) { setAnimated(false); setIdx(idx - total); }
    else if (idx < NEWS_CLONES)     { setAnimated(false); setIdx(idx + total); }
  };
  useEffect(() => {
    if (!animated) requestAnimationFrame(() => requestAnimationFrame(() => setAnimated(true)));
  }, [animated]);

  // 自動再生
  useEffect(() => {
    if (paused || userPaused || total === 0 || cw === 0) return;
    const id = setInterval(() => setIdx(i => i + 1), 4000);
    return () => clearInterval(id);
  }, [paused, userPaused, total, cw]);

  const realIdx = total > 0 ? ((idx - NEWS_CLONES) % total + total) % total : 0;

  const renderCard = (item, i) => {
    const isPoster = item._kind === 'poster';
    const c = TYPE_COLORS[item.type] || { bg: '#F1F5F9', text: '#64748B' };
    return (
      <div key={i} style={{ width: slideW, minWidth: slideW, flexShrink: 0, marginRight: GAP, display: 'flex' }}>
        <div
          onClick={() => setOpenItem(item)}
          className="service-card"
          style={{ position: 'relative', flex: 1, display: 'flex', cursor: 'pointer' }}
        >
          {/* 右下にずらした四角いシャドウ（カードと一緒に拡大） */}
          <div aria-hidden="true" style={{ position: 'absolute', top: '12px', left: '12px', right: '-12px', bottom: '-16px', borderRadius: '16px', background: 'rgba(17, 29, 59, 0.14)', zIndex: 0 }} />
          <div
            style={{ background: '#FBFBFD', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column', flex: 1, position: 'relative', zIndex: 1 }}
          >
          {isPoster
            ? <img src={item.img} alt={item.title} style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', objectPosition: item.pos || 'top', display: 'block' }} />
            : item.image && <img src={item.image.url} alt={item.title} style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', display: 'block' }} />
          }
          <div style={{ padding: '24px 26px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.95rem', fontWeight: 700, background: c.bg, color: c.text, padding: '4px 14px', borderRadius: '999px', display: 'inline-block', marginBottom: '12px', alignSelf: 'flex-start' }}>{item.type}</span>
            <p style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1a1a1a', margin: '0 0 8px', lineHeight: 1.4 }}>{item.title}</p>
            {isPoster && item.note && (
              <p style={{ color: '#5b6470', fontSize: '1.05rem', fontWeight: 500, margin: '0 0 10px', lineHeight: 1.5 }}>{item.note}</p>
            )}
            {/* 下段：日付（左）＋虫眼鏡ボタン（右下） */}
            <div style={{ marginTop: 'auto', paddingTop: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
              <p style={{ fontSize: '1.05rem', color: '#94A3B8', margin: 0 }}>
                {isPoster ? item.date : new Date(item.publishedAt).toLocaleDateString('ja-JP')}
              </p>
              <span className="notice-zoom-wrap">
                <button
                  onClick={(e) => { e.stopPropagation(); setOpenItem(item); }}
                  aria-label="詳細を見る"
                  className="notice-zoom-btn"
                  style={{ '--sz': '52px' }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="10.5" cy="10.5" r="6.5" /><line x1="20" y1="20" x2="15.5" y2="15.5" />
                  </svg>
                </button>
                <span className="notice-zoom-label" aria-hidden="true">
                  <svg viewBox="0 0 110 55" style={{ width: '100%', height: '100%' }}>
                    <defs>
                      <path id={`nzp-${i}`} d="M 11,55 A 44,44 0 1,1 99,55" />
                    </defs>
                    <text textAnchor="middle"><textPath href={`#nzp-${i}`} startOffset="50%">詳しくみてみる</textPath></text>
                  </svg>
                </span>
              </span>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="news" style={{ background: '#F5F5F7', padding: '70px 0 80px' }}>
      <div style={{ padding: '0 40px 0 120px', marginBottom: '48px' }}>
        <button
          onClick={() => {
            const el = document.getElementById('news');
            if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY, behavior: 'smooth' });
          }}
          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}
        >
          <h2 style={{ fontSize: '4rem', fontWeight: 900, color: '#111d3b', margin: 0, letterSpacing: '-0.02em', lineHeight: 1, textRendering: 'geometricPrecision', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>
            お知らせ
          </h2>
        </button>
      </div>

      {loading ? (
        <div style={{ paddingLeft: '120px', color: '#94A3B8', fontSize: '0.9rem' }}>読み込み中...</div>
      ) : total === 0 ? null : (
        <div
          style={{ position: 'relative' }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* オーバーフロー制御（上下pad-ホバー拡大時の見切れ防止。横paddingはoffsetWidth計算に影響するため不可） */}
          <div ref={containerRef} style={{ overflow: 'hidden', padding: '10px 0 30px' }}>
            {cw > 0 && (
              <div
                style={{
                  display: 'flex',
                  transform: `translateX(${tx}px)`,
                  transition: animated ? 'transform 0.6s cubic-bezier(0.4,0,0.2,1)' : 'none',
                  willChange: 'transform',
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {extended.map((item, i) => renderCard(item, i))}
              </div>
            )}
          </div>

          {/* スライドコントロール（左右矢印・ドット・一時停止） */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '28px', marginTop: '40px' }}>
            <button
              aria-label="前のお知らせ"
              onClick={() => { setIdx(i => i - 1); setPaused(false); }}
              style={{ width: '52px', height: '52px', borderRadius: '50%', border: 'none', background: '#111d3b', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0, flexShrink: 0 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
              </svg>
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '11px' }}>
                {allItems.map((_, i) => (
                  <button key={i} aria-label={`${i + 1}番目のお知らせ`} onClick={() => { setIdx(i + NEWS_CLONES); setPaused(false); }} style={{
                    width: '11px', height: '11px', borderRadius: '50%', cursor: 'pointer', padding: 0,
                    border: i === realIdx ? 'none' : '1.5px solid #c4c8d2',
                    background: i === realIdx ? '#111d3b' : 'transparent',
                    transition: 'all 0.3s ease',
                  }} />
                ))}
              </div>
              <button
                aria-label={userPaused ? '自動再生を開始' : '自動再生を停止'}
                onClick={() => setUserPaused(p => !p)}
                style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1.5px solid #111d3b', background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0, flexShrink: 0 }}
              >
                {userPaused
                  ? <svg width="15" height="15" viewBox="0 0 24 24" fill="#111d3b"><polygon points="7 4 19 12 7 20" /></svg>
                  : <svg width="15" height="15" viewBox="0 0 24 24" fill="#111d3b"><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg>
                }
              </button>
            </div>

            <button
              aria-label="次のお知らせ"
              onClick={() => { setIdx(i => i + 1); setPaused(false); }}
              style={{ width: '52px', height: '52px', borderRadius: '50%', border: 'none', background: '#111d3b', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0, flexShrink: 0 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* 詳細はホーム画面の上にモーダルで重ねて表示 */}
      <NoticeModal item={openItem} onClose={() => setOpenItem(null)} />
    </section>
  );
}




/* ════════════════════════════
   PAGE
════════════════════════════ */
const DESIGN_WIDTH = 1440;

export default function HomePage() {
  const isMobile = useIsMobile();
  const innerRef = useRef(null);
  // スクロールバー幅を除いた表示領域幅でスケール（innerWidthだと右端がバー裏に隠れて非対称になる）
  const [scale, setScale] = useState(() => (typeof window !== 'undefined' ? (document.documentElement.clientWidth || window.innerWidth) / DESIGN_WIDTH : 1));
  const [wrapHeight, setWrapHeight] = useState('auto');
  const [heroH, setHeroH] = useState(560);
  const [heroFont, setHeroFont] = useState(6.3);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  // デスクトップ表示：設計幅(1440px)のデザインをウィンドウ幅に合わせて一律スケール
  useEffect(() => {
    if (isMobile) return;
    const HEADER_H = 76;   // ヘッダーの高さ（丸角フローティング：上下余白10+バー56）
    const GRAY_PEEK = 0;   // スマホ版に合わせてヘッダー下いっぱいに（覗きはパネルの重なりで表現）
    const update = () => {
      const s = (document.documentElement.clientWidth || window.innerWidth) / DESIGN_WIDTH;
      setScale(s);
      // ヒーローを常に「画面の高さ − ヘッダー − 少しのグレー」で表示（スケールを打ち消すため /s）
      setHeroH(Math.max(360, (window.innerHeight - HEADER_H - GRAY_PEEK) / s));
      // 縮小時(スケール<1)のみヒーロー見出しを拡大。ただし横幅に収まる最大サイズ(=3行維持)で頭打ち
      const boosted = 6.175 + (s < 1 ? (1 - s) * 2.5 : 0);
      const h1 = innerRef.current?.querySelector('.hero-h1');
      let cap = Infinity;
      if (h1 && h1.clientWidth > 0 && h1.scrollWidth > 0) {
        const curPx = parseFloat(window.getComputedStyle(h1).fontSize);
        cap = (curPx * (h1.clientWidth / h1.scrollWidth) * 0.99) / 16; // remに換算
      }
      // 下限6.175rem（計測無効時の0化＝不可視を防止）、横幅に収まる最大(cap)で頭打ち
      setHeroFont(Math.max(6.175, Math.min(boosted, cap)));
      if (innerRef.current) setWrapHeight(innerRef.current.offsetHeight * s);
    };
    update();
    // ヒーローをスクロール分だけピン留め（次パネルが上を覆って滑り込む）
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const s = (document.documentElement.clientWidth || window.innerWidth) / DESIGN_WIDTH;
        const heroVis = Math.max(1, window.innerHeight - HEADER_H - GRAY_PEEK);
        const lagVis = Math.min(window.scrollY, heroVis) * 0.5; // ヒーロー/ヘッダー共通の遅れ量（実px）
        const p = Math.min(1, Math.max(0, window.scrollY / heroVis));
        const st = document.documentElement.style;
        st.setProperty('--hero-pin', (lagVis / s) + 'px'); // ヒーローはスケール内なので /s
        st.setProperty('--header-shift', lagVis + 'px'); // ヘッダーもヒーローと同じ下方向ラグ
        st.setProperty('--fold', String(p));
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener('resize', update);
    window.addEventListener('scroll', onScroll, { passive: true });
    let ro;
    if (innerRef.current && 'ResizeObserver' in window) {
      ro = new ResizeObserver(update);
      ro.observe(innerRef.current);
    }
    return () => {
      window.removeEventListener('resize', update);
      window.removeEventListener('scroll', onScroll);
      if (ro) ro.disconnect();
      document.documentElement.style.setProperty('--header-shift', '0px');
      document.documentElement.style.setProperty('--hero-pin', '0px');
      document.documentElement.style.setProperty('--fold', '0');
    };
  }, [isMobile]);

  if (isMobile) return <><Header /><MobileHomePage /><MobileFooter /></>;
  return (
    <div style={{ background: '#ffffff' }}>
      <Header />
      <div style={{ overflow: 'hidden', height: wrapHeight }}>
        <div ref={innerRef} style={{ width: `${DESIGN_WIDTH}px`, background: '#ffffff', transformOrigin: 'top left', transform: `scale(${scale})`, '--hero-h': `${heroH}px`, '--hero-font': `${heroFont}rem` }}>
          <HeroSection />
          {/* 次セクションがせり上がってヒーローに重なるパネル */}
          <div style={{ position: 'relative', zIndex: 2, background: '#f0f4f8', borderRadius: '40px 40px 0 0', marginTop: '-40px' }}>
            {/* パネル上端中央の丸いスクロール矢印 */}
            <button
              className="scroll-arrow"
              aria-label="次のセクションへ"
              onClick={() => {
                const el = document.getElementById('apps');
                if (el) {
                  const y = el.getBoundingClientRect().top + window.scrollY - 70;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
              style={{
                position: 'absolute', left: '50%', top: 0, marginLeft: '-28px', marginTop: '-28px', zIndex: 25,
                width: '56px', height: '56px', borderRadius: '50%',
                background: 'transparent', border: '1.5px solid #111d3b', boxShadow: 'none',
                color: '#111d3b',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer',
              }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <Services />
            <ServiceSection />
            <NewsSection />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
