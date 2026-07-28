import { SectionHead } from '../../components/SectionHead'
import { SkillTag } from './components/SkillTag'
import { technicalSkills, competencies } from '../../data/skills'
import SkillCategoryCard from './components/SkillCategoryCard'

const Skills = () => (
  <section id="stack" className="m-auto w-full max-w-5xl px-8 py-16">
    <SectionHead eyebrow="// HABILIDADES" title="Com o que eu trabalho" />

    <div>
      <p className="text-gray-light mb-4 font-mono text-[11.5px] tracking-wide uppercase">
        Habilidades técnicas
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {technicalSkills.map((group) => (
          <SkillCategoryCard
            key={group.title}
            title={group.title}
            items={group.items}
          />
        ))}
      </div>

      <p className="text-gray-light mt-10 mb-4 font-mono text-[11.5px] tracking-wide uppercase">
        Competências
      </p>
      <div className="flex flex-wrap gap-2">
        {competencies.map((item) => (
          <SkillTag key={item.label} label={item.label} icon={item.icon} />
        ))}
      </div>
    </div>
  </section>
)

export default Skills
