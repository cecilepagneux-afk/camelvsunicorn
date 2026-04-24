import cvdsLogo from './cvds-logo.png';

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
          <a href="#" className="flex items-center gap-2 no-underline mb-3">
            <img src={cvdsLogo} alt="CVDS Digital Ventures" className="h-11 w-auto object-contain" />
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
