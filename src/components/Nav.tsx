import { useState, useEffect } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] h-[68px] transition-all ${scrolled ? 'bg-[rgba(8,12,20,0.95)] backdrop-blur-lg border-b border-white/[0.08]' : 'bg-transparent'}`}>
      <a href="#" className="flex items-center gap-2.5 font-bold text-base tracking-[0.04em] no-underline text-slate-100">
        <div className="w-8 h-8 bg-[#1A6ED4] rounded-lg grid place-items-center text-xs font-extrabold text-white">CV</div>
        CVDS Digital Ventures
      </a>
      <ul className="hidden md:flex gap-8 list-none">
        {[['#why','Why Australia'],['#approach','How We Help'],['#forwho','Who We Work With'],['#model','Our Model'],['#focus','Focus Areas']].map(([href, label]) => (
          <li key={href}>
            <a href={href} className="text-slate-400 no-underline text-sm font-medium hover:text-slate-100 transition-colors">{label}</a>
          </li>
        ))}
      </ul>
      <a href="#contact" className="bg-[#1A6ED4] hover:bg-[#1558b0] text-white px-5 py-2 rounded-lg text-sm font-semibold no-underline transition-colors whitespace-nowrap">
        Start a conversation
      </a>
    </nav>
  );
}
