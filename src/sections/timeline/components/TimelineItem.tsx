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
      className="group relative grid cursor-pointer grid-cols-[38px_1fr] items-start pb-10 last:pb-0 md:grid-cols-[1fr_46px_1fr]"
    >
      <div className="col-start-1 row-start-1 justify-self-center md:col-start-2">
        <div
          className={`flex h-9.5 w-9.5 rotate-45 items-center justify-center rounded-[9px] border-[2.5px] shadow-[0_4px_12px_rgba(22,48,90,0.08)] ${entry.current ? 'bg-navy border-navy' : 'border-navy-soft bg-white'}`}
        >
          <div
            className={`h-4.25 w-4.25 -rotate-45 ${entry.current ? 'text-white' : 'text-navy-soft'}`}
          >
            <Icon />
          </div>
        </div>
      </div>

      <div
        className={`col-start-2 row-start-1 pl-5 md:pl-0 ${
          isRight
            ? 'md:col-start-3 md:pl-7 md:text-left'
            : 'md:col-start-1 md:pr-7 md:text-right'
        }`}
      >
        <div className="text-steel mb-1 font-mono text-[11.5px]">
          {entry.year}
        </div>
        <div className="text-navy-deep group-hover:text-steel font-serif text-lg font-semibold">
          {entry.title}
        </div>
        <div className="text-gray mt-1.5 text-sm">{entry.cardDescription}</div>
      </div>
    </Link>
  )
}

export default TimelineItem
