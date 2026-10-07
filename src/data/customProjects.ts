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
  title: 'Real-Time Token Launch Alert',
  status: 'Planned',
  description: 'A lightweight scanner tracking new liquidity pools, token deployments, and DEX pairs across non-EVM chains.',
  featuresPlanned: [
    'New Pool & Liquidity Detector',
    'Basic Contract / LP Lock Safety Verification',
    'Instant Alert Notifications'
  ],
  tags: ['Python', 'Solana Web3', 'Sui SDK', 'Telegram Bot API'],
}
];
