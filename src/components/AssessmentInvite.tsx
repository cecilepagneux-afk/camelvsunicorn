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
    <section id="assessment" className="cvds-section bg-[#08101e]">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-20 items-start">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <p className="cvds-kicker mb-0">
              Australia market-entry assessment
            </p>
            <span className="border-l border-emerald-400/50 pl-3 text-[0.62rem] font-mono uppercase tracking-[0.1em] text-emerald-300">
              On request
            </span>
          </div>

          <h2 className="cvds-heading mb-5">
            How difficult will Australia be for your company?
          </h2>
          <p className="cvds-intro max-w-[620px] mb-8">
            Evaluate the commercial, operational and regulatory factors that materially influence market-entry success — before committing time and budget on the ground.
          </p>

          <div className="grid sm:grid-cols-2 border-t border-l border-white/[0.1] mb-9" aria-label="Assessment factors">
            {assessmentFactors.map((factor, index) => (
              <div
                key={factor}
                className="flex items-center gap-3 border-r border-b border-white/[0.1] px-4 py-3.5 text-sm text-slate-300"
              >
                <span className="font-mono text-[0.62rem] text-[#1686ff]" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                {factor}
              </div>
            ))}
          </div>

          <a
            href="#contact"
            data-assessment-cta="request-access"
            onClick={() => window.dispatchEvent(new CustomEvent('cvds:request-type', { detail: 'Australian market-entry assessment' }))}
            className="cvds-primary"
          >
            Request the assessment →
          </a>
          <p className="mt-3 text-xs text-slate-500">
            Request the assessment and we will send it to you directly. It takes about three minutes.
          </p>
        </div>

        <div className="relative overflow-hidden border border-[#1686ff]/35 bg-[#0a1324] p-7 sm:p-9">
          <div
            className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#1686ff]/10 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative">
            <div className="flex justify-between gap-4 border-b border-white/[0.1] pb-4 mb-6">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-[#1686ff]">Your assessment</p>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.1em] text-emerald-400">On request</p>
            </div>
            <h3 className="text-xl font-semibold tracking-[-0.02em] mb-6">A concise, commercially grounded diagnosis</h3>
            <div className="flex flex-col gap-4">
              {outcomes.map((outcome, index) => (
                <div key={outcome} className="flex gap-3 items-start">
                  <span className="grid h-7 w-7 flex-shrink-0 place-items-center border border-[#1686ff]/30 bg-[#1686ff]/10 font-mono text-[0.65rem] text-blue-300">
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
