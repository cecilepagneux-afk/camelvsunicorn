const WhatIBuild = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50/30 to-background">
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-lg text-gray-600 mb-4 italic animate-fade-in">
          Sometimes I build. Sometimes I acquire.
        </p>
        
        <h2 className="text-4xl md:text-5xl font-bold text-center text-cvds-primary mb-12 animate-fade-in-up">
          What I Build. What I Acquire.
        </h2>
        
        <div className="prose prose-lg max-w-3xl mx-auto text-gray-700 space-y-6">
          <p className="text-lg leading-relaxed">
            CVDS Digital Ventures focuses on acquiring and scaling small, profitable digital businesses — particularly SaaS tools and AI-driven automation platforms that solve real problems for e-commerce entrepreneurs.
          </p>
          
          <p className="text-lg leading-relaxed">
            Always with the same intention: to make digital companies more human, sustainable, and scalable. Not every business needs to chase unicorn growth. Some are built to last — like camels in the desert.
          </p>
          
          <p className="text-lg leading-relaxed">
            I work at the intersection of <span className="font-semibold text-cvds-primary">product development</span> and <span className="font-semibold text-cvds-primary">micro-acquisitions</span>, connecting founders who want to transition with the tools and support they need to do it gracefully.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIBuild;
