import Hero from "@/components/Hero";
import WhyPartner from "@/components/WhyPartner";
import WhatWeLookFor from "@/components/WhatWeLookFor";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhyPartner />
      <WhatWeLookFor />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
