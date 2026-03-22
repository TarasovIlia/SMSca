import { For } from 'solid-js'

import { CoinPriceCard, MOCK_COINS } from '~/entities/prices'
import { DashboardHeader } from '~/widgets/dashboard-header'

export const HomePage = () => (
  <div class='min-h-screen bg-page'>
    <DashboardHeader />
    <main class='px-8 py-8'>
      <div class='mb-6 flex flex-col gap-1'>
        <h1 class='text-[28px] font-semibold leading-[42px] text-foreground'>Cryptocurrency Prices</h1>
        <p class='text-sm leading-[21px] text-muted-foreground'>
          Real-time market prices. Hover over any card for detailed information.
        </p>
      </div>
      <div class='grid grid-cols-1 gap-6 sm:grid-cols-2'>
        <For each={MOCK_COINS}>{(coin) => <CoinPriceCard coin={coin} />}</For>
      </div>
    </main>
  </div>
)
