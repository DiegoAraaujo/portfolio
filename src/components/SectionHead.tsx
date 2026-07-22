interface SectionHeadProps {
  eyebrow: string;
  title: string;
}

export const SectionHead = ({ eyebrow, title }: SectionHeadProps) => (
  <div className="mb-10">
    <div className="font-mono text-xs text-steel mb-1.5 tracking-wide">
      {eyebrow}
    </div>
    <h2 className="font-serif text-2xl font-bold text-navy-deep">{title}</h2>
  </div>
);
