export interface SkillGroup {
  title: string
  items: { label: string; icon?: string }[]
}

export const technicalSkills: SkillGroup[] = [
  {
    title: 'Back-end',
    items: [
      { label: 'Node.js', icon: 'devicon-nodejs-plain colored' },
      { label: 'NestJS', icon: 'devicon-nestjs-plain colored' },
      { label: 'Express', icon: 'devicon-express-original' },
      { label: 'Fastify', icon: 'devicon-fastify-plain' },
      { label: 'Python', icon: 'devicon-python-plain colored' },
      { label: 'FastAPI', icon: 'devicon-fastapi-plain colored' },
      { label: 'APIs RESTful' },
      { label: 'Clean Architecture' },
      { label: 'SOLID' },
    ],
  },
  {
    title: 'Front-end',
    items: [
      { label: 'React', icon: 'devicon-react-original colored' },
      { label: 'Next.js', icon: 'devicon-nextjs-plain' },
      { label: 'TypeScript', icon: 'devicon-typescript-plain colored' },
      { label: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { label: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored' },
      { label: 'TanStack Query', icon: 'devicon-react-original colored' },
      { label: 'Zustand', icon: 'devicon-zustand-plain colored' },
      { label: 'React Hook Form' },
      { label: 'Vite', icon: 'devicon-vite-original' },
    ],
  },
  {
    title: 'Banco de Dados & ORM',
    items: [
      { label: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
      { label: 'MySQL', icon: 'devicon-mysql-plain colored' },
      { label: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
      { label: 'Prisma', icon: 'devicon-prisma-original' },
      { label: 'SQL' },
      { label: 'Modelagem de dados' },
    ],
  },
  {
    title: 'Testes',
    items: [
      { label: 'Jest', icon: 'devicon-jest-plain colored' },
      { label: 'React Testing Library' },
      { label: 'pytest', icon: 'devicon-pytest-plain colored' },
      { label: 'Testes unitários e de integração' },
    ],
  },
  {
    title: 'DevOps & Cloud',
    items: [
      { label: 'Docker', icon: 'devicon-docker-plain colored' },
      {
        label: 'Git (GitFlow, Pull Requests)',
        icon: 'devicon-git-plain colored',
      },
      { label: 'GitHub', icon: 'devicon-github-original' },
      {
        label: 'AWS (Cloud Practitioner)',
        icon: 'devicon-amazonwebservices-plain-wordmark',
      },
    ],
  },
  {
    title: 'Metodologias & IA',
    items: [
      { label: 'Scrum' },
      { label: 'Kanban' },
      { label: 'Squads ágeis' },
      { label: 'IA Generativa' },
      { label: 'Spec-driven development' },

      { label: 'Groq SDK' },
      { label: 'LLaMA 3.3' },
    ],
  },
]

export interface SoftSkill {
  title: string
  description: string
}

export const softSkillHighlights: SoftSkill[] = [
  {
    title: 'Comunicação direta',
    description:
      'Explica decisões técnicas de forma clara, sem enrolação — para times técnicos e não técnicos.',
  },
  {
    title: 'Organização de eventos técnicos',
    description:
      'Planejamento e execução do Devathon, coordenando cronograma, cases e participantes.',
  },
  {
    title: 'Autonomia',
    description:
      'Conduz projetos do levantamento de requisitos até o deploy, sem depender de supervisão constante.',
  },
  {
    title: 'Resolução de problemas',
    description:
      'Prioriza entender a causa raiz antes de propor solução técnica.',
  },
]

export const softSkillTags = [
  'Adaptabilidade',
  'Trabalho em equipe',
  'Comunicação com cliente',
  'Gestão de tempo',
  'Atenção a detalhes',
  'Aprendizado rápido',
  'Pensamento crítico',
  'Proatividade',
  'Colaboração multidisciplinar',
]
