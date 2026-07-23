interface SectionHeadProps {
  eyebrow: string
  title: string
  variant?: 'light' | 'dark'
}

export const SectionHead = ({
  eyebrow,
  title,
  variant = 'light',
}: SectionHeadProps) => (
  <div className="mb-10">
    <div
      className={`${variant === 'dark' ? 'text-ice' : 'text-steel'} mb-1.5 font-mono text-xs tracking-wide`}
    >
      {eyebrow}
    </div>
    <h2
      className={`font-serif text-2xl font-bold ${variant === 'dark' ? 'text-white' : 'text-navy-deep'}`}
    >
      {title}
    </h2>
  </div>
)
