export type TimelineIcon = 'graduation' | 'briefcase' | 'cloud'

export interface TimelineEntry {
  id: string
  year: string
  title: string
  cardDescription: string
  tagline: string
  detail: string
  highlights: string[]
  side: 'left' | 'right'
  current?: boolean
  icon: TimelineIcon
}

export const timeline: TimelineEntry[] = [
  {
    id: 'ifce-inicio',
    year: '2023 – atual (7º semestre)',
    title: 'Início — Ciência da Computação, Instituto Federal do Ceará (IFCE)',
    cardDescription:
      'Início da graduação em 2023, com pesquisa acadêmica, projetos de extensão e disciplinas centrais da área.',
    tagline:
      'O ponto de partida da formação acadêmica, com pesquisa, extensão e disciplinas fundamentais.',
    detail:
      'Início da graduação em Ciência da Computação pelo Instituto Federal do Ceará (IFCE) em 2023, atualmente cursando o 7º semestre. Ao longo do curso, participei de projetos de pesquisa com aprovação de artigos no CONNEPI e no ENCIFAT, além de projetos de extensão e disciplinas centrais para a área como estruturas de dados, banco de dados, grafos, desenvolvimento web e programação orientada a objetos.',
    highlights: [
      'Artigos aprovados no CONNEPI e no ENCIFAT',
      'Participação em projetos de extensão',
      'Disciplinas de estruturas de dados, banco de dados, grafos, desenvolvimento web e programação orientada a objetos',
      'Organização de hackathon junto com a equipe da faculdade',
    ],
    side: 'left',
    icon: 'graduation',
  },
  {
    id: 'compass-uol',
    year: 'Jul 2025 – Dez 2025',
    title: 'Certificação AWS Cloud Practitioner — Compass UOL',
    cardDescription:
      'Certificação AWS Cloud Practitioner conquistada durante estágio fullstack remoto na Compass UOL.',
    tagline:
      'Certificação AWS Cloud Practitioner, conquistada durante estágio fullstack remoto.',
    detail:
      'Durante o estágio remoto de seis meses na Compass UOL, conquistei a certificação AWS Cloud Practitioner, validando conhecimento em fundamentos de computação em nuvem, principais serviços (EC2, S3, IAM), modelo de responsabilidade compartilhada e boas práticas de custo e segurança. A certificação veio em paralelo à trilha de treinamento intensivo em desenvolvimento fullstack, com squads ágeis simulados, dailies, code reviews e gestão de tarefas via Trello, seguindo metodologia Scrum. Como projeto prático da trilha, participou da construção de um e-commerce simulando todo o fluxo real de compra: pesquisa e listagem de produtos, carrinho, login, checkout restrito a usuários autenticados e finalização da compra, com toda a infraestrutura hospedada na AWS e integrada ao S3.',
    highlights: [
      'Certificação AWS Cloud Practitioner',
      'Infraestrutura AWS (EC2, S3) aplicada em projeto real de e-commerce',
      'Autenticação com JWT e proteção de rotas via middleware',
      'Modelagem de dados não relacional com MongoDB',
      'Containerização com Docker',
      'Documentação de APIs com Swagger/OpenAPI',
    ],
    side: 'right',
    icon: 'cloud',
  },
  {
    id: 'c4-fitness',
    year: 'Set 2025 – Out 2025',
    title: 'C4 FITNESS',
    cardDescription:
      'Desenvolvimento de um sistema de gestão para academias, com cadastro de clientes e acompanhamento do status das mensalidades em segundos.',
    tagline: 'Construção de um sistema de gestão para academias.',
    detail:
      'Entre setembro e outubro de 2025, construí um sistema de gestão para a C4 FITNESS, com cadastro de clientes e acompanhamento do status das mensalidades — em dia, vencidas ou próximas do vencimento. O sistema reduziu de minutos para segundos o tempo necessário para verificar a situação de cada cliente e contou com uma interface pensada para exibição em TV.',
    highlights: [
      'CRUD completo de clientes',
      'Acompanhamento do status das mensalidades: em dia, vencidas e próximas do vencimento',
      'Redução de minutos para segundos na verificação da situação dos clientes',
      'Interface otimizada para exibição em TV',
    ],
    side: 'left',
    icon: 'briefcase',
  },
  {
    id: 'lidex-solucoes-digitais',
    year: 'Ago 2026 – atual',
    title: 'Desenvolvedor Full Stack — Lidex Soluções Digitais',
    cardDescription:
      'Início como estagiário Full Stack na Lidex Soluções Digitais.',
    tagline: 'Novo estágio como desenvolvedor Full Stack.',
    detail:
      'Início do estágio como desenvolvedor Full Stack na Lidex Soluções Digitais.',
    highlights: [],
    side: 'right',
    current: true,
    icon: 'briefcase',
  },
]
