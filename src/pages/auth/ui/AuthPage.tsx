import { ConnectWalletButton, LoginForm } from '~/features/auth'
import { WalletIcon } from '~/shared/ui'

export const AuthPage = () => (
  <div class='flex min-h-screen w-full items-center justify-center bg-page'>
    <div class='w-[400px] rounded-[6px] border border-border bg-card p-6 shadow-surface'>
      <div class='mb-6 flex flex-col gap-2'>
        <div class='flex items-center gap-2 text-foreground'>
          <WalletIcon />
          <h1 class='text-[20px] font-semibold leading-7'>Wallet Login</h1>
        </div>
        <p class='text-[14px] leading-5 text-muted-foreground'>
          Sign in to access your crypto wallet and manage your digital assets securely.
        </p>
      </div>

      <LoginForm />

      <div class='my-5 flex items-center gap-3'>
        <div class='h-px flex-1 bg-border' />
        <span class='text-[12px] leading-5 text-muted-foreground'>OR</span>
        <div class='h-px flex-1 bg-border' />
      </div>

      <ConnectWalletButton />

      <p class='mt-6 text-center text-[14px] text-muted-foreground'>
        {"Don't have an account? "}
        <button type='button' class='text-[16px] font-semibold text-foreground hover:underline'>
          Sign up
        </button>
      </p>
    </div>
  </div>
)
