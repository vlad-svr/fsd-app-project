import { lazy } from 'react'

const AboutPageAsync = lazy(async () => await new Promise((resolve) => {
  setTimeout(() => {
    // @ts-expect-error  It's a temporary change for development mode
    resolve(import('./AboutPage'))
  }, 1500)
}))

export { AboutPageAsync }
