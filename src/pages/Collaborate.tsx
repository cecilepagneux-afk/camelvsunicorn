import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Handshake, Users, Briefcase, Calendar, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Collaborate = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-white via-cvds-primary/5 to-cvds-secondary/10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-cvds-dark mb-6">
            Work With Me
          </h1>
          <p className="text-2xl text-cvds-primary font-light max-w-3xl mx-auto">
            Open collaboration opportunities for founders, brokers, and builders
          </p>
        </div>
      </section>

      {/* Main Intro */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-cvds-primary/5 to-cvds-secondary/10 rounded-2xl p-10 mb-16 border border-cvds-primary/20">
            <p className="text-xl text-gray-800 leading-relaxed mb-4">
              I collaborate with founders ready to transition, brokers sourcing small SaaS or AI tools, and builders creating automation modules.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Every deal is structured around <strong>alignment and continuity</strong> — not disruption. 
              Let's find the right path forward together.
            </p>
          </div>

          {/* Who I Work With */}
          <h2 className="text-4xl font-bold text-cvds-primary mb-12 text-center">Who I Work With</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all hover:scale-105 duration-300">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cvds-primary to-cvds-secondary flex items-center justify-center mb-5">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-cvds-dark mb-3">Founders</h3>
              <p className="text-gray-600 leading-relaxed">
                Ready to transition your SaaS or digital tool to someone who will respect what you've built and carry it forward thoughtfully.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all hover:scale-105 duration-300">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cvds-primary to-cvds-secondary flex items-center justify-center mb-5">
                <Briefcase className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-cvds-dark mb-3">Brokers & Advisors</h3>
              <p className="text-gray-600 leading-relaxed">
                Sourcing small digital businesses (SaaS, AI tools, e-commerce modules) that fit CVDS's acquisition criteria and philosophy.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all hover:scale-105 duration-300">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cvds-primary to-cvds-secondary flex items-center justify-center mb-5">
                <Handshake className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-cvds-dark mb-3">Builders & AI Creators</h3>
              <p className="text-gray-600 leading-relaxed">
                For developers or founders designing micro-tools that could complement the CVDS ecosystem — creating automation tools, AI prototypes, or complementary technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What I Look For */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-cvds-primary/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-cvds-primary mb-12 text-center">What I Look For</h2>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <table className="w-full">
              <thead className="bg-cvds-primary/5">
                <tr>
                  <th className="px-8 py-4 text-left text-lg font-semibold text-cvds-dark">Dimension</th>
                  <th className="px-8 py-4 text-left text-lg font-semibold text-cvds-dark">Focus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-5 font-medium text-gray-700">Sector</td>
                  <td className="px-8 py-5 text-gray-600">SaaS, AI tools, automation software, e-commerce modules</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-5 font-medium text-gray-700">Geography</td>
                  <td className="px-8 py-5 text-gray-600">Australia, Europe (with global scalability potential)</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-5 font-medium text-gray-700">Ticket Size</td>
                  <td className="px-8 py-5 text-gray-600">Below AUD 100K (flexible based on structure)</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-5 font-medium text-gray-700">Revenue Status</td>
                  <td className="px-8 py-5 text-gray-600">Cash-flow positive with proven product-market fit</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-5 font-medium text-gray-700">Deal Structure</td>
                  <td className="px-8 py-5 text-gray-600">Vendor finance, earn-outs, joint ventures</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-5 font-medium text-gray-700">Transition Period</td>
                  <td className="px-8 py-5 text-gray-600">3-12 months with founder involvement and knowledge transfer</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-5 font-medium text-gray-700">Philosophy Fit</td>
                  <td className="px-8 py-5 text-gray-600">Sustainable growth, customer focus, founder-friendly approach</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Work With CVDS */}
      <section className="py-20 px-6 bg-cvds-primary/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-cvds-primary mb-12 text-center">Why Work With CVDS</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-cvds-dark mb-4">Founder Respect</h3>
              <p className="text-gray-600 leading-relaxed">
                I understand what it takes to build something from scratch. Every acquisition honors the founder's vision 
                while introducing sustainable growth practices.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-cvds-dark mb-4">Flexible Structures</h3>
              <p className="text-gray-600 leading-relaxed">
                Payment terms designed around your needs — vendor finance, performance earn-outs, 
                and ongoing involvement opportunities that align with your goals.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-cvds-dark mb-4">Long-Term Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Not looking for quick flips or aggressive cost-cutting. Building a portfolio of sustainable, 
                interconnected digital assets that grow over time.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-cvds-dark mb-4">Collaborative Approach</h3>
              <p className="text-gray-600 leading-relaxed">
                Transitions are partnerships, not takeovers. Your expertise, customer relationships, 
                and brand identity are preserved and enhanced.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-cvds-primary via-cvds-primary to-cvds-secondary rounded-2xl p-12 text-center text-white shadow-lg">
            <h2 className="text-4xl font-bold mb-6">
              Let's Discuss a Potential Acquisition or Collaboration on AI Tools
            </h2>
            <p className="text-xl mb-10 opacity-95">
              Not a pitch. Just a conversation. Let's explore what's possible together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="cvds-secondary" 
                size="lg"
                className="text-lg px-10 py-6 h-auto bg-white text-cvds-primary hover:bg-white/90 group"
                asChild
              >
                <a 
                  href="https://calendly.com/cecile-pagneux/intro-call-digital-business-acquisition" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  Book a Call
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-10 py-6 h-auto border-2 border-white text-white hover:bg-white hover:text-cvds-primary"
                asChild
              >
                <Link to="/contact">
                  <Mail className="mr-2 w-5 h-5" />
                  Send an Email
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Collaborate;
