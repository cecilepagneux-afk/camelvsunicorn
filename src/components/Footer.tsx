import cvdsLogo from './cvds-logo.png';

const CALENDLY = 'https://calendly.com/cecile-pagneux/intro-call-australian-market-entry';

const navLinks = [
  { label: 'Why Australia', href: '#why' },
  { label: 'How We Help', href: '#approach' },
  { label: 'Who We Work With', href: '#forwho' },
  { label: 'Assessment', href: '#assessment' },
  { label: 'Our Model', href: '#model' },
];
const focusLinks = [
  { label: 'Cybersecurity', href: '#forwho' },
  { label: 'Industrial Systems', href: '#forwho' },
  { label: 'AI Technologies', href: '#forwho' },
  { label: 'Energy & Defence', href: '#forwho' },
];
const contactLinks = [
  { label: 'Book an intro call', href: CALENDLY, external: true },
  { label: 'Partnership enquiry', href: '#contact', external: false, requestType: 'Partnership enquiry' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/cecile-pagneux/', external: true },
  { label: 'cecile.pagneux@cvds-ventures.com', href: 'mailto:cecile.pagneux@cvds-ventures.com', external: false },
];

export default function Footer() {
  return (
    <footer className="bg-[#050a13] border-t border-white/[0.1] px-[5%] pt-14 pb-8">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-1">
          <a href="#hero" className="flex items-center no-underline mb-3">
            <img src={cvdsLogo} alt="CVDS Digital Ventures" className="h-16 w-auto object-contain" />
          </a>
          <p className="text-slate-400 text-sm leading-[1.7] max-w-[260px]">
            Australian market entry for international cybersecurity, AI, industrial and energy technology companies.
          </p>
        </div>
        {[
          { title: 'Company', links: navLinks },
          { title: 'Focus', links: focusLinks },
          { title: 'Contact', links: contactLinks },
        ].map(col => (
          <div key={col.title}>
            <h5 className="font-mono text-[0.65rem] font-medium tracking-[0.12em] uppercase text-[#1686ff] mb-4">{col.title}</h5>
            <ul className="list-none flex flex-col gap-2.5">
              {col.links.map((l: { label: string; href: string; external?: boolean; requestType?: string }) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    {...(l.requestType ? { onClick: () => window.dispatchEvent(new CustomEvent('cvds:request-type', { detail: l.requestType })) } : {})}
                    {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="text-slate-400 hover:text-slate-100 no-underline text-sm transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            {col.title === 'Contact' && <p className="text-slate-500 text-sm mt-2.5">Perth, Western Australia</p>}
          </div>
        ))}
      </div>
      <div className="max-w-[1200px] mx-auto pt-6 border-t border-white/[0.1] flex justify-between items-center flex-wrap gap-4">
        <p className="text-xs text-slate-400">© 2026 CVDS Digital Ventures · Perth, WA · Critical technology deployment in Australia</p>
        <p className="text-[0.75rem] text-slate-500"><a href="/privacy.html" className="text-slate-400 hover:text-slate-100 no-underline">Privacy Policy</a> · All enquiries strictly confidential</p>
      </div>
    </footer>
  );
}
