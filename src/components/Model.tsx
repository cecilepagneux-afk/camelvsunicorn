const CALENDLY = 'https://calendly.com/cecile-pagneux/intro-call-australian-market-entry';

const steps = [
  { num: '01', title: 'One accountable local operator', desc: 'A single point of ownership keeps market learning, stakeholder activity and commercial priorities connected.' },
  { num: '02', title: 'Defined decision gates', desc: 'Progress is reviewed against evidence, allowing the company to continue, adapt or stop before avoidable cost accumulates.' },
  { num: '03', title: 'Transparent market feedback', desc: 'Signals from operators and partners are translated into clear decisions — including when the evidence challenges the original plan.' },
  { num: '04', title: 'Continuity through execution', desc: 'The same operating context is maintained from initial validation into negotiation, delivery and the next stage of market presence.' },
];

export default function Model() {
  return (
    <section id="model" className="bg-[#0d1422] px-[5%] py-24">
      <div className="max-w-[1100px] mx-auto">
        <p className="font-mono text-[0.7rem] tracking-[0.15em] text-blue-400 uppercase mb-3 before:content-['//\00a0'] before:opacity-50">Our model</p>
        <h2 className="text-[clamp(1.9rem,3.5vw,2.6rem)] font-extrabold tracking-tight mb-5">Execution, not handover</h2>
        <p className="text-slate-400 text-[1.05rem] max-w-[580px] leading-[1.75] mb-14">
          CVDS remains accountable through defined commercial milestones, so insight is carried into action rather than left in a strategy document.
        </p>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col">
            {steps.map((s, i) => (
              <div key={s.num} className={`flex gap-5 py-6 ${i < steps.length - 1 ? 'border-b border-white/[0.08]' : ''}`}>
                <div className="w-8 h-8 flex-shrink-0 bg-[rgba(26,110,212,0.14)] border border-[rgba(26,110,212,0.3)] rounded-lg grid place-items-center text-xs font-bold text-[#1A6ED4] font-mono">{s.num}</div>
                <div>
                  <h3 className="text-[0.95rem] font-semibold mb-1">{s.title}</h3>
                  <p className="text-sm text-slate-400">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[linear-gradient(135deg,rgba(26,110,212,0.1),rgba(14,165,233,0.06))] border border-[rgba(26,110,212,0.25)] rounded-xl p-10">
            <h3 className="text-[1.3rem] font-bold mb-4">Evidence before expansion.</h3>
            <p className="text-slate-400 text-[0.9rem] leading-[1.75] mb-5">
              CVDS will challenge the Australian market case as rigorously as it supports it. Early enthusiasm is not treated as demand, and activity is not confused with progress.
            </p>
            <p className="text-slate-400 text-[0.9rem] leading-[1.75] mb-8">
              If the conditions for entry are not present, we say so early. If they are, the next commitment is based on evidence rather than optimism.
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
