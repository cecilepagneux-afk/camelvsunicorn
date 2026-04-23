const CALENDLY = 'https://calendly.com/cecile-pagneux/intro-call-digital-business-acquisition';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-[5%] pt-[100px] pb-20 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)',
        }}
      />
      {/* Glow */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[640px] h-[320px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(26,110,212,0.13), transparent 70%)' }} />

      <div className="relative text-center max-w-[860px]">
        <div className="inline-flex items-center gap-2 bg-[rgba(26,110,212,0.1)] border border-[rgba(26,110,212,0.3)] rounded-full px-4 py-1.5 text-xs font-medium text-blue-400 mb-8 font-mono tracking-wide">
          <span className="w-[7px] h-[7px] bg-[#1A6ED4] rounded-full animate-pulse" />
          Deep-tech · Cybersecurity · AI · Industrial Systems
        </div>

        <h1 className="text-[clamp(2.6rem,5.5vw,4.6rem)] font-extrabold leading-[1.1] tracking-tight mb-6">
          Your technology.<br />
          <span className="text-[#1A6ED4]">Deployed in Australia.</span>
        </h1>

        <p className="text-[clamp(1rem,2vw,1.15rem)] text-slate-400 max-w-[560px] mx-auto mb-10 leading-[1.75]">
          We help international deep-tech companies deploy, pilot, and scale in Australia — from first positioning to commercial contract.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer"
            className="bg-[#1A6ED4] hover:bg-[#1558b0] text-white px-8 py-3.5 rounded-xl font-bold text-[0.95rem] no-underline transition-all shadow-[0_0_24px_rgba(26,110,212,0.35)] hover:shadow-[0_0_36px_rgba(26,110,212,0.5)] hover:-translate-y-px">
            Start a conversation →
          </a>
          <a href="#approach" className="bg-transparent text-slate-100 border border-white/10 hover:border-white/25 hover:bg-white/[0.04] px-8 py-3.5 rounded-xl font-semibold text-[0.95rem] no-underline transition-all flex items-center gap-2">
            How we help
          </a>
        </div>

        <div className="flex justify-center gap-12 mt-16 pt-10 border-t border-white/[0.08] flex-wrap">
          {[['12 months','To commercial traction'],['5 sectors','Cybersecurity · AI · Energy · Defence · Industrial'],['Perth, WA','On the ground in Australia']].map(([num, label]) => (
            <div key={label} className="text-center">
              <div className="text-[1.6rem] font-extrabold text-[#1A6ED4] font-mono">{num}</div>
              <div className="text-xs text-slate-400 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
