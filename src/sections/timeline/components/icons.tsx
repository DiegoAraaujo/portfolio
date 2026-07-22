export const GraduationIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-full w-full"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3 2 8l10 5 10-5-10-5z" />
    <path d="M6 10.5V16c0 1.5 2.5 3 6 3s6-1.5 6-3v-5.5" />
  </svg>
)

export const BriefcaseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-full w-full"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="12" rx="1.5" />
    <line x1="2" y1="20" x2="22" y2="20" />
  </svg>
)

export const EventIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-full w-full"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <line x1="8" y1="3" x2="8" y2="7" />
    <line x1="16" y1="3" x2="16" y2="7" />
  </svg>
)

export const CloudIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-full w-full"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 18a4 4 0 0 1-.4-7.98A5.5 5.5 0 0 1 17 9.5a4.5 4.5 0 0 1-1 8.5H7z" />
  </svg>
)

export const ClipboardIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-full w-full"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
)

export const CompassIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-full w-full"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2c3 2 5 6 5 10 0 2-1 4-2 5l-3-1-3 1c-1-1-2-3-2-5 0-4 2-8 5-10z" />
    <circle cx="12" cy="9" r="1.5" />
    <path d="M9 16l-2 4 4-1M15 16l2 4-4-1" />
  </svg>
)

export const FlagIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-full w-full"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="3" x2="5" y2="21" />
    <path d="M5 4h14l-3 4 3 4H5" />
  </svg>
)

export const timelineIcons = {
  graduation: GraduationIcon,
  briefcase: BriefcaseIcon,
  event: EventIcon,
  cloud: CloudIcon,
  clipboard: ClipboardIcon,
  compass: CompassIcon,
  flag: FlagIcon,
}
