import { config } from '~/shared/config'
import type { PricesMap } from '../model/prices'

export async function fetchPrices(coinIds: string[]): Promise<PricesMap> {
  const params = new URLSearchParams({
    ids: coinIds.join(','),
    vs_currencies: 'usd',
    include_market_cap: 'true',
    include_24hr_vol: 'true',
    include_24hr_change: 'true',
    include_last_updated_at: 'true',
  })

  const res = await fetch(`https://api.coingecko.com/api/v3/simple/price?${params}`, {
    headers: { 'x-cg-demo-api-key': config.coingeckoApiKey },
  })

  if (!res.ok) throw new Error(`CoinGecko error: ${res.status}`)

  return res.json() as Promise<PricesMap>
}
