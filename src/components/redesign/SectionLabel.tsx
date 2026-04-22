const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="font-mono-tech text-[0.7rem] font-medium tracking-[0.15em] text-accent uppercase mb-3">
    <span className="opacity-50">{"// "}</span>
    {children}
  </p>
);

export default SectionLabel;