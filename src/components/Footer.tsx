import { Mail, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-cvds-dark via-cvds-primary to-cvds-secondary py-16 px-6 overflow-hidden">
      {/* Decorative overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
      
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h3 className="text-white text-xl font-semibold mb-6">Get in Touch</h3>
          <div className="flex justify-center space-x-8 mb-6">
            <a 
              href="mailto:cecile.pagneux@hotmail.fr" 
              className="group flex items-center space-x-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg border border-white/20"
            >
              <Mail className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Contact</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/cecile-pagneux/" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg border border-white/20"
            >
              <Linkedin className="w-5 h-5 text-white" />
              <span className="text-white font-medium">LinkedIn</span>
            </a>
          </div>
          
          <p className="text-white/80 text-sm italic">
            Follow our journey on LinkedIn — join the #CamelVsUnicorn community.
          </p>
        </div>
        
        <div className="border-t border-white/20 pt-8 mt-8">
          <p className="text-white/70 text-sm">
            © 2025 CVDS Digital Ventures · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;