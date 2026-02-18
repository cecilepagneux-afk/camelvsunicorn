import { Mail, Linkedin, MapPin, Calendar, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import cvdsLogo from "@/assets/cvds-logo-main.png";
import cecilePhoto from "@/assets/cecile-photo-professional.png";
import qrCode from "@/assets/qr-code-cvds.png";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    businessName: "",
    websiteUrl: "",
    annualRevenue: "",
    description: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent("Confidential Discussion Request");
    const body = encodeURIComponent(`
Full Name: ${formData.fullName}
Email: ${formData.email}
Business Name: ${formData.businessName}
Website: ${formData.websiteUrl}
Annual Revenue: ${formData.annualRevenue || "Not provided"}

Description:
${formData.description}
    `);
    
    window.location.href = `mailto:cecile.pagneux@hotmail.fr?subject=${subject}&body=${body}`;
    
    toast({
      title: "Opening email client...",
      description: "Your submission details are ready to send.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-cvds-primary/4 to-cvds-secondary/8 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto text-center animate-fade-in-up">
          <span className="pill bg-cvds-primary/10 text-cvds-primary mb-6 inline-flex">
            Get in Touch
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-cvds-dark mb-5 tracking-tight">
            Let's Have a Conversation
          </h1>
          <p className="text-xl text-cvds-primary font-light max-w-3xl mx-auto">
            Confidential. No obligation. A respectful discussion about what might be possible.
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
                  <p className="text-lg text-cvds-primary mb-4">Founder & Operator, CVDS Digital Ventures</p>
                  <p className="text-gray-600 leading-relaxed italic">
                    "Every founder deserves to see their work continue."
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
                      <p className="text-sm text-gray-500">European presence planned</p>
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
                      Schedule a Call
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
                  All discussions are confidential.
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
                  Quick access to contact information
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-cvds-dark mb-4">Availability</h3>
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

      {/* Business Submission Form */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-cvds-primary/5">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
            <h2 className="text-3xl font-bold text-cvds-dark mb-4 text-center">
              Submit Your Business for Consideration
            </h2>
            <p className="text-lg text-gray-700 mb-4 text-center leading-relaxed">
              If you're a founder considering a transition for your digital B2B business, I'd welcome the opportunity to learn more.
            </p>
            <p className="text-sm text-gray-600 mb-8 text-center italic">
              All submissions are confidential. Response within 48 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fullName" className="text-cvds-dark font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="mt-2 border-gray-300 focus:border-cvds-primary focus:ring-cvds-primary"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-cvds-dark font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 border-gray-300 focus:border-cvds-primary focus:ring-cvds-primary"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="businessName" className="text-cvds-dark font-medium">
                    Business Name *
                  </Label>
                  <Input
                    id="businessName"
                    name="businessName"
                    type="text"
                    required
                    value={formData.businessName}
                    onChange={handleChange}
                    className="mt-2 border-gray-300 focus:border-cvds-primary focus:ring-cvds-primary"
                    placeholder="Your business name"
                  />
                </div>

                <div>
                  <Label htmlFor="websiteUrl" className="text-cvds-dark font-medium">
                    Website (optional)
                  </Label>
                  <Input
                    id="websiteUrl"
                    name="websiteUrl"
                    type="url"
                    value={formData.websiteUrl}
                    onChange={handleChange}
                    className="mt-2 border-gray-300 focus:border-cvds-primary focus:ring-cvds-primary"
                    placeholder="https://..."
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="annualRevenue" className="text-cvds-dark font-medium">
                  Annual Revenue (optional)
                </Label>
                <Input
                  id="annualRevenue"
                  name="annualRevenue"
                  type="text"
                  value={formData.annualRevenue}
                  onChange={handleChange}
                  className="mt-2 border-gray-300 focus:border-cvds-primary focus:ring-cvds-primary"
                  placeholder="e.g., AUD 150K"
                />
              </div>

              <div>
                <Label htmlFor="description" className="text-cvds-dark font-medium">
                  Tell me about your business *
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  required
                  value={formData.description}
                  onChange={handleChange}
                  rows={5}
                  className="mt-2 border-gray-300 focus:border-cvds-primary focus:ring-cvds-primary"
                  placeholder="Describe your business, what it does, your client base, and why you're considering a transition..."
                />
              </div>

              <Button
                type="submit"
                variant="cvds-hero"
                size="lg"
                className="w-full text-lg py-6 h-auto group hover:shadow-lg transition-all"
              >
                <Send className="mr-2 w-5 h-5" />
                Send Your Information
              </Button>

              <p className="text-sm text-gray-500 text-center italic">
                All submissions are handled with complete confidentiality.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Stay Connected */}
      <section className="py-20 px-6 bg-cvds-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-cvds-primary mb-6">
            Stay Connected
          </h2>
          <p className="text-xl text-gray-700 mb-10">
            Follow along on LinkedIn for updates on CVDS and perspectives on digital business acquisition.
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
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-12 px-6 bg-cvds-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 leading-relaxed">
            © 2025 CVDS Digital Ventures · Perth (WA)
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