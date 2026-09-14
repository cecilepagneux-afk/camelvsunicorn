const steps = [
  { num: '01', title: 'Validate Demand', question: 'Where is the strongest market case?', desc: 'We test priority sectors, use cases, buyer urgency and competitive context before resources are committed to broad market development.' },
  { num: '02', title: 'Design the Entry', question: 'What must change for Australia?', desc: 'We shape the local proposition, proof points, stakeholder route and partner requirements around how Australian operators actually buy.' },
  { num: '03', title: 'Prove in Market', question: 'Can the opportunity convert?', desc: 'We pursue a focused first use case with clear success criteria, accountable stakeholders and an agreed path beyond initial validation.' },
];

export default function Approach() {
  return (
    <section id="approach" className="cvds-section bg-[#070d19] cvds-grid-bg">
      <div className="max-w-[1200px] mx-auto">
        <p className="cvds-kicker">How we help</p>
        <h2 className="cvds-heading mb-5">A staged route into the market</h2>
        <p className="cvds-intro max-w-[580px] mb-14">
          Each stage answers a different commercial question before the next investment decision is made.
        </p>
        <div className="grid md:grid-cols-3 border-t border-l border-white/[0.12]">
          {steps.map(s => (
            <div key={s.num} className="group border-r border-b border-white/[0.12] p-8 transition-colors hover:bg-[#1686ff]/[0.06]">
              <div className="font-mono text-sm text-[#1686ff] leading-none mb-8">{s.num}</div>
              <h3 className="text-lg font-semibold mb-3">{s.title}</h3>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-emerald-400 mb-4">{s.question}</p>
              <p className="text-sm text-slate-400 leading-[1.65]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
