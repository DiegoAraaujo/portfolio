type ContactCardProps = {
  icon: string
  title: string
  buttonText: string
  href: string
}

const ContactCard = ({ icon, title, buttonText, href }: ContactCardProps) => {
  return (
    <div className="flex w-full max-w-87.5 gap-4 rounded-2xl border-[0.5px] border-white/15 bg-white/8 px-6 py-3 sm:gap-8 sm:px-12 sm:py-4">
      <i className={`${icon} flex items-center text-4xl sm:text-5xl`} />

      <span className="flex flex-1 flex-col items-center gap-1">
        <p className="text-sm font-medium sm:text-base">{title}</p>

        <a
          href={href}
          target="_blank"
          className="bg-blue hover:bg-blue/80 w-full max-w-32 rounded-md px-3 py-1 text-center text-xs text-white sm:max-w-none sm:px-4 sm:text-sm"
        >
          {buttonText}
        </a>
      </span>
    </div>
  )
}

export default ContactCard
