const cards = [
  {
    icon: '🛡️',
    title: 'Cybersecurity companies',
    desc: "OT/IT security, threat intelligence, and critical infrastructure protection. Australia's regulatory environment is creating urgent demand.",
    criteria: ['Proven solution in production elsewhere','Ready for industrial-scale deployment','No Australian presence yet'],
  },
  {
    icon: '🤖',
    title: 'AI & Industrial Tech startups',
    desc: 'Applied AI for asset management, predictive maintenance, automation, and autonomous systems in mining, energy or heavy industry.',
    criteria: ['Operational-ready technology (not R&D stage)','Clear ROI case for industrial operators','Willing to commit to a real pilot'],
  },
  {
    icon: '⚡',
    title: 'Energy & Defence tech companies',
    desc: "Clean energy transition, grid security, defence dual-use technologies, and critical infrastructure solutions targeting Australia's strategic priorities.",
    criteria: ['Technology with defence or strategic relevance','Experience with regulated environments','Committed to long-term AU market presence'],
  },
];

const notFit = ['Early-stage R&D (pre-product)','B2C or consumer technology','Looking for a one-off introduction','No commitment to the Australian market long-term','No operational deployment evidence elsewhere'];

export default function ForWho() {
  return (
    <section id="forwho" className="bg-slate-50 px-[5%] py-24">
      <div className="max-w-[1100px] mx-auto">
        <p className="font-mono text-[0.7rem] tracking-[0.15em] text-[#1A6ED4] uppercase mb-3 before:content-['//\00a0'] before:opacity-50">Who we work with</p>
        <h2 className="text-[clamp(1.9rem,3.5vw,2.6rem)] font-extrabold tracking-tight text-slate-900 mb-5">Built for companies serious about Australia</h2>
        <p className="text-slate-500 text-[1.05rem] max-w-[580px] leading-[1.75] mb-14">
          We work with a select number of companies at any time. We are not a connector. We are a deployment partner — which means we are selective.
        </p>
        <div className="grid md:grid-cols-3 gap-5">
          {cards.map(c => (
            <div key={c.title} className="bg-white border border-black/[0.07] rounded-xl p-8 hover:border-[rgba(26,110,212,0.3)] hover:shadow-[0_4px_20px_rgba(26,110,212,0.1)] hover:-translate-y-0.5 transition-all shadow-sm">
              <div className="text-3xl mb-4">{c.icon}</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">{c.title}</h3>
              <p className="text-sm text-slate-500 leading-[1.65] mb-4">{c.desc}</p>
              <div className="flex flex-col gap-1.5">
                {c.criteria.map(cr => (
                  <div key={cr} className="text-[0.8rem] text-slate-500 flex gap-2 items-start">
                    <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>{cr}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Not a fit */}
        <div className="bg-red-50 border border-red-200/50 rounded-xl px-8 py-6 mt-10">
          <h4 className="text-sm font-bold text-red-600 mb-4">Not the right fit for CVDS</h4>
          <div className="flex gap-6 flex-wrap">
            {notFit.map(n => (
              <div key={n} className="flex gap-2 items-center text-sm text-slate-500">
                <span className="text-red-500 font-bold">✕</span>{n}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
