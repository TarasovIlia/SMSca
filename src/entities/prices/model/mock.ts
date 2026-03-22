export interface MockCoin {
  name: string
  symbol: string
  icon: string
  price: string
  change: string
  positive: boolean
}

export const MOCK_COINS: MockCoin[] = [
  { name: 'Bitcoin', symbol: 'BTC', icon: '₿', price: '$67,187.34', change: '+3.64%', positive: true },
  { name: 'Ethereum', symbol: 'ETH', icon: 'Ξ', price: '$3,542.78', change: '+2.87%', positive: true },
  { name: 'Solana', symbol: 'SOL', icon: '◎', price: '$142.56', change: '-1.23%', positive: false },
  { name: 'Cardano', symbol: 'ADA', icon: '₳', price: '$0.68', change: '+4.12%', positive: true },
  { name: 'Polkadot', symbol: 'DOT', icon: '●', price: '$9.45', change: '-0.56%', positive: false },
  { name: 'Chainlink', symbol: 'LINK', icon: '⬡', price: '$18.92', change: '+5.23%', positive: true },
  { name: 'Avalanche', symbol: 'AVAX', icon: '▲', price: '$52.34', change: '+1.98%', positive: true },
  { name: 'Polygon', symbol: 'MATIC', icon: '⬟', price: '$1.12', change: '-2.34%', positive: false },
  { name: 'Ripple', symbol: 'XRP', icon: '✕', price: '$0.62', change: '+0.87%', positive: true },
]
