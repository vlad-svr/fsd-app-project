import { lazy } from 'react'

const MainPageAsync = lazy(async () => await new Promise((resolve) => {
  setTimeout(() => {
    // @ts-expect-error
    resolve(import('./MainPage'))
  }, 1500)
}))

export { MainPageAsync }
