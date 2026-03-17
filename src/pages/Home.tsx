import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Cpu, Brain, Server, Layers } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
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
            Cybersecurity · Industrial Systems · AI Technologies
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8 tracking-tight">
            Building critical<br />
            technology ventures{" "}
            <span className="text-gradient">in&nbsp;Australia</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            CVDS Digital Ventures partners with deep-tech companies to establish, deploy and scale their solutions across Australia's industrial sectors.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="text-base px-8 py-6 h-auto rounded-full border-border text-foreground hover:bg-card" asChild>
              <a href="#contact">Work with us</a>
            </Button>
            <Button size="lg" className="text-base px-8 py-6 h-auto bg-primary text-primary-foreground hover:bg-primary/90 rounded-full group" asChild>
              <a href="#thesis">
                Explore our approach
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ── 2. Why Australia ── */}
      <section id="thesis" className="py-32 px-6 section-glow">
        <div className="max-w-4xl mx-auto">
          <div className="line-accent mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Why Australia
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">
            <p>
              Australia is one of the most advanced environments for deploying critical technologies.
            </p>
            <p>
              From mining to energy and industrial infrastructure, it offers:
            </p>
            <ul className="space-y-3 pl-1">
              {[
                "Large-scale operations with immediate deployment needs",
                "Real-world complexity across diverse industrial sectors",
                "Strong regulatory pressure driving technology adoption",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              CVDS connects international technologies with Australian industrial ecosystems.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. From Technology to Deployment ── */}
      <section id="approach" className="py-32 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="line-accent mb-6" />
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">What we do</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">From technology to deployment</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Market Positioning",
                description: "We translate technical capabilities into clear industrial value — tailored to Australian sectors and decision-makers.",
                num: "01"
              },
              {
                title: "Market Access",
                description: "We connect companies with operators, partners and decision-makers across mining, energy, defence and critical infrastructure.",
                num: "02"
              },
              {
                title: "Pilot Programs",
                description: "We deploy real-world use cases to validate technology in operational environments and accelerate commercial traction.",
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Where we operate</h2>
          <p className="text-lg text-muted-foreground mb-16 max-w-2xl">
            We focus on technologies that impact real-world systems.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Shield, label: "Cybersecurity and digital sovereignty" },
              { icon: Cpu, label: "Industrial technologies and operational systems" },
              { icon: Brain, label: "Artificial intelligence systems" },
              { icon: Server, label: "Infrastructure and resilience platforms" },
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
        <div className="max-w-4xl mx-auto">
          <div className="line-accent mb-6" />
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">Our model</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">How we operate</h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-3xl mb-12">
            <p>
              CVDS operates as a market builder — not a traditional venture studio or consulting firm.
            </p>
            <p>
              We support companies through:
            </p>
            <ul className="space-y-3 pl-1">
              {[
                "Market entry strategy for Australia",
                "Pilot deployment with industrial operators",
                "Commercial structuring and partnerships",
                "Ecosystem integration across sectors",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Our focus is execution and real-world deployment.
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
            We work with companies and partners building technologies for real-world deployment.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Deep-tech founders",
              "Cybersecurity companies",
              "Industrial technology companies",
              "Investors",
              "Infrastructure operators",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 p-5 card-dark">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Contact ── */}
      <section id="contact" className="py-32 px-6 border-t border-border section-glow">
        <div className="max-w-3xl mx-auto">
          <div className="line-accent mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-center">Build your Australian market presence</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed text-center">
            If your technology is designed for real-world impact, we can help you deploy it in Australia.
          </p>
          
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
