import { screen } from '@testing-library/react'
import { userEvent } from '@storybook/testing-library'
import { renderWithProviders } from 'shared/lib/tests/renderWithProviders'
import { Counter } from './Counter'

const initialState = {
  counter: { value: 10 }
}

describe(
  'Counter', () => {
    test('should be rendered', () => {
      renderWithProviders(<Counter />)

      expect(screen.getByTestId('container')).toBeInTheDocument()
    })

    test('check the value from store', () => {
      renderWithProviders(<Counter />, {
        initialState
      })

      expect(screen.getByTestId('value-title')).toHaveTextContent('10')
    })

    test('should increment on the button click', async () => {
      renderWithProviders(<Counter />, {
        initialState
      })

      await userEvent.click(screen.getByTestId('increment-btn'))

      expect(screen.getByTestId('value-title')).toHaveTextContent('11')
    })

    test('should decrement on the button click', async () => {
      renderWithProviders(<Counter />, {
        initialState
      })

      await userEvent.click(screen.getByTestId('decrement-btn'))

      expect(screen.getByTestId('value-title')).toHaveTextContent('9')
    })
  }
)
