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
