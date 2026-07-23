import { timeline } from '../../../data/timeline'
import { Link, Navigate, useParams } from 'react-router-dom'

const TimelineDetail = () => {
  const { id } = useParams()
  const timelineItem = timeline.find((tl) => tl.id === id)

  if (!timelineItem) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="card-notch-lg m-auto w-full max-w-5xl bg-white p-11 py-16">
      <Link
        to={'/'}
        className="text-navy hover:bg-navy mb-7 inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#EEF3FA] px-8 py-2 text-sm hover:text-white"
      >
        ← voltar
      </Link>

      <div className="text-gray-light mb-2.5 font-mono text-xs">
        {timelineItem.year}
      </div>
      <div className="text-navy-deep mb-3 font-serif text-3xl font-bold">
        {timelineItem.title}
      </div>
      <div className="text-gray mb-7 max-w-[62ch] text-[15.5px]">
        {timelineItem.tagline}
      </div>
      <div className="mb-7">
        <h3 className="text-steel mb-3 font-mono text-xs tracking-wide uppercase">
          Contexto
        </h3>
        <p className="max-w-[64ch] text-[15px] text-[#333]">
          {timelineItem.detail}
        </p>
      </div>
      <div>
        <h3 className="text-steel mb-3 font-mono text-xs tracking-wide uppercase">
          Destaques
        </h3>
        <ul className="flex flex-col gap-2.5">
          {timelineItem.highlights.map((item) => (
            <li
              key={item}
              className="before:bg-steel relative max-w-[60ch] pl-4.5 text-sm text-[#333] before:absolute before:top-2.25 before:left-0 before:h-1.5 before:w-1.5 before:rotate-45 before:content-['']"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TimelineDetail
