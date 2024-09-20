type Experience = {
  company: string
  slug: string
  role: string
  startDate: string
  endDate: string
  location: string
  description?: string
  stack?: string[]
}

export const experiences: Experience[] = [
  {
    company: 'LuizaLabs',
    slug: 'luizalabs',
    role: 'Desenvolvedor Back-end Pleno',
    startDate: '09/2024',
    endDate: 'Atualmente',
    location: 'SP, Brasil',
    stack: ['Java', 'Spring Boot', 'Node.JS', 'PostgreSQL']
  },
  {
    company: 'Lippaus Distribuidora',
    slug: 'lippaus-distribuidora',
    role: 'Desenvolvedor Full-Stack Pleno',
    startDate: '05/2022',
    endDate: '30/08/2024',
    location: 'Vitória, ES',
    description:
      'Migração de sistemas legados, desenvolvimento de sistemas web com Node.js, Java e PostgreSQL, desenvolvimento de APIs Restful e modelagem de banco de dados. Participação em refatoração de aplicação web, melhorando performance implementando sistema de filas com Redis, Docker e Jobs agendados. Oportunidade de trabalhar no desenvolvimento, manutenção e evoluir o sistema mais lucrativo da empresa.',
    stack: ['Node.js', 'Java', 'PostgreSQL', 'Redis', 'Docker']
  }
]
