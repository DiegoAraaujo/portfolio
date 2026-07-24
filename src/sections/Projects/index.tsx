import DarkSection from '../../components/DarkSection'
import { SectionHead } from '../../components/SectionHead'
import { projects } from '../../data/projects'
import ProjectRow from './components/ProjectRow'

const Projects = () => (
  <DarkSection mirrored={true}>
    <section id="projects" className="m-auto w-full max-w-5xl px-8 py-16 relative z-10">
      <SectionHead
        eyebrow="// PROJETOS"
        title="O que eu construí"
        variant="dark"
      />
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
  </DarkSection>
)

export default Projects
