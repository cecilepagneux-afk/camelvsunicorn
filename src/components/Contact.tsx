import { useState, FormEvent } from 'react';

const CALENDLY = 'https://calendly.com/cecile-pagneux/intro-call-digital-business-acquisition';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#0d1422] px-[5%] py-24">
      <div className="max-w-[1100px] mx-auto">
        <p className="font-mono text-[0.7rem] tracking-[0.15em] text-blue-400 uppercase mb-3 before:content-['//\00a0'] before:opacity-50">Contact</p>
        <h2 className="text-[clamp(1.9rem,3.5vw,2.6rem)] font-extrabold tracking-tight mb-5">Ready to enter the Australian market?</h2>
        <p className="text-slate-400 text-[1.05rem] max-w-[580px] leading-[1.75] mb-14">
          If your technology is ready for real-world deployment — and you're serious about Australia — let's talk.
        </p>
        <div className="grid md:grid-cols-[1fr_1.3fr] gap-16 items-start">
          {/* Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Start a confidential conversation</h3>
            <p className="text-slate-400 text-sm leading-[1.8] mb-6">
              We work with a select number of companies at any given time. Reach out to start an honest conversation about your technology, your goals, and whether CVDS is the right partner for your Australian entry.
            </p>
            <div className="flex gap-3 items-center text-sm text-slate-400 mb-3">
              <span className="text-[#1A6ED4]">📍</span> Perth, Western Australia
            </div>
            <div className="flex gap-3 items-center text-sm text-slate-400 mb-6">
              <span className="text-[#1A6ED4]">⏱️</span> Response within 3 business days
            </div>
            <div className="flex flex-col gap-2.5 mt-8">
              {['All enquiries strictly confidential','No obligation — first call is exploratory','We tell you quickly if it\'s not a fit','Execution-focused from day one'].map(b => (
                <div key={b} className="flex gap-2.5 items-center text-xs text-slate-400">
                  <span className="text-emerald-500 font-bold">✓</span>{b}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">First name</label>
                <input type="text" placeholder="Jane" required className="w-full bg-[#111827] border border-white/[0.08] focus:border-[#1A6ED4] rounded-lg px-4 py-3 text-slate-100 text-sm outline-none transition-colors placeholder:text-slate-600" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Last name</label>
                <input type="text" placeholder="Smith" required className="w-full bg-[#111827] border border-white/[0.08] focus:border-[#1A6ED4] rounded-lg px-4 py-3 text-slate-100 text-sm outline-none transition-colors placeholder:text-slate-600" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1">Work email</label>
              <input type="email" placeholder="jane@acme.com" required className="w-full bg-[#111827] border border-white/[0.08] focus:border-[#1A6ED4] rounded-lg px-4 py-3 text-slate-100 text-sm outline-none transition-colors placeholder:text-slate-600" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1">Technology sector</label>
              <select className="w-full bg-[#111827] border border-white/[0.08] focus:border-[#1A6ED4] rounded-lg px-4 py-3 text-slate-400 text-sm outline-none transition-colors">
                <option value="">Select your sector</option>
                {['Cybersecurity','Industrial Systems & Automation','AI / Machine Learning','Energy Technology','Defence Technology','Critical Infrastructure','Other'].map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
            <button
              type="submit"
              disabled={submitted}
              className={`w-full py-3.5 rounded-xl font-bold text-base text-white transition-all border-none cursor-pointer ${submitted ? 'bg-emerald-600 shadow-none' : 'bg-[#1A6ED4] hover:bg-[#1558b0] shadow-[0_0_24px_rgba(26,110,212,0.35)] hover:shadow-[0_0_36px_rgba(26,110,212,0.5)] hover:-translate-y-px'}`}
            >
              {submitted ? '✓ Book your intro call below' : 'Request an intro call →'}
            </button>
            {submitted && (
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl font-bold text-base text-white text-center no-underline bg-emerald-600 hover:bg-emerald-700 transition-all block">
                Open Calendly — pick a time →
              </a>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
