import { Target, DollarSign, Globe } from "lucide-react";

const InvestmentFocus = () => {
  const focusAreas = [
    {
      icon: Target,
      title: "Target",
      description: "SaaS, e-commerce tools, and automation platforms with proven product-market fit"
    },
    {
      icon: DollarSign,
      title: "Ticket Size",
      description: "Below AUD 100K, with founder-friendly structures like vendor finance and earn-outs"
    },
    {
      icon: Globe,
      title: "Vision",
      description: "Global scalability between Australia and Europe, building sustainable digital ecosystems"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-cvds-primary/5">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-cvds-primary mb-8 animate-fade-in-up">
          Investment Focus
        </h2>
        
        <p className="text-center text-lg text-gray-700 mb-16 max-w-2xl mx-auto leading-relaxed">
          We target cash-flow-positive digital businesses that are ready for their next chapter — not through aggressive consolidation, but through thoughtful transition.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-cvds-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-cvds-primary" />
                </div>
                <h3 className="text-xl font-semibold text-cvds-dark mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InvestmentFocus;
