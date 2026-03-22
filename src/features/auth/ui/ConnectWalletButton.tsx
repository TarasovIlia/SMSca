import { Button } from '~/shared/ui'
import { WalletIcon } from '~/shared/ui'

export const ConnectWalletButton = () => (
  <Button variant='outline'>
    <WalletIcon size={16} />
    Connect Wallet
  </Button>
)
