import { Button } from "@/components/ui/button";
import { Mail, Calendar } from "lucide-react";

const WorkWithMe = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50/30 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-cvds-primary mb-8 animate-fade-in-up">
          Work With Me
        </h2>
        
        <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
          I'm always open to conversations — with founders, investors, or curious builders. If you're thinking about a transition, exploring a partnership, or just want to exchange ideas, let's connect.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="cvds-hero" 
            size="lg"
            className="text-lg px-10 py-6 h-auto w-full sm:w-auto"
            asChild
          >
            <a 
              href="https://calendly.com/cecile-pagneux/intro-call-digital-business-acquisition" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Book a Call
            </a>
          </Button>
          
          <Button 
            variant="cvds-secondary" 
            size="lg"
            className="text-lg px-10 py-6 h-auto w-full sm:w-auto"
            asChild
          >
            <a 
              href="mailto:cecile.pagneux@hotmail.fr"
            >
              <Mail className="mr-2 w-5 h-5" />
              Send an Email
            </a>
          </Button>
        </div>
        
        <p className="text-gray-500 text-sm mt-8 italic">
          Not a pitch. Just a conversation.
        </p>
      </div>
    </section>
  );
};

export default WorkWithMe;
