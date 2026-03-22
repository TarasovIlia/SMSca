export interface MockCoin {
  name: string
  symbol: string
  icon: string
  price: string
  change: string
  positive: boolean
  marketCap: string
  volume: string
  lastUpdated: string
}

export const MOCK_COINS: MockCoin[] = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    icon: '₿',
    price: '$67,187.34',
    change: '+3.64%',
    positive: true,
    marketCap: '$1,317.80B',
    volume: '$31.26B',
    lastUpdated: 'Mar 22, 12:45 PM',
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    icon: 'Ξ',
    price: '$3,542.78',
    change: '+2.87%',
    positive: true,
    marketCap: '$425.63B',
    volume: '$14.82B',
    lastUpdated: 'Mar 22, 12:45 PM',
  },
  {
    name: 'Solana',
    symbol: 'SOL',
    icon: '◎',
    price: '$142.56',
    change: '-1.23%',
    positive: false,
    marketCap: '$63.14B',
    volume: '$3.47B',
    lastUpdated: 'Mar 22, 12:45 PM',
  },
  {
    name: 'Cardano',
    symbol: 'ADA',
    icon: '₳',
    price: '$0.68',
    change: '+4.12%',
    positive: true,
    marketCap: '$24.18B',
    volume: '$0.98B',
    lastUpdated: 'Mar 22, 12:45 PM',
  },
  {
    name: 'Polkadot',
    symbol: 'DOT',
    icon: '●',
    price: '$9.45',
    change: '-0.56%',
    positive: false,
    marketCap: '$13.27B',
    volume: '$0.54B',
    lastUpdated: 'Mar 22, 12:45 PM',
  },
  {
    name: 'Chainlink',
    symbol: 'LINK',
    icon: '⬡',
    price: '$18.92',
    change: '+5.23%',
    positive: true,
    marketCap: '$11.08B',
    volume: '$0.73B',
    lastUpdated: 'Mar 22, 12:45 PM',
  },
  {
    name: 'Avalanche',
    symbol: 'AVAX',
    icon: '▲',
    price: '$52.34',
    change: '+1.98%',
    positive: true,
    marketCap: '$21.56B',
    volume: '$1.12B',
    lastUpdated: 'Mar 22, 12:45 PM',
  },
  {
    name: 'Polygon',
    symbol: 'MATIC',
    icon: '⬟',
    price: '$1.12',
    change: '-2.34%',
    positive: false,
    marketCap: '$10.43B',
    volume: '$0.61B',
    lastUpdated: 'Mar 22, 12:45 PM',
  },
  {
    name: 'Ripple',
    symbol: 'XRP',
    icon: '✕',
    price: '$0.62',
    change: '+0.87%',
    positive: true,
    marketCap: '$34.72B',
    volume: '$1.89B',
    lastUpdated: 'Mar 22, 12:45 PM',
  },
]
