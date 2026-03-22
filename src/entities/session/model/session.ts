import { createSignal } from 'solid-js'

export interface Session {
  token: string
  userId: string
}

const [session, setSession] = createSignal<Session | null>(null)

const isAuthenticated = () => session() !== null

export { session, setSession, isAuthenticated }
