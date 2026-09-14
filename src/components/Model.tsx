const CALENDLY = 'https://calendly.com/cecile-pagneux/intro-call-australian-market-entry';

const steps = [
  { num: '01', title: 'One accountable local operator', desc: 'A single point of ownership keeps market learning, stakeholder activity and commercial priorities connected.' },
  { num: '02', title: 'Defined decision gates', desc: 'Progress is reviewed against evidence, allowing the company to continue, adapt or stop before avoidable cost accumulates.' },
  { num: '03', title: 'Transparent market feedback', desc: 'Signals from operators and partners are translated into clear decisions — including when the evidence challenges the original plan.' },
  { num: '04', title: 'Continuity through execution', desc: 'The same operating context is maintained from initial validation into negotiation, delivery and the next stage of market presence.' },
];

export default function Model() {
  return (
    <section id="model" className="cvds-section bg-[#0a1324]">
      <div className="max-w-[1200px] mx-auto">
        <p className="cvds-kicker">Our model</p>
        <h2 className="cvds-heading mb-5">Execution, not handover</h2>
        <p className="cvds-intro max-w-[620px] mb-14">
          CVDS remains accountable through defined commercial milestones, so insight is carried into action rather than left in a strategy document.
        </p>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col">
            {steps.map((s, i) => (
              <div key={s.num} className={`grid grid-cols-[42px_1fr] gap-5 py-6 border-t border-white/[0.1] ${i === steps.length - 1 ? 'border-b' : ''}`}>
                <div className="font-mono text-[0.68rem] text-[#1686ff] pt-1">{s.num}</div>
                <div>
                  <h3 className="text-[0.95rem] font-semibold mb-1">{s.title}</h3>
                  <p className="text-sm text-slate-400">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#1686ff]/[0.06] border-l-2 border-[#1686ff] p-10">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-emerald-400 mb-4">Operating principle</p>
            <h3 className="text-[1.3rem] font-semibold mb-4">Evidence before expansion.</h3>
            <p className="text-slate-400 text-[0.9rem] leading-[1.75] mb-5">
              CVDS will challenge the Australian market case as rigorously as it supports it. Early enthusiasm is not treated as demand, and activity is not confused with progress.
            </p>
            <p className="text-slate-400 text-[0.9rem] leading-[1.75] mb-8">
              If the conditions for entry are not present, we say so early. If they are, the next commitment is based on evidence rather than optimism.
            </p>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer"
              className="cvds-primary">
              Start a conversation →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
