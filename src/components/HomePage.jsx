import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/* ═══════════ HERO ═══════════ */
const Hero = () => (
  <section className="relative overflow-hidden flex items-center" style={{ minHeight: 'calc(100vh - 68px)', background: '#070711' }}>

    {/* mesh gradient */}
    <div className="absolute inset-0 pointer-events-none">
      <div style={{ position:'absolute', top:'-15%', right:'-10%', width:700, height:700, borderRadius:'50%', background:'radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 65%)', filter:'blur(80px)' }} />
      <div style={{ position:'absolute', bottom:'-20%', left:'-10%', width:600, height:600, borderRadius:'50%', background:'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 65%)', filter:'blur(80px)' }} />
      <div style={{ position:'absolute', top:'40%', left:'42%', width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)', filter:'blur(60px)' }} />
    </div>

    {/* subtle dot grid */}
    <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage:'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize:'40px 40px' }} />

    {/* ghost text */}
    <span className="absolute right-0 bottom-0 font-black select-none pointer-events-none hidden xl:block" style={{ fontSize:240, lineHeight:0.85, color:'transparent', WebkitTextStroke:'1px rgba(255,255,255,0.03)', letterSpacing:'-0.06em' }}>
      STUDY
    </span>

    <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 py-20">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* ── text ── */}
        <div className="space-y-9">
          {/* eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-black tracking-widest uppercase" style={{ background:'rgba(99,102,241,0.12)', border:'1px solid rgba(99,102,241,0.3)', color:'#818cf8' }}>
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            学習アプリ — 完全無料
          </div>

          {/* headline */}
          <div className="space-y-1">
            <p className="text-xl font-bold" style={{ color:'rgba(255,255,255,0.35)' }}>勉強が、もっと</p>
            <h1 className="font-black leading-none" style={{ fontSize:'clamp(4rem,10vw,8rem)', letterSpacing:'-0.04em' }}>
              <span style={{ display:'block', background:'linear-gradient(135deg,#c7d2fe 0%,#818cf8 40%,#06b6d4 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                たのしく
              </span>
              <span style={{ display:'block', color:'#fff' }}>
                なる。
              </span>
            </h1>
          </div>

          <p className="text-lg leading-relaxed" style={{ color:'rgba(255,255,255,0.5)', maxWidth:'26rem' }}>
            Studismのアプリで、英語学習も時間管理も
            ゲーム感覚で続けられる。今日から変わろう。
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a href="#apps" className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-black text-sm text-white transition-all duration-300 hover:scale-105 group"
              style={{ background:'linear-gradient(135deg,#6366f1,#8b5cf6)', boxShadow:'0 8px 32px rgba(99,102,241,0.4)' }}>
              <Zap className="w-4 h-4" />
              今すぐはじめる
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#about" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-black text-sm transition-all hover:scale-105 hover:bg-white/8"
              style={{ border:'1.5px solid rgba(255,255,255,0.12)', color:'rgba(255,255,255,0.7)' }}>
              詳しく見る
            </a>
          </div>

          {/* stats */}
          <div className="flex items-center gap-8 pt-2">
            {[
              { n:'2',    l:'Apps',    c:'#818cf8' },
              { n:'4.8★', l:'Rating',  c:'#fcd34d' },
              { n:'Free', l:'完全無料', c:'#34d399' },
            ].map((s,i) => (
              <div key={i}>
                <div className="text-2xl font-black" style={{ color:s.c }}>{s.n}</div>
                <div className="text-xs font-bold uppercase tracking-wider" style={{ color:'rgba(255,255,255,0.25)' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── visual ── */}
        <div className="flex items-center justify-center relative">
          {/* outer ring */}
          <div className="absolute rounded-full animate-spin-slow" style={{ width:'88%', height:'88%', background:'conic-gradient(from 0deg,#6366f1,#8b5cf6,#06b6d4,#6366f1)', opacity:0.15, padding:1 }} />
          {/* glow disk */}
          <div className="absolute rounded-full animate-pulse-glow" style={{ width:'65%', height:'65%', background:'radial-gradient(circle,rgba(99,102,241,0.28) 0%,rgba(139,92,246,0.12) 55%,transparent 80%)' }} />
          {/* inner ring */}
          <div className="absolute rounded-full" style={{ width:'56%', height:'56%', border:'1px dashed rgba(99,102,241,0.2)', animation:'spin-slow 25s linear infinite reverse' }} />

          {/* center card */}
          <div className="relative z-10 w-56 h-56 md:w-72 md:h-72 rounded-[3rem] flex flex-col items-center justify-center gap-4 animate-float-slow"
            style={{ background:'rgba(255,255,255,0.04)', backdropFilter:'blur(20px)', border:'1px solid rgba(255,255,255,0.08)', boxShadow:'0 32px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)' }}>
            {/* gloss */}
            <div className="absolute inset-0 rounded-[3rem] overflow-hidden pointer-events-none">
              <div style={{ position:'absolute', top:0, left:0, right:0, height:'50%', background:'linear-gradient(180deg,rgba(255,255,255,0.06),transparent)', borderRadius:'3rem 3rem 0 0' }} />
            </div>
            <span style={{ fontSize:64 }}>🎓</span>
            <div className="text-center px-4">
              <p className="font-black text-white text-lg leading-tight">Studism</p>
              <p className="text-xs font-bold" style={{ color:'rgba(255,255,255,0.4)' }}>Learn · Grow · Shine</p>
            </div>
          </div>

          {/* floating chips */}
          {[
            { label:'📚 語学学習', top:'6%',  right:'2%',  c:'#818cf8', d:'0s'   },
            { label:'⏱ 時間管理', bottom:'18%', right:'-2%', c:'#67e8f9', d:'1.2s' },
            { label:'🆓 無料',    top:'38%', left:'-4%',  c:'#34d399', d:'0.6s' },
            { label:'⭐ 4.8',    bottom:'6%',  left:'6%',   c:'#fcd34d', d:'1.8s' },
          ].map((ch,i) => (
            <div key={i} className="absolute hidden lg:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black animate-sticker"
              style={{ top:ch.top, right:ch.right, bottom:ch.bottom, left:ch.left, background:`${ch.c}14`, border:`1px solid ${ch.c}35`, color:ch.c, animationDelay:ch.d, '--r':'0deg', boxShadow:`0 4px 20px ${ch.c}20` }}>
              {ch.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════ MARQUEE ═══════════ */
const WORDS = ['STUDY SMART','LEVEL UP','STAY FOCUSED','HAVE FUN','FREE TO USE','iOS & ANDROID','LEARN DAILY','BE AWESOME'];
const COLORS = ['#818cf8','#67e8f9','#c084fc','#fcd34d','#34d399','#f9a8d4','#a5f3fc','#fca5a5'];
const Marquee = () => (
  <div className="overflow-hidden py-3.5 select-none" style={{ background:'rgba(255,255,255,0.02)', borderTop:'1px solid rgba(255,255,255,0.05)', borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
    <div className="flex animate-marquee whitespace-nowrap">
      {[0,1].map(k => (
        <div key={k} className="flex items-center gap-10 px-10 flex-shrink-0">
          {WORDS.map((w,i) => (
            <span key={i} className="flex items-center gap-4">
              <span className="text-sm font-black tracking-widest" style={{ color:COLORS[i%8] }}>{w}</span>
              <span style={{ color:'rgba(255,255,255,0.08)' }}>◆</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);


/* ═══════════ NEWS ═══════════ */
const NEWS = [
  { date:'2025年11月22日', title:'公式ウェブサイトをリニューアルオープンしました',          type:'お知らせ',    c:'#818cf8', e:'🎉' },
  { date:'2025年11月20日', title:'お問い合わせフォームのシステムを更新しました',            type:'アップデート', c:'#67e8f9', e:'🔧' },
  { date:'2025年11月15日', title:'「SakuraEnglish」に新しい単語リストを追加しました',       type:'アップデート', c:'#34d399', e:'📚' },
];
const NewsSection = () => (
  <section id="news" className="py-24" style={{ background:'#070711' }}>
    <div className="container mx-auto px-6 md:px-12 lg:px-20">
      <div className="text-center mb-14 space-y-3">
        <p className="text-sm font-black tracking-widest uppercase" style={{ color:'#34d399' }}>News</p>
        <h2 className="font-black text-white" style={{ fontSize:'clamp(2rem,4vw,3rem)', letterSpacing:'-0.03em' }}>最新情報</h2>
      </div>
      <div className="max-w-2xl mx-auto space-y-4">
        {NEWS.map((n,i) => (
          <div key={i} className="flex items-start gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 cursor-default"
            style={{ background:'rgba(255,255,255,0.03)', border:`1px solid ${n.c}20` }}
            onMouseEnter={e => e.currentTarget.style.background=`${n.c}08`}
            onMouseLeave={e => e.currentTarget.style.background='rgba(255,255,255,0.03)'}>
            <span className="text-2xl flex-shrink-0">{n.e}</span>
            <div className="flex-1 space-y-1.5">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-black" style={{ background:`${n.c}18`, color:n.c }}>{n.type}</span>
                <span className="text-xs font-mono" style={{ color:'rgba(255,255,255,0.2)' }}>{n.date}</span>
              </div>
              <p className="text-sm font-semibold" style={{ color:'rgba(255,255,255,0.7)' }}>{n.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════ PAGE ═══════════ */
export default function HomePage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div style={{ background:'#070711' }}>
      <Header />
      <Hero />
      <Marquee />
      <NewsSection />
      <Footer />
    </div>
  );
}
