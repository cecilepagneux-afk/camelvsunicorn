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
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50/50 to-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-cvds-primary mb-16">
          What We Look For
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {criteria.map((criterion, index) => (
            <FeatureCard
              key={index}
              icon={criterion.icon}
              title={criterion.title}
              description={criterion.description}
            />
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            variant="cvds-primary" 
            size="lg"
            className="text-xl px-12 py-6 h-auto"
            asChild
          >
            <a 
              href="https://calendly.com/cecile-pagneux/intro-call-digital-business-acquisition" 
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