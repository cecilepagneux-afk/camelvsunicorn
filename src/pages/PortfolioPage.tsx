import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Lightbulb, Cpu, ShoppingBag, Eye, Sparkles, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PortfolioPage = () => {
  const liveProjects = [
    {
      icon: ShoppingBag,
      name: "SKU Genius",
      status: "Prototype",
      description: "AI-powered catalog and inventory manager helping e-commerce merchants streamline SKUs, automate product data enrichment, and maintain consistency across multiple sales channels.",
      highlights: ["Product data structuring", "Multi-channel sync", "AI enrichment"]
    },
    {
      icon: Cpu,
      name: "AI Chat Support",
      status: "In Development",
      description: "Conversational AI assistant designed for small e-commerce brands. Handles customer inquiries, order tracking, and basic support — learning from each interaction to improve response quality.",
      highlights: ["24/7 customer support", "Order management", "Self-learning AI"]
    },
    {
      icon: Eye,
      name: "Virtual Try-On (VTO)",
      status: "Acquisition Target",
      description: "Augmented reality technology that allows customers to visualize products in their environment or on themselves before purchase — reducing returns and increasing confidence.",
      highlights: ["AR visualization", "Reduced returns", "Enhanced UX"]
    }
  ];

  const concepts = [
    {
      icon: Sparkles,
      name: "Automation Experiments",
      description: "Testing workflow automation tools that help e-commerce teams reduce manual tasks and focus on growth."
    },
    {
      icon: Lightbulb,
      name: "Market Intelligence",
      description: "Exploring AI-driven market analysis tools for competitive insights and pricing optimization."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-white via-cvds-primary/5 to-cvds-secondary/10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          <p className="text-lg text-gray-600 mb-4 italic">
            Every experiment teaches me something new.
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-cvds-dark mb-6">
            Portfolio & Live Experiments
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            From SKU Genius to AI chat prototypes, each project is a step towards a more sustainable digital ecosystem. 
            Some are acquired. Some are built from scratch. All are designed to solve real problems.
          </p>
        </div>
      </section>

      {/* Live Projects */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-cvds-primary mb-12 text-center">Live Projects</h2>
          
          <div className="space-y-8">
            {liveProjects.map((project, index) => {
              const Icon = project.icon;
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
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-2xl font-bold text-cvds-dark">
                          {project.name}
                        </h3>
                        <span className="inline-block mt-2 md:mt-0 px-4 py-1 bg-cvds-primary/10 text-cvds-primary rounded-full text-sm font-medium">
                          {project.status}
                        </span>
                      </div>
                      
                      <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.highlights.map((highlight, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {highlight}
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

      {/* Ongoing Concepts */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-cvds-primary/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-cvds-primary mb-12 text-center">Ongoing Experiments</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {concepts.map((concept, index) => {
              const Icon = concept.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all hover:scale-105 duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cvds-primary to-cvds-secondary flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-cvds-dark mb-3">
                    {concept.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {concept.description}
                  </p>
                </div>
              );
            })}
          </div>

          <p className="text-center text-gray-600 mt-12 italic text-lg">
            Each one is a step towards a more sustainable digital ecosystem.
          </p>
        </div>
      </section>

      {/* Philosophy Link */}
      <section className="py-20 px-6 bg-cvds-primary/5">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 text-center">
            <h2 className="text-3xl font-bold text-cvds-dark mb-6">
              The Thinking Behind the Building
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              These projects aren't random experiments — they're guided by a philosophy of sustainable growth, 
              founder empathy, and human-centered technology.
            </p>
            
            <Button 
              variant="cvds-hero" 
              size="lg"
              className="text-lg px-10 py-6 h-auto group"
              asChild
            >
              <Link to="/philosophy">
                Read the Philosophy
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-cvds-dark mb-6">
            Want to Collaborate on a Project?
          </h2>
          <p className="text-xl text-gray-700 mb-10">
            If you're building something in this space — or considering selling — let's connect.
          </p>
          
          <Button 
            variant="cvds-secondary" 
            size="lg"
            className="text-lg px-10 py-6 h-auto group"
            asChild
          >
            <Link to="/collaborate">
              Discover Collaboration Opportunities
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
