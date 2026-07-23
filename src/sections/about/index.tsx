import { PillFact } from '../../components/PillFact'
import MyPhoto from '../../assets/my-photo.png'
import CV from '../../assets/cv.pdf'

const About = () => (
  <section
    id="about"
    className="m-auto grid w-full max-w-5xl gap-12 px-8 py-16 md:grid-cols-2"
  >
    <div className="order-2 md:order-1">
      <p className="text-amber mb-4 text-xs font-semibold tracking-wide uppercase">
        Desenvolvedor Full Stack
      </p>

      <h1 className="text-navy-deep mb-5 font-serif text-[32px] leading-tight font-bold md:text-[46px]">
        Olá, meu nome
        <span className="block">é Diêgo</span>
      </h1>

      <p className="text-gray mb-7 max-w-[46ch] text-base">
        Sou desenvolvedor full stack, com passagem como estagiário na Compass
        UOL e formação em andamento em Ciência da Computação pelo Instituto
        Federal do Ceará. Construo sistemas completos, do banco de dados à
        interface, com arquitetura pensada para escalar, e hoje me aprofundo em
        IA e soluções em nuvem com AWS.
      </p>

      <div className="mb-7 flex flex-wrap gap-2.5">
        <PillFact>
          Formatura — <b className="font-bold">2027</b>
        </PillFact>

        <PillFact>
          <b className="font-bold">AWS</b> Cloud Practitioner
        </PillFact>
      </div>

      <div className="flex flex-wrap gap-3.5">
        <a
          href="#projects"
          className="bg-navy hover:bg-navy-soft rounded-full px-6.5 py-3 text-sm font-semibold text-white transition-colors"
        >
          Ver projetos
        </a>

        <a
          href={CV}
          download="Diego-Araujo-Lopes-CV.pdf"
          className="border-navy text-navy hover:bg-navy rounded-full border px-6.5 py-3 text-sm font-semibold transition-colors hover:text-white"
        >
          Baixar currículo
        </a>
      </div>
    </div>

    <div className="order-1 flex items-center justify-center md:order-2">
      <img
        src={MyPhoto}
        alt="My Photo"
        className="z-10 h-64 rounded-full md:h-86 lg:h-100"
      />
    </div>
  </section>
)

export default About
