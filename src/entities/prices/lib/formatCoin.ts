import type { CoinMeta } from '../model/coins'
import type { CoinPrice } from '../model/prices'

export interface Coin {
  id: string
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

function formatUsd(value: number): string {
  if (value >= 1_000_000_000) {
    return `$${(value / 1_000_000_000).toFixed(2)}B`
  }
  if (value >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(2)}M`
  }
  if (value >= 1) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(
      value,
    )
  }
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 6 }).format(value)
}

function formatChange(change: number): string {
  const sign = change >= 0 ? '+' : ''
  return `${sign}${change.toFixed(2)}%`
}

function formatTimestamp(unix: number): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date(unix * 1000))
}

export function formatCoin(meta: CoinMeta, price: CoinPrice): Coin {
  const change = price.usd_24h_change
  return {
    id: meta.id,
    name: meta.name,
    symbol: meta.symbol,
    icon: meta.icon,
    price: formatUsd(price.usd),
    change: formatChange(change),
    positive: change >= 0,
    marketCap: formatUsd(price.usd_market_cap),
    volume: formatUsd(price.usd_24h_vol),
    lastUpdated: formatTimestamp(price.last_updated_at),
  }
}
