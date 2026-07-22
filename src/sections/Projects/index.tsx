import { SectionHead } from '../../components/SectionHead'
import { projects } from '../../data/projects'
import  ProjectRow  from './components/ProjectRow'

const Projects = () => (
  <section id="projects" className="py-16">
    <SectionHead eyebrow="// PROJETOS" title="O que eu construí" />
    <div className="flex flex-col gap-6">
      {projects.map((project, index) => (
        <ProjectRow
          key={project.id}
          project={project}
          reverse={index % 2 === 1}
        />
      ))}
    </div>
  </section>
)

export default Projects
