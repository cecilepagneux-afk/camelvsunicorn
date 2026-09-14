const profiles = [
  {
    code: 'CYB',
    title: 'Cybersecurity companies',
    desc: "OT/IT security, threat intelligence and critical infrastructure protection for Australia's regulated environments.",
    criteria: ['Proven solution in production elsewhere', 'Ready for industrial-scale deployment', 'No Australian presence yet'],
  },
  {
    code: 'IND',
    title: 'AI & Industrial Tech',
    desc: 'Applied AI, asset management, predictive maintenance, automation and autonomous systems for heavy industry.',
    criteria: ['Operational-ready technology', 'Clear ROI case for operators', 'Willing to test a focused use case'],
  },
  {
    code: 'ENR',
    title: 'Energy & Defence tech',
    desc: "Energy transition, grid security, dual-use technologies and critical infrastructure solutions.",
    criteria: ['Strategic or operational relevance', 'Experience in regulated environments', 'Long-term Australian ambition'],
  },
];

const notFit = ['Pre-product R&D','B2C technology','One-off introductions','No long-term market commitment','No deployment evidence'];

export default function ForWho() {
  return (
    <section id="forwho" className="cvds-section bg-[#0a1324]">
      <div className="max-w-[1200px] mx-auto">
        <p className="cvds-kicker">Who we work with</p>
        <h2 className="cvds-heading mb-5">Built for companies serious about Australia</h2>
        <p className="cvds-intro max-w-[650px] mb-14">
          Fit is defined less by company size than by readiness: proven technology, a credible industrial use case and the capacity to act on market feedback.
        </p>

        <div className="grid md:grid-cols-3 border-t border-l border-white/[0.12]">
          {profiles.map(profile => (
            <article key={profile.title} className="border-r border-b border-white/[0.12] p-7 lg:p-8 hover:bg-[#1686ff]/[0.05] transition-colors">
              <p className="font-mono text-[0.68rem] tracking-[0.12em] text-emerald-400 mb-8">{profile.code} / AU</p>
              <h3 className="text-lg font-semibold mb-3">{profile.title}</h3>
              <p className="text-sm text-slate-400 leading-[1.7] mb-6">{profile.desc}</p>
              <div className="border-t border-white/[0.1]">
                {profile.criteria.map(criterion => (
                  <p key={criterion} className="flex gap-3 border-b border-white/[0.08] py-3 text-xs text-slate-400">
                    <span className="text-[#1686ff]" aria-hidden="true">→</span>{criterion}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="grid lg:grid-cols-[220px_1fr] gap-6 border-t border-white/[0.12] mt-10 pt-6">
          <h3 className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-slate-500">Not the right fit</h3>
          <div className="flex gap-x-7 gap-y-3 flex-wrap">
            {notFit.map(item => (
              <span key={item} className="text-xs text-slate-500 before:content-['×'] before:text-slate-600 before:mr-2">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
