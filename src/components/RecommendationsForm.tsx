import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle } from "lucide-react";

const formSchema = z.object({
  name: z.string().trim().min(1, { message: "Please enter your name" }).max(100),
  email: z.string().trim().email({ message: "Please enter a valid email address" }).max(255),
  businessLink: z.string().trim().url({ message: "Please enter a valid URL" }).max(500),
  monthlyRevenue: z.string().trim().min(1, { message: "Please provide approximate revenue" }).max(100),
  profitMargin: z.string().trim().min(1, { message: "Please provide profit margin" }).max(50),
  mainChallenge: z.string().trim().min(10, { message: "Please tell us more (at least 10 characters)" }).max(1000),
  additionalInfo: z.string().trim().max(1000).optional(),
});

type FormData = z.infer<typeof formSchema>;

const RecommendationsForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-gray-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left side - Introduction */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-cvds-primary">
              Ready to Tell Your Story?
            </h2>
            
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                We'd love to learn more about your business and what makes it special.
              </p>
              <p>
                At Camel vs Unicorn, we respect founders' work and handle every conversation with confidentiality and respect.
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
          </div>

          {/* Right side - Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
                <h3 className="text-2xl font-bold text-cvds-secondary">
                  Thanks for sharing!
                </h3>
                <p className="text-gray-600">
                  We'll review your business and get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    {...register("name")}
                    className="w-full"
                    placeholder="John Smith"
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="w-full"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                {/* Business Link */}
                <div className="space-y-2">
                  <Label htmlFor="businessLink">Link to Your Business</Label>
                  <Input
                    id="businessLink"
                    type="url"
                    {...register("businessLink")}
                    className="w-full"
                    placeholder="https://yourbusiness.com"
                  />
                  {errors.businessLink && (
                    <p className="text-sm text-red-500">{errors.businessLink.message}</p>
                  )}
                </div>

                {/* Monthly Revenue */}
                <div className="space-y-2">
                  <Label htmlFor="monthlyRevenue">Monthly Revenue (approximate)</Label>
                  <Input
                    id="monthlyRevenue"
                    {...register("monthlyRevenue")}
                    className="w-full"
                    placeholder="e.g., $5,000 AUD"
                  />
                  {errors.monthlyRevenue && (
                    <p className="text-sm text-red-500">{errors.monthlyRevenue.message}</p>
                  )}
                </div>

                {/* Profit Margin */}
                <div className="space-y-2">
                  <Label htmlFor="profitMargin">Profit Margin (%)</Label>
                  <Input
                    id="profitMargin"
                    {...register("profitMargin")}
                    className="w-full"
                    placeholder="e.g., 35%"
                  />
                  {errors.profitMargin && (
                    <p className="text-sm text-red-500">{errors.profitMargin.message}</p>
                  )}
                </div>

                {/* Main Challenge */}
                <div className="space-y-2">
                  <Label htmlFor="mainChallenge">
                    Main challenge you'd like to solve by selling?
                  </Label>
                  <Textarea
                    id="mainChallenge"
                    {...register("mainChallenge")}
                    className="w-full min-h-[100px]"
                    placeholder="Tell us what's driving your decision to sell..."
                  />
                  {errors.mainChallenge && (
                    <p className="text-sm text-red-500">{errors.mainChallenge.message}</p>
                  )}
                </div>

                {/* Additional Info */}
                <div className="space-y-2">
                  <Label htmlFor="additionalInfo">
                    Anything else you'd like us to know? (optional)
                  </Label>
                  <Textarea
                    id="additionalInfo"
                    {...register("additionalInfo")}
                    className="w-full min-h-[80px]"
                    placeholder="Any additional context..."
                  />
                  {errors.additionalInfo && (
                    <p className="text-sm text-red-500">{errors.additionalInfo.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="cvds-primary"
                  size="lg"
                  className="w-full text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Your Business for Review"}
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
