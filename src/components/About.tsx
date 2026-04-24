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
    <section id="about" className="bg-[#080c14] px-[5%] py-24">
      <div className="max-w-[1100px] mx-auto">
        <p className="font-mono text-[0.7rem] tracking-[0.15em] text-blue-400 uppercase mb-3 before:content-['//\00a0'] before:opacity-50">Who is behind CVDS</p>
        <h2 className="text-[clamp(1.9rem,3.5vw,2.6rem)] font-extrabold tracking-tight mb-14">
          Built by someone who has done it — on both sides of the world.
        </h2>

        <div className="grid md:grid-cols-[320px_1fr] gap-14 items-start">
          {/* Photo + name */}
          <div className="flex flex-col items-center md:items-start gap-5">
            <div className="relative">
              <div className="w-[220px] h-[220px] rounded-2xl overflow-hidden border border-white/[0.1] shadow-[0_0_40px_rgba(26,110,212,0.15)]">
                <img
                  src={cecilePhoto}
                  alt="Cécile Pagneux — Founder, CVDS Digital Ventures"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-[#1A6ED4] rounded-xl px-3 py-1.5 text-xs font-bold text-white shadow-lg">
                Perth, WA
              </div>
            </div>
            <div>
              <p className="text-lg font-bold text-white">Cécile Pagneux</p>
              <p className="text-sm text-slate-400">Founder &amp; Managing Director</p>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 text-xs text-blue-400 hover:text-blue-300 no-underline transition-colors font-mono"
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
                <strong className="text-white">CVDS Digital Ventures was founded by Cécile Pagneux</strong> — a French-born business development leader with over 20 years of experience building commercial operations across Europe and Australia.
              </p>
              <p>
                Her career spans senior roles at <strong className="text-slate-200">IBM Global Services</strong>, <strong className="text-slate-200">Avanade</strong>, <strong className="text-slate-200">ALTEN</strong>, and <strong className="text-slate-200">APSIDE</strong> — where she grew a national operation from €400K to €6.7M in recurring revenue, managing a team of 60 consultants with consistent double-digit annual growth.
              </p>
              <p>
                Based in Perth since 2024, Cécile brings a rare combination: deep European technology market experience, direct relationships inside Australia's mining, energy, and defence sectors, and a proven track record of building revenue where none existed before.
              </p>
              <p className="text-slate-300 italic border-l-2 border-[#1A6ED4] pl-4">
                "I know what it takes to open a market from scratch — and I know how different Australia is from anywhere else. That's exactly why CVDS exists."
              </p>
            </div>

            {/* Credential chips */}
            <div className="grid sm:grid-cols-2 gap-3">
              {credentials.map(c => (
                <div key={c.label} className="bg-[#111827] border border-white/[0.07] rounded-xl px-5 py-4 hover:border-[rgba(26,110,212,0.3)] transition-colors">
                  <div className="text-[#1A6ED4] font-bold font-mono text-sm mb-1">{c.label}</div>
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
