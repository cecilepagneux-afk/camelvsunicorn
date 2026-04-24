import { useState, useEffect } from 'react';

const CALENDLY = 'https://calendly.com/cecile-pagneux/intro-call-digital-business-acquisition';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] h-[68px] transition-all ${scrolled ? 'bg-[rgba(8,12,20,0.95)] backdrop-blur-lg border-b border-white/[0.08]' : 'bg-transparent'}`}>
      <a href="#" className="flex items-center gap-2.5 no-underline group">
        <div className="w-8 h-8 rounded-lg bg-[rgba(26,110,212,0.15)] border border-[rgba(26,110,212,0.4)] flex items-center justify-center flex-shrink-0">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="9" cy="9" r="2.5" fill="#1A6ED4"/>
            <circle cx="3" cy="4" r="1.8" fill="#22c55e"/>
            <circle cx="15" cy="4" r="1.8" fill="#22c55e"/>
            <circle cx="3" cy="14" r="1.8" fill="#22c55e"/>
            <circle cx="15" cy="14" r="1.8" fill="#22c55e"/>
            <line x1="9" y1="9" x2="3" y2="4" stroke="#22c55e" strokeWidth="1.2" strokeOpacity="0.7"/>
            <line x1="9" y1="9" x2="15" y2="4" stroke="#22c55e" strokeWidth="1.2" strokeOpacity="0.7"/>
            <line x1="9" y1="9" x2="3" y2="14" stroke="#22c55e" strokeWidth="1.2" strokeOpacity="0.7"/>
            <line x1="9" y1="9" x2="15" y2="14" stroke="#22c55e" strokeWidth="1.2" strokeOpacity="0.7"/>
          </svg>
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-white font-extrabold text-[1.05rem] tracking-tight">CVDS</span>
          <span className="text-slate-400 text-[0.65rem] tracking-[0.08em] uppercase font-medium">Digital Ventures</span>
        </div>
      </a>
      <ul className="hidden md:flex gap-8 list-none">
        {[['#why','Why Australia'],['#approach','How We Help'],['#forwho','Who We Work With'],['#model','Our Model']].map(([href, label]) => (
          <li key={href}>
            <a href={href} className="text-slate-400 no-underline text-sm font-medium hover:text-slate-100 transition-colors">{label}</a>
          </li>
        ))}
      </ul>
      <a href={CALENDLY} target="_blank" rel="noopener noreferrer"
        className="bg-[#1A6ED4] hover:bg-[#1558b0] text-white px-5 py-2 rounded-lg text-sm font-semibold no-underline transition-colors whitespace-nowrap">
        Start a conversation
      </a>
    </nav>
  );
}
