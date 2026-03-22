export interface CoinMeta {
  id: string
  name: string
  symbol: string
  icon: string
}

export const COINS: CoinMeta[] = [
  { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', icon: '₿' },
  { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', icon: 'Ξ' },
  { id: 'solana', name: 'Solana', symbol: 'SOL', icon: '◎' },
  { id: 'cardano', name: 'Cardano', symbol: 'ADA', icon: '₳' },
  { id: 'polkadot', name: 'Polkadot', symbol: 'DOT', icon: '●' },
  { id: 'chainlink', name: 'Chainlink', symbol: 'LINK', icon: '⬡' },
  { id: 'avalanche-2', name: 'Avalanche', symbol: 'AVAX', icon: '▲' },
  { id: 'ripple', name: 'Ripple', symbol: 'XRP', icon: '✕' },
]

export const COIN_IDS = COINS.map((c) => c.id)
