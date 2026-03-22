import { createSignal } from 'solid-js'

export interface CoinPrice {
  usd: number
  usd_market_cap: number
  usd_24h_vol: number
  usd_24h_change: number
  last_updated_at: number
}

export type PricesMap = Record<string, CoinPrice>

const [prices, setPrices] = createSignal<PricesMap | null>(null)

export { prices, setPrices }
