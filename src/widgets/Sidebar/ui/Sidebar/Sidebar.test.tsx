import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from '../../../Sidebar'
import { renderWithProviders } from '@/shared/lib/tests/renderWithProviders'

describe(
  'Sidebar', () => {
    test('Test render', () => {
      renderWithProviders(<Sidebar />)
      expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('Test collapsing', () => {
      renderWithProviders(<Sidebar />)
      const toggleButton = screen.getByTestId('sidebar-toggle')
      expect(screen.getByTestId('sidebar')).toBeInTheDocument()
      fireEvent.click(toggleButton)
      expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
  }
)
