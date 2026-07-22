interface SkillTagProps {
  label: string;
  icon?: string;
}

export const SkillTag = ({ label, icon }: SkillTagProps) => (
  <span className="skill-tag">
    {icon && <i className={icon} />}
    {label}
  </span>
);
