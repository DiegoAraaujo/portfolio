import { Link } from 'react-router-dom'
import type { TimelineEntry } from '../../../data/timeline'
import { timelineIcons } from './icons'

interface TimelineItemProps {
  entry: TimelineEntry
}

const TimelineItem = ({ entry }: TimelineItemProps) => {
  const Icon = timelineIcons[entry.icon]
  const isRight = entry.side === 'right'

  return (
    <Link
      to={`/timeline/${entry.id}`}
      className="group relative grid cursor-pointer grid-cols-[38px_1fr] items-start gap-4 pb-10 last:pb-0 md:grid-cols-[1fr_46px_1fr]"
    >
      <div className="col-start-1 row-start-1 justify-self-center md:col-start-2">
        <div
          className={`relative flex h-9.5 w-9.5 rotate-45 items-center justify-center overflow-hidden rounded-[9px] border-[2.5px] shadow-[0_4px_12px_rgba(22,48,90,0.08)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_6px_16px_rgba(22,48,90,0.16)] ${entry.current ? 'bg-navy border-navy' : 'border-navy-soft group-hover:border-navy group-hover:bg-navy bg-white'}`}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.55),transparent_55%)]" />
          <div className="pointer-events-none absolute inset-0 shadow-[inset_0_-3px_5px_rgba(0,0,0,0.15)]" />
          <div
            className={`relative h-4.25 w-4.25 -rotate-45 transition-colors duration-300 ${entry.current ? 'text-white' : 'text-navy-soft group-hover:text-white'}`}
          >
            <Icon />
          </div>
        </div>
      </div>

      <div
        className={`group-hover:bg-ice/10 col-start-2 row-start-1 rounded-2xl p-4 pl-5 transition-all group-hover:-translate-y-1 md:pl-0 ${
          isRight
            ? 'border-ice border-l md:col-start-3 md:pl-7 md:text-left'
            : 'border-ice border-r md:col-start-1 md:pr-7 md:text-right'
        }`}
      >
        <div className="text-ice mb-1 font-mono text-[11.5px]">
          {entry.year}
        </div>
        <div className="font-serif text-lg font-semibold text-white transition-colors duration-300">
          {entry.title}
        </div>
        <div className="text-gray-light mt-1.5 text-sm">
          {entry.cardDescription}
        </div>
      </div>
    </Link>
  )
}

export default TimelineItem
