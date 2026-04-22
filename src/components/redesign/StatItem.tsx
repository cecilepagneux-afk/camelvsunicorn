const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <div className="font-mono-tech text-[1.75rem] font-extrabold text-primary leading-none">{value}</div>
    <div className="text-xs text-muted-foreground mt-1.5 tracking-wide">{label}</div>
  </div>
);

export default StatItem;