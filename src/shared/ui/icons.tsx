export const WalletIcon = (props: { size?: number }) => (
  <svg
    width={props.size ?? 20}
    height={props.size ?? 20}
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='2' y='5' width='16' height='12' rx='2' stroke='currentColor' stroke-width='1.5' />
    <path d='M2 8h16' stroke='currentColor' stroke-width='1.5' />
    <path d='M6 3l8 0' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' />
    <rect x='13' y='11' width='3' height='2' rx='0.5' fill='currentColor' />
  </svg>
)

export const EyeIcon = () => (
  <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5z'
      stroke='currentColor'
      stroke-width='1.25'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <circle cx='8' cy='8' r='2' stroke='currentColor' stroke-width='1.25' />
  </svg>
)

export const EyeOffIcon = () => (
  <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M2 2l12 12M6.5 6.6A2 2 0 0 0 10 9.5M5.2 5.2C3.4 6.2 2 8 2 8s2.5 5 6 5a6.5 6.5 0 0 0 3.3-.9M8 3c3.5 0 6 5 6 5a10.6 10.6 0 0 1-1.6 2.3'
      stroke='currentColor'
      stroke-width='1.25'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </svg>
)
