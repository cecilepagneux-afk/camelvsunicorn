const assessmentFactors = [
  'Local market knowledge',
  'Decision-maker access',
  'Partner ecosystem',
  'Compliance complexity',
  'Distance from market',
  'Local execution capacity',
];

const outcomes = [
  'An overall view of your likely entry difficulty',
  'The three areas most likely to slow execution',
  'The local capabilities needed to reduce risk',
  'Where a market operator can add practical value',
];

export default function AssessmentInvite() {
  return (
    <section id="assessment" className="bg-[#080c14] px-[5%] py-24 border-y border-white/[0.08]">
      <div className="max-w-[1100px] mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <p className="font-mono text-[0.7rem] tracking-[0.15em] text-blue-400 uppercase before:content-['//\00a0'] before:opacity-50">
              Australia market-entry assessment
            </p>
            <span className="rounded-full border border-emerald-400/25 bg-emerald-400/[0.08] px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-emerald-300">
              Private pilot
            </span>
          </div>

          <h2 className="text-[clamp(1.9rem,3.5vw,2.6rem)] font-extrabold tracking-tight mb-5 leading-[1.15]">
            How difficult will Australia be for your company?
          </h2>
          <p className="text-slate-400 text-[1.05rem] max-w-[620px] leading-[1.75] mb-8">
            Evaluate the commercial, operational and regulatory factors that materially influence market-entry success — before committing time and budget on the ground.
          </p>

          <div className="grid sm:grid-cols-2 gap-2.5 mb-9" aria-label="Assessment factors">
            {assessmentFactors.map((factor) => (
              <div
                key={factor}
                className="flex items-center gap-2.5 rounded-lg border border-white/[0.08] bg-[#111827] px-3.5 py-3 text-sm text-slate-300"
              >
                <span className="text-[#1A6ED4]" aria-hidden="true">→</span>
                {factor}
              </div>
            ))}
          </div>

          <a
            href="#contact"
            data-assessment-cta="request-access"
            onClick={() => window.dispatchEvent(new CustomEvent('cvds:assessment-request'))}
            className="inline-flex items-center justify-center bg-[#1A6ED4] hover:bg-[#1558b0] text-white px-7 py-3.5 rounded-xl font-bold text-[0.95rem] no-underline transition-all shadow-[0_0_24px_rgba(26,110,212,0.3)] hover:shadow-[0_0_34px_rgba(26,110,212,0.45)] hover:-translate-y-px"
          >
            Request private access →
          </a>
          <p className="mt-3 text-xs text-slate-500">
            Access is granted individually to selected companies. The assessment takes approximately three minutes.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-[rgba(26,110,212,0.3)] bg-[linear-gradient(145deg,rgba(26,110,212,0.12),rgba(17,24,39,0.96)_55%)] p-7 sm:p-9">
          <div
            className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#1A6ED4]/10 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-blue-400 mb-3">Your assessment</p>
            <h3 className="text-xl font-bold mb-6">A concise, commercially grounded diagnosis</h3>
            <div className="flex flex-col gap-4">
              {outcomes.map((outcome, index) => (
                <div key={outcome} className="flex gap-3 items-start">
                  <span className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-lg border border-blue-400/20 bg-blue-400/10 font-mono text-xs font-bold text-blue-300">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="pt-0.5 text-sm leading-[1.65] text-slate-300">{outcome}</p>
                </div>
              ))}
            </div>
            <div className="mt-7 border-t border-white/[0.08] pt-5 text-sm leading-[1.65] text-slate-400">
              The result is a starting point for an honest market-entry discussion — not a sales verdict or a substitute for detailed due diligence.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
