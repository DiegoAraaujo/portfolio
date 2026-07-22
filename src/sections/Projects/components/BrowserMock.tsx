import type { ProjectMock } from '../../../data/projects'

interface BrowserMockProps {
  mock: ProjectMock
}

const BrowserMock = ({ mock }: BrowserMockProps) => (
  <div className="relative z-2 w-full overflow-hidden rounded-xl bg-white shadow-[0_20px_40px_rgba(0,0,0,0.28)]">
    <div className="flex h-6 items-center gap-1.5 bg-[#F1F3F6] px-2.5">
      <span className="h-1.5 w-1.5 rounded-full bg-[#D7DBE0]" />
      <span className="h-1.5 w-1.5 rounded-full bg-[#D7DBE0]" />
      <span className="h-1.5 w-1.5 rounded-full bg-[#D7DBE0]" />
    </div>
    <div className="flex gap-2.5 p-3">
      <div className="flex w-[16%] flex-col gap-1.5 pt-0.5">
        {Array.from({ length: mock.navCount }).map((_, index) => (
          <div
            key={index}
            className={`h-1.5 rounded ${index === mock.activeNav ? 'bg-navy' : 'bg-[#E4E8ED]'}`}
          />
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex gap-1.5">
          {mock.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex-1 rounded-md bg-[#F4F6F9] px-2 py-1.5"
            >
              <div className="text-navy-deep font-mono text-[11px] font-bold">
                {stat.value}
              </div>
              <div className="text-gray-light mt-0.5 text-[7px] tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        {mock.chartPoints && (
          <div className="rounded-md bg-[#F4F6F9] px-2 py-1.5">
            <svg
              viewBox="0 0 200 30"
              preserveAspectRatio="none"
              className="block h-7 w-full"
            >
              <polyline
                points={mock.chartPoints}
                fill="none"
                stroke="#5C86AC"
                strokeWidth={2}
              />
            </svg>
          </div>
        )}
        {Array.from({ length: mock.rows }).map((_, index) => (
          <div key={index} className="flex items-center gap-1.5">
            <span className="h-3 w-3 shrink-0 rounded-full bg-[#E4E8ED]" />
            <span className="h-1.25 flex-1 rounded bg-[#EEF1F5]" />
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default BrowserMock
