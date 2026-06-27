import { useEffect, useRef, useState } from 'react';

// スクロールで要素が画面に入る／出るたびに inView を true/false で切り替えるフック
// （見出しの出現アニメ用）。デフォルトは出入りのたびに再生。once=true なら最初の一度だけ。
// rootMargin の下マージンを負にして、要素が少し見え始めた時点で発火させる。
export default function useInView({ threshold = 0.15, rootMargin = '0px 0px -10% 0px', once = false } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // 非対応環境では常に表示（コンテンツが消えないようにするフォールバック）。
    if (typeof IntersectionObserver === 'undefined') { setInView(true); return; }
    const io = new IntersectionObserver((entries) => {
      const visible = entries[0].isIntersecting;
      setInView(visible);                 // 画面外へ出たら false に戻し、再度入ると再アニメーション
      if (visible && once) io.disconnect();
    }, { threshold, rootMargin });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin, once]);
  return [ref, inView];
}
