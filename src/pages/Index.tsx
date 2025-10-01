import Hero from "@/components/Hero";
import WhyPartner from "@/components/WhyPartner";
import WhatWeLookFor from "@/components/WhatWeLookFor";
import HowItWorks from "@/components/HowItWorks";
import FounderPromise from "@/components/FounderPromise";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhyPartner />
      <WhatWeLookFor />
      <HowItWorks />
      <FounderPromise />
      <Footer />
    </div>
  );
};

export default Index;
