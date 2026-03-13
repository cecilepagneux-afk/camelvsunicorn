import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Cpu, Brain, Server, Layers, ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* ── 1. Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px]" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-32 pb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-10 text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Venture Studio
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8 tracking-tight">
            Building the next<br />
            generation of{" "}
            <span className="text-gradient">critical<br />technologies</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            CVDS Digital Ventures is a venture studio focused on building and scaling companies in cybersecurity, industrial technology, AI systems and digital infrastructure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base px-8 py-6 h-auto bg-primary text-primary-foreground hover:bg-primary/90 rounded-full group" asChild>
              <a href="#thesis">
                Explore our approach
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 py-6 h-auto rounded-full border-border text-foreground hover:bg-card" asChild>
              <a href="#contact">Work with us</a>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ── 2. Our Thesis ── */}
      <section id="thesis" className="py-32 px-6 section-glow">
        <div className="max-w-4xl mx-auto">
          <div className="line-accent mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            A new generation of<br />infrastructure companies
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">
            <p>
              We believe the coming decade will be defined by the rebuilding of critical digital and industrial systems.
            </p>
            <p>
              Cybersecurity, industrial resilience, artificial intelligence and sovereign technologies are becoming foundational infrastructure.
            </p>
            <p>
              CVDS Digital Ventures identifies opportunities where deep technology meets real-world problems. We partner with founders, researchers and industry operators to transform breakthrough ideas into scalable companies.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. What We Do ── */}
      <section id="approach" className="py-32 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="line-accent mb-6" />
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">What we do</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">From idea to company</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Venture Building",
                description: "We create companies around breakthrough technologies and real industry problems. From initial thesis to market entry, we build from the ground up.",
                num: "01"
              },
              {
                title: "Strategic Acceleration",
                description: "We support early-stage technology companies with strategy, market positioning, go-to-market execution and strategic partnerships.",
                num: "02"
              },
              {
                title: "Capital and Network",
                description: "We connect ventures with capital, strategic partners and global opportunities across industries and geographies.",
                num: "03"
              },
            ].map((item) => (
              <div key={item.num} className="card-dark p-8 group">
                <span className="text-5xl font-bold text-border group-hover:text-primary/20 transition-colors">{item.num}</span>
                <h3 className="text-xl font-semibold mt-4 mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Focus Areas ── */}
      <section id="focus" className="py-32 px-6 section-glow border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="line-accent mb-6" />
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">Focus areas</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Where we build</h2>
          <p className="text-lg text-muted-foreground mb-16 max-w-2xl">
            These sectors will define the next technological cycle. We focus where deep expertise creates lasting competitive advantage.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Shield, label: "Cybersecurity and digital sovereignty" },
              { icon: Cpu, label: "Industrial technologies and operational systems" },
              { icon: Brain, label: "Artificial intelligence systems" },
              { icon: Server, label: "Digital infrastructure and resilience" },
              { icon: Layers, label: "Deep technology platforms" },
            ].map((item) => (
              <div key={item.label} className="card-dark p-6 flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="text-foreground font-medium leading-snug">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Our Model ── */}
      <section id="model" className="py-32 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="line-accent mb-6" />
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">Our model</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">A venture studio approach</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Venture Capital",
                description: "Provides capital. Limited operational involvement. Portfolio-driven returns.",
                highlight: false,
              },
              {
                title: "Venture Studio",
                description: "Co-builds companies from inception. Deep operational engagement. Technology strategy, execution and capital combined.",
                highlight: true,
              },
              {
                title: "Consulting",
                description: "Provides advisory. No ownership stake. Project-based engagement.",
                highlight: false,
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`p-8 rounded-xl border ${
                  item.highlight
                    ? "border-primary/40 bg-primary/5 shadow-[0_0_40px_hsl(210_100%_60%/0.08)]"
                    : "border-border bg-card"
                }`}
              >
                <h3 className={`text-lg font-semibold mb-3 ${item.highlight ? "text-primary" : "text-foreground"}`}>
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
                {item.highlight && (
                  <div className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-primary">
                    <ChevronRight className="w-3 h-3" /> CVDS operates here
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="card-dark p-8">
            <p className="text-muted-foreground leading-relaxed">
              CVDS Digital Ventures sits at the intersection of technology strategy, venture building, industry expertise and long-term capital thinking. We do not simply invest. We co-build companies alongside founders, engineers and domain experts — from thesis to scale.
            </p>
          </div>
        </div>
      </section>

      {/* ── 6. Partnerships ── */}
      <section id="partnerships" className="py-32 px-6 border-t border-border section-glow">
        <div className="max-w-5xl mx-auto">
          <div className="line-accent mb-6" />
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">Partnerships</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Who we work with</h2>
          <p className="text-lg text-muted-foreground mb-16 max-w-2xl">
            The goal is to turn strong ideas into strong companies. We collaborate with people who bring deep expertise and long-term conviction.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Technology founders",
              "Researchers and engineers",
              "Industrial partners",
              "Investors",
              "Operators with deep domain expertise",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 p-5 card-dark">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Vision ── */}
      <section className="py-32 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <div className="line-accent mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
            Building companies<br />
            <span className="text-gradient">that matter</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            CVDS Digital Ventures focuses on technologies that will shape the next decade of infrastructure, security and industry. Our ambition is to create companies with long-term impact — not short-term opportunities.
          </p>
        </div>
      </section>

      {/* ── 8. Contact ── */}
      <section id="contact" className="py-32 px-6 border-t border-border section-glow">
        <div className="max-w-3xl mx-auto text-center">
          <div className="line-accent mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Build with us</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
            We are always open to meeting founders, partners, investors and industry experts who share our conviction in building critical technology companies.
          </p>
          
          <Button size="lg" className="text-base px-10 py-6 h-auto bg-primary text-primary-foreground hover:bg-primary/90 rounded-full group" asChild>
            <a href="mailto:contact@cvds.ventures">
              Get in touch
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          
          <p className="text-sm text-muted-foreground mt-8">
            contact@cvds.ventures
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
