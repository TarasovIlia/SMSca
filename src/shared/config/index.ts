function requireEnv(key: keyof ImportMetaEnv): string {
  const value = import.meta.env[key]
  if (!value) throw new Error(`Missing env variable: ${key}`)
  return value
}

export const config = {
  coingeckoApiKey: requireEnv('VITE_COINGECKO_API_KEY'),
}
