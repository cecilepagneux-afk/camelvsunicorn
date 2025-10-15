import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HowIWork = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-cvds-primary/5 to-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-cvds-primary mb-12 animate-fade-in-up">
          How I Work with Founders
        </h2>
        
        <div className="bg-white rounded-2xl p-10 md:p-12 shadow-sm border border-gray-100">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-lg leading-relaxed italic text-gray-600">
              Acquisition is never the end — it's a handover.
            </p>
            
            <p className="text-lg leading-relaxed">
              I work closely with founders to keep the essence of what they've built alive while introducing new systems, better processes, and sustainable scale. Your customers matter. Your brand identity matters. The way you've served your community matters.
            </p>
            
            <p className="text-lg leading-relaxed">
              Whether it's through vendor finance, earn-outs, or joint ventures, I believe every transition should feel collaborative — not transactional. You've spent years building something meaningful. I want to honor that.
            </p>
            
            <p className="text-lg leading-relaxed font-medium text-cvds-primary">
              If you're considering a transition and want to explore what's possible, let's talk.
            </p>
          </div>
          
          <div className="mt-8 flex justify-center">
            <Button 
              variant="cvds-secondary" 
              size="lg"
              className="group"
              asChild
            >
              <a 
                href="https://calendly.com/cecile-pagneux/intro-call-digital-business-acquisition" 
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule a Conversation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowIWork;
