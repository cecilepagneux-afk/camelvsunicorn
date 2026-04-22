const features = [
  { icon: '⚡', title: 'Immediate deployment needs', desc: "Large-scale operations across mining, energy and defence require critical technology now — not in five years. Budget exists. Urgency is real." },
  { icon: '🏗️', title: 'Real-world operational complexity', desc: "Australia's industrial sectors are among the world's most complex. A successful pilot here is proof that travels globally." },
  { icon: '📋', title: 'Regulatory pressure accelerating adoption', desc: "National security frameworks, critical infrastructure regulation, and compliance requirements are actively driving technology procurement cycles." },
  { icon: '🌏', title: 'Gateway to Asia-Pacific', desc: "Australia is the natural first step into APAC — a stable, English-speaking market with strong institutional relationships across the region." },
];

const sectors = ['Mining & Resources','Energy & Utilities','Defence & Security','Critical Infrastructure','Industrial Operations','Smart Cities'];

export default function Why() {
  return (
    <section id="why" className="bg-[#0d1422] px-[5%] py-24">
      <div className="max-w-[1100px] mx-auto">
        <p className="font-mono text-[0.7rem] tracking-[0.15em] text-blue-400 uppercase mb-3 before:content-['//\00a0'] before:opacity-50">Why Australia</p>
        <h2 className="text-[clamp(1.9rem,3.5vw,2.6rem)] font-extrabold tracking-tight mb-5">The world's most demanding —<br />and most rewarding — deployment environment</h2>
        <p className="text-slate-400 text-[1.05rem] max-w-[580px] leading-[1.75] mb-14">Australia isn't just a market. It's a validation ground. If your technology works here, it works anywhere.</p>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: features */}
          <div className="flex flex-col gap-5">
            {features.map(f => (
              <div key={f.title} className="flex gap-4 items-start p-5 bg-[#111827] border border-white/[0.08] rounded-xl hover:border-[rgba(26,110,212,0.3)] transition-colors">
                <div className="w-10 h-10 flex-shrink-0 bg-[rgba(26,110,212,0.14)] border border-[rgba(26,110,212,0.2)] rounded-xl grid place-items-center text-lg">{f.icon}</div>
                <div>
                  <h4 className="text-[0.95rem] font-semibold mb-1">{f.title}</h4>
                  <p className="text-sm text-slate-400">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right */}
          <div className="flex flex-col gap-6">
            <div className="bg-[linear-gradient(135deg,rgba(26,110,212,0.08),rgba(14,165,233,0.05))] border border-[rgba(26,110,212,0.2)] rounded-xl p-8">
              <p className="text-slate-400 text-[0.95rem] leading-[1.8]">
                <strong className="text-slate-100">The problem most international startups face:</strong><br /><br />
                You have a technology that works. But Australia is opaque — the right operators are hard to find, procurement cycles are long, and trust takes years to build.<br /><br />
                <strong className="text-slate-100">CVDS is the bridge.</strong> We translate your technical capability into industrial value, navigate the market on your behalf, and create the conditions for real-world deployment — fast.
              </p>
            </div>
            <div>
              <p className="font-mono text-[0.7rem] tracking-[0.15em] text-blue-400 uppercase mb-3 before:content-['//\00a0'] before:opacity-50">Sectors we operate in</p>
              <div className="grid grid-cols-2 gap-2.5">
                {sectors.map(s => (
                  <div key={s} className="bg-[#111827] border border-white/[0.08] rounded-lg px-3.5 py-2.5 text-xs font-medium text-slate-400 flex items-center gap-1.5 before:content-['→'] before:text-[#1A6ED4] before:text-xs">{s}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
