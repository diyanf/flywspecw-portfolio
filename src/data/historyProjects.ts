export interface Project {
  id: string;
  title: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

export const historyProjects: Project[] = [
  {
    id: 'proj-1',
    title: 'Web3 Ecosystem Operations',
    role: 'Community & Operations',
    period: '2023 - Present',
    description: 'Managing testnet participation, validating node performance, and maintaining ecosystem tasks.',
    achievements: [
      'Executed multi-network node validation',
      'Tracked daily ecosystem interactions and faucets'
    ],
    techStack: ['Web3', 'Node Validation', 'Testnet']
  },
  {
    id: 'proj-2',
    title: 'Interactive Client Tools',
    role: 'Frontend Developer',
    period: '2024',
    description: 'Built client-side browser tools for progress tracking without backend dependency.',
    achievements: [
      'Implemented LocalStorage persistence',
      'Created JSON backup import/export features'
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS']
  }
];
