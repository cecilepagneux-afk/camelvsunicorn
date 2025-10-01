const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Intro call",
      description: "15 min"
    },
    {
      number: "2",
      title: "Quick evaluation",
      description: "We assess your business"
    },
    {
      number: "3",
      title: "Founder-friendly transition",
      description: "Smooth handover process"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-cvds-primary mb-16">
          How it works
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-cvds-primary/20" style={{ left: '16.66%', right: '16.66%' }} />
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cvds-primary text-white text-2xl font-bold mb-6 relative z-10">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-cvds-secondary mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
