import Hero from "@/components/Hero";
import WhyPartner from "@/components/WhyPartner";
import WhatWeLookFor from "@/components/WhatWeLookFor";
import About from "@/components/About";
import LinkedInPost from "@/components/LinkedInPost";
import OurAcquisitionProcess from "@/components/OurAcquisitionProcess";
import RecommendationsForm from "@/components/RecommendationsForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <div className="space-y-8">
        <WhyPartner />
        <WhatWeLookFor />
        <About />
        <LinkedInPost />
        <OurAcquisitionProcess />
        <RecommendationsForm />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
