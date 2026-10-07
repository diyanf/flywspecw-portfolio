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
    id: 'sui',
    title: 'Sui Network Early Presale',
    role: 'Mainnet & Presale',
    period: '2023',
    description: 'Early participant in the Sui Network ecosystem presale and community recognition program.',
    achievements: ['Community Recognition Program', 'Early Ecosystem Backer'],
    techStack: ['Presale', 'Community', 'L1 Ecosystem']
  },
  {
    id: 'aptos',
    title: 'Aptos Ecosystem Early Participant',
    role: 'Testnet & Node',
    period: '2022 - 2023',
    description: 'Early participant and testnet node/interaction contributor within the Aptos L1 ecosystem.',
    achievements: ['Testnet Node Validator', 'Ecosystem Contributor'],
    techStack: ['Aptos', 'Testnet Node', 'L1']
  },
  {
    id: 'berachain',
    title: 'Berachain Ecosystem & Testnet',
    role: 'Testnet Explorer',
    period: '2024',
    description: 'Active contributor testing dApps, DEX swaps, and liquidity pools across the Berachain testnet phases.',
    achievements: ['dApp & DEX Swap Testing', 'Liquidity Provisioning'],
    techStack: ['Berachain', 'Testnet', 'DeFi']
  },
  {
    id: 'monad',
    title: 'Monad Testnet Early Explorer',
    role: 'Testnet Explorer',
    period: '2024',
    description: 'Executing high-frequency contract interactions and testing ecosystem tools on Monad testnet.',
    achievements: ['Smart Contract Interactions', 'Ecosystem Tooling'],
    techStack: ['Monad', 'EVM', 'Testnet']
  },
  {
    id: 'canto',
    title: 'Canto Network',
    role: 'Mainnet Interaction',
    period: '2023',
    description: 'Active participant in Canto L1 ecosystem, interacting with Free Public Infrastructure (FPI) DeFi primitives.',
    achievements: ['FPI DeFi Interaction', 'Liquidity Pools'],
    techStack: ['Canto', 'DeFi', 'FPI']
  },
  {
    id: 'canton',
    title: 'Canton Network',
    role: 'Node Validator',
    period: '2024 - Present',
    description: 'Operating and maintaining a high-availability node validator on the Canton Network, ensuring network consensus, security, and uptime.',
    achievements: ['High Availability Maintenance', 'Consensus Validation'],
    techStack: ['Node Validator', 'Consensus', 'Infrastructure']
  }
];
