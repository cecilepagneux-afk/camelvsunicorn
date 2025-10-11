import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, FileSearch, Handshake, Sprout } from "lucide-react";

const OurAcquisitionProcess = () => {
  const steps = [
    {
      number: "01",
      icon: Users,
      title: "Discovery & Fit",
      description: "We start by understanding the founder's story, business model, and growth journey. Our goal is to see if your business DNA aligns with our long-term philosophy."
    },
    {
      number: "02",
      icon: FileSearch,
      title: "Due Diligence & Evaluation",
      description: "We conduct detailed due diligence covering financials and revenue quality, traffic sources and customer retention, technology stack and scalability, and brand resilience. Our analysis ensures transparency and fairness in every step."
    },
    {
      number: "03",
      icon: Handshake,
      title: "Offer & Transition",
      description: "We prepare a fair offer based on your numbers and potential, not hype. Once accepted, we guide a smooth transition through clear documentation, handover sessions, and transparent timelines."
    },
    {
      number: "04",
      icon: Sprout,
      title: "Growth & Continuity",
      description: "After the acquisition, we focus on preserving your business DNA while introducing scalable improvements. We invest in optimisation, marketing and technology updates to help the business thrive."
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-cvds-primary/5 via-cvds-accent/5 to-background">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-lg text-gray-600 mb-4 animate-fade-in">
          Here's how we turn conversations into lasting partnerships.
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-center text-cvds-primary mb-6 animate-fade-in-up">
          Our Acquisition Process
        </h2>
        <p className="text-center text-lg text-gray-700 mb-16 max-w-3xl mx-auto">
          We follow a transparent and respectful process designed to protect founders and help their businesses grow.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card 
                key={index}
                className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50/50 border-gray-100"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="text-6xl font-bold text-cvds-primary/10 absolute -top-2 -left-1">
                          {step.number}
                        </div>
                        <div className="relative z-10 w-14 h-14 rounded-full bg-gradient-to-br from-cvds-primary to-cvds-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 pt-2 space-y-3">
                      <h3 className="text-xl font-semibold text-cvds-secondary">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center">
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Ready to explore whether your business fits our portfolio? Let's start the conversation.
          </p>
          <Button 
            variant="cvds-secondary" 
            size="lg"
            className="text-lg px-10 py-6 h-auto rounded-full shadow-lg hover:shadow-xl"
            asChild
          >
            <a 
              href="https://calendly.com/cecile-pagneux/intro-call-digital-business-acquisition" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a Call
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OurAcquisitionProcess;