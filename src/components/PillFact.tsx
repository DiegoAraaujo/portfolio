import type { ReactNode } from 'react'

interface PillFactProps {
  children: ReactNode
}

export const PillFact = ({ children }: PillFactProps) => (
  <span className="pill-fact">{children}</span>
)
