import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building2, Users, Target, Globe, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PortfolioPage = () => {
  const focusAreas = [
    {
      icon: Building2,
      name: "Digital Services Firms",
      description: "Consultancies, agencies, and professional services businesses with established client relationships and potential for recurring revenue.",
      characteristics: ["Established client base", "Domain expertise", "Revenue stability"]
    },
    {
      icon: Target,
      name: "Tech-Enabled Businesses",
      description: "Companies where technology serves as an enabler of core operations — not the primary product. Strong processes with automation potential.",
      characteristics: ["Process-driven", "Scalable operations", "Technology leverage"]
    },
    {
      icon: Users,
      name: "Structured Digital Operations",
      description: "Businesses with clear processes, documented operations, and potential for further systematisation and growth.",
      characteristics: ["Documented processes", "Repeatable delivery", "Growth potential"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-cvds-primary/4 to-cvds-secondary/8 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto text-center animate-fade-in-up">
          <span className="pill bg-cvds-primary/10 text-cvds-primary mb-6 inline-flex">
            Focus Areas
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-cvds-dark mb-5 tracking-tight">
            Our Focus Areas
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            CVDS acquires and operates digital B2B companies with established operations and growth potential. We focus on businesses that benefit from structure, process improvement, and measured expansion.
          </p>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-cvds-primary mb-12 text-center">Business Types We Acquire</h2>
          
          <div className="space-y-8">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cvds-primary to-cvds-secondary flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-cvds-dark mb-4">
                        {area.name}
                      </h3>
                      
                      <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        {area.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {area.characteristics.map((char, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 bg-cvds-primary/10 text-cvds-primary rounded-full text-sm font-medium"
                          >
                            {char}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Bring */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-cvds-primary/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-cvds-primary mb-12 text-center">What We Bring Post-Acquisition</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-cvds-dark mb-4">Operational Structure</h3>
              <p className="text-gray-600 leading-relaxed">
                Process documentation, systematisation, and operational improvements that reduce founder dependency and enable scale.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-cvds-dark mb-4">Technology Enablement</h3>
              <p className="text-gray-600 leading-relaxed">
                Strategic use of technology to improve efficiency and client delivery — not replacement of human expertise.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-cvds-dark mb-4">International Perspective</h3>
              <p className="text-gray-600 leading-relaxed">
                Cross-continental experience bridging Australia and Europe, opening new markets and partnership opportunities.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-cvds-dark mb-4">Long-Term Capital</h3>
              <p className="text-gray-600 leading-relaxed">
                Patient approach to growth with no pressure for quick exits or aggressive restructuring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Geography */}
      <section className="py-20 px-6 bg-cvds-primary/5">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Globe className="w-10 h-10 text-cvds-primary" />
              <h2 className="text-3xl font-bold text-cvds-dark">Geographic Focus</h2>
            </div>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed text-center">
              CVDS operates across Australia and Europe, with experience in cross-timezone operations and international business development.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center p-6 bg-cvds-primary/5 rounded-xl">
                <h3 className="text-xl font-semibold text-cvds-dark mb-2">Australia</h3>
                <p className="text-gray-600">Primary base in Perth, Western Australia</p>
              </div>
              <div className="text-center p-6 bg-cvds-primary/5 rounded-xl">
                <h3 className="text-xl font-semibold text-cvds-dark mb-2">Europe</h3>
                <p className="text-gray-600">Expanding presence and partnerships</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-cvds-dark via-cvds-primary to-cvds-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Considering a Transition?
          </h2>
          <p className="text-xl text-white/90 mb-4 leading-relaxed">
            If your business fits these criteria and you're thinking about the next chapter, let's have a conversation.
          </p>
          <p className="text-lg text-white/80 mb-10 leading-relaxed">
            No obligation. Complete confidentiality. A respectful discussion about what might be possible.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="cvds-secondary" 
              size="lg"
              className="text-lg px-10 py-6 h-auto bg-white text-cvds-primary hover:bg-white/90 group"
              asChild
            >
              <Link to="/contact">
                Start a Conversation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-10 py-6 h-auto border-2 border-white text-white hover:bg-white hover:text-cvds-primary"
              asChild
            >
              <Link to="/thesis">
                View Full Criteria
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioPage;