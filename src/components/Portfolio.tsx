import { Lightbulb, Cpu, ShoppingBag } from "lucide-react";

const Portfolio = () => {
  const experiments = [
    {
      icon: ShoppingBag,
      name: "SKU Genius",
      description: "AI tool that structures and enriches product data across sales channels"
    },
    {
      icon: Cpu,
      name: "AI Chat Prototypes",
      description: "Smart conversational assistants for e-commerce customer service"
    },
    {
      icon: Lightbulb,
      name: "Ongoing Experiments",
      description: "Testing new ideas at the intersection of AI and digital commerce"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-gray-50/30">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-lg text-gray-600 mb-4 italic animate-fade-in">
          Every experiment teaches me something new.
        </p>
        
        <h2 className="text-4xl md:text-5xl font-bold text-center text-cvds-primary mb-8 animate-fade-in-up">
          Portfolio & Ongoing Experiments
        </h2>
        
        <p className="text-center text-lg text-gray-700 mb-16 max-w-2xl mx-auto leading-relaxed">
          From SKU Genius to AI chat prototypes, each project is a step towards a more sustainable digital ecosystem. Some are acquired. Some are built from scratch. All are designed to solve real problems.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {experiments.map((experiment, index) => {
            const Icon = experiment.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 hover:shadow-md hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cvds-primary to-cvds-secondary flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-cvds-dark mb-3">
                  {experiment.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {experiment.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <p className="text-center text-sm text-gray-500 mt-12 italic">
          Each one is a step towards a more sustainable digital ecosystem.
        </p>
      </div>
    </section>
  );
};

export default Portfolio;
