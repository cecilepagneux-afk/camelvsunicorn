import { Button } from "@/components/ui/button";
import FeatureCard from "./FeatureCard";

const WhatWeLookFor = () => {
  const criteria = [
    {
      icon: "💼",
      title: "Business Models",
      description: "SaaS, SEO sites, niche marketplaces, paid newsletters, micro-tools."
    },
    {
      icon: "💰",
      title: "Financials",
      description: "Revenue ≥ $20K/year · Net margin >25% · Price under $100K AUD."
    },
    {
      icon: "⚙️",
      title: "Operations",
      description: "Lean teams, ≤10h/week founder involvement, automated or easy to automate."
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50/50 to-background">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-lg text-gray-600 mb-4 animate-fade-in">
          We keep things simple — here's what a great fit looks like.
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-center text-cvds-primary mb-16 animate-fade-in-up">
          What We Look For
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {criteria.map((criterion, index) => (
            <FeatureCard
              key={index}
              icon={criterion.icon}
              title={criterion.title}
              description={criterion.description}
            />
          ))}
        </div>
        
        <p className="text-center text-gray-600 italic mb-12">
          You've built something lean — we'll keep it that way.
        </p>
        
        <div className="text-center">
          <Button 
            variant="cvds-primary" 
            size="lg"
            className="text-lg px-10 py-6 h-auto rounded-full"
            asChild
          >
            <a 
              href="https://calendly.com/cecile-pagneux/intro-call-australian-market-entry" 
              target="_blank"
              rel="noopener noreferrer"
            >
              See If Your Business Fits
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeLookFor;