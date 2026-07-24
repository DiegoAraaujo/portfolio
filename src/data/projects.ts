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
    id: 'sicrm',
    ref: 'PRJ-01',
    name: 'SI CRM',
    tagline:
      'CRM imobiliário desenvolvido como case técnico para processo seletivo de estágio Full Stack.',
    description:
      'CRM imobiliário com gerenciamento de leads em Kanban, autenticação, dashboard e microsserviço de IA integrado à aplicação.',
    status: 'projeto técnico',
    statusVariant: 'done',
    role: 'Full Stack — solo',
    stackSummary: 'NestJS + Next.js + FastAPI',
    problem:
      'O desafio consistia em desenvolver, em um prazo definido, um sistema web para gerenciamento de leads imobiliários, com visualização em Kanban, autenticação e um chatbot em Python integrado à aplicação. Além dos requisitos principais, havia liberdade para definir funcionalidades extras, a abordagem da IA e a tecnologia do banco de dados.',
    solution: [
      'Backend em NestJS com Clean Architecture e SOLID, organizado em camadas de domínio, aplicação, infraestrutura e apresentação',
      'Autenticação com JWT, utilizando access token e refresh token com rotação, armazenado em cookie httpOnly',
      'Kanban com status customizáveis e movimentação de leads entre colunas, com histórico de atividades registrado automaticamente',
      'Dashboard com estatísticas agregadas, distribuições e dados recentes',
      'Chatbot de IA desenvolvido em Python com FastAPI e integrado ao sistema por meio de um proxy autenticado no backend',
      'Funcionalidade de análise estratégica de leads utilizando um modelo de linguagem integrado ao microsserviço de IA',
      'Endpoint único otimizado para o dashboard, reduzindo o número de requisições necessárias para carregar os dados',
      'Cobertura de funcionalidades críticas com testes unitários utilizando Jest e React Testing Library',
    ],
    stack: [
      'TypeScript',
      'NestJS',
      'Next.js',
      'React',
      'PostgreSQL',
      'Prisma',
      'FastAPI',
      'Python',
      'Docker',
      'Tailwind CSS',
      'Zustand',
      'TanStack Query',
      'Axios',
      'React Hook Form',
      'Zod',
      'Groq SDK / LLaMA 3.3 70B',
    ],
    cardTags: ['NestJS', 'Next.js', 'FastAPI + IA'],
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
    ref: 'PRJ-02',
    name: 'stock-sync-api',
    tagline:
      'API de sincronização de estoque desenvolvida como projeto prático para aplicar e aprofundar conhecimentos em Python.',
    description:
      'API de sincronização de estoque com webhooks, containerização e testes automatizados.',
    status: 'projeto de aprendizado',
    statusVariant: 'done',
    role: 'Backend — solo',
    stackSummary: 'FastAPI + PostgreSQL',
    problem:
      'A experiência principal é em Node.js/NestJS e TypeScript; o projeto nasceu para aplicar os mesmos princípios de arquitetura já usados no dia a dia (separação de camadas, validação de dados, testes automatizados) em Python e FastAPI, simulando um cenário comum de back-office de varejo.',
    solution: [
      'CRUD completo de produtos, incluindo ajuste direto de estoque',
      'Criação de pedidos com dedução automática de estoque e validação de estoque insuficiente antes de confirmar',
      'Garantia de que o estoque não é alterado quando um pedido falha',
      'Endpoint de webhook que simula recebimento de atualizações de estoque de um ERP externo, sem nunca retornar erro para o sistema que chama, mesmo em falha',
      'Log de sincronização com todas as tentativas, com filtro dedicado para falhas',
      'Estrutura organizada por domínio (products, orders, sync), cada um com rotas, regras de negócio, modelo de dados e validação isolados',
    ],
    stack: [
      'FastAPI',
      'SQLAlchemy',
      'PostgreSQL',
      'Pydantic',
      'pytest',
      'Docker',
    ],
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
    ref: 'PRJ-03',
    name: 'LAN System',
    tagline:
      'Sistema de gestão para barbearia, desenvolvido do zero e em uso real no próprio negócio.',
    description:
      'Gestão operacional de barbearia em uso real, cobrindo todo o ciclo do negócio.',
    status: 'em uso real',
    statusVariant: 'live',
    role: 'Full Stack — solo',
    stackSummary: 'Next.js + Express + Prisma',
    problem:
      'A barbearia controlava cadastro de clientes, atendimentos, pagamentos e cortes fiados em anotações manuais no papel, sem visibilidade sobre desempenho ou perdas financeiras, e perdendo tempo que poderia ser dedicado ao atendimento.',
    solution: [
      'Autenticação completa com refresh automático de token e proteção de rotas (AuthGuard e GuestGuard)',
      'Modelagem do banco de dados com Prisma/PostgreSQL para atendimentos, pagamentos e cortes fiados',
      'Agendamento inteligente, filtrando em tempo real apenas profissionais autorizados para o serviço selecionado e prevenindo serviços duplicados',
      'Análise de fidelidade de clientes por nível (VIP, frequente, ativo)',
      'Dashboard com ganho mensal, anual e de cada mês, além dos serviços mais prestados',
      'Interface multi-idioma (PT/EN) com next-intl',
      'Eliminou uma perda histórica de mais de R$500 causada por cortes fiados que antes se perdiam em anotações manuais, hoje sob controle automatizado',
      'Reduziu de dias para segundos análises que antes eram feitas manualmente, como clientes mais fiéis e desempenho por profissional',
      'Liberou tempo que antes ia para anotar tudo em papel, para focar no atendimento da barbearia',
    ],
    stack: [
      'TypeScript',
      'Next.js',
      'React',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Prisma',
      'Tailwind CSS',
      'TanStack Query',
      'Zustand',
      'React Hook Form',
      'Zod',
      'Recharts',
      'next-intl',
    ],
    cardTags: ['Next.js', 'Prisma', 'Recharts'],
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
    ref: 'PRJ-04',
    name: 'FINSY',
    tagline:
      'Plataforma de organização financeira pessoal desenvolvida para facilitar o controle de gastos e a visualização da vida financeira.',
    description:
      'Aplicação full stack para registro de despesas, histórico financeiro e análise de gastos por meio de gráficos e indicadores.',
    status: 'projeto pessoal',
    statusVariant: 'done',
    role: 'Full Stack — solo',
    stackSummary: 'React + Fastify + PostgreSQL',
    problem:
      'Muitas pessoas têm dificuldade para entender para onde seu dinheiro está indo, especialmente quando os gastos não são registrados ou acompanhados de forma consistente.',
    solution: [
      'Registro de despesas de forma simples',
      'Consulta ao histórico financeiro',
      'Visualização de gastos por meio de gráficos e indicadores',
      'Frontend desenvolvido com abordagem mobile-first e responsiva',
      'API REST desenvolvida com Fastify e organizada seguindo princípios de Clean Architecture',
      'Autenticação com JWT, utilizando access token e refresh token',
      'Validação de dados com Zod',
      'Documentação da API com Swagger e Swagger UI',
      'Gerenciamento de estado assíncrono com TanStack Query',
    ],
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS v4',
      'TanStack React Query',
      'React Router DOM',
      'Axios',
      'Recharts',
      'Sonner',
      'Node.js',
      'Fastify',
      'Prisma',
      'PostgreSQL',
      '@fastify/jwt',
      'bcrypt',
      '@fastify/cookie',
      'Zod',
      '@fastify/swagger',
      '@fastify/swagger-ui',
    ],
    cardTags: ['React + TypeScript', 'Fastify', 'PostgreSQL'],
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
        { value: 'R$1,2k', label: 'Gasto do mês' },
        { value: '8', label: 'Categorias' },
      ],
      chartPoints: '0,22 30,20 60,14 90,17 120,9 150,12 180,5 200,7',
      rows: 0,
    },
  },
]
