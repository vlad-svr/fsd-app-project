import { lazy } from 'react'

export const ProfilePageAsync = lazy(async () => await new Promise((resolve) => {
  // @ts-expect-error  It's a temporary change for development mode
  setTimeout(() => { resolve(import('./ProfilePage')) }, 1500)
}))
