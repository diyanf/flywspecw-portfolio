export interface Project {
  id: string;
  title: string;
  role?: string;
  description: string;
  techStack?: string[];
}

export const historyProjects: Project[] = [
  {
    id: 'sui',
    title: 'Sui Network Early Presale',
    role: 'Mainnet & Presale',
    description: 'Early participant in the Sui Network ecosystem presale and community recognition program.',
    techStack: ['Presale', 'Community', 'L1 Ecosystem']
  },
  {
    id: 'aptos',
    title: 'Aptos Ecosystem Early Participant',
    role: 'Testnet & Node',
    description: 'Early participant and testnet node/interaction contributor within the Aptos L1 ecosystem.',
    techStack: ['Aptos', 'Testnet Node', 'L1']
  },
  {
    id: 'berachain',
    title: 'Berachain Ecosystem & Testnet',
    role: 'Testnet Explorer',
    description: 'Active contributor testing dApps, DEX swaps, and liquidity pools across the Berachain testnet phases.',
    techStack: ['Berachain', 'Testnet', 'DeFi']
  },
  {
    id: 'monad',
    title: 'Monad Testnet Early Explorer',
    role: 'Testnet Explorer',
    description: 'Executing high-frequency contract interactions and testing ecosystem tools on Monad testnet.',
    techStack: ['Monad', 'EVM', 'Testnet']
  },
  {
    id: 'canto',
    title: 'Canto Network',
    role: 'Mainnet Interaction',
    description: 'Active participant in Canto L1 ecosystem, interacting with Free Public Infrastructure (FPI) DeFi primitives.',
    techStack: ['Canto', 'DeFi', 'FPI']
  },
  {
    id: 'canton',
    title: 'Canton Network',
    role: 'Node Validator',
    description: 'Operating and maintaining a high-availability node validator on the Canton Network, ensuring network consensus, security, and uptime.',
    techStack: ['Node Validator', 'Consensus', 'Infrastructure']
  }
];
