import type { Project } from '../../../data/projects'
import BrowserMock from './BrowserMock'

const STATUS_COLOR: Record<Project['statusVariant'], string> = {
  live: 'text-green',
  dev: 'text-[#B07A1E]',
  done: 'text-navy',
}

interface ProjectVisualProps {
  project: Project
}

export const ProjectVisual = ({ project }: ProjectVisualProps) => (
  <div className="bg-navy-deep relative flex w-full shrink-0 items-center justify-center overflow-hidden p-6.5 md:w-[42%]">
    <svg
      className="absolute inset-0 opacity-85"
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
    >
      {project.shard.map((shape, index) => (
        <polygon
          key={index}
          points={shape.points}
          fill={shape.fill}
          opacity={shape.opacity}
        />
      ))}
    </svg>
    <span
      className={`absolute top-4 right-4 z-3 rounded-full bg-white px-3.5 py-1.5 font-mono text-[10.5px] font-semibold shadow-[0_6px_16px_rgba(13,30,56,0.18)] ${STATUS_COLOR[project.statusVariant]}`}
    >
      {project.status}
    </span>
    <BrowserMock mock={project.mock} />
  </div>
)
