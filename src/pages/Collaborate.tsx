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
      <section className="relative pt-36 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-cvds-primary/4 to-cvds-secondary/8 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto text-center animate-fade-in-up">
          <span className="pill bg-cvds-secondary/10 text-cvds-secondary mb-6 inline-flex">
            Opportunities for founders, intermediaries, and partners
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-cvds-dark mb-5 tracking-tight">
            Work With CVDS
          </h1>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            Structured conversations. Confidential discussions. Long-term perspective.
          </p>
        </div>
      </section>

      {/* Main Intro */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-cvds-primary/5 to-cvds-secondary/10 rounded-2xl p-10 mb-12 border border-cvds-primary/20">
            <p className="text-xl text-gray-800 leading-relaxed mb-4">
              CVDS works with founders considering a transition, intermediaries sourcing opportunities, and partners with aligned interests.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Every conversation is structured around <strong>alignment and continuity</strong> — not pressure or aggressive timelines. 
              If the fit is right, we move forward. If not, the conversation remains valuable.
            </p>
          </div>
          
          {/* Banner CTA */}
          <div className="bg-gradient-to-r from-cvds-primary to-cvds-secondary p-8 rounded-2xl shadow-xl mb-16 max-w-2xl mx-auto">
            <p className="text-white text-lg font-medium mb-4">
              Ready to start a confidential conversation?
            </p>
            <a 
              href="mailto:cecile.pagneux@hotmail.fr?subject=Confidential%20Discussion%20Request"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-cvds-primary rounded-full hover:scale-105 transition-all duration-300 font-bold shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              Schedule a Discussion
            </a>
          </div>

          {/* Who We Work With */}
          <h2 className="text-4xl font-bold text-cvds-primary mb-12 text-center">Who We Work With</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cvds-primary to-cvds-secondary flex items-center justify-center mb-5">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-cvds-dark mb-3">Founders</h3>
              <p className="text-gray-600 leading-relaxed">
                Considering a transition for your digital B2B business. Looking for someone who will respect what you've built and carry it forward with care and structure.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cvds-primary to-cvds-secondary flex items-center justify-center mb-5">
                <Briefcase className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-cvds-dark mb-3">Brokers & Advisors</h3>
              <p className="text-gray-600 leading-relaxed">
                Sourcing digital B2B opportunities that fit CVDS's criteria. Straightforward communication, clear feedback, and respectful process throughout.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cvds-primary to-cvds-secondary flex items-center justify-center mb-5">
                <Handshake className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-cvds-dark mb-3">Strategic Partners</h3>
              <p className="text-gray-600 leading-relaxed">
                Aligned interests in the digital B2B space. Potential for co-investment, operational partnerships, or cross-referral arrangements.
              </p>
            </div>
          </div>
        </div>
      </section>

        {/* What We Look For */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-cvds-primary/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-cvds-primary mb-12 text-center">What We Look For</h2>
          
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
                  <td className="px-8 py-5 text-gray-600">Digital B2B services, tech-enabled businesses, structured digital operations</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-5 font-medium text-gray-700">Geography</td>
                  <td className="px-8 py-5 text-gray-600">Australia, Europe (with international scalability potential)</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-5 font-medium text-gray-700">Size</td>
                  <td className="px-8 py-5 text-gray-600">Below AUD 100K (flexible based on structure)</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-5 font-medium text-gray-700">Revenue</td>
                  <td className="px-8 py-5 text-gray-600">Cash-flow positive with established operations</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-5 font-medium text-gray-700">Deal Structure</td>
                  <td className="px-8 py-5 text-gray-600">Vendor finance, earn-outs, equity partnerships</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-5 font-medium text-gray-700">Transition Period</td>
                  <td className="px-8 py-5 text-gray-600">3-12 months with founder involvement</td>
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
                We understand what it takes to build something. Every acquisition honours the founder's work 
                while introducing structure and sustainable practices.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-cvds-dark mb-4">Flexible Structures</h3>
              <p className="text-gray-600 leading-relaxed">
                Deal terms designed around mutual benefit — vendor finance, performance components, 
                and ongoing involvement opportunities where appropriate.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-cvds-dark mb-4">Long-Term Perspective</h3>
              <p className="text-gray-600 leading-relaxed">
                Not looking for quick flips. Building a portfolio of sustainable, well-operated 
                digital businesses that grow steadily over time.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-cvds-dark mb-4">Collaborative Approach</h3>
              <p className="text-gray-600 leading-relaxed">
                Transitions are partnerships, not takeovers. Your expertise, client relationships, 
                and reputation are preserved and protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-cvds-dark via-cvds-primary to-cvds-secondary">
        <div className="max-w-4xl mx-auto">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Let's Have a Conversation
            </h2>
            <p className="text-xl mb-4 opacity-95">
              No obligation. Complete confidentiality. A respectful discussion about what might be possible.
            </p>
            <p className="text-lg mb-10 opacity-85">
              Whether you're actively considering a transition or simply exploring options for the future, we'd welcome the opportunity to discuss.
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
                  Schedule a Call
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
                  Send a Message
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