const CALENDLY = 'https://calendly.com/cecile-pagneux/intro-call-australian-market-entry';

const steps = [
  { num: '01', title: 'Pilot deployment with industrial operators', desc: 'We structure and manage technology pilots inside real operational environments with our network of Australian industrial partners.' },
  { num: '02', title: 'Commercial structuring & partnerships', desc: 'We help structure commercial agreements, joint ventures and partnership frameworks suited to Australian industrial procurement cycles.' },
  { num: '03', title: 'Ecosystem integration', desc: 'We connect your technology into the broader Australian ecosystem — regulatory networks, investors, and cross-sector industrial partners.' },
  { num: '04', title: 'Sustained market presence', desc: 'We build lasting commercial traction — not a one-off engagement. We stay involved as your Australian market representative and growth partner.' },
];

export default function Model() {
  return (
    <section id="model" className="bg-[#0d1422] px-[5%] py-24">
      <div className="max-w-[1100px] mx-auto">
        <p className="font-mono text-[0.7rem] tracking-[0.15em] text-blue-400 uppercase mb-3 before:content-['//\00a0'] before:opacity-50">Our model</p>
        <h2 className="text-[clamp(1.9rem,3.5vw,2.6rem)] font-extrabold tracking-tight mb-5">We stay in until it works</h2>
        <p className="text-slate-400 text-[1.05rem] max-w-[580px] leading-[1.75] mb-14">
          We are not consultants who hand over a report and walk away. We are execution partners — involved from first positioning through to commercial contract.
        </p>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col">
            {steps.map((s, i) => (
              <div key={s.num} className={`flex gap-5 py-6 ${i < steps.length - 1 ? 'border-b border-white/[0.08]' : ''}`}>
                <div className="w-8 h-8 flex-shrink-0 bg-[rgba(26,110,212,0.14)] border border-[rgba(26,110,212,0.3)] rounded-lg grid place-items-center text-xs font-bold text-[#1A6ED4] font-mono">{s.num}</div>
                <div>
                  <h4 className="text-[0.95rem] font-semibold mb-1">{s.title}</h4>
                  <p className="text-sm text-slate-400">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[linear-gradient(135deg,rgba(26,110,212,0.1),rgba(14,165,233,0.06))] border border-[rgba(26,110,212,0.25)] rounded-xl p-10">
            <h3 className="text-[1.3rem] font-bold mb-4">Built for execution.</h3>
            <p className="text-slate-400 text-[0.9rem] leading-[1.75] mb-5">
              Every company we work with has a technology that performs in real-world conditions. Our job is to create the conditions for deployment in Australia — with the right operators, in the right sectors, at the right time.
            </p>
            <p className="text-slate-400 text-[0.9rem] leading-[1.75] mb-8">
              We are selective. We only take on engagements where we believe we can create genuine commercial traction within 12 months.
            </p>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer"
              className="inline-block bg-[#1A6ED4] hover:bg-[#1558b0] text-white px-7 py-3.5 rounded-xl font-bold text-[0.95rem] no-underline transition-all shadow-[0_0_24px_rgba(26,110,212,0.35)] hover:-translate-y-px">
              Start a conversation →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
