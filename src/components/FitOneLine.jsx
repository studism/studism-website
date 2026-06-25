import React, { useLayoutEffect, useRef, useState } from 'react';

// テキストを「常に1行」で表示するコンポーネント。
// コンテナ幅に合わせてフォントサイズを自動縮小し、どの画面サイズでも折り返さない。
// ResizeObserver で幅変化のたびに再フィットするため、リサイズ・回転にも追従する。
//   as    … 出力タグ（'h2' / 'p' など）
//   text  … 表示文字列
//   max   … 基準（最大）フォントサイズ(px)。収まる時はこのサイズ
//   min   … これ以上は縮めない下限(px)
export default function FitOneLine({ as: Tag = 'div', text, max = 32, min = 11, className, style }) {
  const wrapRef = useRef(null);
  const innerRef = useRef(null);
  const [fs, setFs] = useState(max);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner) return;
    const fit = () => {
      inner.style.fontSize = max + 'px';                 // 一旦最大で測る
      const avail = wrap.clientWidth;
      const need = inner.scrollWidth;                    // 1行に必要な幅
      setFs(need > avail && need > 0 ? Math.max(min, (max * avail) / need) : max);
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(wrap);
    return () => ro.disconnect();
  }, [text, max, min]);

  return React.createElement(
    Tag,
    { ref: wrapRef, className, style: { ...style, overflow: 'hidden' } },
    <span ref={innerRef} style={{ display: 'inline-block', whiteSpace: 'nowrap', fontSize: `${fs}px` }}>
      {text}
    </span>
  );
}
