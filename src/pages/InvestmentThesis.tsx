import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, ShoppingBag, Zap, TrendingUp, Globe, Users, Target } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const InvestmentThesis = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-white via-cvds-primary/5 to-cvds-secondary/10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-cvds-dark mb-6">
            Investment Thesis
          </h1>
          <p className="text-2xl text-cvds-primary font-light max-w-3xl mx-auto">
            How CVDS Digital Ventures acquires and scales automation-driven digital assets
          </p>
        </div>
      </section>

      {/* Strategic Vision */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-cvds-primary mb-8 text-center">Strategic Vision</h2>
          
          <div className="bg-gradient-to-br from-cvds-primary/5 to-cvds-secondary/10 rounded-2xl p-10 mb-16 border border-cvds-primary/20">
            <p className="text-xl text-gray-800 leading-relaxed mb-6">
              CVDS Digital Ventures acquires and scales <strong>automation-driven digital assets</strong> with proven profitability and growth potential.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The focus: small, profitable SaaS and AI tools that make e-commerce smarter, faster, and more sustainable. 
              Every acquisition is structured around continuity, founder collaboration, and long-term value creation.
            </p>
          </div>

          {/* What I Acquire */}
          <h3 className="text-3xl font-bold text-cvds-dark mb-10 text-center">What I Acquire</h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all hover:scale-105 duration-300">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cvds-primary to-cvds-secondary flex items-center justify-center mb-5">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-cvds-dark mb-3">SaaS Platforms</h4>
              <p className="text-gray-600 leading-relaxed">
                Subscription-based software with recurring revenue, proven product-market fit, and clear automation opportunities.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all hover:scale-105 duration-300">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cvds-primary to-cvds-secondary flex items-center justify-center mb-5">
                <Cpu className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-cvds-dark mb-3">AI Tools</h4>
              <p className="text-gray-600 leading-relaxed">
                Machine learning and AI-powered solutions that simplify complex workflows and enhance decision-making.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all hover:scale-105 duration-300">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cvds-primary to-cvds-secondary flex items-center justify-center mb-5">
                <ShoppingBag className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-cvds-dark mb-3">E-commerce Automation</h4>
              <p className="text-gray-600 leading-relaxed">
                Tools that streamline inventory, customer service, marketing, and operations for online retailers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Acquisition Approach */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-cvds-primary/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-cvds-primary mb-12 text-center">Acquisition Approach</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-cvds-primary/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-cvds-primary" />
              </div>
              <h3 className="text-xl font-semibold text-cvds-dark mb-3">Founder-Friendly Structures</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                I prioritize vendor finance, earn-outs, and joint ventures that align incentives and share success.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-cvds-primary mr-2">•</span>
                  <span>Flexible payment terms tailored to cash flow</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cvds-primary mr-2">•</span>
                  <span>Performance-based earn-outs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cvds-primary mr-2">•</span>
                  <span>Opportunities for ongoing involvement</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-cvds-primary/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-cvds-primary" />
              </div>
              <h3 className="text-xl font-semibold text-cvds-dark mb-3">Continuity & Collaboration</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Transitions typically span 3-12 months, with founders involved in knowledge transfer and strategic guidance.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-cvds-primary mr-2">•</span>
                  <span>Brand identity preservation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cvds-primary mr-2">•</span>
                  <span>Customer relationship protection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cvds-primary mr-2">•</span>
                  <span>Thoughtful team integration</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-cvds-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-cvds-primary" />
              </div>
              <h3 className="text-xl font-semibold text-cvds-dark mb-3">Value Creation Focus</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Post-acquisition, I focus on sustainable growth through automation, process optimization, and market expansion.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-cvds-primary mr-2">•</span>
                  <span>AI-driven automation implementation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cvds-primary mr-2">•</span>
                  <span>Cross-business synergies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cvds-primary mr-2">•</span>
                  <span>International scaling (AU ↔ EU)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-cvds-primary/10 flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-cvds-primary" />
              </div>
              <h3 className="text-xl font-semibold text-cvds-dark mb-3">Global Scalability</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Building bridges between Australia and Europe, creating sustainable digital ecosystems across continents.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-cvds-primary mr-2">•</span>
                  <span>Dual-market presence (Perth + Spain)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cvds-primary mr-2">•</span>
                  <span>Multi-timezone operations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cvds-primary mr-2">•</span>
                  <span>Cross-continental partnerships</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 px-6 bg-cvds-primary/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-cvds-primary mb-12 text-center">Roadmap 2025-2028</h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-cvds-primary/20"></div>
            
            <div className="space-y-12">
              {/* 2025 */}
              <div className="relative">
                <div className="md:flex md:items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 animate-fade-in">
                      <h3 className="text-2xl font-bold text-cvds-dark mb-3">2025</h3>
                      <h4 className="text-xl font-semibold text-cvds-primary mb-3">First Acquisition</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Complete first acquisition under AUD 100K. Focus on SaaS or AI tool with proven revenue and automation potential.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-cvds-primary border-4 border-white shadow-lg"></div>
                  <div className="md:w-1/2"></div>
                </div>
              </div>

              {/* 2026 */}
              <div className="relative">
                <div className="md:flex md:items-center">
                  <div className="md:w-1/2"></div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-cvds-secondary border-4 border-white shadow-lg"></div>
                  <div className="md:w-1/2 md:pl-12">
                    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 animate-fade-in" style={{ animationDelay: '200ms' }}>
                      <h3 className="text-2xl font-bold text-cvds-dark mb-3">2026</h3>
                      <h4 className="text-xl font-semibold text-cvds-primary mb-3">Portfolio Integration</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Integrate 3 complementary modules: SKU Genius (catalog management), AI Chat Support, and Virtual Try-On (VTO) technology.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2027 */}
              <div className="relative">
                <div className="md:flex md:items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 animate-fade-in" style={{ animationDelay: '400ms' }}>
                      <h3 className="text-2xl font-bold text-cvds-dark mb-3">2027</h3>
                      <h4 className="text-xl font-semibold text-cvds-primary mb-3">Cross-Business Synergies</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Create unified ecosystem connecting acquired tools. Implement shared infrastructure and cross-platform automation.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-cvds-primary border-4 border-white shadow-lg"></div>
                  <div className="md:w-1/2"></div>
                </div>
              </div>

              {/* 2028 */}
              <div className="relative">
                <div className="md:flex md:items-center">
                  <div className="md:w-1/2"></div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-cvds-secondary border-4 border-white shadow-lg"></div>
                  <div className="md:w-1/2 md:pl-12">
                    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 animate-fade-in" style={{ animationDelay: '600ms' }}>
                      <h3 className="text-2xl font-bold text-cvds-dark mb-3">2028</h3>
                      <h4 className="text-xl font-semibold text-cvds-primary mb-3">European Expansion</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Establish Spanish headquarters. Complete Australia-Europe bridge with dual operations and multi-continental presence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-cvds-dark mb-6">
            See the Strategy in Action
          </h2>
          <p className="text-xl text-gray-700 mb-10">
            Explore live projects and ongoing experiments that bring this thesis to life.
          </p>
          
          <Button 
            variant="cvds-hero" 
            size="lg"
            className="text-lg px-10 py-6 h-auto group"
            asChild
          >
            <Link to="/portfolio">
              Explore Live Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InvestmentThesis;
