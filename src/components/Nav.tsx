import { useState, useEffect } from 'react';
import cvdsLogo from './cvds-logo.png';

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
      <a href="#" className="flex items-center gap-2 no-underline">
        <img src={cvdsLogo} alt="CVDS Digital Ventures" className="h-12 w-auto object-contain" />
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
