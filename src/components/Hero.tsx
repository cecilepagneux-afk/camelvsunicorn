import { Button } from "@/components/ui/button";
import cvdsLogo from "@/assets/cvds-logo.png";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-cvds-primary/70 via-cvds-primary/80 to-cvds-primary/90 z-10" />
      
      {/* Content */}
      <div className="relative z-20 text-center text-white px-6 max-w-4xl mx-auto">
        <img 
          src={cvdsLogo} 
          alt="CVDS Digital Ventures Logo" 
          className="mx-auto mb-8 w-40 md:w-48 lg:w-56 opacity-95"
        />
        
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