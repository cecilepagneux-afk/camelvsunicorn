import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle, ArrowRight } from "lucide-react";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="max-w-2xl mx-auto">
      {isSubmitted ? (
        <div className="text-center py-12 space-y-6 animate-fade-in">
          <CheckCircle className="w-16 h-16 text-accent mx-auto" />
          <h3 className="text-2xl font-bold text-foreground">
            Thank you for reaching out.
          </h3>
          <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
            We review every enquiry and will respond within 3 business days.
          </p>
        </div>
      ) : (
        <form
          action="https://formsubmit.co/cecile.pagneux@hotmail.fr"
          method="POST"
          className="space-y-5"
        >
          {/* FormSubmit config */}
          <input type="hidden" name="_subject" value="New enquiry — CVDS Digital Ventures" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="true" />
          <input type="hidden" name="_next" value="https://camelvsunicorn.lovable.app/" />

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-muted-foreground text-sm">Name</Label>
              <Input
                id="name"
                name="name"
                required
                maxLength={100}
                placeholder="Your name"
                className="bg-card border-border text-foreground placeholder:text-muted-foreground/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-muted-foreground text-sm">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                maxLength={255}
                placeholder="you@company.com"
                className="bg-card border-border text-foreground placeholder:text-muted-foreground/50"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-muted-foreground text-sm">Company</Label>
            <Input
              id="company"
              name="company"
              maxLength={150}
              placeholder="Company name"
              className="bg-card border-border text-foreground placeholder:text-muted-foreground/50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-muted-foreground text-sm">Message</Label>
            <Textarea
              id="message"
              name="message"
              required
              maxLength={2000}
              placeholder="Tell us about your technology and how we can help..."
              className="bg-card border-border text-foreground placeholder:text-muted-foreground/50 min-h-[120px]"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full text-base px-8 py-6 h-auto bg-primary text-primary-foreground hover:bg-primary/90 rounded-full group"
          >
            Get in touch
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            All enquiries are confidential. We respond within 3 business days.
          </p>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
