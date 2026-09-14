const steps = [
  { num: '01', title: 'Validate Demand', question: 'Where is the strongest market case?', desc: 'We test priority sectors, use cases, buyer urgency and competitive context before resources are committed to broad market development.' },
  { num: '02', title: 'Design the Entry', question: 'What must change for Australia?', desc: 'We shape the local proposition, proof points, stakeholder route and partner requirements around how Australian operators actually buy.' },
  { num: '03', title: 'Prove in Market', question: 'Can the opportunity convert?', desc: 'We pursue a focused first use case with clear success criteria, accountable stakeholders and an agreed path beyond initial validation.' },
];

export default function Approach() {
  return (
    <section id="approach" className="bg-[#080c14] px-[5%] py-24">
      <div className="max-w-[1100px] mx-auto">
        <p className="font-mono text-[0.7rem] tracking-[0.15em] text-blue-400 uppercase mb-3 before:content-['//\00a0'] before:opacity-50">How we help</p>
        <h2 className="text-[clamp(1.9rem,3.5vw,2.6rem)] font-extrabold tracking-tight mb-5">A staged route into the market</h2>
        <p className="text-slate-400 text-[1.05rem] max-w-[580px] leading-[1.75] mb-14">
          Each stage answers a different commercial question before the next investment decision is made.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map(s => (
            <div key={s.num} className="group bg-[#111827] border border-white/[0.08] rounded-xl p-8 transition-all duration-250 hover:border-[rgba(26,110,212,0.35)] hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#1A6ED4] to-[#0ea5e9] opacity-0 group-hover:opacity-100 transition-opacity duration-250" />
              <div className="font-mono text-[2.5rem] font-bold text-[rgba(26,110,212,0.2)] leading-none mb-4">{s.num}</div>
              <h3 className="text-[1.05rem] font-bold mb-3">{s.title}</h3>
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.08em] text-blue-400 mb-3">{s.question}</p>
              <p className="text-sm text-slate-400 leading-[1.65]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
