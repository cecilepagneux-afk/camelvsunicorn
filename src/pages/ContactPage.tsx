import { Mail, Linkedin, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import cvdsLogo from "@/assets/cvds-logo-main.png";
import cecilePhoto from "@/assets/cecile-photo-professional.png";
import qrCode from "@/assets/qr-code-cvds.png";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-white via-cvds-primary/5 to-cvds-secondary/10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-cvds-dark mb-6">
            Let's Connect
          </h1>
          <p className="text-2xl text-cvds-primary font-light max-w-3xl mx-auto">
            Every founder's journey starts with a conversation — let's start ours.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Photo & Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-cvds-primary/5 to-cvds-secondary/10 rounded-2xl p-8 border border-cvds-primary/20">
                <img 
                  src={cecilePhoto} 
                  alt="Cécile Pagneux" 
                  className="w-48 h-48 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg"
                />
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-cvds-dark mb-2">Cécile Pagneux</h2>
                  <p className="text-lg text-cvds-primary mb-4">Founder, CVDS Digital Ventures</p>
                  <p className="text-gray-600 leading-relaxed italic">
                    "Every founder deserves to see their work live on."
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <img src={cvdsLogo} alt="CVDS Digital Ventures" className="h-16 mx-auto mb-6" />
                
                <div className="space-y-4">
                  <a 
                    href="mailto:cecile.pagneux@hotmail.fr"
                    className="flex items-center space-x-3 text-gray-700 hover:text-cvds-primary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-cvds-primary/10 flex items-center justify-center group-hover:bg-cvds-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-cvds-primary" />
                    </div>
                    <span className="text-lg">cecile.pagneux@hotmail.fr</span>
                  </a>

                  <a 
                    href="https://www.linkedin.com/in/cecile-pagneux/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-700 hover:text-cvds-primary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-cvds-primary/10 flex items-center justify-center group-hover:bg-cvds-primary/20 transition-colors">
                      <Linkedin className="w-5 h-5 text-cvds-primary" />
                    </div>
                    <span className="text-lg">linkedin.com/in/cecile-pagneux</span>
                  </a>

                  <div className="flex items-start space-x-3 text-gray-700">
                    <div className="w-10 h-10 rounded-full bg-cvds-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-cvds-primary" />
                    </div>
                    <div>
                      <p className="text-lg font-medium">Perth, Western Australia</p>
                      <p className="text-sm text-gray-500">European expansion planned for 2028 (Spain)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Actions & QR */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-cvds-dark mb-6">Get in Touch</h3>
                
                <div className="space-y-4">
                  <Button 
                    variant="cvds-hero" 
                    size="lg"
                    className="w-full text-lg py-6 h-auto group"
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
                    className="w-full text-lg py-6 h-auto"
                    asChild
                  >
                    <a href="mailto:cecile.pagneux@hotmail.fr">
                      <Mail className="mr-2 w-5 h-5" />
                      Send an Email
                    </a>
                  </Button>

                  <Button 
                    variant="outline" 
                    size="lg"
                    className="w-full text-lg py-6 h-auto border-2 border-cvds-primary text-cvds-primary hover:bg-cvds-primary hover:text-white"
                    asChild
                  >
                    <a 
                      href="https://www.linkedin.com/in/cecile-pagneux/" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="mr-2 w-5 h-5" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>

                <p className="text-sm text-gray-500 mt-6 italic text-center">
                  Not a pitch. Just a conversation.
                </p>
              </div>

              <div className="bg-gradient-to-br from-cvds-primary/5 to-cvds-secondary/10 rounded-2xl p-8 border border-cvds-primary/20 text-center">
                <h3 className="text-xl font-semibold text-cvds-dark mb-4">Scan to Connect</h3>
                <img 
                  src={qrCode} 
                  alt="CVDS Digital Ventures QR Code" 
                  className="w-48 h-48 mx-auto bg-white p-4 rounded-lg shadow-sm"
                />
                <p className="text-sm text-gray-600 mt-4">
                  Quick access to all contact information
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-cvds-dark mb-4">Office Hours</h3>
                <p className="text-gray-600 mb-2">
                  Available for calls: <strong>Mon-Fri, 9AM-6PM AWST</strong>
                </p>
                <p className="text-sm text-gray-500">
                  (Flexible for international time zones)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter / Stay Connected */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-cvds-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-cvds-primary mb-6">
            Join the CVDS Journey
          </h2>
          <p className="text-xl text-gray-700 mb-10">
            Follow along on LinkedIn for updates on acquisitions, experiments, and the Camel vs Unicorn philosophy in action.
          </p>
          
          <Button 
            variant="cvds-secondary" 
            size="lg"
            className="text-lg px-10 py-6 h-auto"
            asChild
          >
            <a 
              href="https://www.linkedin.com/in/cecile-pagneux/" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2 w-5 h-5" />
              Follow on LinkedIn
            </a>
          </Button>

          <p className="text-gray-500 mt-6 italic">
            Join the #CamelVsUnicorn community
          </p>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-12 px-6 bg-cvds-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 leading-relaxed">
            © 2025 CVDS Digital Ventures · Perth (WA) – Spain (2028 Plan)
          </p>
          <p className="text-sm text-gray-500 mt-2">
            camelvsunicorn.lovable.app
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
