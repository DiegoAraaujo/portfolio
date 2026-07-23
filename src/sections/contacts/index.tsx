import ContactCard from './ContactCard'

const Contacts = () => (
  <section className="bg-navy-deep relative overflow-hidden rounded-t-[22px] px-8 py-16 text-white">
    <svg
      className="pointer-events-none absolute top-0 right-0 h-full w-65 opacity-50"
      viewBox="0 0 260 300"
      preserveAspectRatio="none"
    >
      <polygon points="60,0 260,0 260,140 150,110" fill="#16305A" />
      <polygon
        points="150,110 260,140 260,300 100,300"
        fill="#2E4A73"
        opacity="0.8"
      />
      <polygon points="60,0 150,110 40,140" fill="#5C86AC" opacity="0.6" />
      <polygon
        points="40,140 150,110 100,300 0,300 0,180"
        fill="#0D1E38"
        opacity="0.7"
      />
    </svg>

    <div className="relative z-10 m-auto grid w-full max-w-5xl gap-8 md:grid-cols-2">
      <div className="items-cente flex flex-col justify-center gap-4 md:items-start">
        <p className="max-w-82 text-center font-serif text-[32px] leading-tight font-bold md:text-left md:text-[46px]">
          Gostaria de falar comigo?
        </p>
        <p className="max-w-82 text-center text-sm md:text-left">
          Fique à vontade para entrar em contato comigo. Será um prazer
          conversar, trocar ideias e conhecer novas oportunidades.
        </p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <ContactCard
          icon="bi bi-envelope-fill"
          title="Entre em Contato"
          buttonText="Contate-me"
          href="mailto:diegoaraaujo8@gmail.com"
        />

        <ContactCard
          icon="bi bi-github"
          title="GitHub"
          buttonText="Acessar GitHub"
          href="https://github.com/DiegoAraaujo"
        />

        <ContactCard
          icon="bi bi-linkedin"
          title="LinkedIn"
          buttonText="Acessar Linkedin"
          href="https://www.linkedin.com/in/josediegoaraujo"
        />
      </div>
    </div>
  </section>
)

export default Contacts
