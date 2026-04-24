const CALENDLY = 'https://calendly.com/cecile-pagneux/intro-call-digital-business-acquisition';

const navLinks = [
  { label: 'Why Australia', href: '#why' },
  { label: 'How We Help', href: '#approach' },
  { label: 'Who We Work With', href: '#forwho' },
  { label: 'Our Model', href: '#model' },
];
const focusLinks = [
  { label: 'Cybersecurity', href: '#why' },
  { label: 'Industrial Systems', href: '#why' },
  { label: 'AI Technologies', href: '#why' },
  { label: 'Energy & Defence', href: '#why' },
];
const contactLinks = [
  { label: 'Start a conversation', href: CALENDLY, external: true },
  { label: 'Partner with us', href: CALENDLY, external: true },
  { label: 'Perth, Western Australia', href: '#', external: false },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d1422] border-t border-white/[0.08] px-[5%] pt-12 pb-8">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">
        <div className="md:col-span-1">
          <a href="#" className="flex items-center gap-2.5 no-underline mb-3">
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
          <p className="text-slate-400 text-sm leading-[1.7] max-w-[260px]">
            Helping international deep-tech companies deploy and scale in Australia. Market builder for cybersecurity, AI, industrial and energy technology companies.
          </p>
        </div>
        {[
          { title: 'Company', links: navLinks },
          { title: 'Focus', links: focusLinks },
          { title: 'Contact', links: contactLinks },
        ].map(col => (
          <div key={col.title}>
            <h5 className="text-xs font-semibold tracking-[0.1em] uppercase text-slate-400 mb-4">{col.title}</h5>
            <ul className="list-none flex flex-col gap-2.5">
              {col.links.map((l: { label: string; href: string; external?: boolean }) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="text-slate-400 hover:text-slate-100 no-underline text-sm transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-[1100px] mx-auto pt-6 border-t border-white/[0.08] flex justify-between items-center flex-wrap gap-4">
        <p className="text-xs text-slate-400">© 2026 CVDS Digital Ventures · Perth, WA · Critical technology deployment in Australia</p>
        <p className="text-[0.75rem] text-slate-600">All enquiries strictly confidential</p>
      </div>
    </footer>
  );
}
