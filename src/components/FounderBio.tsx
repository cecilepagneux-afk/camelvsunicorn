import cecilePhoto from "@/assets/cecile-photo.png";
import { Linkedin } from "lucide-react";

const FounderBio = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50/30 to-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-cvds-primary mb-16 animate-fade-in-up">
          About the Founder
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12 bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cvds-secondary/30 to-cvds-accent/20 rounded-full blur-3xl scale-110"></div>
              <img 
                src={cecilePhoto} 
                alt="Cécile Pagneux, Founder of CVDS Digital Ventures" 
                className="relative w-64 h-64 object-cover rounded-full shadow-2xl border-4 border-white"
              />
            </div>
          </div>
          
          <div className="flex-1 space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-cvds-dark mb-2">Cécile Pagneux</h3>
              <p className="text-xl text-cvds-primary font-medium mb-4">Founder, CVDS Digital Ventures</p>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              20+ years in IT and international sales, connecting Australia and Europe through sustainable digital acquisitions. 
              Specialising in building bridges between continents and creating lasting value for founders transitioning their businesses.
            </p>
            
            <div className="bg-gradient-to-r from-cvds-primary/5 to-cvds-secondary/5 border-l-4 border-cvds-primary p-6 rounded-r-xl">
              <p className="text-lg text-gray-700 italic leading-relaxed mb-3">
                "Every founder deserves to see their work live on. My goal is to make that transition rewarding — for both sides."
              </p>
              <p className="text-cvds-primary font-semibold">— Cécile Pagneux</p>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <a 
                href="https://www.linkedin.com/in/cecile-pagneux/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-cvds-primary text-white px-6 py-3 rounded-full hover:bg-cvds-secondary transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Linkedin className="w-5 h-5" />
                <span className="font-medium">Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderBio;
