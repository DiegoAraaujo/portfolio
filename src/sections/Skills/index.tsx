import { SectionHead } from '../../components/SectionHead'
import { SkillTag } from '../../components/SkillTag'
import {
  technicalSkills,
  softSkillHighlights,
  softSkillTags,
} from '../../data/skills'

const CARD_BG = ['bg-navy-deep', 'bg-navy', 'bg-navy-soft', 'bg-steel']

const SPEECH_PATH =
  'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z'
const GEAR_PATH =
  'M10.5 3.5a2 2 0 1 1 3 1.7V7h3a1 1 0 0 1 1 1v3h1.8a2 2 0 1 1 0 3H17.5v3a1 1 0 0 1-1 1h-3v1.8a2 2 0 1 1-3 0V18h-3a1 1 0 0 1-1-1v-3H4.7a2 2 0 1 1 0-3H6.5V8a1 1 0 0 1 1-1h3V5.2a2 2 0 0 1-.5-1.7z'

type SoftIconVariant = 'speech' | 'event' | 'target' | 'gear'

const SOFT_ICON_VARIANTS: SoftIconVariant[] = [
  'speech',
  'event',
  'target',
  'gear',
]

const SoftIcon = ({ variant }: { variant: SoftIconVariant }) => (
  <svg
    viewBox="0 0 24 24"
    className="h-full w-full"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {variant === 'speech' && <path d={SPEECH_PATH} />}
    {variant === 'event' && (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <line x1="8" y1="3" x2="8" y2="7" />
        <line x1="16" y1="3" x2="16" y2="7" />
      </>
    )}
    {variant === 'target' && (
      <>
        <circle cx="12" cy="12" r="9" />
        <polygon points="16,8 13,13 8,16 11,11" />
      </>
    )}
    {variant === 'gear' && <path d={GEAR_PATH} />}
  </svg>
)

const Skills = () => (
  <section id="stack" className="py-16">
    <SectionHead
      eyebrow="// STACK & SOFT SKILLS"
      title="Com o que eu trabalho"
    />

    <div className="mb-11">
      <div className="text-gray-light mb-4 font-mono text-[11.5px] tracking-wide uppercase">
        Habilidades técnicas
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {technicalSkills.map((group) => (
          <div
            key={group.title}
            className="card-notch border-border border bg-white p-5 px-5.5"
          >
            <h4 className="font-display text-navy-deep mb-3 text-sm">
              {group.title}
            </h4>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <SkillTag
                  key={item.label}
                  label={item.label}
                  icon={item.icon}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* <div>
      <div className="text-gray-light mb-4 font-mono text-[11.5px] tracking-wide uppercase">
        Soft skills
      </div>
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-4">
        {softSkillHighlights.map((skill, index) => (
          <div
            key={skill.title}
            className={`soft-card-notch flex flex-col gap-3.5 px-5 py-6.5 text-white ${CARD_BG[index % CARD_BG.length]}`}
          >
            <div className="text-amber h-6.5 w-6.5">
              <SoftIcon
                variant={SOFT_ICON_VARIANTS[index % SOFT_ICON_VARIANTS.length]}
              />
            </div>
            <strong className="font-display text-[15px] font-semibold text-white">
              {skill.title}
            </strong>
            <p className="text-[13px] text-white/75">{skill.description}</p>
          </div>
        ))}
      </div>

      <div className="text-gray-light my-5 font-mono text-[11px] tracking-wide uppercase">
        Outras soft skills
      </div>
      <div className="flex flex-wrap gap-2">
        {softSkillTags.map((tag) => (
          <span
            key={tag}
            className="card-notch-sm text-navy-soft bg-[#EEF3FA] px-3.5 py-1.75 text-[12.5px]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div> */}
  </section>
)

export default Skills
