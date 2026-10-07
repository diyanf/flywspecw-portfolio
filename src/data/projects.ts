export interface Project {
  id: string;
  title: string;
  category: 'Testnet' | 'Presale' | 'Ecosystem' | 'Mainnet';
  description: string;
  tags: string[];
}

export const historyProjects: Project[] = [
  {
    id: 'sui-presale',
    title: 'Sui Network Early Presale',
    category: 'Presale',
    description: 'Early participant in the Sui Network ecosystem presale and community recognition program.',
    tags: ['Sui', 'Move Language', 'Presale'],
  },
  {
    id: 'aptos-early',
    title: 'Aptos Ecosystem Early Participant',
    category: 'Ecosystem',
    description: 'Early participant and testnet node/interaction contributor within the Aptos L1 ecosystem.',
    tags: ['Aptos', 'Move EVM', 'Mainnet'],
  },
  {
    id: 'berachain-testnet',
    title: 'Berachain Ecosystem & Testnet',
    category: 'Testnet',
    description: 'Active contributor testing dApps, DEX swaps, and liquidity pools across the Berachain testnet phases.',
    tags: ['Berachain', 'Proof of Liquidity', 'EVM'],
  },
  {
    id: 'monad-testnet',
    title: 'Monad Testnet Early Explorer',
    category: 'Testnet',
    description: 'Executing high-frequency contract interactions and testing ecosystem tools on Monad testnet.',
    tags: ['Monad', 'High Throughput EVM', 'Testnet'],
  },
  {
    id: 'canto-ecosystem',
    title: 'Canto Network Active Explorer',
    category: 'Mainnet',
    description: 'Active participant in Canto L1 ecosystem, interacting with Free Public Infrastructure (FPI) DeFi primitives.',
    tags: ['Canto', 'Cosmos EVM', 'DeFi'],
  },
  {
    id: 'canton-network',
    title: 'Canton Network Testnet Participant',
    category: 'Testnet',
    description: 'Exploring Privacy-enabled Institutional Interoperability network on Canton Network ecosystem.',
    tags: ['Canton Network', 'Privacy', 'Institutional Web3'],
  },
  {
    id: 'solana-ecosystem',
    title: 'Active Solana Ecosystem Contributor',
    category: 'Ecosystem',
    description: 'Active user across Solana DeFi protocols, NFT marketplaces, and high-speed dApp interactions.',
    tags: ['Solana', 'SPL Tokens', 'High Speed L1'],
  },
];
