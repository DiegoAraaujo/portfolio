import { SectionHead } from '../../components/SectionHead'
import { certifications } from '../../data/certifications'
import CertCard from './components/CertCard'

const Certifications = () => (
  <section id="certifications" className="py-16">
    <SectionHead eyebrow="// CERTIFICADOS" title="Formação complementar" />
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {certifications.map((certification) => (
        <CertCard key={certification.name} certification={certification} />
      ))}
    </div>
  </section>
)

export default Certifications
