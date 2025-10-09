import FeatureCard from "./FeatureCard";

const WhyPartner = () => {
  const features = [
    {
      icon: "🤝",
      title: "Smooth Transition",
      subtitle: "We walk beside you, not ahead of you.",
      description: "We ensure continuity and safeguard the founder's legacy with tailored support during handover."
    },
    {
      icon: "📈",
      title: "Growth Focus",
      subtitle: "We scale what you've built, without breaking it.", 
      description: "International expansion, automation, and digital marketing optimisation to scale your business further."
    },
    {
      icon: "💡",
      title: "Flexible Deals",
      subtitle: "We find the right path — not just the fastest one.",
      description: "Progressive payments, earn-outs, and vendor financing ensure alignment and shared success."
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-gray-50/30">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-lg text-gray-600 mb-4 animate-fade-in">
          Selling your business is personal — here's why founders trust us.
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-center text-cvds-primary mb-20 animate-fade-in-up">
          Why Partner with CVDS Digital Ventures?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              subtitle={feature.subtitle}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPartner;