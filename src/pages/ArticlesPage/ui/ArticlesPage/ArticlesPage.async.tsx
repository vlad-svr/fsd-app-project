import { lazy } from 'react'

export const ArticlesPageAsync = lazy(async () => await new Promise((resolve) => {
  // @ts-expect-error Temporary
  setTimeout(() => { resolve(import('./ArticlesPage')) }, 1500)
}))
