import { Button } from "@/components/ui/button";
import newHeroBanner from "@/assets/new-hero-banner.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Banner */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${newHeroBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Content */}
      <div className="relative z-20 text-center text-white px-6 max-w-4xl mx-auto">        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          We Acquire Profitable Digital Businesses
        </h1>
        
        <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed">
          Specialising in SaaS, SEO sites, marketplaces & newsletters – with a human and growth-oriented approach.
        </p>
        
        <Button 
          variant="cvds-hero" 
          size="lg"
          className="text-lg px-8 py-4"
          asChild
        >
          <a 
            href="https://calendly.com/cecile-pagneux/intro-call-digital-business-acquisition" 
            target="_blank"
            rel="noopener noreferrer"
          >
            Propose Your Business
          </a>
        </Button>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
};

export default Hero;