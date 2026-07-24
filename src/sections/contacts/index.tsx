import DarkSection from '../../components/DarkSection'
import ContactCard from './ContactCard'

const Contacts = () => (
  <DarkSection>
    <section className="relative z-10 m-auto grid w-full max-w-5xl gap-8 px-8 py-16 text-white md:grid-cols-2">
      <div className="items-center flex flex-col justify-center gap-4 md:items-start">
        <p className="max-w-82 text-center font-serif text-[32px] leading-tight font-bold md:text-left md:text-[46px]">
          Gostaria de falar comigo?
        </p>
        <p className="text-ice max-w-82 text-center text-sm md:text-left">
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
    </section>
  </DarkSection>
)

export default Contacts
