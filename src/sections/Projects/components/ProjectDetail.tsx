import { SkillTag } from '../../../components/SkillTag'
import { Link, Navigate, useParams } from 'react-router-dom'
import { projects } from '../../../data/projects'

const ProjectDetail = () => {
  const { id } = useParams()

  const project = projects.find((p) => p.id === id)

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="card-notch-lg m-auto w-full max-w-5xl px-8 py-16">
      <Link
        to="/"
        className="text-navy hover:bg-navy mb-7 inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#EEF3FA] px-8 py-2 text-sm hover:text-white"
      >
        ← voltar
      </Link>

      <div className="text-gray-light mb-2.5 font-mono text-xs">
        {project.ref}
      </div>
      <div className="text-navy-deep mb-3 font-serif text-3xl font-bold">
        {project.name}
      </div>
      <div className="text-gray mb-7 max-w-[62ch] text-[15.5px]">
        {project.tagline}
      </div>
      <div className="mb-8 flex flex-wrap gap-4">
        <div className="dm-notch min-w-37.7 flex-1 bg-[#EEF3FA] px-4.5 py-3.5">
          <div className="text-gray-light font-mono text-[10.5px] tracking-wide uppercase">
            Status
          </div>
          <div className="text-navy-deep mt-1 text-sm font-bold">
            {project.status}
          </div>
        </div>
        <div className="dm-notch min-w-37.7 flex-1 bg-[#EEF3FA] px-4.5 py-3.5">
          <div className="text-gray-light font-mono text-[10.5px] tracking-wide uppercase">
            Atuação
          </div>
          <div className="text-navy-deep mt-1 text-sm font-bold">
            {project.role}
          </div>
        </div>
      </div>
      <div className="mb-7">
        <h3 className="text-steel mb-3 font-mono text-xs tracking-wide uppercase">
          O problema
        </h3>
        <p className="max-w-[64ch] text-[15px] text-[#333]">
          {project.problem}
        </p>
      </div>
      <div className="mb-7">
        <h3 className="text-steel mb-3 font-mono text-xs tracking-wide uppercase">
          O que foi construído
        </h3>
        <ul className="flex flex-col gap-2.5">
          {project.solution.map((item) => (
            <li
              key={item}
              className="before:bg-steel relative max-w-[60ch] pl-4.5 text-sm text-[#333] before:absolute before:top-2.25 before:left-0 before:h-1.5 before:w-1.5 before:rotate-45 before:content-['']"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-steel mb-3 font-mono text-xs tracking-wide uppercase">
          Stack completa
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <SkillTag key={tech} label={tech} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
