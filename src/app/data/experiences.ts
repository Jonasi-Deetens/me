interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  technicalSkills: string[];
  softSkills: string[];
}

const experiences: Experience[] = [
  {
    company: 'TattooGenda',
    role: 'Junior Full Stack Developer',
    period: '2024 - Present',
    description:
      'Developing a modern SaaS platform for tattoo appointment management. Working with a cutting-edge tech stack including Next.js, tRPC, and PostgreSQL. Responsible for implementing core features, Docker containerization, and message queue systems. Leading and mentoring an intern while building responsive UI components with Tailwind CSS and integrating email notifications via Postmark. Demonstrated quick learning ability by taking on significant development responsibilities in first year.',
    technicalSkills: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Docker', 'tRPC'],
    softSkills: ['Leadership', 'Mentoring', 'Quick Learning'],
  },
  {
    company: 'Beach Bar',
    role: 'Service Staff',
    period: '2010 - 2023',
    description:
      'Managed high-pressure situations in a fast-paced environment while maintaining excellent customer service. Developed strong interpersonal and communication skills through daily customer interactions. Demonstrated leadership abilities by training new team members and coordinating with kitchen staff. Enhanced multitasking and problem-solving capabilities while handling diverse customer needs.',
    technicalSkills: [],
    softSkills: [
      'Customer Service',
      'Team Leadership',
      'Communication',
      'Problem Solving',
      'Multitasking',
    ],
  },
];

export default experiences;
