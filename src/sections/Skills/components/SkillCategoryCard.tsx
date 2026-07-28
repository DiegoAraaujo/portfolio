import { SkillTag } from './SkillTag'

type SkillCategoryCardProps = {
  title: string
  items: { label: string; icon?: string }[]
}

export const SkillCategoryCard = ({ title, items }: SkillCategoryCardProps) => (
  <div className="card-notch border-border border bg-white p-5 px-5.5">
    <h4 className="font-display text-navy-deep mb-3 text-sm">{title}</h4>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <SkillTag key={item.label} label={item.label} icon={item.icon} />
      ))}
    </div>
  </div>
)

export default SkillCategoryCard
