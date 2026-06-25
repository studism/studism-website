import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { loadDefaultJapaneseParser } from 'budoux';
import FitOneLine from '@/components/FitOneLine';

// 日本語の文節（きりのいい所）で改行するためのパーサ（機械学習ベース）。
// 本文は、で・の・が・し・「〜しました。」等の自然な位置で折り返す。
const jpParser = loadDefaultJapaneseParser();

// お知らせ詳細をホーム画面の上にかぶせて表示するモーダル。
// PC版はデザイン全体に scale 変形がかかっており position:fixed の基準が
// 変形要素になってしまうため、createPortal で document.body 直下に描画する。
//
// 広い画面では、スクロール進行度に連動した「シネマティック」演出を行う：
//   フェーズA: チラシが左上の角からシールのようにペタッと貼られ全体表示
//   フェーズB: スクロールでチラシが右へ退出（完全に消える）、説明文が一文ずつ
//             下からフロートインし、最終的に全文が一画面に収まる
//   フェーズC: 全文表示後、チラシが左からスライドインし、下にストアアイコンを表示
// 狭い画面・モーション無効環境では従来どおりのシンプル表示にフォールバック。
const TYPE_COLORS = {
  'お知らせ': { bg: '#EFF6FF', text: '#2563EB' },
  'アップデート': { bg: '#F0FDF4', text: '#16A34A' },
  'リリース': { bg: '#FFF7ED', text: '#EA580C' },
  '配信中': { bg: '#F0FDF4', text: '#16A34A' },
  '大幅アップデート': { bg: '#F5F3FF', text: '#7C3AED' },
};

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const mapRange = (x, inMin, inMax, outMin, outMax) =>
  lerp(outMin, outMax, clamp((x - inMin) / (inMax - inMin), 0, 1));
const easeOut = (t) => 1 - (1 - t) * (1 - t);

// 本文HTMLを文（。！区切り）の配列へ変換
const splitSentences = (html) => {
  const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return (text.match(/[^。！]+[。！]?/g) || []).map((s) => s.trim()).filter(Boolean);
};

const AppleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 384 512" fill="#fff" aria-hidden="true">
    <path d="M318.7 268c-.2-37 16.4-64.9 50-85.6-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C71.3 139.5 24 184.1 24 274.5q0 39.9 14.6 82.4c13 36.8 60 127.1 109 125.6 25.6-.6 43.7-18.2 77-18.2 32.3 0 49 18.2 77.4 18.2 49.5-.7 92-82.7 104.4-119.6-66.3-31.3-63.7-91.7-63.7-93.9zm-58.2-168.5c28.1-33.3 25.5-63.6 24.7-74.5-24.8 1.4-53.5 16.9-69.9 35.9-18 20.4-28.6 45.6-26.3 74 26.8 2.1 51.3-11.7 71.5-35.4z" />
  </svg>
);

const PlayIcon = () => (
  <svg width="18" height="20" viewBox="0 0 512 512" fill="#fff" aria-hidden="true">
    <path d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm278.3 234.3L104.6 13l280.8 161.2-60.1 60.1zm88.9 21.7l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l220.7-221.3 60.1 60.1L104.6 499z" />
  </svg>
);

// タップ誘導の指アイコン（Material の touch_app）。色は currentColor を継承。
const TapGlyph = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ display: 'block' }}>
    <path d="M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6C13 6.67 12.33 6 11.5 6S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z" />
  </svg>
);

function StoreBadge({ href, sub, main, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '10px',
        background: '#000', color: '#fff', borderRadius: '12px',
        padding: '9px 16px', textDecoration: 'none',
        border: '1px solid rgba(255,255,255,0.3)', pointerEvents: 'auto',
      }}
    >
      <span style={{ flexShrink: 0, display: 'flex' }}>{children}</span>
      <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
        <span style={{ fontSize: '0.6rem', opacity: 0.85 }}>{sub}</span>
        <span style={{ fontSize: '1rem', fontWeight: 700, letterSpacing: '0.01em' }}>{main}</span>
      </span>
    </a>
  );
}

export default function NoticeModal({ item, onClose }) {
  const scrollRef = useRef(null);
  const rafRef = useRef(0);
  const lockRef = useRef(false);            // ホイール送りアニメ中のロック
  const stepRef = useRef({ enabled: false, STOPS: 2 }); // ホイール送りの最新設定
  const [p, setP] = useState(0);            // スクロール進行度 0..1
  const [vw, setVw] = useState(() => (typeof window !== 'undefined' ? window.innerWidth : 1280));
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (!item) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    // 背面（ホーム画面）のスクロールバーを完全に消す。
    // ホームのスクロールは documentElement(html) 側にも出るため両方を止める。
    const prevBody = document.body.style.overflow;
    const prevHtml = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    const onResize = () => setVw(window.innerWidth);
    window.addEventListener('resize', onResize);
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    return () => {
      document.body.style.overflow = prevBody;
      document.documentElement.style.overflow = prevHtml;
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [item, onClose]);

  useEffect(() => {
    setP(0);
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [item]);

  // ホイール1操作 = 次/前の表示へ1つだけ送り、停止点でピタッと止める。
  // 全文セクション（アニメ領域の下）では通常スクロールに任せる。
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let raf = 0;
    // なめらかな加減速でゆっくり動き、終端で滑らかに停止する
    const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2); // easeInOutCubic
    const animateTo = (targetTop, onDone, dur = 760) => {
      cancelAnimationFrame(raf);
      const startTop = el.scrollTop;
      const dist = targetTop - startTop;
      if (Math.abs(dist) < 1) { onDone && onDone(); return; }
      let t0 = null;
      const step = (ts) => {
        if (t0 === null) t0 = ts;
        const t = Math.min((ts - t0) / dur, 1);
        el.scrollTop = startTop + dist * ease(t);
        if (t < 1) raf = requestAnimationFrame(step);
        else if (onDone) onDone();
      };
      raf = requestAnimationFrame(step);
    };
    const onWheel = (e) => {
      const cfg = stepRef.current;
      if (!cfg.enabled) return;                 // 狭い画面等は通常スクロール
      const vh = el.clientHeight;
      const animMax = (cfg.STOPS - 1) * vh;     // 最終ストップ（チラシ＋アイコン）
      const textTop = animMax + vh;             // 全文先頭が画面トップに来る位置
      const top = el.scrollTop;
      const dir = e.deltaY > 0 ? 1 : (e.deltaY < 0 ? -1 : 0);
      if (dir === 0) return;
      const done = () => { setTimeout(() => { lockRef.current = false; }, 60); };

      // 全文セクション内（先頭以降）は自由スクロール
      if (top > textTop - 2) return;

      // 最終ストップ〜全文先頭の「めくり」区間はアニメーションで送る（長めにして滑らかに）
      if (top > animMax + 2) {
        e.preventDefault();
        if (lockRef.current) return;
        lockRef.current = true;
        animateTo(dir > 0 ? textTop : animMax, done, 1000);
        return;
      }

      // 最終ストップから下方向 → 全文先頭へアニメーションで送る（長めにして滑らかに）
      const idx = Math.round(top / vh);
      if (idx >= cfg.STOPS - 1 && dir > 0) {
        e.preventDefault();
        if (lockRef.current) return;
        lockRef.current = true;
        animateTo(textTop, done, 1000);
        return;
      }

      // 通常の1ストップ送り
      e.preventDefault();
      if (lockRef.current) return;              // 送り中は次の入力を無視（多重送り防止）
      const target = clamp(idx + dir, 0, cfg.STOPS - 1);
      if (target === idx) return;
      lockRef.current = true;
      animateTo(target * vh, done);
    };
    // スマホ（狭い画面）はホイールがないため、1タップ = 次の表示へ1ステップ送る。
    const onTap = (e) => {
      const cfg = stepRef.current;
      if (!cfg.enabled) return;
      if (window.innerWidth >= 768) return;          // スマホのみ。PCはホイール送り
      // ストアリンク等のインタラクティブ要素のタップは送りに使わない
      if (e.target.closest && e.target.closest('a, button')) return;
      const vh = el.clientHeight;
      const animMax = (cfg.STOPS - 1) * vh;          // 最終ストップ（チラシ＋アイコン）
      const textTop = animMax + vh;                  // 全文先頭が画面トップに来る位置
      const top = el.scrollTop;
      if (top > textTop - 2) return;                 // 全文セクション内は自由スクロール
      if (lockRef.current) return;                   // 送り中は無視（多重送り防止）
      // 現在地から次のストップ（最終ストップの先は全文先頭）へ送る
      let target, dur = 760;
      if (top > animMax + 2) { target = textTop; dur = 1000; }      // めくり区間 → 全文先頭
      else {
        const idx = Math.round(top / vh);
        if (idx >= cfg.STOPS - 1) { target = textTop; dur = 1000; } // 最終ストップ → 全文先頭
        else target = (idx + 1) * vh;
      }
      lockRef.current = true;
      animateTo(target, () => { setTimeout(() => { lockRef.current = false; }, 60); }, dur);
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    el.addEventListener('click', onTap);
    return () => {
      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('click', onTap);
      cancelAnimationFrame(raf);
    };
  }, [item]);

  const isPoster = item?._kind === 'poster';
  const body = isPoster ? item?.body : item?.content;
  const sentences = useMemo(() => (body ? splitSentences(body) : []), [body]);
  // 本文HTMLは各ブロックに keep-all＋ゼロ幅スペースを挿入した形に変換。
  const bodyHtml = useMemo(() => (body ? jpParser.translateHTMLString(body) : ''), [body]);

  if (!item) return null;

  const tc = TYPE_COLORS[item.type] || { bg: '#F1F5F9', text: '#64748B' };
  const img = isPoster ? item.img : item.image?.url;
  const date = isPoster
    ? item.date
    : (item.publishedAt ? new Date(item.publishedAt).toLocaleDateString('ja-JP') : '');
  const appStoreUrl = item.appStoreUrl;
  const playStoreUrl = item.playStoreUrl;

  const cinematic = !reduced;        // スマホでもシネマティック演出を有効化
  const narrow = vw < 768;           // 狭い画面（スマホ）はサイズを調整

  // 1スライド = 1文。見出しは最初のチラシ画面に一緒に表示する。
  const slides = sentences.map((s, i) => ({ text: s, lead: i === 0, last: i === sentences.length - 1 }));
  const M = slides.length;
  // スナップ停止点: 0=チラシのみ, 1=チラシ＋見出し, 2..M+1=各文, M+2=最終（チラシ＋ストア）。
  // 各停止点を 1画面(100vh) 間隔に等間隔配置 → 1スクロール=1ステップ。
  const STOPS = M + 3;
  const snapPs = Array.from({ length: STOPS }, (_, k) => k / (STOPS - 1));
  const SN = snapPs[M + 1];             // 最後の文のスナップ
  const trackVH = STOPS * 100;          // スクロールトラックの高さ(vh)
  // ホイール送りの最新設定を共有（上部の useEffect から参照）
  stepRef.current = { enabled: cinematic, STOPS };

  // 進行度 p は「アニメ領域」だけで 0→1。その先（全文セクション）では 1 のまま。
  const onScroll = () => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = 0;
      const el = scrollRef.current;
      if (!el) return;
      const animMax = (STOPS - 1) * el.clientHeight;
      setP(animMax > 0 ? clamp(el.scrollTop / animMax, 0, 1) : 0);
    });
  };

  // スライド j の中央からのズレ(-1..+1)。0で完全中央表示。
  const slideSigned = (j) => {
    const c = snapPs[j], prev = snapPs[j - 1], next = snapPs[j + 1];
    const s = p <= c ? (p - c) / Math.max(c - prev, 1e-4) : (p - c) / Math.max(next - c, 1e-4);
    return clamp(s, -1, 1);
  };

  // ストアバッジ（アイコン）
  const storeBadges = (appStoreUrl || playStoreUrl) ? (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginTop: '18px' }}>
      {appStoreUrl && (
        <StoreBadge href={appStoreUrl} sub="Download on the" main="App Store"><AppleIcon /></StoreBadge>
      )}
      {playStoreUrl && (
        <StoreBadge href={playStoreUrl} sub="GET IT ON" main="Google Play"><PlayIcon /></StoreBadge>
      )}
    </div>
  ) : null;

  const CloseBtn = (
    <button
      onClick={onClose}
      aria-label="閉じる"
      className="notice-close-btn"
      style={{
        position: 'fixed', top: '18px', right: '40px', zIndex: 10001, padding: 0,
        width: '42px', height: '42px', borderRadius: '50%', border: 'none',
        background: 'rgba(17,29,59,0.9)', color: '#fff', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 6px 18px rgba(15,23,42,0.25)',
        transition: 'background 0.2s ease, transform 0.2s ease',
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
        <path d="M6 6l12 12M18 6L6 18" />
      </svg>
    </button>
  );

  // ── シンプル表示（狭い画面 / モーション無効）─────────────────────────
  if (!cinematic) {
    return createPortal(
      <>
      {CloseBtn}
      <div
        role="dialog"
        aria-modal="true"
        style={{
          position: 'fixed', inset: 0, zIndex: 10000,
          background: 'rgba(8,11,20,0.82)', backdropFilter: 'blur(2px)',
          display: 'flex', justifyContent: 'center', alignItems: 'flex-start',
          overflowY: 'auto', padding: '5vh 16px',
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="notice-font"
          style={{
            position: 'relative', background: '#fff', borderRadius: '20px',
            width: '100%', maxWidth: '760px', margin: 'auto',
            boxShadow: '0 24px 70px rgba(0,0,0,0.35)', overflow: 'hidden',
          }}
        >
          {img && <img src={img} alt={item.title} loading="lazy" decoding="async" style={{ width: '100%', height: 'auto', display: 'block' }} />}
          {storeBadges && <div style={{ padding: '20px 24px 0' }}>{storeBadges}</div>}
          <div style={{ padding: '24px 28px 40px' }}>
            {item.type && (
              <span style={{
                fontSize: '0.8rem', fontWeight: 700, background: tc.bg, color: tc.text,
                padding: '3px 12px', borderRadius: '999px', display: 'inline-block', marginBottom: '14px',
              }}>{item.type}</span>
            )}
            <FitOneLine as="h2" text={item.title} max={33} min={13} className="notice-font notice-heading-font" style={{ fontWeight: 700, color: '#0a0a0a', margin: '0 0 10px', lineHeight: 1.3, letterSpacing: '0.03em' }} />
            {date && <p style={{ fontSize: '0.85rem', color: '#94A3B8', margin: '0 0 24px' }}>{date}</p>}
            {body && <div style={{ fontSize: '0.98rem', lineHeight: 1.8, color: '#333' }} dangerouslySetInnerHTML={{ __html: bodyHtml }} />}
          </div>
        </div>
      </div>
      </>,
      document.body
    );
  }

  // ── シネマティック表示 ───────────────────────────────────────────────
  // チラシ全体[0] → 退出して各文を順次表示[~SN] → 最終2カラム[1]
  // チラシは height:86vh を基準サイズとし、scale で各フェーズの大きさを決める
  const sTitle = snapPs[1];             // チラシ＋見出しの停止点
  const sExit = snapPs[2];              // 最初の文の停止点（チラシ退出完了）
  const F_FULL = 1;                     // 開始：チラシのみ（画面いっぱい）
  const F_OPEN = 0.74;                  // チラシ＋見出しでのチラシの大きさ
  const F_FINAL = 0.78;                 // 最終ページでのチラシの大きさ
  let fTx, fScale, fOpacity, fTy;
  if (p < sTitle) {                     // 0→1: チラシのみ → 縮小・上昇して見出し用の余白を作る
    const t = mapRange(p, 0, sTitle, 0, 1);
    fTx = 0; fScale = lerp(F_FULL, F_OPEN, t); fOpacity = 1; fTy = lerp(0, -13, t);
  } else if (p < sExit) {               // 1→2: 右へするっと退出
    const t = mapRange(p, sTitle, sExit, 0, 1);
    fTx = lerp(0, 80, t); fScale = F_OPEN; fOpacity = lerp(1, 0, t); fTy = -13;
  } else if (p < SN) {                  // 非表示（左の画面外で待機）
    fTx = -80; fScale = F_FINAL; fOpacity = 0; fTy = -7;
  } else {                              // 左からスライドインして中央に着地
    const t = mapRange(p, SN, 1, 0, 1);
    fTx = lerp(-80, 0, clamp(t / 0.8, 0, 1)); fScale = F_FINAL; fOpacity = clamp(t / 0.55, 0, 1); fTy = -7;
  }
  // 見出し：0→1 でスクロールイン（下から上へ）、1→2 で上へ抜けてフェードアウト
  let titleOpacity, titleTy;
  if (p < sTitle) {
    const t = mapRange(p, 0, sTitle, 0, 1);
    titleOpacity = t; titleTy = lerp(44, 0, t);
  } else {
    const t = mapRange(p, sTitle, sExit, 0, 1);
    titleOpacity = 1 - t; titleTy = lerp(0, -34, t);
  }
  // スクロール誘導の矢印は「チラシが見えている間」だけ表示
  const arrowOpacity = p < sTitle ? 1 : clamp(1 - mapRange(p, sTitle, sExit, 0, 1), 0, 1);
  const fHidden = fOpacity <= 0.01;
  const badgeOpacity = p < SN ? 0 : clamp(mapRange(p, SN, 1, 0, 1) / 0.5, 0, 1);
  // スマホの一文表示中だけ右下に出すタップ誘導アイコンの表示量
  // チラシ退出（sExit）でフェードイン。最後の文（SN）までは表示し続け、
  // その先（最終ストア画面へ送る区間）でフェードアウトする
  const step = 1 / Math.max(STOPS - 1, 1);
  const tapCueIn = clamp(mapRange(p, sTitle, sExit, 0, 1), 0, 1);
  const tapCueOut = p <= SN ? 1 : clamp((1 - p) / (step * 0.5), 0, 1);
  const tapCueOpacity = narrow ? tapCueIn * tapCueOut : 0;

  return createPortal(
    <>
    {CloseBtn}
    <div
      ref={scrollRef}
      onScroll={onScroll}
      role="dialog"
      aria-modal="true"
      className="notice-font"
      style={{
        position: 'fixed', inset: 0, zIndex: 10000, overflowY: 'auto',
        WebkitOverflowScrolling: 'touch',
        background: 'rgba(8,11,20,0.82)',
        backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)',
      }}
    >
      <div style={{ position: 'relative', height: `${trackVH}vh` }}>
        <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>
          {/* チラシ＋ストアアイコン（装飾。バッジのみクリック可） */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: `translate(-50%, -50%) translateX(${fTx}vw) translateY(${fTy}vh) scale(${fScale})`,
            opacity: fOpacity, visibility: fHidden ? 'hidden' : 'visible',
            zIndex: 1, willChange: 'transform, opacity', pointerEvents: 'none',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
          }}>
            {img && (
              <img
                src={img}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="notice-flyer-slap"
                style={{
                  display: 'block', maxHeight: '86vh', maxWidth: '90vw', width: 'auto', height: 'auto',
                  borderRadius: '12px', boxShadow: '0 18px 50px rgba(0,0,0,0.45)', background: '#fff',
                }}
              />
            )}
          </div>

          {/* ストアアイコン（最終、中央のチラシ下に等倍で表示） */}
          {storeBadges && (
            <div style={{
              position: 'absolute', top: '78vh', left: '50%', transform: 'translateX(-50%)',
              opacity: badgeOpacity, display: badgeOpacity > 0 ? 'block' : 'none', zIndex: 3,
            }}>
              {storeBadges}
            </div>
          )}

          {/* 説明文：1文ずつ画面中央でフォーカス遷移（ぼかし＋上方向ドリフト） */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none' }}>
            {slides.map((sl, j) => {
              const s = slideSigned(j + 2);
              const a = clamp(1 - Math.abs(s), 0, 1);
              const op = easeOut(a);
              const ty = -s * 46;
              const bl = Math.abs(s) * 10;
              const sc = 1 - Math.abs(s) * 0.05;
              const base = {
                position: 'absolute', top: '44%', left: '50%',
                transform: `translate(-50%, -50%) translateY(${ty}px) scale(${sc})`,
                opacity: op, filter: bl > 0.05 ? `blur(${bl}px)` : 'none',
                visibility: op < 0.01 ? 'hidden' : 'visible',
                width: narrow ? '86vw' : '68vw', maxWidth: narrow ? '560px' : '1000px', textAlign: 'center',
                color: '#fff', textShadow: '0 2px 18px rgba(0,0,0,0.55)',
              };
              return (
                <p key={j} style={{
                  ...base, margin: 0, lineHeight: 2.0,
                  fontSize: narrow
                    ? (sl.last ? '2.2rem' : sl.lead ? '1.75rem' : '1.55rem')
                    : (sl.last ? '3.5rem' : sl.lead ? '2.8rem' : '2.5rem'),
                  fontWeight: sl.last ? 500 : (sl.lead ? 500 : 400),
                }}>
                  {sl.text}
                </p>
              );
            })}
          </div>

          {/* 見出し（チラシ画像の下・矢印の上。スクロールで現れる） */}
          <div style={{
            position: 'absolute', top: '73vh', left: '50%',
            transform: `translateX(-50%) translateY(${titleTy}px)`,
            width: '84vw', maxWidth: '960px', textAlign: 'center', zIndex: 2,
            opacity: titleOpacity, visibility: titleOpacity < 0.01 ? 'hidden' : 'visible',
            color: '#fff', textShadow: '0 2px 14px rgba(0,0,0,0.55)', pointerEvents: 'none',
          }}>
            {narrow ? (
              <>
                {/* スマホ：タイトル幅のブロックを中央寄せし、その中でタイプを頭（左）・日付を同じ行の右に配置 */}
                <div style={{ display: 'inline-block', maxWidth: '100%', textAlign: 'left' }}>
                  {(item.type || date) && (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', marginBottom: '10px' }}>
                      {item.type ? (
                        <span style={{
                          fontSize: '0.8rem', fontWeight: 700, background: tc.bg, color: tc.text,
                          padding: '3px 12px', borderRadius: '999px', display: 'inline-block', textShadow: 'none',
                        }}>{item.type}</span>
                      ) : <span />}
                      {date && <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', whiteSpace: 'nowrap' }}>{date}</span>}
                    </div>
                  )}
                  <FitOneLine as="h2" text={item.title} max={30} min={13} className="notice-font notice-heading-font" style={{ fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.3, letterSpacing: '0.03em' }} />
                </div>
              </>
            ) : (
              <>
                {item.type && (
                  <span style={{
                    fontSize: '0.8rem', fontWeight: 700, background: tc.bg, color: tc.text,
                    padding: '3px 12px', borderRadius: '999px', display: 'inline-block', marginBottom: '10px',
                    textShadow: 'none',
                  }}>{item.type}</span>
                )}
                <FitOneLine as="h2" text={item.title} max={42} min={14} className="notice-font notice-heading-font" style={{ fontWeight: 700, color: '#fff', margin: '0 0 6px', lineHeight: 1.3, letterSpacing: '0.03em' }} />
                {date && <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', margin: 0 }}>{date}</p>}
              </>
            )}
          </div>

          {/* 一文表示中の右下タップ誘導（スマホのみ）。「タップで詳細へ」と同じ
              白いタップアイコンに統一。装飾なので pointerEvents:none でタップは
              背面のコンテナへ通し、画面どこでも1ステップ送りが効くようにする */}
          {tapCueOpacity > 0.01 && (
            <div style={{
              position: 'absolute', bottom: '28px', left: '50%', transform: 'translateX(-50%)', zIndex: 4,
              opacity: tapCueOpacity, pointerEvents: 'none',
              color: '#E2E8F0', textShadow: '0 1px 4px rgba(0,0,0,0.4)',
            }}>
              <span className="scroll-arrow" style={{ display: 'block' }}><TapGlyph size={28} /></span>
            </div>
          )}

          {/* スクロール誘導（フェーズAでのみ表示） */}
          <div style={{
            position: 'absolute', bottom: '28px', left: '50%', transform: 'translateX(-50%)',
            opacity: arrowOpacity, pointerEvents: 'none',
            color: '#E2E8F0', fontSize: '0.85rem', fontWeight: 700,
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
            textShadow: '0 1px 4px rgba(0,0,0,0.4)',
          }}>
            <span>{narrow ? 'タップで詳細へ' : 'スクロールで詳細へ'}</span>
            {narrow ? (
              <span className="scroll-arrow" style={{ display: 'block' }}><TapGlyph size={24} /></span>
            ) : (
              <svg className="scroll-arrow" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
                <path d="M6 9l6 6 6-6" />
              </svg>
            )}
          </div>

          {/* 最終画面から下へスクロールで全文を表示するためのヒント */}
          <div style={{
            position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)',
            opacity: p >= 0.999 ? 1 : 0, transition: 'opacity 0.3s ease', pointerEvents: 'none',
            color: '#E2E8F0', fontSize: '0.82rem', fontWeight: 700,
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px',
            textShadow: '0 1px 4px rgba(0,0,0,0.4)',
          }}>
            <span>{narrow ? 'タップで全文を読む' : '下にスクロールで全文を読む'}</span>
            {narrow ? (
              <span className="scroll-arrow" style={{ display: 'block' }}><TapGlyph size={22} /></span>
            ) : (
              <svg className="scroll-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
                <path d="M6 9l6 6 6-6" />
              </svg>
            )}
          </div>
        </div>
      </div>

      {/* 全文セクション（最終画面の下。スクロールで表示。背景に白文字） */}
      <div style={{ position: 'relative', marginTop: '4vh', padding: '0 16px 20vh', display: 'flex', justifyContent: 'center' }}>
        <div
          onClick={(e) => e.stopPropagation()}
          style={{ width: '100%', maxWidth: '760px', color: '#fff', textShadow: '0 1px 10px rgba(0,0,0,0.5)' }}
        >
          {item.type && (
            <span style={{
              fontSize: '0.8rem', fontWeight: 700, background: tc.bg, color: tc.text,
              padding: '3px 12px', borderRadius: '999px', display: 'inline-block', marginBottom: '14px',
              textShadow: 'none',
            }}>{item.type}</span>
          )}
          <FitOneLine as="h2" text={item.title} max={36} min={14} className="notice-font notice-heading-font" style={{ fontWeight: 700, color: '#fff', margin: '0 0 10px', lineHeight: 1.3, letterSpacing: '0.03em' }} />
          {date && <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', margin: '0 0 24px' }}>{date}</p>}
          {body && <div className="notice-fulltext" style={{ fontSize: '1.2rem', lineHeight: 2.0 }} dangerouslySetInnerHTML={{ __html: bodyHtml }} />}
        </div>
      </div>
    </div>
    </>,
    document.body
  );
}
