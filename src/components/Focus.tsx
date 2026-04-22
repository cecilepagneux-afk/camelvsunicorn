const areas = [
  { icon: '🛡️', title: 'Cybersecurity', desc: "OT/IT security, threat intelligence, and critical infrastructure protection for Australia's most sensitive environments." },
  { icon: '⚙️', title: 'Industrial Systems', desc: 'Automation, control systems, robotics and sensor technologies for mining, energy and heavy industry at scale.' },
  { icon: '🤖', title: 'AI Technologies', desc: 'Applied AI for asset management, predictive maintenance, operational intelligence and autonomous systems.' },
  { icon: '⚡', title: 'Energy & Utilities', desc: "Clean energy transition, grid security, and resource optimisation for Australia's critical energy infrastructure." },
  { icon: '🏭', title: 'Defence Technology', desc: "Dual-use and defence-specific technologies addressing national security needs across Australia's defence industrial base." },
  { icon: '🌐', title: 'Critical Infrastructure', desc: "Communications, transport and resource systems that underpin Australia's national resilience and industrial productivity." },
];

export default function Focus() {
  return (
    <section id="focus" className="bg-[#080c14] px-[5%] py-24">
      <div className="max-w-[1100px] mx-auto">
        <p className="font-mono text-[0.7rem] tracking-[0.15em] text-blue-400 uppercase mb-3 before:content-['//\00a0'] before:opacity-50">Focus areas</p>
        <h2 className="text-[clamp(1.9rem,3.5vw,2.6rem)] font-extrabold tracking-tight mb-5">Where we operate</h2>
        <p className="text-slate-400 text-[1.05rem] max-w-[580px] leading-[1.75] mb-14">
          Our deployment expertise is concentrated in the sectors where Australia's industrial urgency is greatest — and where the right technology creates the most value.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {areas.map(a => (
            <div key={a.title} className="bg-[#111827] border border-white/[0.08] rounded-xl p-7 hover:border-[rgba(26,110,212,0.25)] hover:bg-[rgba(26,110,212,0.04)] transition-all">
              <div className="text-3xl mb-4">{a.icon}</div>
              <h3 className="text-base font-bold mb-2">{a.title}</h3>
              <p className="text-[0.82rem] text-slate-400 leading-[1.6]">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
