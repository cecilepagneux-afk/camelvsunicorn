import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle } from "lucide-react";

const RecommendationsForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-gray-50/30">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-lg text-gray-600 mb-4 italic animate-fade-in">
          This is where every great conversation starts.
        </p>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left side - Introduction */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-cvds-primary animate-fade-in-up">
              Ready to Tell Your Story?
            </h2>
            
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                We'd love to learn more about your business and what makes it special.
              </p>
              <p>
                At CVDS Digital Ventures, we respect founders' work and handle every conversation with confidentiality and respect.
              </p>
              <p>
                Even if we're not the right fit, you'll receive honest feedback and guidance.
              </p>
            </div>

            <div className="bg-cvds-primary/5 border-l-4 border-cvds-primary p-6 rounded-r-lg">
              <p className="text-cvds-secondary italic">
                "We're currently reviewing our first acquisitions — your submission helps us shape the future of responsible digital ownership."
              </p>
            </div>
            
            <div className="bg-white border border-cvds-accent/30 p-6 rounded-lg shadow-sm">
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-cvds-primary">📬 We read every submission carefully</strong> — and reply personally within 3 business days.
              </p>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-6 animate-fade-in">
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto" />
                <h3 className="text-3xl font-bold text-cvds-secondary">
                  Thank you for sharing your story!
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed max-w-md mx-auto">
                  We'll be in touch shortly — every submission is reviewed carefully and gets a personal reply within 3 business days.
                </p>
              </div>
            ) : (
              <form 
                action="https://formsubmit.co/cecile.pagneux@hotmail.fr" 
                method="POST"
                className="space-y-6"
              >
                {/* FormSubmit Configuration - Hidden Fields */}
                <input type="hidden" name="_subject" value="New CVDS Digital Ventures Submission" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://camelvsunicorn.lovable.app/thank-you" />

                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    className="w-full"
                    placeholder="John Smith"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                {/* Business Link */}
                <div className="space-y-2">
                  <Label htmlFor="businessLink">Link to Your Business</Label>
                  <Input
                    id="businessLink"
                    name="businessLink"
                    type="url"
                    className="w-full"
                    placeholder="https://yourbusiness.com"
                    required
                  />
                </div>

                {/* Monthly Revenue */}
                <div className="space-y-2">
                  <Label htmlFor="monthlyRevenue">Monthly Revenue (approximate)</Label>
                  <Input
                    id="monthlyRevenue"
                    name="monthlyRevenue"
                    className="w-full"
                    placeholder="e.g., $5,000 AUD"
                    required
                  />
                </div>

                {/* Profit Margin */}
                <div className="space-y-2">
                  <Label htmlFor="profitMargin">Profit Margin (%)</Label>
                  <Input
                    id="profitMargin"
                    name="profitMargin"
                    className="w-full"
                    placeholder="e.g., 35%"
                    required
                  />
                </div>

                {/* Main Challenge */}
                <div className="space-y-2">
                  <Label htmlFor="mainChallenge">
                    Main challenge you'd like to solve by selling?
                  </Label>
                  <Textarea
                    id="mainChallenge"
                    name="mainChallenge"
                    className="w-full min-h-[100px]"
                    placeholder="Tell us what's driving your decision to sell..."
                    required
                  />
                </div>

                {/* Additional Info */}
                <div className="space-y-2">
                  <Label htmlFor="additionalInfo">
                    Anything else you'd like us to know? (optional)
                  </Label>
                  <Textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    className="w-full min-h-[80px]"
                    placeholder="Any additional context..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="cvds-secondary"
                  size="lg"
                  className="w-full text-lg hover:scale-105 transition-transform shadow-lg"
                >
                  Submit Your Business for Review
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  We reply within 3 business days — all information remains confidential.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendationsForm;
