export interface SkillGroup {
  title: string;
  items: { label: string; icon: string }[];
}

export const technicalSkills: SkillGroup[] = [
  {
    title: "Backend",
    items: [
      { label: "Node.js", icon: "devicon-nodejs-plain colored" },
      { label: "NestJS", icon: "devicon-nestjs-plain colored" },
      { label: "Python", icon: "devicon-python-plain colored" },
      { label: "FastAPI", icon: "devicon-fastapi-plain colored" },
      { label: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      { label: "MySQL", icon: "devicon-mysql-plain colored" },
      { label: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { label: "Prisma", icon: "devicon-prisma-original" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { label: "React", icon: "devicon-react-original colored" },
      { label: "Next.js", icon: "devicon-nextjs-plain" },
      { label: "TypeScript", icon: "devicon-typescript-plain colored" },
      { label: "TailwindCSS", icon: "devicon-tailwindcss-plain colored" },
      { label: "TanStack Query", icon: "devicon-react-original colored" },
    ],
  },
  {
    title: "Infra & testes",
    items: [
      { label: "Docker", icon: "devicon-docker-plain colored" },
      { label: "Git / GitFlow", icon: "devicon-git-plain colored" },
      { label: "Jest / RTL", icon: "devicon-jest-plain colored" },
      { label: "pytest", icon: "devicon-pytest-plain colored" },
      { label: "AWS", icon: "devicon-amazonwebservices-original colored" },
    ],
  },
];

export interface SoftSkill {
  title: string;
  description: string;
}

export const softSkillHighlights: SoftSkill[] = [
  {
    title: "Comunicação direta",
    description:
      "Explica decisões técnicas de forma clara, sem enrolação — para times técnicos e não técnicos.",
  },
  {
    title: "Organização de eventos técnicos",
    description:
      "Planejamento e execução do Devathon, coordenando cronograma, cases e participantes.",
  },
  {
    title: "Autonomia",
    description:
      "Conduz projetos do levantamento de requisitos até o deploy, sem depender de supervisão constante.",
  },
  {
    title: "Resolução de problemas",
    description:
      "Prioriza entender a causa raiz antes de propor solução técnica.",
  },
];

export const softSkillTags = [
  "Adaptabilidade",
  "Trabalho em equipe",
  "Comunicação com cliente",
  "Gestão de tempo",
  "Atenção a detalhes",
  "Aprendizado rápido",
  "Pensamento crítico",
  "Proatividade",
  "Colaboração multidisciplinar",
];
