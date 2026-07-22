import { SectionHead } from '../../components/SectionHead'
import { timeline } from '../../data/timeline'
import  TimelineItem  from './components/TimelineItem'

const TimeLine = () => (
  <section id="career" className="py-16">
    <SectionHead eyebrow="// TRAJETÓRIA" title="Como cheguei até aqui" />
    <div className="relative py-2">
      {timeline.map((entry) => (
        <TimelineItem key={entry.id} entry={entry} />
      ))}
    </div>
  </section>
)

export default TimeLine
