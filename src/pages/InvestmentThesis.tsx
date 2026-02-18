import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Users, TrendingUp, Globe, Target, XCircle, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const InvestmentThesis = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-cvds-primary/4 to-cvds-secondary/8 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto text-center animate-fade-in-up">
          <span className="pill bg-cvds-primary/10 text-cvds-primary mb-6 inline-flex">
            Investment Thesis
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-cvds-dark mb-5 tracking-tight">
            Our Acquisition Approach
          </h1>
          <p className="text-xl text-cvds-primary font-light max-w-3xl mx-auto">
            A measured, intentional approach to acquiring and operating digital B2B companies
          </p>
        </div>
      </section>


      {/* Strategic Vision */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-cvds-primary mb-8 text-center">Strategic Vision</h2>
          
          <div className="bg-gradient-to-br from-cvds-primary/5 to-cvds-secondary/10 rounded-2xl p-10 mb-16 border border-cvds-primary/20">
            <p className="text-xl text-gray-800 leading-relaxed mb-6">
              CVDS Digital Ventures acquires and operates <strong>digital B2B companies</strong> with established operations and growth potential.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We focus on services firms, tech-enabled businesses, and structured digital operations. Every acquisition is structured around continuity, operational improvement, and long-term value creation — not quick exits or aggressive restructuring.
            </p>
          </div>

          {/* What We Acquire */}
          <h3 className="text-3xl font-bold text-cvds-dark mb-8 text-center">What We Acquire</h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cvds-primary to-cvds-secondary flex items-center justify-center mb-5">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-cvds-dark mb-3">Digital Services Firms</h4>
              <p className="text-gray-600 leading-relaxed">
                Consultancies, agencies, and professional services businesses with established client relationships and recurring revenue potential.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cvds-primary to-cvds-secondary flex items-center justify-center mb-5">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-cvds-dark mb-3">Tech-Enabled Businesses</h4>
              <p className="text-gray-600 leading-relaxed">
                Companies where technology serves as an enabler of core operations, not the primary product offering.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cvds-primary to-cvds-secondary flex items-center justify-center mb-5">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-cvds-dark mb-3">Structured Digital Operations</h4>
              <p className="text-gray-600 leading-relaxed">
                Businesses with clear processes, documented operations, and potential for further systematisation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Look For / Avoid */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-cvds-primary/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-cvds-primary mb-12 text-center">Our Criteria</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* What We Look For */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-bold text-cvds-dark">What We Look For</h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">•</span>
                  <span><strong>Structure potential</strong> — businesses that can be systematised and scaled</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">•</span>
                  <span><strong>Established client base</strong> — existing relationships and revenue</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">•</span>
                  <span><strong>Domain expertise</strong> — clear specialisation and market position</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">•</span>
                  <span><strong>Transition readiness</strong> — founders open to collaboration during handover</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">•</span>
                  <span><strong>Cash flow positive</strong> — sustainable operations with proven revenue</span>
                </li>
              </ul>
            </div>

            {/* What We Avoid */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-bold text-cvds-dark">What We Avoid</h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Pure hourly agencies</strong> — no structure, entirely time-based billing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Founder-dependent chaos</strong> — businesses that cannot function without the owner</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Short-term flip opportunities</strong> — we are not looking for quick exits</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Venture-backed startups</strong> — misaligned expectations and timelines</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Distressed situations</strong> — turnarounds are not our focus</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Acquisition Approach */}
      <section className="py-20 px-6 bg-cvds-primary/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-cvds-primary mb-12 text-center">How We Work</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-cvds-primary/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-cvds-primary" />
              </div>
              <h3 className="text-xl font-semibold text-cvds-dark mb-3">Founder-Friendly Structures</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Deal structures designed around alignment and shared success, not aggressive negotiation.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-cvds-primary mr-2">•</span>
                  <span>Flexible payment terms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cvds-primary mr-2">•</span>
                  <span>Performance-based components</span>
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
                Transitions typically span 3-12 months, with founders involved in knowledge transfer.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-cvds-primary mr-2">•</span>
                  <span>Brand and reputation preservation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cvds-primary mr-2">•</span>
                  <span>Client relationship protection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cvds-primary mr-2">•</span>
                  <span>Team and culture respect</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-cvds-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-cvds-primary" />
              </div>
              <h3 className="text-xl font-semibold text-cvds-dark mb-3">Operational Focus</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Post-acquisition, we focus on sustainable improvement through structure and process.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-cvds-primary mr-2">•</span>
                  <span>Process documentation and systematisation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cvds-primary mr-2">•</span>
                  <span>Technology enablement (not replacement)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cvds-primary mr-2">•</span>
                  <span>Measured expansion</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-cvds-primary/10 flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-cvds-primary" />
              </div>
              <h3 className="text-xl font-semibold text-cvds-dark mb-3">International Perspective</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Building bridges between Australia and Europe for cross-continental opportunity.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-cvds-primary mr-2">•</span>
                  <span>Dual-market presence (Perth + Europe)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cvds-primary mr-2">•</span>
                  <span>Multi-timezone operations experience</span>
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

      {/* Deal Parameters */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-cvds-primary mb-12 text-center">Deal Parameters</h2>
          
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
                  <td className="px-8 py-5 text-gray-600">Below AUD 100K initial (flexible based on structure)</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-5 font-medium text-gray-700">Revenue</td>
                  <td className="px-8 py-5 text-gray-600">Cash-flow positive with established client base</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-5 font-medium text-gray-700">Structure</td>
                  <td className="px-8 py-5 text-gray-600">Flexible — vendor finance, earn-outs, equity partnerships</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-5 font-medium text-gray-700">Transition</td>
                  <td className="px-8 py-5 text-gray-600">3-12 months with founder involvement</td>
                </tr>
              </tbody>
            </table>
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
            No obligation. Complete confidentiality. A respectful conversation.
          </p>
          <p className="text-lg text-white/80 mb-10 leading-relaxed">
            If you're thinking about passing on your digital business, I'd welcome the opportunity to discuss what a structured transition might look like.
          </p>
          
          <Button 
            variant="cvds-hero" 
            size="lg"
            className="text-lg px-10 py-6 h-auto group bg-white text-cvds-primary hover:bg-white/90"
            asChild
          >
            <Link to="/contact">
              Let's Have a Conversation
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