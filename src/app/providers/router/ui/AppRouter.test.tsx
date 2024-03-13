import { screen } from '@testing-library/react'
import AppRouter from './AppRouter'
import { UserRole } from '@/entities/User'
import { getRouteAbout, getRouteAdmin, getRouteProfile } from '@/shared/constants/router'
import { renderWithProviders } from '@/shared/lib/tests/renderWithProviders'

describe('app/router/AppRouter', () => {
  test('Page should be rendered', async () => {
    renderWithProviders(<AppRouter />, {
      route: getRouteAbout()
    })

    const page = await screen.findByTestId('AboutPage')
    expect(page).toBeInTheDocument()
  })

  test('Page is not found', async () => {
    renderWithProviders(<AppRouter />, {
      route: '/asfasfasfasf'
    })

    const page = await screen.findByTestId('NotFoundPage')
    expect(page).toBeInTheDocument()
  })

  test('Redirecting an unauthorized user to the home page', async () => {
    renderWithProviders(<AppRouter />, {
      route: getRouteProfile('1')
    })

    const page = await screen.findByTestId('MainPage')
    expect(page).toBeInTheDocument()
  })

  test('Access to a closed page for an authorized user', async () => {
    renderWithProviders(<AppRouter />, {
      route: getRouteProfile('1'),
      initialState: {
        user: { _initialized: true, authData: {} }
      }
    })

    const page = await screen.findByTestId('ProfilePage')
    expect(page).toBeInTheDocument()
  })

  test('Access denied (missing role)', async () => {
    renderWithProviders(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: { _initialized: true, authData: {} }
      }
    })

    const page = await screen.findByTestId('ForbiddenPage')
    expect(page).toBeInTheDocument()
  })

  test('Access allowed (role present)', async () => {
    renderWithProviders(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: { _initialized: true, authData: { roles: [UserRole.ADMIN] } }
      }
    })

    const page = await screen.findByTestId('AdminPanelPage')
    expect(page).toBeInTheDocument()
  })
})
