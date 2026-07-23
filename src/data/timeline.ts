export type TimelineIcon =
  | 'graduation'
  | 'briefcase'
  | 'event'
  | 'cloud'
  | 'clipboard'
  | 'compass'
  | 'flag'

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
      'Início da graduação em Ciência da Computação pelo Instituto Federal do Ceará (IFCE) em 2023, atualmente cursando o 7º semestre. Ao longo do curso, participou de projetos de pesquisa com aprovação de artigos no CONNEPI e no ENCIFAT, além de projetos de extensão e disciplinas centrais para a área como estruturas de dados, banco de dados, grafos, desenvolvimento web e programação orientada a objetos.',
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
    title: 'Estágio Fullstack — Compass UOL',
    cardDescription:
      'Trilha intensiva de treinamento fullstack remoto, com squads ágeis simulados, prática em autenticação, containerização, cloud e certificação AWS.',

    tagline:
      'Trilha intensiva de treinamento fullstack em squads ágeis simulados.',
    detail:
      'Estágio remoto de seis meses na Compass UOL, com trilha de treinamento intensivo em desenvolvimento fullstack: squads ágeis simulados com dailies, code reviews e gestão de tarefas via Trello, seguindo metodologia Scrum, em ambiente de formação sem entrega a clientes reais. Antes da implementação, identificou o risco de perda de sessão por ausência de persistência de login e propôs em code review a adoção de refresh token via cookie httpOnly, solução discutida e adotada pelo squad.',
    highlights: [
      'Autenticação com JWT e proteção de rotas via middleware',
      'Modelagem de dados não relacional com MongoDB',
      'Containerização com Docker e infraestrutura AWS (EC2, S3)',
      'Documentação de APIs com Swagger/OpenAPI',
      'Interfaces fullstack para fluxo de e-commerce com React e TypeScript',
      'Certificação AWS Cloud Practitioner conquistada durante o estágio',
    ],
    side: 'right',
    icon: 'briefcase',
  },
  {
    id: 'c4-fitness',
    year: 'Set – Out 2025',
    title: 'C4 FITNESS',
    cardDescription:
      'Desenvolvimento do C4 FITNESS, sistema de gestão para academias.',
    tagline: 'Construção do C4 FITNESS, sistema de gestão para academias.',
    detail:
      'Entre setembro e outubro de 2025, construção do C4 FITNESS, sistema de gestão para academias, com foco em mostrar todos os clientes e seus status (normal, vencido, próximo de vencer), autenticação e um visual pensado para exibição em TV.',
    highlights: [
      'Visão de clientes por status: normal, vencido e próximo de vencer',
      'Autenticação',
      'Visual pensado para exibição em TV',
    ],
    side: 'left',
    icon: 'compass',
  },
]
