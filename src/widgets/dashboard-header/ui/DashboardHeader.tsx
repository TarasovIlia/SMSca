import type { Component } from 'solid-js'

import { Avatar, AvatarFallback, BellIcon, SettingsIcon } from '~/shared/ui'

export const DashboardHeader: Component = () => (
  <header class='sticky top-0 z-10 flex h-[84px] w-full items-center border-b border-border bg-card px-8'>
    <div class='flex w-full items-center justify-between'>
      <div class='flex items-center gap-4'>
        <Avatar class='size-12 rounded-lg'>
          <AvatarFallback class='rounded-lg text-base font-normal'>CN</AvatarFallback>
        </Avatar>
        <div class='flex flex-col'>
          <span class='text-xl font-semibold leading-[30px] text-foreground'>Crypto Wallet Dashboard</span>
          <span class='text-sm leading-[21px] text-muted-foreground'>Welcome back, Crypto Ninja</span>
        </div>
      </div>
      <div class='flex items-center gap-4'>
        <button
          type='button'
          class='flex size-9 items-center justify-center rounded-[10px] text-muted-foreground transition-colors hover:bg-accent hover:text-foreground'
        >
          <BellIcon />
        </button>
        <button
          type='button'
          class='flex size-9 items-center justify-center rounded-[10px] text-muted-foreground transition-colors hover:bg-accent hover:text-foreground'
        >
          <SettingsIcon />
        </button>
      </div>
    </div>
  </header>
)
