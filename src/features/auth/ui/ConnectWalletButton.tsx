import { Button } from '~/shared/ui'
import { WalletIcon } from '~/shared/ui'

export const ConnectWalletButton = () => (
  <Button
    variant='outline'
    class='h-[46px] w-full gap-2 rounded-[6px] border-slate-300 text-[14px] font-medium text-slate-900 hover:bg-slate-50'
  >
    <WalletIcon size={16} />
    Connect Wallet
  </Button>
)
