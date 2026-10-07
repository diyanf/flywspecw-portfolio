export interface CustomProject {
  id: string;
  title: string;
  status: 'In Development' | 'Concept' | 'Planned' | 'Live Tool';
  description: string;
  featuresPlanned: string[];
  tags: string[];
  link?: string; // Properti link bersifat opsional
}

export const customProjects: CustomProject[] = [
  {
    id: 'cp-1',
    title: 'Airdrop Task & Progress Tracker',
    status: 'Live Tool',
    description: 'Interactive web application to organize, track, and export your daily ecosystem & testnet task progress directly in your browser.',
    featuresPlanned: [
      'Custom Task Creation & Deletion',
      'LocalStorage Auto-Persistence',
      'JSON Backup Export & Import'
    ],
    tags: ['Next.js', 'React', 'LocalStorage', 'Web3 Utility'],
    link: '/tools/task-tracker' // Menghubungkan ke rute halaman tool
  }
];
