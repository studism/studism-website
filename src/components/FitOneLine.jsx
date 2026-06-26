import React, { useLayoutEffect, useRef, useState } from 'react';

// テキストを「常に1行」で表示するコンポーネント。
// コンテナ幅に合わせてフォントサイズを自動縮小し、どの画面サイズでも折り返さない・見切れない。
// 比例縮小だけだと丸め誤差やフォント差で1〜2px はみ出すことがあるため、最後に
// 1pxずつ詰める検証ループで「必ず収まる」ことを保証する。幅が未確定(0)のときは
// 次フレームで再計測し、Webフォント読込やリサイズ・回転にも追従する。
//   as    … 出力タグ（'h2' / 'p' など）
//   text  … 表示文字列
//   max   … 基準（最大）フォントサイズ(px)。収まる時はこのサイズ
//   min   … これ以上は縮めない下限(px)
export default function FitOneLine({ as: Tag = 'div', text, max = 32, min = 11, className, style }) {
  const wrapRef = useRef(null);
  const innerRef = useRef(null);
  const [fs, setFs] = useState(max);

  useLayoutEffect(() => {
    let cancelled = false;
    let retryRaf = 0;
    let retries = 0;

    const fit = () => {
      if (cancelled) return;
      const wrap = wrapRef.current;
      const inner = innerRef.current;
      if (!wrap || !inner) return;

      const avail = wrap.clientWidth;
      // 幅がまだ確定していない（非表示直後・レイアウト前など）→ 次フレームで再試行。
      if (avail <= 0) {
        if (retries < 30) { retries += 1; retryRaf = requestAnimationFrame(fit); }
        return;
      }
      retries = 0;

      // まず最大サイズで必要幅を測る。
      inner.style.fontSize = max + 'px';
      const need = inner.scrollWidth;
      if (need <= 0) { setFs(max); return; }

      let size = max;
      if (need > avail) {
        // 比例縮小（やや小さめに）してから、確実に収まるまで1pxずつ詰める。
        size = Math.max(min, Math.floor((max * avail) / need));
        inner.style.fontSize = size + 'px';
        while (size > min && inner.scrollWidth > avail) {
          size -= 1;
          inner.style.fontSize = size + 'px';
        }
      }
      setFs(size);
    };

    fit();

    const ro = new ResizeObserver(fit);
    if (wrapRef.current) ro.observe(wrapRef.current);
    // 親要素の幅変化（レイアウト変化）にも追従する。
    if (wrapRef.current && wrapRef.current.parentElement) ro.observe(wrapRef.current.parentElement);
    window.addEventListener('resize', fit);

    // Webフォント（Kaisei Tokumin 等）は遅れて読み込まれ、確定後に字幅が変わる。
    // 確定前に細いフォールバントで測るとサイズが大きすぎて見切れるため、読込完了後に測り直す。
    if (typeof document !== 'undefined' && document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => { if (!cancelled) fit(); });
    }
    // 遅延読込・表示アニメ後の取りこぼし対策で数回だけ再フィット。
    const t1 = setTimeout(fit, 250);
    const t2 = setTimeout(fit, 800);

    return () => {
      cancelled = true;
      cancelAnimationFrame(retryRaf);
      clearTimeout(t1);
      clearTimeout(t2);
      ro.disconnect();
      window.removeEventListener('resize', fit);
    };
  }, [text, max, min]);

  return React.createElement(
    Tag,
    { ref: wrapRef, className, style: { ...style, overflow: 'hidden' } },
    <span ref={innerRef} style={{ display: 'inline-block', whiteSpace: 'nowrap', fontSize: `${fs}px` }}>
      {text}
    </span>
  );
}
