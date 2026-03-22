import { createMemo, createResource, For, Match, Switch } from 'solid-js'

import { COIN_IDS, COINS, CoinPriceCard, fetchPrices, formatCoin } from '~/entities/prices'
import { DashboardHeader } from '~/widgets/dashboard-header'

export const HomePage = () => {
  const [pricesMap] = createResource(() => fetchPrices(COIN_IDS))

  const coins = createMemo(() => {
    const data = pricesMap()
    if (!data) return []
    return COINS.flatMap((meta) => {
      const price = data[meta.id]
      return price ? [formatCoin(meta, price)] : []
    })
  })

  return (
    <div class='min-h-screen bg-page'>
      <DashboardHeader />
      <main class='px-8 py-8'>
        <div class='mb-6 flex flex-col gap-1'>
          <h1 class='text-[28px] font-semibold leading-[42px] text-foreground'>Cryptocurrency Prices</h1>
          <p class='text-sm leading-[21px] text-muted-foreground'>
            Real-time market prices. Hover over any card for detailed information.
          </p>
        </div>

        <Switch>
          <Match when={pricesMap.loading}>
            <div class='grid grid-cols-1 gap-6 sm:grid-cols-2'>
              <For each={Array(9).fill(null)}>
                {() => <div class='h-[152px] animate-pulse rounded-xl bg-card shadow-surface' />}
              </For>
            </div>
          </Match>

          <Match when={pricesMap.error}>
            <div class='flex flex-col items-center gap-2 py-16 text-center'>
              <p class='text-base font-semibold text-destructive'>Failed to load prices</p>
              <p class='text-sm text-muted-foreground'>{String(pricesMap.error)}</p>
            </div>
          </Match>

          <Match when={pricesMap()}>
            <div class='grid grid-cols-1 gap-6 sm:grid-cols-2'>
              <For each={coins()}>{(coin) => <CoinPriceCard coin={coin} />}</For>
            </div>
          </Match>
        </Switch>
      </main>
    </div>
  )
}
