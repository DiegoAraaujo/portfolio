import { SectionHead } from '../../components/SectionHead'
import { SkillTag } from '../../components/SkillTag'
import { technicalSkills } from '../../data/skills'

// eyebrow="// STACK & SOFT SKILLS"
const Skills = () => (
  <section id="stack" className="m-auto w-full max-w-5xl px-8 py-16">
    <SectionHead eyebrow="// STACK" title="Com o que eu trabalho" />

    <div>
      <div className="text-gray-light mb-4 font-mono text-[11.5px] tracking-wide uppercase">
        Habilidades técnicas
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {technicalSkills.map((group) => (
          <div
            key={group.title}
            className="card-notch border-border border bg-white p-5 px-5.5"
          >
            <h4 className="font-display text-navy-deep mb-3 text-sm">
              {group.title}
            </h4>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <SkillTag
                  key={item.label}
                  label={item.label}
                  icon={item.icon}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Skills
