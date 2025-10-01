import FeatureCard from "./FeatureCard";

const WhyPartner = () => {
  const features = [
    {
      icon: "📈",
      title: "Growth",
      description: "We build on what you started"
    },
    {
      icon: "🔄",
      title: "Continuity", 
      description: "Your business DNA stays alive"
    },
    {
      icon: "🤝",
      title: "Founder-friendly",
      description: "Smooth and fair exits"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-cvds-primary mb-16">
          Why work with us?
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