import DarkSection from '../../components/DarkSection'
import { SectionHead } from '../../components/SectionHead'
import { timeline } from '../../data/timeline'
import TimelineItem from './components/TimelineItem'

const TimeLine = () => (
  <DarkSection>
    <section
      id="career"
      className="relative m-auto w-full max-w-5xl px-8 py-16"
    >
      <SectionHead
        eyebrow="// TRAJETÓRIA"
        title="Como cheguei até aqui"
        variant="dark"
      />
      <div className="bg-ice/20 absolute top-0 bottom-0 left-12.5 w-px md:left-1/2 md:-translate-x-1/2" />
      <div className="relative py-2">
        {timeline.map((entry) => (
          <TimelineItem key={entry.id} entry={entry} />
        ))}
      </div>
    </section>
  </DarkSection>
)

export default TimeLine
