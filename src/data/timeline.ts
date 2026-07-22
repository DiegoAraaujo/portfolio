export type TimelineIcon =
  | "graduation"
  | "briefcase"
  | "event"
  | "cloud"
  | "clipboard"
  | "compass"
  | "flag";

export interface TimelineEntry {
  id: string;
  year: string;
  title: string;
  cardDescription: string;
  tagline: string;
  detail: string;
  highlights: string[];
  side: "left" | "right";
  current?: boolean;
  icon: TimelineIcon;
}

export const timeline: TimelineEntry[] = [
  {
    id: "ifce-inicio",
    year: "20XX",
    title: "Início — Ciência da Computação, IFCE",
    cardDescription:
      "Começo da graduação, base em algoritmos, estrutura de dados e fundamentos de engenharia de software.",
    tagline: "O ponto de partida da formação acadêmica.",
    detail:
      "Começo da graduação em Ciência da Computação, com base sólida em algoritmos, estruturas de dados, matemática discreta e fundamentos de engenharia de software — a fundação sobre a qual todos os projetos posteriores foram construídos.",
    highlights: [
      "Algoritmos e estruturas de dados",
      "Fundamentos de engenharia de software",
      "Lógica de programação e matemática discreta",
    ],
    side: "left",
    icon: "graduation",
  },
  {
    id: "compass-uol",
    year: "20XX",
    title: "Formação estruturada — Compass UOL",
    cardDescription:
      "Trilha de capacitação técnica intensiva, aprofundando prática de desenvolvimento full stack.",
    tagline:
      "Trilha intensiva de capacitação técnica em desenvolvimento full stack.",
    detail:
      "Participação em programa de formação estruturada, com prática guiada e mentoria, aprofundando habilidades de desenvolvimento full stack além do conteúdo acadêmico.",
    highlights: [
      "Prática orientada em projetos reais",
      "Aprofundamento em desenvolvimento full stack",
      "Contato com fluxos de trabalho de mercado",
    ],
    side: "right",
    icon: "briefcase",
  },
  {
    id: "devathon",
    year: "20XX",
    title: "Organização do Devathon",
    cardDescription:
      "Co-organização de hackathon no Ceará, com estudo de caso real de uma rede de alimentação.",
    tagline: "Co-organização de hackathon no Ceará com estudo de caso real.",
    detail:
      "Ajudou a organizar o Devathon, um hackathon com estudo de caso de uma rede de alimentação local, cuidando de planejamento, cronograma e apoio aos participantes durante o evento.",
    highlights: [
      "Planejamento e execução de evento técnico",
      "Definição do estudo de caso com o negócio parceiro",
      "Coordenação de participantes e cronograma",
    ],
    side: "left",
    icon: "event",
  },
  {
    id: "aws-cert",
    year: "20XX",
    title: "Certificação AWS Cloud Practitioner",
    cardDescription: "Certificação em fundamentos de nuvem AWS.",
    tagline: "Certificação em fundamentos de nuvem AWS.",
    detail:
      "Certificação oficial da AWS cobrindo conceitos fundamentais de computação em nuvem, principais serviços (EC2, S3, IAM), modelo de responsabilidade compartilhada e boas práticas de custo e segurança.",
    highlights: [
      "Fundamentos de EC2, S3 e IAM",
      "Modelo de responsabilidade compartilhada",
      "Boas práticas de custo e segurança na nuvem",
    ],
    side: "right",
    icon: "cloud",
  },
  {
    id: "si-processo",
    year: "2026",
    title: "Processo técnico — SI Soluções Imobiliárias",
    cardDescription:
      "Entrevista técnica para estágio Full Stack, com construção do SI CRM como projeto de avaliação.",
    tagline: "Entrevista técnica para estágio Full Stack.",
    detail:
      "Processo seletivo para estágio Full Stack, com construção do SI CRM como projeto de avaliação — um CRM em três camadas com microsserviço de IA. Incluiu preparação de apresentação técnica e mentoria durante o processo.",
    highlights: [
      "Construção do SI CRM como case técnico",
      "Apresentação técnica estruturada",
      "Mentoria durante o processo seletivo",
    ],
    side: "left",
    icon: "clipboard",
  },
  {
    id: "atual",
    year: "Atual",
    title: "C4 FITNESS & candidaturas ativas",
    cardDescription:
      "Desenvolvimento do C4 FITNESS e aplicação para vagas de desenvolvedor, incluindo processo na Zenir.",
    tagline: "Desenvolvimento ativo e aplicação para vagas de desenvolvedor.",
    detail:
      "Momento atual: construção do C4 FITNESS, sistema de gestão para academias, em paralelo com candidaturas para vagas de desenvolvedor — incluindo processo em andamento na Zenir, para o qual construiu o projeto de portfólio stock-sync-api.",
    highlights: [
      "Desenvolvimento do C4 FITNESS em andamento",
      "Candidatura ativa — Zenir (Desenvolvedor Python Júnior)",
      "Portfólio técnico em expansão contínua",
    ],
    side: "right",
    current: true,
    icon: "compass",
  },
  {
    id: "formatura",
    year: "2027",
    title: "Formatura prevista",
    cardDescription: "Conclusão da graduação em Ciência da Computação.",
    tagline: "Conclusão da graduação em Ciência da Computação.",
    detail:
      "Conclusão prevista da graduação em Ciência da Computação pelo IFCE, encerrando o ciclo acadêmico com um portfólio consistente de projetos reais entregues ao longo do curso.",
    highlights: [
      "Conclusão do curso — IFCE",
      "Portfólio técnico consolidado",
      "Transição para atuação profissional full time",
    ],
    side: "left",
    icon: "flag",
  },
];
