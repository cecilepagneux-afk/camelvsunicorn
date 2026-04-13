import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle, ArrowRight, Loader2 } from "lucide-react";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setIsSubmitted(true);
      }
    } catch {
      // silently fail
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {isSubmitted ? (
        <div className="text-center py-12 space-y-6 animate-fade-in">
          <CheckCircle className="w-16 h-16 text-accent mx-auto" />
          <h3 className="text-2xl font-bold text-foreground">
            Thank you! Your application has been received.
          </h3>
          <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
            I'll get back to you soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <input type="hidden" name="access_key" value="1747e825-3f4a-4d1c-8253-85252503cf5e" />

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="user_name" className="text-muted-foreground text-sm">Name</Label>
              <Input
                id="user_name"
                name="user_name"
                required
                maxLength={100}
                placeholder="Your name"
                className="bg-card border-border text-foreground placeholder:text-muted-foreground/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="user_email" className="text-muted-foreground text-sm">Email</Label>
              <Input
                id="user_email"
                name="user_email"
                type="email"
                required
                maxLength={255}
                placeholder="you@company.com"
                className="bg-card border-border text-foreground placeholder:text-muted-foreground/50"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="store_url" className="text-muted-foreground text-sm">Store URL</Label>
            <Input
              id="store_url"
              name="store_url"
              type="url"
              maxLength={255}
              placeholder="https://yourstore.com"
              className="bg-card border-border text-foreground placeholder:text-muted-foreground/50"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="platform" className="text-muted-foreground text-sm">Platform</Label>
              <Input
                id="platform"
                name="platform"
                maxLength={100}
                placeholder="e.g. Shopify, WooCommerce"
                className="bg-card border-border text-foreground placeholder:text-muted-foreground/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="product_count" className="text-muted-foreground text-sm">Product Count</Label>
              <Input
                id="product_count"
                name="product_count"
                maxLength={50}
                placeholder="e.g. 150"
                className="bg-card border-border text-foreground placeholder:text-muted-foreground/50"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="challenge" className="text-muted-foreground text-sm">Challenge</Label>
            <Textarea
              id="challenge"
              name="challenge"
              required
              maxLength={2000}
              placeholder="Tell us about your main challenge..."
              className="bg-card border-border text-foreground placeholder:text-muted-foreground/50 min-h-[120px]"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={isLoading}
            className="w-full text-base px-8 py-6 h-auto bg-primary text-primary-foreground hover:bg-primary/90 rounded-full group"
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin mr-2" />
            ) : null}
            {isLoading ? "Sending..." : "Get in touch"}
            {!isLoading && <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />}
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
