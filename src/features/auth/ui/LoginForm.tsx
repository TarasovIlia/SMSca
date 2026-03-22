import { createSignal } from 'solid-js'

import { Button, EyeIcon, EyeOffIcon, TextField, TextFieldInput, TextFieldLabel } from '~/shared/ui'

export const LoginForm = () => {
  const [showPassword, setShowPassword] = createSignal(false)

  return (
    <div class='flex flex-col gap-4'>
      <div class='flex flex-col gap-3'>
        <TextField class='flex flex-col gap-1.5'>
          <TextFieldLabel class='text-[14px] font-medium text-slate-900'>Email or Wallet Address</TextFieldLabel>
          <TextFieldInput
            type='text'
            placeholder='you@example.com or 0x...'
            class='h-9 rounded-[6px] border-slate-300 text-[14px] placeholder:text-slate-400'
          />
        </TextField>

        <TextField class='flex flex-col gap-1.5'>
          <TextFieldLabel class='text-[14px] font-medium text-slate-900'>Password</TextFieldLabel>
          <div class='relative'>
            <TextFieldInput
              type={showPassword() ? 'text' : 'password'}
              placeholder='Enter your password'
              class='h-9 rounded-[6px] border-slate-300 pr-9 text-[14px] placeholder:text-slate-400'
            />
            <button
              type='button'
              onClick={() => setShowPassword((v) => !v)}
              class='absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600'
              aria-label={showPassword() ? 'Hide password' : 'Show password'}
            >
              {showPassword() ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          </div>
        </TextField>
      </div>

      <div class='flex justify-end'>
        <button type='button' class='text-[14px] font-medium text-slate-900 hover:underline'>
          Forgot password?
        </button>
      </div>

      <Button
        variant='default'
        class='h-11 w-full rounded-[6px] bg-slate-900 text-[14px] font-medium text-white hover:bg-slate-800'
      >
        Sign In
      </Button>
    </div>
  )
}
