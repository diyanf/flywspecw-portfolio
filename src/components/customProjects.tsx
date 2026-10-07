export interface CustomProject {
  id: string;
  title: string;
  status: 'In Development' | 'Concept' | 'Planned';
  description: string;
  featuresPlanned: string[];
  tags: string[];
}

export const customProjects: CustomProject[] = [
  {
    id: 'cp-1',
    title: 'Crypto Tooling & Automation Script',
    status: 'In Development',
    description: 'Custom utility script to automate testnet interactions, track multiple wallet activities, and monitor gas fees across EVM and Move chains.',
    featuresPlanned: ['Multi-Chain Wallet Tracker', 'Gas Fee Alerting', 'Automated Daily Interactions'],
    tags: ['Python', 'Automation', 'Crypto Tool', 'EVM / Move'],
  }
];
