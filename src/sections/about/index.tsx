import { PillFact } from '../../components/PillFact'
import MyPhoto from '../../assets/my-photo.png'

const About = () => (
  <section id="about" className="grid gap-12 py-16 md:grid-cols-2">
    <div className="order-2 md:order-1">
      <p className="text-amber mb-4 text-xs font-semibold tracking-wide uppercase">
        Desenvolvedor Full Stack
      </p>

      <h1 className="text-navy-deep mb-5 font-serif text-[32px] leading-tight font-bold md:text-[46px]">
        Olá, meu nome
        <span className="block">é Diêgo</span>
      </h1>

      <p className="text-gray mb-7 max-w-[46ch] text-base">
        Construo sistemas completos — do banco de dados à interface — com
        arquitetura pensada antes da primeira linha de código. Estudante de
        Ciência da Computação no IFCE, com projetos reais entregues do zero ao
        deploy.
      </p>

      <div className="mb-7 flex flex-wrap gap-2.5">
        <PillFact>
          <b className="font-bold">5</b> projetos entregues
        </PillFact>

        <PillFact>
          Formatura — <b className="font-bold">2027</b>
        </PillFact>

        <PillFact>
          <b className="font-bold">AWS</b> Cloud Practitioner
        </PillFact>
      </div>

      <div className="flex flex-wrap gap-3.5">
        <a
          href="#projetos"
          className="bg-navy hover:bg-navy-soft rounded-full px-6.5 py-3 text-sm font-semibold text-white transition-colors"
        >
          Ver projetos
        </a>

        <a
          href="#"
          onClick={(event) => {
            event.preventDefault()
            window.print()
          }}
          className="border-navy text-navy hover:bg-navy rounded-full border px-6.5 py-3 text-sm font-semibold transition-colors hover:text-white"
        >
          Baixar currículo
        </a>
      </div>
    </div>

    <div className="order-1 flex items-center justify-center md:order-2">
      {/* <svg
        className="absolute top-1/2 left-1/2 h-[160%] w-[160%] -translate-x-1/2 -translate-y-1/2"
        viewBox="0 0 600 600"
      >
        <polygon
          points="300,40 420,120 380,260 260,220"
          fill="#16305A"
          opacity="0.92"
        />

        <polygon
          points="420,120 540,180 500,300 380,260"
          fill="#2E4A73"
          opacity="0.9"
        />

        <polygon
          points="260,220 380,260 340,400 200,360"
          fill="#0D1E38"
          opacity="0.95"
        />

        <polygon
          points="380,260 500,300 470,440 340,400"
          fill="#5C86AC"
          opacity="0.85"
        />

        <polygon
          points="200,360 340,400 300,540 160,500"
          fill="#2E4A73"
          opacity="0.92"
        />

        <polygon
          points="340,400 470,440 430,560 300,540"
          fill="#16305A"
          opacity="0.9"
        />

        <polygon
          points="60,220 260,220 200,360 100,340"
          fill="#CBDCEF"
          opacity="0.8"
        />

        <polygon
          points="100,340 200,360 160,500 80,460"
          fill="#5C86AC"
          opacity="0.75"
        />

        <polygon
          points="300,40 260,220 60,220 140,100"
          fill="#2E4A73"
          opacity="0.85"
        />

        <polygon
          points="470,440 560,400 540,520 430,560"
          fill="#0D1E38"
          opacity="0.88"
        />

        <g stroke="#FFFFFF" strokeWidth={1.4} opacity={0.35} fill="none">
          <line x1="300" y1="40" x2="260" y2="220" />
          <line x1="260" y1="220" x2="380" y2="260" />
          <line x1="380" y1="260" x2="420" y2="120" />
          <line x1="260" y1="220" x2="200" y2="360" />
          <line x1="380" y1="260" x2="340" y2="400" />
          <line x1="200" y1="360" x2="340" y2="400" />
          <line x1="340" y1="400" x2="300" y2="540" />
          <line x1="340" y1="400" x2="470" y2="440" />
          <line x1="200" y1="360" x2="100" y2="340" />
        </g>
      </svg> */}

      <img
        src={MyPhoto}
        alt="My Photo"
        className="z-10 h-64 rounded-full md:h-86 lg:h-100"
      />
    </div>
  </section>
)

export default About
