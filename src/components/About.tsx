import cecilePhoto from "@/assets/cecile-photo.png";

const About = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-cvds-primary mb-16">
          About CVDS Digital Ventures
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Founded by <strong className="text-cvds-primary">Cécile Pagneux</strong>, with 20+ years of international experience in IT and sales, CVDS Digital Ventures focuses on respectful acquisitions that preserve each company's DNA while unlocking its growth potential.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Our goal: build a portfolio of 3–5 digital businesses in the next 3 years, scalable from Australia to Europe.
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-cvds-accent/20 rounded-full blur-2xl scale-110"></div>
              <img 
                src={cecilePhoto} 
                alt="Cécile Pagneux, Founder of CVDS Digital Ventures" 
                className="relative w-64 h-64 object-cover rounded-full shadow-xl border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;