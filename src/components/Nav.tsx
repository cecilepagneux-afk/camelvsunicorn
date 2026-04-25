import { useState, useEffect } from 'react';
import cvdsLogo from './cvds-logo.png';

const CALENDLY = 'https://calendly.com/cecile-pagneux/intro-call-australian-market-entry';

const links = [
  ['#why', 'Why Australia'],
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
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] h-[68px] transition-all ${scrolled || menuOpen ? 'bg-[rgba(8,12,20,0.98)] backdrop-blur-lg border-b border-white/[0.08]' : 'bg-transparent'}`}>
        <a href="#" className="flex items-center no-underline">
          <img src={cvdsLogo} alt="CVDS Digital Ventures" className="h-20 w-auto object-contain" />
        </a>
        <ul className="hidden md:flex gap-8 list-none">
          {links.map(([href, label]) => (
            <li key={href}>
              <a href={href} className="text-slate-400 no-underline text-sm font-medium hover:text-slate-100 transition-colors">{label}</a>
            </li>
          ))}
        </ul>
        <a href={CALENDLY} target="_blank" rel="noopener noreferrer"
          className="hidden md:inline-block bg-[#1A6ED4] hover:bg-[#1558b0] text-white px-5 py-2 rounded-lg text-sm font-semibold no-underline transition-colors whitespace-nowrap">
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
      <div className={`fixed inset-0 z-40 flex flex-col pt-[68px] bg-[rgba(8,12,20,0.98)] backdrop-blur-lg transition-all duration-300 md:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <ul className="flex flex-col list-none px-[5%] pt-8 gap-1">
          {links.map(([href, label]) => (
            <li key={href}>
              <a href={href} onClick={() => setMenuOpen(false)} className="block text-slate-300 no-underline text-lg font-medium hover:text-white transition-colors py-4 border-b border-white/[0.06]">{label}</a>
            </li>
          ))}
        </ul>
        <div className="px-[5%] pt-8">
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="block w-full bg-[#1A6ED4] hover:bg-[#1558b0] text-white px-5 py-4 rounded-xl text-base font-bold no-underline transition-colors text-center">
            Start a conversation
          </a>
        </div>
      </div>
    </>
  );
}
