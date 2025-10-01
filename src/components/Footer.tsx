import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import cvdsLogo from "@/assets/cvds-logo.png";

const Footer = () => {
  return (
    <footer className="bg-cvds-dark py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img 
            src={cvdsLogo} 
            alt="CVDS Digital Ventures Logo" 
            className="h-24 mx-auto mb-8"
          />
          
          <Button 
            variant="cvds-hero" 
            size="lg"
            className="text-lg px-8 py-4 mb-8 cursor-pointer"
            onClick={() => window.open('https://calendly.com/cecile-pagneux/intro-call-digital-business-acquisition', '_blank')}
          >
            📅 Book a free 15-min call
          </Button>
          
          <div className="flex justify-center space-x-8">
            <a 
              href="mailto:cecile.pagneux@hotmail.fr" 
              className="group flex items-center space-x-3 bg-cvds-primary hover:bg-cvds-accent px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Mail className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Contact</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/cecile-pagneux/" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 bg-cvds-primary hover:bg-cvds-accent px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Linkedin className="w-5 h-5 text-white" />
              <span className="text-white font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-cvds-neutral/30 pt-8">
          <p className="text-cvds-neutral text-sm">
            © 2025 CVDS Digital Ventures · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;