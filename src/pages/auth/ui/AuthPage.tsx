import { ConnectWalletButton, LoginForm } from '~/features/auth'
import { WalletIcon } from '~/shared/ui'

export const AuthPage = () => (
  <div
    class='flex min-h-screen w-full items-center justify-center'
    style={{ background: 'linear-gradient(143.81deg, #f8fafc 0%, #f1f5f9 100%)' }}
  >
    <div class='w-[400px] rounded-[6px] border border-slate-200 bg-white p-6 shadow-sm'>
      <div class='mb-6 flex flex-col gap-2'>
        <div class='flex items-center gap-2 text-slate-900'>
          <WalletIcon />
          <h1 class='text-[20px] font-semibold leading-7'>Wallet Login</h1>
        </div>
        <p class='text-[14px] leading-5 text-slate-500'>
          Sign in to access your crypto wallet and manage your digital assets securely.
        </p>
      </div>

      <LoginForm />

      <div class='my-5 flex items-center gap-3'>
        <div class='h-px flex-1 bg-slate-200' />
        <span class='text-[12px] leading-5 text-slate-500'>OR</span>
        <div class='h-px flex-1 bg-slate-200' />
      </div>

      <ConnectWalletButton />

      <p class='mt-6 text-center text-[14px] text-slate-500'>
        {"Don't have an account? "}
        <button type='button' class='text-[16px] font-semibold text-slate-900 hover:underline'>
          Sign up
        </button>
      </p>
    </div>
  </div>
)
