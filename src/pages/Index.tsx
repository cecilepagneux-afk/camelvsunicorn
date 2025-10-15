import Hero from "@/components/Hero";
import WhyPartner from "@/components/WhyPartner";
import WhatWeLookFor from "@/components/WhatWeLookFor";
import About from "@/components/About";
import WhatIBuild from "@/components/WhatIBuild";
import LinkedInPost from "@/components/LinkedInPost";
import InvestmentFocus from "@/components/InvestmentFocus";
import OurAcquisitionProcess from "@/components/OurAcquisitionProcess";
import HowIWork from "@/components/HowIWork";
import RecommendationsForm from "@/components/RecommendationsForm";
import Portfolio from "@/components/Portfolio";
import WorkWithMe from "@/components/WorkWithMe";
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
        <WhatIBuild />
        <LinkedInPost />
        <InvestmentFocus />
        <OurAcquisitionProcess />
        <HowIWork />
        <RecommendationsForm />
        <Portfolio />
        <WorkWithMe />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
