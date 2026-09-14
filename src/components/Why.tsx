const features = [
  { title: 'Immediate operational needs', desc: 'Mining, energy and defence operators face active safety, resilience and productivity challenges — but adoption remains selective and evidence-led.' },
  { title: 'Real-world complexity', desc: "Australia's industrial environments provide a demanding test of technical performance, operational fit and delivery capability." },
  { title: 'Regulatory pressure', desc: 'National security, critical infrastructure and compliance requirements increasingly shape technology procurement.' },
  { title: 'A credible Asia-Pacific base', desc: 'Australia offers institutional stability and a strong reference market for companies planning a broader regional presence.' },
];

const sectors = ['Mining & Resources','Energy & Utilities','Defence & Security','Critical Infrastructure','Industrial Operations','Smart Cities'];

export default function Why() {
  return (
    <section id="why" className="cvds-section bg-[#0a1324]">
      <div className="max-w-[1200px] mx-auto">
        <p className="cvds-kicker">Why Australia</p>
        <h2 className="cvds-heading max-w-[760px] mb-5">A demanding market that rewards preparation</h2>
        <p className="cvds-intro max-w-[650px] mb-14">Australia can be a powerful validation market. A successful deployment here creates credible evidence for other complex industrial environments.</p>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: features */}
          <div className="flex flex-col border-b border-white/[0.1]">
            {features.map((f, index) => (
              <div key={f.title} className="grid grid-cols-[36px_1fr] gap-4 items-start border-t border-white/[0.1] py-6">
                <div className="font-mono text-[0.68rem] text-[#1686ff] pt-1">{String(index + 1).padStart(2, '0')}</div>
                <div>
                  <h3 className="text-base font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-400 leading-[1.7]">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right */}
          <div className="flex flex-col gap-6">
            <div className="border-l-2 border-[#1686ff] bg-[#1686ff]/[0.06] p-8">
              <p className="text-slate-400 text-[0.95rem] leading-[1.8]">
                <strong className="text-slate-100">The market-entry gap:</strong><br /><br />
                International companies often underestimate how much localisation happens outside the product itself. Buying structures, operational language, compliance expectations and stakeholder trust all shape the route to a first contract.<br /><br />
                A strong technology can still lose time if those assumptions are tested only after the company starts spending in market.
              </p>
            </div>
            <div>
              <p className="font-mono text-[0.68rem] tracking-[0.13em] text-[#1686ff] uppercase mb-3">Sectors we operate in</p>
              <div className="grid grid-cols-2 border-t border-l border-white/[0.1]">
                {sectors.map(s => (
                  <div key={s} className="border-r border-b border-white/[0.1] px-3.5 py-3 text-xs font-medium text-slate-400 flex items-center gap-2 before:content-['→'] before:text-emerald-400">{s}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
