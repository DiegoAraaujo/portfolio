interface DarkSectionProps {
  mirrored?: boolean
  children: React.ReactNode
}

const DarkSection = ({ children, mirrored = false }: DarkSectionProps) => {
  return (
    <div className="bg-navy-deep relative">
      <svg
        className={`pointer-events-none absolute top-0 ${mirrored ? 'left-0 scale-x-[-1]' : 'right-0'} h-full w-65 opacity-50`}
        viewBox="0 0 260 300"
        preserveAspectRatio="none"
      >
        <polygon points="60,0 260,0 260,140 150,110" fill="#16305A" />
        <polygon
          points="150,110 260,140 260,300 100,300"
          fill="#2E4A73"
          opacity="0.8"
        />
        <polygon points="60,0 150,110 40,140" fill="#5C86AC" opacity="0.6" />
        <polygon
          points="40,140 150,110 100,300 0,300 0,180"
          fill="#0D1E38"
          opacity="0.7"
        />
      </svg>
      {children}
    </div>
  )
}

export default DarkSection
