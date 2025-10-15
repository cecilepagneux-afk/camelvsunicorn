import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Target, Globe } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 bg-gradient-to-br from-white via-cvds-primary/5 to-cvds-secondary/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-cvds-dark mb-6 leading-tight">
              Building Sustainable Digital Ventures
            </h1>
            <p className="text-2xl md:text-3xl text-cvds-primary mb-8 font-light">
              One profitable acquisition at a time.
            </p>
            <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
              At CVDS Digital Ventures, I acquire and scale small AI-driven businesses that automate, simplify, and grow responsibly. Every acquisition is a handover — not just a transaction.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="cvds-hero" 
                size="lg"
                className="text-lg px-10 py-6 h-auto group"
                asChild
              >
                <Link to="/philosophy">
                  Discover the Philosophy
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button 
                variant="cvds-secondary" 
                size="lg"
                className="text-lg px-10 py-6 h-auto"
                asChild
              >
                <Link to="/thesis">
                  View Investment Thesis
                </Link>
              </Button>
            </div>
          </div>

          {/* Visual Element - Abstract Shape */}
          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cvds-primary/20 to-cvds-secondary/20 blur-3xl opacity-50"></div>
            <div className="relative bg-white rounded-3xl p-12 shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-cvds-dark mb-8 text-center">
                What CVDS Does
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center animate-fade-in" style={{ animationDelay: '100ms' }}>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-cvds-primary to-cvds-secondary flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-cvds-dark mb-3">Acquire</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Small, profitable SaaS and AI tools with proven product-market fit and sustainable revenue streams.
                  </p>
                </div>

                <div className="text-center animate-fade-in" style={{ animationDelay: '200ms' }}>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-cvds-primary to-cvds-secondary flex items-center justify-center">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-cvds-dark mb-3">Scale</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Introduce automation, better processes, and cross-business synergies while preserving brand essence.
                  </p>
                </div>

                <div className="text-center animate-fade-in" style={{ animationDelay: '300ms' }}>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-cvds-primary to-cvds-secondary flex items-center justify-center">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-cvds-dark mb-3">Connect</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Build bridges between Australia and Europe, creating a sustainable digital ecosystem across continents.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Camel vs Unicorn Teaser */}
      <section className="py-24 px-6 bg-gradient-to-b from-cvds-primary/5 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-600 mb-6 italic">
            "Camels adapt. They survive. They grow at their own rhythm — resilient and real."
          </p>
          
          <h2 className="text-4xl md:text-5xl font-bold text-cvds-primary mb-8">
            The Camel vs Unicorn Philosophy
          </h2>
          
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            CVDS was built around sustainable growth: building slowly, intentionally, and globally. Not chasing unicorn status — but creating lasting value, one deliberate step at a time.
          </p>
          
          <Button 
            variant="outline" 
            size="lg"
            className="text-lg px-10 py-6 h-auto border-2 border-cvds-primary text-cvds-primary hover:bg-cvds-primary hover:text-white group"
            asChild
          >
            <Link to="/philosophy">
              Read the Full Philosophy
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-cvds-dark via-cvds-primary to-cvds-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Start a Conversation?
          </h2>
          
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Whether you're a founder considering a transition, a broker with opportunities, or a builder creating automation tools — let's talk.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="cvds-secondary" 
              size="lg"
              className="text-lg px-10 py-6 h-auto bg-white text-cvds-primary hover:bg-white/90"
              asChild
            >
              <Link to="/collaborate">
                Explore Collaboration
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-10 py-6 h-auto border-2 border-white text-white hover:bg-white hover:text-cvds-primary"
              asChild
            >
              <Link to="/contact">
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
