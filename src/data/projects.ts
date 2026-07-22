export interface ProjectStat {
  value: string
  label: string
}

export interface ShardShape {
  points: string
  fill: string
  opacity: number
}

export interface ProjectMock {
  navCount: number
  activeNav: number
  stats: ProjectStat[]
  chartPoints?: string
  rows: number
}

export interface Project {
  id: string
  ref: string
  name: string
  tagline: string
  description: string
  status: string
  statusVariant: 'live' | 'dev' | 'done'
  role: string
  stackSummary: string
  problem: string
  solution: string[]
  stack: string[]
  cardTags: string[]
  shard: ShardShape[]
  mock: ProjectMock
}

export const projects: Project[] = [
  {
    id: 'c4fitness',
    ref: 'PRJ-01',
    name: 'C4 FITNESS',
    tagline:
      'Sistema de gestão completo para academias, cobrindo desde o cadastro do cliente até relatórios financeiros exportáveis.',
    description:
      'Gestão completa de academia — clientes, assinaturas, financeiro, painel de TV e relatórios em PDF.',
    status: 'em desenvolvimento',
    statusVariant: 'dev',
    role: 'Full Stack — solo',
    stackSummary: 'React + FastAPI',
    problem:
      'Academias pequenas e médias costumam controlar clientes, mensalidades e financeiro em planilhas soltas ou sistemas genéricos que não refletem a rotina real da recepção.',
    solution: [
      'Cadastro e gestão de clientes com histórico de assinaturas',
      'Controle de transações financeiras e status de pagamento',
      'Painel para exibição em TV na recepção, com informações em tempo real',
      'Relatórios com exportação em PDF',
      'Lembretes automáticos de vencimento de mensalidade',
    ],
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'TailwindCSS',
      'TanStack Query',
      'React Router v7',
      'FastAPI',
    ],
    cardTags: ['React', 'FastAPI', 'TypeScript'],
    shard: [
      { points: '0,0 400,60 320,180 80,140', fill: '#2E4A73', opacity: 0.55 },
      { points: '0,0 80,140 0,220', fill: '#5C86AC', opacity: 0.4 },
      {
        points: '80,140 320,180 240,300 0,300 0,220',
        fill: '#16305A',
        opacity: 0.5,
      },
      {
        points: '320,180 400,60 400,300 240,300',
        fill: '#0D1E38',
        opacity: 0.6,
      },
    ],
    mock: {
      navCount: 4,
      activeNav: 0,
      stats: [
        { value: '2.198', label: 'Clientes' },
        { value: 'R$66k', label: 'Receita' },
        { value: '13', label: 'Pendências' },
      ],
      chartPoints: '0,25 30,18 60,20 90,10 120,14 150,6 180,9 200,4',
      rows: 2,
    },
  },
  {
    id: 'sicrm',
    ref: 'PRJ-02',
    name: 'SI CRM',
    tagline:
      'CRM construído como projeto de avaliação técnica para estágio Full Stack, com arquitetura em três camadas independentes.',
    description:
      'CRM em três camadas independentes, com microsserviço de IA dedicado ao atendimento.',
    status: 'projeto técnico',
    statusVariant: 'done',
    role: 'Full Stack — solo',
    stackSummary: 'Next.js + NestJS + FastAPI',
    problem:
      'O processo pedia a construção de um CRM funcional em prazo curto, com liberdade de arquitetura — oportunidade de mostrar não só código, mas decisão de design de sistema.',
    solution: [
      'Frontend em Next.js 16 para a interface de atendimento',
      'Backend em NestJS cuidando de regras de negócio e persistência via Prisma/PostgreSQL',
      'Microsserviço separado em Python/FastAPI dedicado a IA, usando Groq SDK com LLaMA 3.3 70B',
      'Separação proposital: o serviço de IA escala ou é substituído sem afetar o restante do sistema',
    ],
    stack: [
      'Next.js 16',
      'NestJS 11',
      'Prisma',
      'PostgreSQL',
      'FastAPI',
      'Groq / LLaMA 3.3 70B',
    ],
    cardTags: ['Next.js', 'NestJS', 'FastAPI + IA'],
    shard: [
      { points: '0,0 400,0 400,120 200,180', fill: '#16305A', opacity: 0.55 },
      { points: '0,0 200,180 0,180', fill: '#5C86AC', opacity: 0.4 },
      { points: '0,180 200,180 120,300 0,300', fill: '#2E4A73', opacity: 0.5 },
      {
        points: '200,180 400,120 400,300 120,300',
        fill: '#0D1E38',
        opacity: 0.6,
      },
    ],
    mock: {
      navCount: 4,
      activeNav: 1,
      stats: [
        { value: '184', label: 'Contatos' },
        { value: '32', label: 'Em aberto' },
      ],
      rows: 3,
    },
  },
  {
    id: 'stocksync',
    ref: 'PRJ-03',
    name: 'stock-sync-api',
    tagline:
      'API de sincronização de estoque construída como peça de portfólio para candidatura de Desenvolvedor Python Júnior.',
    description:
      'API de sincronização de estoque com webhooks, containerização e testes automatizados.',
    status: 'portfólio',
    statusVariant: 'live',
    role: 'Backend — solo',
    stackSummary: 'FastAPI + PostgreSQL',
    problem:
      'Demonstrar prática real de engenharia backend além de "fazer funcionar": código testável, containerizado e com comunicação assíncrona de eventos.',
    solution: [
      'API REST para sincronização de estoque com FastAPI',
      'Persistência em PostgreSQL',
      'Containerização completa com Docker',
      'Testes automatizados com pytest',
      'Notificação de eventos via webhooks',
    ],
    stack: ['FastAPI', 'PostgreSQL', 'Docker', 'pytest', 'Webhooks'],
    cardTags: ['FastAPI', 'Docker', 'pytest'],
    shard: [
      { points: '0,0 400,0 340,130 120,100', fill: '#2E4A73', opacity: 0.55 },
      { points: '0,0 120,100 0,130', fill: '#CBDCEF', opacity: 0.3 },
      {
        points: '0,130 120,100 340,130 260,300 0,300',
        fill: '#16305A',
        opacity: 0.5,
      },
      {
        points: '340,130 400,0 400,300 260,300',
        fill: '#0D1E38',
        opacity: 0.6,
      },
    ],
    mock: {
      navCount: 4,
      activeNav: 2,
      stats: [
        { value: '200', label: 'Status' },
        { value: '98%', label: 'Cobertura' },
      ],
      chartPoints: '0,20 30,22 60,12 90,15 120,6 150,10 180,4 200,8',
      rows: 1,
    },
  },
  {
    id: 'lansystem',
    ref: 'PRJ-04',
    name: 'LAN System',
    tagline:
      'Sistema de gestão para barbearias e salões de beleza, com fluxo de trabalho completo em Git.',
    description:
      'Gestão para barbearias e salões — agenda, financeiro e interface multi-idioma.',
    status: 'projeto técnico',
    statusVariant: 'done',
    role: 'Full Stack — solo',
    stackSummary: 'Next.js + Zustand',
    problem:
      'Negócios de agendamento (barbearias, salões) precisam de controle de agenda, clientes e financeiro em uma interface simples, com suporte a mais de um idioma.',
    solution: [
      'Gestão de agenda e clientes',
      'Controle financeiro do negócio',
      'Interface multi-idioma com next-intl',
      'Visualizações e gráficos com Recharts',
      'Fluxo de desenvolvimento organizado com branching estruturado no Git',
    ],
    stack: ['Next.js', 'TanStack Query', 'Zustand', 'next-intl', 'Recharts'],
    cardTags: ['Next.js', 'Zustand', 'Recharts'],
    shard: [
      { points: '0,0 400,40 300,150 60,120', fill: '#16305A', opacity: 0.55 },
      { points: '0,0 60,120 0,170', fill: '#5C86AC', opacity: 0.4 },
      {
        points: '0,170 60,120 300,150 200,300 0,300',
        fill: '#2E4A73',
        opacity: 0.5,
      },
      {
        points: '300,150 400,40 400,300 200,300',
        fill: '#0D1E38',
        opacity: 0.6,
      },
    ],
    mock: {
      navCount: 4,
      activeNav: 3,
      stats: [
        { value: '47', label: 'Agendamentos' },
        { value: 'R$4,2k', label: 'Semana' },
      ],
      rows: 3,
    },
  },
  {
    id: 'finsy',
    ref: 'PRJ-05',
    name: 'Finsy',
    tagline:
      'SaaS de finanças pessoais em produção, com base de usuários reais.',
    description:
      'SaaS de finanças pessoais em uso ativo por mais de 15 usuários reais.',
    status: 'produção',
    statusVariant: 'live',
    role: 'Full Stack — solo',
    stackSummary: 'Full stack SaaS',
    problem:
      'Construir uma ferramenta de controle financeiro pessoal simples o bastante para uso diário real, não só um projeto de estudo.',
    solution: [
      'Aplicação SaaS completa, do banco de dados à interface',
      'Arquitetura pensada para manutenção e evolução contínua',
      'Em uso ativo por mais de 15 usuários reais',
    ],
    stack: ['Full Stack', 'Arquitetura limpa', 'Produção real'],
    cardTags: ['Full Stack', 'Produção real'],
    shard: [
      { points: '0,0 400,60 320,180 80,140', fill: '#2E4A73', opacity: 0.55 },
      { points: '0,0 80,140 0,220', fill: '#CBDCEF', opacity: 0.3 },
      {
        points: '80,140 320,180 240,300 0,300 0,220',
        fill: '#16305A',
        opacity: 0.5,
      },
      {
        points: '320,180 400,60 400,300 240,300',
        fill: '#0D1E38',
        opacity: 0.6,
      },
    ],
    mock: {
      navCount: 3,
      activeNav: 0,
      stats: [
        { value: '15+', label: 'Usuários' },
        { value: 'R$1,8k', label: 'Economizado' },
      ],
      chartPoints: '0,22 30,20 60,14 90,17 120,9 150,12 180,5 200,7',
      rows: 0,
    },
  },
]
