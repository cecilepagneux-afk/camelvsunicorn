const CALENDLY = 'https://calendly.com/cecile-pagneux/intro-call-australian-market-entry';

const factors = [
  ['Local market knowledge', 4, 'blue'],
  ['Buyer and sales access', 5, 'blue'],
  ['Compliance complexity', 3, 'green'],
  ['Local execution capacity', 4, 'blue'],
] as const;

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[720px] pt-[76px] overflow-hidden cvds-grid-bg">
      <div className="absolute -top-48 right-[-8rem] h-[440px] w-[440px] rounded-full bg-[#1686ff]/15 blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-[1200px] mx-auto grid lg:grid-cols-[1.12fr_0.88fr] min-h-[644px]">
        <div className="flex flex-col justify-center px-[5%] lg:pl-[5%] lg:pr-[9%] py-20 lg:border-r border-white/[0.1]">
          <p className="cvds-kicker">Australian market entry operator</p>
          <h1 className="text-[clamp(2.8rem,6vw,5rem)] font-semibold leading-[1.02] tracking-[-0.055em] mb-8">
            Turn market uncertainty into <span className="text-[#1686ff]">commercial evidence.</span>
          </h1>
          <p className="cvds-intro max-w-[620px] mb-9">
            CVDS helps international technology companies validate demand, navigate local complexity and build the execution capacity required to enter Australia.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="#assessment" className="cvds-primary">Assess your entry readiness →</a>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="cvds-secondary">Start a conversation</a>
          </div>
        </div>

        <div className="flex items-center px-[5%] py-16">
          <div className="w-full border border-white/[0.14] bg-[#0a1324]/95">
            <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-white/[0.1] font-mono text-[0.65rem] uppercase tracking-[0.1em] text-slate-500">
              <span>Entry readiness / AU</span>
              <span className="flex items-center gap-2 text-emerald-400 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-emerald-400">Private tool</span>
            </div>
            <div className="p-6 sm:p-8">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-[#1686ff] mb-3">Diagnostic preview</p>
              <h2 className="text-xl sm:text-2xl font-semibold tracking-[-0.03em] mb-6">Where will a local operator add the most value?</h2>
              {factors.map(([label, score, colour]) => (
                <div key={label} className="grid grid-cols-[1fr_80px] gap-4 items-center border-t border-white/[0.1] py-4">
                  <span className="text-sm text-slate-400">{label}</span>
                  <span className="grid grid-cols-5 gap-1" aria-label={`${score} out of 5`}>
                    {[1, 2, 3, 4, 5].map(value => (
                      <i key={value} className={`h-1 ${value <= score ? (colour === 'green' ? 'bg-emerald-400' : 'bg-[#1686ff]') : 'bg-white/[0.12]'}`} />
                    ))}
                  </span>
                </div>
              ))}
              <div className="flex justify-between gap-4 items-center border-t border-white/[0.1] pt-5 mt-2">
                <span className="font-mono text-[0.65rem] text-slate-500">6 dimensions · 3 minutes</span>
                <a href="#assessment" className="text-sm font-medium text-emerald-400 no-underline">Request access →</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/[0.1] bg-[#0a1324]/80">
        <div className="max-w-[1200px] mx-auto grid sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Built from Perth', 'Local market judgement'],
            ['Focus', 'Demand validation'],
            ['Method', 'Decision gates'],
            ['Outcome', 'Evidence to act'],
          ].map(([label, value]) => (
            <div key={label} className="px-6 py-6 border-b sm:border-b-0 border-r last:border-r-0 border-white/[0.1]">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.1em] text-[#1686ff] mb-2">{label}</p>
              <p className="text-sm text-slate-200">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
