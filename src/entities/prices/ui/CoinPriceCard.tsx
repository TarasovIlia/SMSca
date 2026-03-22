import type { Component } from 'solid-js'

import { cn } from '~/shared/lib'
import { TrendDownIcon, TrendUpIcon } from '~/shared/ui'
import { Card, CardContent } from '~/shared/ui/card'

import type { MockCoin } from '../model/mock'

interface CoinPriceCardProps {
  coin: MockCoin
}

export const CoinPriceCard: Component<CoinPriceCardProps> = (props) => (
  <Card class='flex flex-col gap-4 p-6'>
    <CardContent class='flex flex-col gap-4 p-0'>
      <div class='flex items-start justify-between'>
        <div class='flex items-center gap-3'>
          <div class='flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary'>
            <span class='text-xl font-semibold text-foreground'>{props.coin.icon}</span>
          </div>
          <div class='flex flex-col'>
            <span class='text-base font-semibold leading-6 text-foreground'>{props.coin.name}</span>
            <span class='text-xs leading-[18px] text-muted-foreground'>{props.coin.symbol}</span>
          </div>
        </div>
        <span class={cn('shrink-0', props.coin.positive ? 'text-success-foreground' : 'text-destructive')}>
          {props.coin.positive ? <TrendUpIcon /> : <TrendDownIcon />}
        </span>
      </div>

      <div class='flex flex-col gap-2'>
        <p class='text-[28px] font-semibold leading-[42px] text-foreground'>{props.coin.price}</p>
        <div class='flex items-center gap-2'>
          <span class={cn('text-sm font-medium', props.coin.positive ? 'text-success-foreground' : 'text-destructive')}>
            {props.coin.change}
          </span>
          <span class='text-xs text-muted-foreground'>24h</span>
        </div>
      </div>
    </CardContent>
  </Card>
)
