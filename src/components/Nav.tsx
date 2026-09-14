import { useState, useEffect } from 'react';
import cvdsLogo from './cvds-logo.png';

const CALENDLY = 'https://calendly.com/cecile-pagneux/intro-call-australian-market-entry';

const links = [
  ['#why', 'Why Australia'],
  ['#assessment', 'Assessment'],
  ['#approach', 'How We Help'],
  ['#forwho', 'Who We Work With'],
  ['#about', 'About'],
  ['#model', 'Our Model'],
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 grid grid-cols-[1fr_auto] md:grid-cols-[180px_1fr_auto] items-center gap-6 px-[5%] h-[76px] transition-all ${scrolled || menuOpen ? 'bg-[rgba(7,13,25,0.96)] backdrop-blur-lg border-b border-white/[0.1]' : 'bg-[rgba(7,13,25,0.72)] backdrop-blur-sm border-b border-white/[0.06]'}`}>
        <a href="#" className="flex items-center no-underline">
          <img src={cvdsLogo} alt="CVDS Digital Ventures" className="h-[64px] w-auto object-contain" />
        </a>
        <ul className="hidden md:flex justify-center gap-6 list-none">
          {links.map(([href, label]) => (
            <li key={href}>
              <a href={href} className="text-slate-400 no-underline text-xs font-medium hover:text-white transition-colors">{label}</a>
            </li>
          ))}
        </ul>
        <a href={CALENDLY} target="_blank" rel="noopener noreferrer"
          className="hidden md:inline-block border border-[#1686ff] bg-[#1686ff]/10 hover:bg-[#1686ff] text-white px-4 py-2.5 text-xs font-semibold no-underline transition-colors whitespace-nowrap">
          Start a conversation
        </a>
        <button
          onClick={() => setMenuOpen(o => !o)}
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] bg-transparent border-none cursor-pointer p-0"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[2px] bg-slate-300 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-[2px] bg-slate-300 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] bg-slate-300 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </nav>
      <div className={`fixed inset-0 z-40 flex flex-col pt-[76px] bg-[rgba(7,13,25,0.98)] backdrop-blur-lg transition-all duration-300 md:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <ul className="flex flex-col list-none px-[5%] pt-8 gap-1">
          {links.map(([href, label]) => (
            <li key={href}>
              <a href={href} onClick={() => setMenuOpen(false)} className="block text-slate-300 no-underline text-lg font-medium hover:text-white transition-colors py-4 border-b border-white/[0.06]">{label}</a>
            </li>
          ))}
        </ul>
        <div className="px-[5%] pt-8">
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="block w-full bg-[#1686ff] hover:bg-[#0875e9] text-white px-5 py-4 text-base font-semibold no-underline transition-colors text-center">
            Start a conversation
          </a>
        </div>
      </div>
    </>
  );
}
