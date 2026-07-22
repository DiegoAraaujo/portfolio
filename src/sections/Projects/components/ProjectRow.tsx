import type { Project } from '../../../data/projects'
import { SkillTag } from '../../../components/SkillTag'
import { ProjectVisual } from './ProjectVisual'
import { Link } from 'react-router-dom'

interface ProjectRowProps {
  project: Project
  reverse: boolean
}

const ProjectRow = ({ project, reverse }: ProjectRowProps) => (
  <Link
    to={`/projects/${project.id}`}
    className={`border-border hover:border-navy-soft flex cursor-pointer flex-col items-stretch overflow-hidden rounded-[20px] border bg-white transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(13,30,56,0.1)] md:flex-row ${reverse ? 'md:flex-row-reverse' : ''}`}
  >
    <ProjectVisual project={project} />
    <div className="flex flex-1 flex-col justify-center p-8 px-9">
      <span className="text-gray-light mb-1.5 font-mono text-[11px]">
        {project.ref}
      </span>
      <div className="text-navy-deep mb-2 font-serif text-[22px] font-bold">
        {project.name}
      </div>
      <p className="text-gray mb-4.5 max-w-[56ch] text-[14.5px]">
        {project.description}
      </p>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {project.cardTags.map((tag) => (
            <SkillTag key={tag} label={tag} />
          ))}
        </div>
        <span className="text-navy font-mono text-xs font-semibold whitespace-nowrap">
          ver detalhes →
        </span>
      </div>
    </div>
  </Link>
)

export default ProjectRow
