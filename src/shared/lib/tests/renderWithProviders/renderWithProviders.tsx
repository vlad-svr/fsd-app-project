import { type ReactNode } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import i18nForTests from 'shared/config/i18n/i18nForTests'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { type DeepPartial } from '@reduxjs/toolkit'

interface RenderWithProvidersOptions {
  route?: string
  initialState?: DeepPartial<StateSchema>
}
function renderWithProviders (component: ReactNode, options: RenderWithProvidersOptions = {}) {
  const { route = '/', initialState } = options

  return render(
      <StoreProvider initialState={initialState}>
          <MemoryRouter initialEntries={[route]}>
              <I18nextProvider i18n={i18nForTests}>
                  {component}
              </I18nextProvider>
          </MemoryRouter>
      </StoreProvider>
  )
}

export { renderWithProviders }
