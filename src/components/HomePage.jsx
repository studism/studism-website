import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, BookOpen, Clock, Trophy, Download, Star, ChevronLeft, ChevronRight } from 'lucide-react';
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

/* ═══════════ FEATURES ═══════════ */
const FEATS = [
  { icon:<BookOpen className="w-7 h-7"/>, title:'語学力を爆上げ',   desc:'レベル別クイズでゲーム感覚に英語習得。カスタムリストで自分だけの学習ルートを。', tag:'語学学習',     c:'#818cf8', app:'sakuraenglish' },
  { icon:<Clock    className="w-7 h-7"/>, title:'時間を武器にする', desc:'学習時間を記録・可視化。毎日の習慣が、最強の武器になる仕組みを提供。',           tag:'時間管理',     c:'#67e8f9', app:'timelyze'     },
  { icon:<Trophy   className="w-7 h-7"/>, title:'目標を達成する',   desc:'明確な目標設定とデータで三日坊主とサヨナラ。継続が圧倒的な差を生む。',           tag:'モチベーション', c:'#34d399', app:'timelyze'     },
];
const FeaturesSection = () => (
  <section id="about" className="py-28 relative overflow-hidden" style={{ background:'#07070f' }}>
    <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage:'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize:'32px 32px' }} />
    <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background:'radial-gradient(circle,rgba(99,102,241,0.07),transparent 70%)', filter:'blur(80px)' }} />

    <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
      <div className="text-center mb-16 space-y-4">
        <p className="text-sm font-black tracking-widest uppercase" style={{ color:'#818cf8' }}>Why Studism?</p>
        <h2 className="font-black leading-tight" style={{ fontSize:'clamp(2.2rem,5vw,3.5rem)', letterSpacing:'-0.03em' }}>
          <span style={{ color:'#fff' }}>選ばれる</span>
          <span style={{ background:'linear-gradient(135deg,#818cf8,#67e8f9)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}> 3つの理由</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {FEATS.map((f,i) => (
          <Link key={i} to={`/app/${f.app}`}
            className="group block rounded-3xl p-8 space-y-6 transition-all duration-400 hover:-translate-y-3"
            style={{ background:'rgba(255,255,255,0.03)', border:`1px solid rgba(255,255,255,0.07)`, boxShadow:'0 0 0 0 transparent', ':hover': { boxShadow:`0 20px 60px ${f.c}15` } }}
            onMouseEnter={e => e.currentTarget.style.boxShadow=`0 20px 60px ${f.c}18`}
            onMouseLeave={e => e.currentTarget.style.boxShadow='none'}>
            <div className="flex items-start justify-between">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                style={{ background:`${f.c}14`, color:f.c }}>
                {f.icon}
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-black" style={{ background:`${f.c}14`, color:f.c }}>{f.tag}</span>
            </div>
            <div>
              <h3 className="text-xl font-black text-white mb-2">{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color:'rgba(255,255,255,0.45)' }}>{f.desc}</p>
            </div>
            <div className="flex items-center gap-1 text-sm font-black group-hover:gap-2.5 transition-all" style={{ color:f.c }}>
              詳しく見る <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════ APPS ═══════════ */
const APPS = [
  { id:'sakuraenglish', name:'SakuraEnglish', sub:'英語を、桜のように咲かせよう', desc:'レベル別クイズ・カスタム単語リスト・復習機能で、スマホひとつで本格英語学習。', icon:'/images/sakuraenglish.png', badge:'語学学習', feats:[{e:'🎯',t:'レベル別クイズ'},{e:'📝',t:'カスタム単語リスト'},{e:'🔄',t:'スマート復習'}], grad:'linear-gradient(135deg,#ec4899 0%,#f97316 55%,#fbbf24 100%)', glow:'rgba(236,72,153,0.35)' },
  { id:'timelyze',      name:'Timelyze',      sub:'時間を、最強の武器にしよう',   desc:'学習時間の記録・グラフ化・目標管理がこれ一本。毎日のルーティンが楽しくなる。', icon:'/images/timelyze.png',      badge:'生産性',   feats:[{e:'⏱',t:'時間記録・追跡'},{e:'📊',t:'データ可視化'},{e:'🎯',t:'目標管理'}],       grad:'linear-gradient(135deg,#6366f1 0%,#3b82f6 55%,#06b6d4 100%)', glow:'rgba(99,102,241,0.35)' },
];
const AppsSection = () => (
  <section id="apps" className="py-28 relative overflow-hidden" style={{ background:'#070711' }}>
    <span className="absolute left-0 bottom-0 font-black select-none pointer-events-none hidden xl:block" style={{ fontSize:200, lineHeight:0.85, color:'transparent', WebkitTextStroke:'1px rgba(255,255,255,0.025)', letterSpacing:'-0.06em' }}>APP</span>

    <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
      <div className="text-center mb-16 space-y-4">
        <p className="text-sm font-black tracking-widest uppercase" style={{ color:'#fcd34d' }}>Our Apps</p>
        <h2 className="font-black leading-tight text-white" style={{ fontSize:'clamp(2.2rem,5vw,3.5rem)', letterSpacing:'-0.03em' }}>
          2つのアプリで<br />
          <span style={{ background:'linear-gradient(135deg,#fcd34d,#f97316)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>学びが変わる</span>
        </h2>
      </div>

      <div className="space-y-7 max-w-4xl mx-auto">
        {APPS.map(app => (
          <div key={app.id} className="group relative rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.018] hover:-translate-y-1"
            style={{ background:app.grad, boxShadow:`0 24px 80px ${app.glow}, 0 4px 20px rgba(0,0,0,0.5)` }}>
            {/* scan line */}
            <div className="absolute left-0 w-full h-px scan-line pointer-events-none" style={{ background:'linear-gradient(90deg,transparent,rgba(255,255,255,0.45),transparent)' }} />
            {/* gloss */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background:'linear-gradient(145deg,rgba(255,255,255,0.14) 0%,transparent 55%)' }} />

            <div className="relative p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-[2rem] flex items-center justify-center group-hover:rotate-3 transition-transform duration-400"
                style={{ background:'rgba(255,255,255,0.18)', backdropFilter:'blur(12px)', border:'1.5px solid rgba(255,255,255,0.3)' }}>
                <img src={app.icon} alt={app.name} className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-2xl" />
              </div>

              <div className="flex-1 text-center md:text-left space-y-3">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-black text-white/80 bg-white/15 border border-white/25">{app.badge}</span>
                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">{app.name}</h3>
                <p className="font-bold" style={{ color:'rgba(255,255,255,0.75)' }}>{app.sub}</p>
                <p className="text-sm leading-relaxed max-w-md" style={{ color:'rgba(255,255,255,0.6)' }}>{app.desc}</p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {app.feats.map((f,j) => (
                    <span key={j} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-white" style={{ background:'rgba(255,255,255,0.14)', border:'1px solid rgba(255,255,255,0.2)' }}>
                      {f.e} {f.t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex-shrink-0 flex flex-col gap-3">
                <Link to={`/app/${app.id}`} className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-black text-sm transition-all hover:scale-105"
                  style={{ background:'rgba(255,255,255,0.95)', color:'#1e1b4b', boxShadow:'0 4px 20px rgba(0,0,0,0.25)' }}>
                  詳細を見る <ArrowRight className="w-4 h-4" />
                </Link>
                <button className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm text-white transition-all hover:bg-white/25"
                  style={{ background:'rgba(255,255,255,0.12)', border:'1px solid rgba(255,255,255,0.25)' }}>
                  <Download className="w-4 h-4" /> ダウンロード
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════ CTA ═══════════ */
const CTASection = () => (
  <section className="relative overflow-hidden py-28" style={{ background:'#07070f' }}>
    <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage:'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)', backgroundSize:'60px 60px' }} />
    <div className="absolute inset-0 pointer-events-none" style={{ background:'radial-gradient(ellipse 80% 50% at 50% 50%,rgba(99,102,241,0.08),transparent 70%)' }} />

    <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 text-center">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black tracking-widest uppercase" style={{ background:'rgba(99,102,241,0.12)', border:'1px solid rgba(99,102,241,0.3)', color:'#818cf8' }}>
          ⚡ さあ、はじめよう
        </div>
        <h2 className="font-black leading-tight" style={{ fontSize:'clamp(2.5rem,7vw,5rem)', letterSpacing:'-0.04em' }}>
          <span style={{ color:'#fff' }}>今日から<br />学びが</span>
          <span style={{ background:'linear-gradient(135deg,#818cf8 0%,#67e8f9 50%,#c084fc 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}> まるで変わる。</span>
        </h2>
        <p className="text-lg leading-relaxed mx-auto" style={{ color:'rgba(255,255,255,0.45)', maxWidth:'28rem' }}>
          無料でダウンロード。英語学習も時間管理も、Studismなら楽しく続けられる。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <a href="#apps" className="inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-2xl font-black text-base text-white transition-all hover:scale-105"
            style={{ background:'linear-gradient(135deg,#6366f1,#8b5cf6)', boxShadow:'0 8px 40px rgba(99,102,241,0.45)' }}>
            <Download className="w-5 h-5" /> 無料でダウンロード
          </a>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-2xl font-bold text-base transition-all hover:scale-105 hover:bg-white/8"
            style={{ border:'1.5px solid rgba(255,255,255,0.12)', color:'rgba(255,255,255,0.6)' }}>
            お問い合わせ
          </Link>
        </div>
      </div>
    </div>
  </section>
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
      <FeaturesSection />
      <AppsSection />
      <CTASection />
      <NewsSection />
      <Footer />
    </div>
  );
}
