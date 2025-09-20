import { Mail, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cvds-dark py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h3 className="text-white text-xl font-semibold mb-6">Restons en contact</h3>
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
            © 2025 CVDS Digital Ventures · Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;