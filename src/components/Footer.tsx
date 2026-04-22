const navLinks = [
  { label: 'Why Australia', href: '#why' },
  { label: 'How We Help', href: '#approach' },
  { label: 'Who We Work With', href: '#forwho' },
  { label: 'Our Model', href: '#model' },
];
const focusLinks = [
  { label: 'Cybersecurity', href: '#focus' },
  { label: 'Industrial Systems', href: '#focus' },
  { label: 'AI Technologies', href: '#focus' },
  { label: 'Energy & Defence', href: '#focus' },
];
const contactLinks = [
  { label: 'Start a conversation', href: '#contact' },
  { label: 'Partner with us', href: '#contact' },
  { label: 'Perth, Western Australia', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d1422] border-t border-white/[0.08] px-[5%] pt-12 pb-8">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">
        <div className="md:col-span-1">
          <a href="#" className="flex items-center gap-2.5 font-bold text-base tracking-[0.04em] no-underline text-slate-100 mb-3">
            <div className="w-8 h-8 bg-[#1A6ED4] rounded-lg grid place-items-center text-xs font-extrabold text-white">CV</div>
            CVDS Digital Ventures
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
              {col.links.map(l => (
                <li key={l.label}>
                  <a href={l.href} className="text-slate-400 hover:text-slate-100 no-underline text-sm transition-colors">{l.label}</a>
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
