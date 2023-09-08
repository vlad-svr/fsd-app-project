import { lazy } from 'react'

const AboutPageAsync = lazy(async () => await new Promise((resolve) => {
  setTimeout(() => {
    // @ts-expect-error
    resolve(import('./AboutPage'))
  }, 1500)
}))

export { AboutPageAsync }
