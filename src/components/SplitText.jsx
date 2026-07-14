// 見出しを一文字ずつスライドイン。各文字を inline-block の span にし、transition-delay を
// 1文字ずつずらして右→左へスライド＋フェードイン。画面外(inView=false)では即座に初期位置へ
// 戻すので、スクロールで戻るたびに再生される。PC・スマホ共通。
//   text      … 表示文字列（'\n' で改行＝縦書きなら列が増える）
//   inView    … true で表示（出現アニメ再生）、false で初期位置へ
//   step      … 1文字ごとの遅延(s)
//   from      … 未表示時の初期transform（既定は右→左スライド。縦書きの上→下なら 'translateY(-16px)' 等）
//   charStyle … 文字ごとの追加スタイルを返す関数 (ch, i) => style（特定文字だけ縮小等）
export default function SplitText({ text, inView, step = 0.05, startDelay = 0, from = 'translateX(20px)', style, charStyle }) {
  return (
    <span style={style}>
      {Array.from(text).map((ch, i) => (
        <span key={i} style={{
          display: 'inline-block',
          whiteSpace: 'pre',
          opacity: inView ? 1 : 0,
          transform: inView ? 'none' : from,
          transition: 'opacity 0.5s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          transitionDelay: inView ? `${startDelay + i * step}s` : '0s',
          willChange: 'opacity, transform',
          ...(charStyle ? charStyle(ch, i) : null),
        }}>{ch}</span>
      ))}
    </span>
  );
}
