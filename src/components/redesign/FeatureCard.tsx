import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
  <div className="flex gap-4 items-start p-5 bg-card rounded-xl border border-white/[0.08] hover:border-primary/30 transition-colors duration-300">
    <div className="w-10 h-10 flex-shrink-0 rounded-[10px] grid place-items-center bg-primary/15 border border-primary/20 text-primary">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <h4 className="text-[0.95rem] font-semibold mb-1 text-foreground">{title}</h4>
      <p className="text-sm text-muted-foreground leading-snug">{description}</p>
    </div>
  </div>
);

export default FeatureCard;