import { type ReactNode } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import i18nForTests from '@/shared/config/i18n/i18nForTests'
import { type StateSchema, StoreProvider } from '@/app/providers/StoreProvider'
import type { ReducersMapObject } from '@reduxjs/toolkit'
// eslint-disable-next-line
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import { Theme } from '@/shared/constants/theme'

interface RenderWithProvidersOptions {
  route?: string
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
  theme?: Theme
}

interface TestProviderProps {
  children: ReactNode
  options?: RenderWithProvidersOptions
}
export function TestProvider ({ children, options = {} }: TestProviderProps) {
  const {
    route = '/',
    initialState,
    asyncReducers,
    theme = Theme.LIGHT
  } = options

  return <MemoryRouter initialEntries={[route]}>
      <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
          <I18nextProvider i18n={i18nForTests}>
              <ThemeProvider initialTheme={theme}>
                  <div className={`app ${theme}`}>{children}</div>
              </ThemeProvider>
          </I18nextProvider>
      </StoreProvider>
  </MemoryRouter>
}

function renderWithProviders (component: ReactNode, options: RenderWithProvidersOptions = {}) {
  return render(<TestProvider options={options}>{component}</TestProvider>)
}

export { renderWithProviders }
