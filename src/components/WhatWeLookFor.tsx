import { Check } from "lucide-react";

const WhatWeLookFor = () => {
  const criteria = [
    {
      icon: "💻",
      title: "SaaS with stable MRR"
    },
    {
      icon: "📝",
      title: "SEO / Content websites"
    },
    {
      icon: "📧",
      title: "Newsletters with engaged readers"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50/50 to-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-cvds-primary mb-16">
          What we buy
        </h2>
        
        <div className="space-y-6 mb-12">
          {criteria.map((criterion, index) => (
            <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-cvds-primary/10 rounded-full flex items-center justify-center">
                <Check className="w-6 h-6 text-cvds-primary" />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-3xl">{criterion.icon}</span>
                <h3 className="text-xl font-semibold text-cvds-secondary">
                  {criterion.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-gray-600 text-sm">
          Typical deal size: €50k – €500k
        </p>
      </div>
    </section>
  );
};

export default WhatWeLookFor;