import cecilePhoto from './cecile-photo.jpg';

const LINKEDIN = 'https://www.linkedin.com/in/cecile-pagneux/';

const credentials = [
  { label: '20+ years', desc: 'ICT & Business Development across Europe and Australia' },
  { label: '€0.4M → €6.7M', desc: 'Revenue built from scratch as Country Manager, APSIDE Belgium' },
  { label: 'IBM · ALTEN · AVANADE', desc: 'Senior commercial roles at global technology leaders' },
  { label: 'Perth, WA', desc: 'On the ground — building AU market presence since 2024' },
];

export default function About() {
  return (
    <section id="about" className="cvds-section bg-[#070d19] cvds-grid-bg">
      <div className="max-w-[1200px] mx-auto">
        <p className="cvds-kicker">Who is behind CVDS</p>
        <h2 className="cvds-heading max-w-[800px] mb-14">
          Built by someone who has done it — on both sides of the world.
        </h2>

        <div className="grid md:grid-cols-[320px_1fr] gap-14 lg:gap-20 items-start">
          {/* Photo + name */}
          <div className="flex flex-col items-center md:items-start gap-5">
            <div className="relative">
              <div className="w-[220px] h-[240px] overflow-hidden border border-white/[0.14]">
                <img
                  src={cecilePhoto}
                  alt="Cécile Pagneux — Founder, CVDS Digital Ventures"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-[#1686ff] px-3 py-2 font-mono text-[0.62rem] uppercase tracking-[0.1em] text-white">
                Perth / WA
              </div>
            </div>
            <div>
              <p className="text-lg font-semibold text-white">Cécile Pagneux</p>
              <p className="text-sm text-slate-400">Founder &amp; Managing Director</p>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 text-xs text-[#1686ff] hover:text-blue-300 no-underline transition-colors font-mono"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn profile →
              </a>
            </div>
          </div>

          {/* Bio + credentials */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4 text-slate-400 text-[0.95rem] leading-[1.8]">
              <p>
                <strong className="text-white">Cécile Pagneux has built commercial operations across Europe for more than 20 years</strong>, including senior roles at IBM Global Services, Avanade, ALTEN and APSIDE. As Country Manager for APSIDE Belgium, she grew recurring revenue from €400K to €6.7M and led a team of 60 consultants.
              </p>
              <p>
                Since moving to Perth in 2024, she has worked directly across Australia's mining, energy and technology ecosystem. That dual perspective helps international companies distinguish what can transfer from their home market — and what must be rebuilt locally.
              </p>
              <p className="text-slate-300 border-l-2 border-[#1686ff] pl-5">
                For clients, this means commercial challenge as well as support: assumptions are tested early, priorities stay explicit and activity is tied to evidence from the market.
              </p>
            </div>

            {/* Credential chips */}
            <div className="grid sm:grid-cols-2 border-t border-l border-white/[0.1]">
              {credentials.map(c => (
                <div key={c.label} className="border-r border-b border-white/[0.1] px-5 py-5 hover:bg-[#1686ff]/[0.05] transition-colors">
                  <div className="text-[#1686ff] font-medium font-mono text-sm mb-2">{c.label}</div>
                  <div className="text-slate-400 text-xs leading-[1.6]">{c.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
