import { createSignal } from 'solid-js'

import { Button, EyeIcon, EyeOffIcon, TextField, TextFieldInput, TextFieldLabel } from '~/shared/ui'

export const LoginForm = () => {
  const [showPassword, setShowPassword] = createSignal(false)

  return (
    <div class='flex flex-col gap-4'>
      <div class='flex flex-col gap-3'>
        <TextField class='flex flex-col gap-1.5'>
          <TextFieldLabel class='text-[14px] font-medium'>Email or Wallet Address</TextFieldLabel>
          <TextFieldInput type='text' placeholder='you@example.com or 0x...' class='h-9 rounded-[6px] text-[14px]' />
        </TextField>

        <TextField class='flex flex-col gap-1.5'>
          <TextFieldLabel class='text-[14px] font-medium'>Password</TextFieldLabel>
          <div class='relative'>
            <TextFieldInput
              type={showPassword() ? 'text' : 'password'}
              placeholder='Enter your password'
              class='h-9 rounded-[6px] pr-9 text-[14px]'
            />
            <button
              type='button'
              onClick={() => setShowPassword((v) => !v)}
              class='absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground'
              aria-label={showPassword() ? 'Hide password' : 'Show password'}
            >
              {showPassword() ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          </div>
        </TextField>
      </div>

      <div class='flex justify-end'>
        <button>Forgot password?</button>
      </div>

      <Button variant='default'>Sign In</Button>
    </div>
  )
}
