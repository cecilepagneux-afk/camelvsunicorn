import FeatureCard from "./FeatureCard";

const WhyPartner = () => {
  const features = [
    {
      icon: "🤝",
      title: "Smooth Transition",
      description: "We ensure continuity and safeguard the founder's legacy with tailored support during handover."
    },
    {
      icon: "📈",
      title: "Growth Focus", 
      description: "International expansion, automation, and digital marketing optimisation to scale your business further."
    },
    {
      icon: "💡",
      title: "Flexible Deals",
      description: "Progressive payments, earn-outs, and vendor financing ensure alignment and shared success."
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-cvds-primary mb-16">
          Why Partner with CVDS Digital Ventures?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPartner;