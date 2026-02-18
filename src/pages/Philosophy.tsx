import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sprout, Shield, Users, Target } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhyPartner from "@/components/WhyPartner";
import FounderBio from "@/components/FounderBio";

const Philosophy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-cvds-primary/4 to-cvds-secondary/8 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center animate-fade-in-up">
          <span className="pill bg-cvds-primary/10 text-cvds-primary mb-6 inline-flex">
            Our Founding Principle
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-cvds-dark mb-5 tracking-tight">
            Camel vs Unicorn
          </h1>
          <p className="text-xl text-cvds-primary font-light">
            A Philosophy of Sustainable Operations
          </p>
        </div>
      </section>

      
      {/* Visual Comparison */}
      <WhyPartner />

      {/* Main Philosophy Content */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div className="bg-cvds-primary/5 rounded-2xl p-10 mb-12 border border-cvds-primary/20">
              <p className="text-2xl text-gray-800 leading-relaxed mb-6">
                Camels adapt. They survive. They grow at their own rhythm — resilient and real.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                CVDS was built around that idea: <strong>operating steadily, structuring carefully, and building lasting value</strong>. Not chasing hypergrowth — but creating sustainable businesses that endure.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-cvds-dark mb-8">Why Camel vs Unicorn?</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              In a world obsessed with hypergrowth and billion-dollar valuations, the camel represents something different: 
              <strong> endurance, adaptability, and sustainable progress</strong>.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              Unicorns are rare, spectacular, and often short-lived. Camels cross deserts. They carry weight. They sustain. 
              That's the spirit behind CVDS Digital Ventures.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-cvds-primary/10 flex items-center justify-center mb-4">
                  <Sprout className="w-6 h-6 text-cvds-primary" />
                </div>
                <h3 className="text-xl font-semibold text-cvds-dark mb-3">Measured Growth</h3>
                <p className="text-gray-600 leading-relaxed">
                  We don't force scale. Every acquisition is given time to integrate, stabilise, and develop sustainably.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-cvds-primary/10 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-cvds-primary" />
                </div>
                <h3 className="text-xl font-semibold text-cvds-dark mb-3">Structure Over Speed</h3>
                <p className="text-gray-600 leading-relaxed">
                  Profitability matters. Cash flow matters. We acquire businesses that already work — and make them better through structure.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-cvds-primary/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-cvds-primary" />
                </div>
                <h3 className="text-xl font-semibold text-cvds-dark mb-3">Founder Respect</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every founder deserves to see their work continue. Transitions should feel collaborative, not transactional.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-cvds-primary/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-cvds-primary" />
                </div>
                <h3 className="text-xl font-semibold text-cvds-dark mb-3">Long-Term Focus</h3>
                <p className="text-gray-600 leading-relaxed">
                  We're not building to flip. We're building to operate. Every decision is made with long-term sustainability in mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy in Practice */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-cvds-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-cvds-primary mb-12">
            Our Operating Philosophy
          </h2>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold text-cvds-dark mb-4">Continuity</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                When acquiring a business, we're not just buying operations or clients. We're inheriting a story. 
                Our goal is to honour that story while writing the next chapter — thoughtfully and deliberately.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold text-cvds-dark mb-4">Structure</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every decision is made with long-term health in mind. Profitability isn't a milestone — it's a foundation. 
                We build businesses that can sustain themselves through proper process and documentation.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold text-cvds-dark mb-4">Execution</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Operations are where value is created. We focus on doing the work — improving processes, 
                strengthening client relationships, and building systems that enable sustainable growth.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold text-cvds-dark mb-4">International Perspective</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                CVDS bridges Australia and Europe, creating opportunities that span continents. 
                We think globally but operate with local care and attention.
              </p>
            </div>
          </div>

          {/* Quote Section */}
          <div className="mt-16 text-center">
            <blockquote className="text-2xl italic text-gray-700 mb-4">
              "Every founder deserves to see their work continue."
            </blockquote>
            <p className="text-lg text-cvds-primary font-medium">— Cécile Pagneux</p>
          </div>
        </div>
      </section>
      
      {/* Founder Bio */}
      <FounderBio />

      {/* CTA */}
      <section className="py-20 px-6 bg-cvds-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-cvds-dark mb-6">
            See How This Philosophy Shapes Our Approach
          </h2>
          <p className="text-xl text-gray-700 mb-10">
            The Camel vs Unicorn philosophy isn't just words — it's the foundation of how CVDS evaluates and operates businesses.
          </p>
          
          <Button 
            variant="cvds-hero" 
            size="lg"
            className="text-lg px-10 py-6 h-auto group"
            asChild
          >
            <Link to="/thesis">
              View Our Acquisition Approach
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Philosophy;