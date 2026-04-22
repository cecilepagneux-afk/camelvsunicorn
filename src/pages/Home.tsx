import { ArrowRight, Shield, Cpu, Brain, Server, Layers, Globe2, Building2, Gauge, Network, Rocket, Users, Briefcase, HardHat, LineChart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import SectionLabel from "@/components/redesign/SectionLabel";
import FeatureCard from "@/components/redesign/FeatureCard";
import StatItem from "@/components/redesign/StatItem";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import heroBg from "@/assets/redesign/hero-bg.jpg";
import sectorMining from "@/assets/redesign/sector-mining.jpg";
import sectorEnergy from "@/assets/redesign/sector-energy.jpg";
import abstractCyber from "@/assets/redesign/abstract-cyber.jpg";
import abstractAi from "@/assets/redesign/abstract-ai.jpg";

const reveal = (visible: boolean, delay = "") =>
  `transition-all duration-700 ${delay} ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`;

const Home = () => {
  const why = useScrollReveal();
  const approach = useScrollReveal();
  const focus = useScrollReveal();
  const model = useScrollReveal();
  const partnerships = useScrollReveal();
  const contact = useScrollReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* ── 1. HERO ─────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20 px-6">
        {/* Background image with deep overlay */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt=""
            className="w-full h-full object-cover opacity-40"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/85 to-background" />
        </div>
        <div
          className="absolute inset-0 grid-pattern opacity-50"
          style={{
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)",
          }}
        />
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 mb-8 font-mono-tech text-xs font-medium text-primary tracking-wider">
            <span className="w-[7px] h-[7px] bg-primary rounded-full pulse-dot" />
            CYBERSECURITY · INDUSTRIAL · AI
          </div>

          <h1 className="text-[clamp(2.6rem,6vw,5rem)] font-extrabold leading-[1.05] tracking-tight mb-6 animate-fade-in-up">
            Building critical technology ventures
            <br />
            <span className="text-primary">in Australia</span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            CVDS Digital Ventures partners with deep-tech companies to establish, deploy and
            scale their solutions across Australia's industrial sectors.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-[10px] text-[0.95rem] hover:bg-[hsl(var(--primary-dim))] transition-all hover:-translate-y-0.5"
              style={{ boxShadow: "0 0 20px hsl(199 89% 48% / 0.3)" }}
            >
              Work with us
            </a>
            <a
              href="#approach"
              className="inline-flex items-center justify-center gap-2 border border-white/[0.12] text-foreground font-semibold px-7 py-3.5 rounded-[10px] text-[0.95rem] hover:border-white/25 hover:bg-white/[0.04] transition-all"
            >
              Explore our approach
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="pt-8 border-t border-white/[0.08] flex justify-center gap-12 sm:gap-16 flex-wrap">
            <StatItem value="3" label="Critical sectors" />
            <StatItem value="100%" label="Australia-focused" />
            <StatItem value="∞" label="Real-world deployment" />
          </div>
        </div>
      </section>

      {/* ── 2. WHY AUSTRALIA ───────────────────────────── */}
      <section
        id="thesis"
        ref={why.ref}
        className="py-24 md:py-32 px-6 bg-[hsl(var(--background-2))] border-t border-white/[0.08]"
      >
        <div className={`max-w-6xl mx-auto ${reveal(why.isVisible)}`}>
          <SectionLabel>Investment thesis</SectionLabel>
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-extrabold tracking-tight mb-5 leading-[1.15]">
            Why Australia
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed">
            One of the most advanced environments globally for deploying critical technologies at industrial scale.
          </p>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mt-14">
            <div className="flex flex-col gap-4">
              <FeatureCard
                icon={Globe2}
                title="Industrial scale, immediate need"
                description="Large-scale operations with active deployment cycles across critical infrastructure."
              />
              <FeatureCard
                icon={Building2}
                title="Real-world complexity"
                description="Diverse industrial sectors that test technologies in genuine operational conditions."
              />
              <FeatureCard
                icon={Gauge}
                title="Regulatory acceleration"
                description="Sovereignty pressure and policy frameworks driving rapid technology adoption."
              />
            </div>

            <div className="flex flex-col gap-6">
              <div
                className="rounded-xl p-7 border border-primary/20"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(199 89% 48% / 0.08), hsl(234 89% 67% / 0.05))",
                }}
              >
                <p className="text-muted-foreground text-[0.95rem] leading-[1.75]">
                  CVDS connects international technologies with Australian industrial ecosystems —{" "}
                  <strong className="text-foreground">from positioning to deployment</strong>, with
                  the operators who decide and the partners who build.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {["Mining", "Energy", "Defence", "Critical infrastructure", "Industrial systems", "Resources"].map(
                  (s) => (
                    <div
                      key={s}
                      className="bg-card border border-white/[0.08] rounded-lg px-3.5 py-2.5 text-xs font-medium text-muted-foreground flex items-center gap-1.5"
                    >
                      <span className="text-primary text-[0.7rem]">→</span>
                      {s}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. APPROACH ────────────────────────────────── */}
      <section
        id="approach"
        ref={approach.ref}
        className="py-24 md:py-32 px-6 border-t border-white/[0.08] relative overflow-hidden"
      >
        <div className={`max-w-6xl mx-auto ${reveal(approach.isVisible)}`}>
          <SectionLabel>What we do</SectionLabel>
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-extrabold tracking-tight mb-5 leading-[1.15]">
            From technology to deployment
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed">
            Three coordinated motions that turn capability into commercial traction.
          </p>

          <div className="grid md:grid-cols-3 gap-5 mt-14">
            {[
              {
                num: "01",
                title: "Market Positioning",
                description:
                  "We translate technical capabilities into clear industrial value — tailored to Australian sectors and decision-makers.",
              },
              {
                num: "02",
                title: "Market Access",
                description:
                  "We connect companies with operators and partners across mining, energy, defence and critical infrastructure.",
              },
              {
                num: "03",
                title: "Pilot Programs",
                description:
                  "We deploy real-world use cases to validate technology in operational environments and accelerate traction.",
              },
            ].map((item, i) => (
              <div
                key={item.num}
                className={`relative bg-card border border-white/[0.08] rounded-xl p-7 overflow-hidden group hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 ${reveal(approach.isVisible, `delay-[${i * 150}ms]`)}`}
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-[hsl(234_89%_67%)] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="font-mono-tech text-[2.5rem] font-bold text-primary/20 leading-none mb-4">
                  {item.num}
                </div>
                <h3 className="text-[1.05rem] font-bold mb-2.5 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-[1.65]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. FOCUS AREAS ──────────────────────────────── */}
      <section
        id="focus"
        ref={focus.ref}
        className="py-24 md:py-32 px-6 bg-[hsl(var(--background-2))] border-t border-white/[0.08] relative overflow-hidden"
      >
        {/* subtle right-side cyber image */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[420px] h-[420px] opacity-[0.18] pointer-events-none hidden lg:block">
          <img src={abstractCyber} alt="" className="w-full h-full object-contain" loading="lazy" />
        </div>

        <div className={`max-w-6xl mx-auto relative ${reveal(focus.isVisible)}`}>
          <SectionLabel>Focus areas</SectionLabel>
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-extrabold tracking-tight mb-5 leading-[1.15]">
            Where we operate
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed mb-14">
            We focus on technologies that impact real-world systems and critical operations.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Shield, title: "Cybersecurity", description: "Digital sovereignty for critical infrastructure." },
              { icon: Cpu, title: "Industrial systems", description: "Operational technology and process control." },
              { icon: Brain, title: "Artificial intelligence", description: "Applied AI for industrial decision making." },
              { icon: Server, title: "Resilience platforms", description: "Infrastructure that endures real-world stress." },
              { icon: Layers, title: "Deep tech platforms", description: "Foundational capability for sovereign deployment." },
              { icon: Network, title: "Connected operations", description: "Networks bridging field and enterprise systems." },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`bg-card border border-white/[0.08] rounded-xl p-6 hover:border-primary/25 hover:bg-primary/[0.04] transition-all duration-300 ${reveal(focus.isVisible, `delay-[${i * 80}ms]`)}`}
              >
                <div className="w-10 h-10 rounded-[10px] bg-primary/15 border border-primary/20 grid place-items-center mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-bold mb-1.5 text-foreground">{item.title}</h3>
                <p className="text-[0.82rem] text-muted-foreground leading-[1.6]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. MODEL ─────────────────────────────────────── */}
      <section
        id="model"
        ref={model.ref}
        className="py-24 md:py-32 px-6 border-t border-white/[0.08]"
      >
        <div className={`max-w-6xl mx-auto ${reveal(model.isVisible)}`}>
          <SectionLabel>Our model</SectionLabel>
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-extrabold tracking-tight mb-5 leading-[1.15]">
            How we operate
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed">
            CVDS operates as a market builder — not a venture studio or consulting firm. Execution is the product.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mt-14 items-start">
            <div className="flex flex-col">
              {[
                { num: "01", title: "Market entry strategy", desc: "Tailored positioning for Australian industrial decision-makers." },
                { num: "02", title: "Pilot deployment", desc: "Co-deploy with industrial operators in operational conditions." },
                { num: "03", title: "Commercial structuring", desc: "Partnership models that scale beyond the first deployment." },
                { num: "04", title: "Ecosystem integration", desc: "Long-term anchoring across sector networks and supply chains." },
              ].map((step, i) => (
                <div
                  key={step.num}
                  className={`flex gap-5 py-5 ${i < 3 ? "border-b border-white/[0.08]" : ""}`}
                >
                  <div className="w-8 h-8 flex-shrink-0 rounded-lg bg-primary/15 border border-primary/30 grid place-items-center font-mono-tech text-[0.7rem] font-bold text-primary">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="text-[0.95rem] font-semibold mb-1 text-foreground">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-xl overflow-hidden opacity-30">
                <img src={sectorMining} alt="" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div
                className="relative rounded-xl p-8 md:p-10 border border-primary/25"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(199 89% 48% / 0.12), hsl(234 89% 67% / 0.08))",
                  backdropFilter: "blur(8px)",
                }}
              >
                <Rocket className="w-8 h-8 text-primary mb-5" />
                <h3 className="text-[1.3rem] font-bold mb-4 text-foreground">
                  Execution and real-world deployment
                </h3>
                <p className="text-[0.9rem] text-muted-foreground leading-[1.7] mb-7">
                  We engage where outcomes are measurable — operational pilots, industrial partnerships, and sustained
                  market presence. Not slides, not roadmaps. Deployment.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-[10px] text-sm hover:bg-[hsl(var(--primary-dim))] transition-colors"
                >
                  Start a conversation
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. PARTNERSHIPS ──────────────────────────────── */}
      <section
        id="partnerships"
        ref={partnerships.ref}
        className="py-24 md:py-32 px-6 bg-[hsl(var(--background-2))] border-t border-white/[0.08] relative overflow-hidden"
      >
        {/* AI abstract banner background */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 opacity-25 pointer-events-none">
          <img
            src={abstractAi}
            alt=""
            className="w-full h-full object-cover object-bottom"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background-2))] via-transparent to-[hsl(var(--background-2))]" />
        </div>

        <div className={`max-w-6xl mx-auto relative ${reveal(partnerships.isVisible)}`}>
          <SectionLabel>Partnerships</SectionLabel>
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-extrabold tracking-tight mb-5 leading-[1.15]">
            Who we work with
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed mb-14">
            We build alongside companies and partners shipping technologies for real-world deployment.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: Rocket, title: "Deep-tech founders" },
              { icon: Shield, title: "Cybersecurity companies" },
              { icon: HardHat, title: "Industrial technology" },
              { icon: LineChart, title: "Investors" },
              { icon: Briefcase, title: "Infrastructure operators" },
            ].map((p, i) => (
              <div
                key={p.title}
                className={`bg-card border border-white/[0.08] rounded-xl p-5 text-center hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300 ${reveal(partnerships.isVisible, `delay-[${i * 80}ms]`)}`}
              >
                <div className="w-11 h-11 mx-auto mb-3 rounded-[10px] bg-primary/15 border border-primary/20 grid place-items-center">
                  <p.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-[0.85rem] font-semibold text-foreground leading-tight">{p.title}</h4>
              </div>
            ))}
          </div>

          <p className="text-center max-w-xl mx-auto mt-12 text-muted-foreground text-[0.95rem]">
            Long-term operational partnerships — not one-off engagements.
          </p>
        </div>
      </section>

      {/* ── 7. CONTACT ──────────────────────────────────── */}
      <section
        id="contact"
        ref={contact.ref}
        className="py-24 md:py-32 px-6 border-t border-white/[0.08] relative overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/8 blur-[120px] rounded-full pointer-events-none" />

        <div className={`max-w-6xl mx-auto relative ${reveal(contact.isVisible)}`}>
          <SectionLabel>Get in touch</SectionLabel>
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-extrabold tracking-tight mb-5 leading-[1.15]">
            Build your Australian market presence
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed">
            If your technology is designed for real-world impact, we can help you deploy it in Australia.
          </p>

          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 mt-14 items-start">
            <div>
              <h3 className="text-[1.1rem] font-bold mb-4">Let's start with a confidential conversation.</h3>
              <p className="text-muted-foreground text-[0.9rem] leading-[1.75] mb-6">
                Tell us about your technology, your traction, and where you'd like to land in Australia.
                We respond personally within three business days.
              </p>

              <div className="space-y-3 mb-8">
                <a
                  href="mailto:contact@cvds.ventures"
                  className="flex items-center gap-3 text-[0.875rem] text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="text-primary">✉</span>
                  contact@cvds.ventures
                </a>
                <div className="flex items-center gap-3 text-[0.875rem] text-muted-foreground">
                  <span className="text-primary">⌖</span>
                  Perth, Western Australia
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                {[
                  "Confidential by default",
                  "Personal reply within 3 business days",
                  "No obligation, no boilerplate",
                ].map((t) => (
                  <div key={t} className="flex items-center gap-2.5 text-[0.82rem] text-muted-foreground">
                    <span className="text-primary font-bold">✓</span>
                    {t}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-white/[0.08] rounded-xl p-6 md:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;