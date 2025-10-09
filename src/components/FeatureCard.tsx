import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: string;
  title: string;
  subtitle?: string;
  description: string;
}

const FeatureCard = ({ icon, title, subtitle, description }: FeatureCardProps) => {
  return (
    <Card className="group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-gradient-to-b from-white to-gray-50/50 border-gray-100">
      <CardContent className="p-8 text-center space-y-3">
        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-cvds-secondary">
          {title}
        </h3>
        {subtitle && (
          <p className="text-sm italic text-cvds-primary/70 font-medium">
            {subtitle}
          </p>
        )}
        <p className="text-gray-600 leading-relaxed pt-2">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;