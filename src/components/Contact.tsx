import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-cvds-primary/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-cvds-primary mb-8">
          Let's Talk
        </h2>
        
        <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
          Ready to discuss your digital business? Book a 15-minute intro call today.
        </p>
        
        <Button 
          variant="cvds-secondary" 
          size="lg"
          className="text-lg px-10 py-6 h-auto rounded-full"
          asChild
        >
          <a 
            href="https://calendly.com/cecile-pagneux/intro-call-digital-business-acquisition" 
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Call
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Contact;