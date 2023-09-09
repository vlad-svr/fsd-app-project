import { render, screen } from '@testing-library/react'
import { Button, ButtonTheme } from './Button'

describe(
  'Button', () => {
    test('check if the button exists', () => {
      render(<Button>TEST</Button>)
      expect(screen.getByText('TEST')).toBeInTheDocument()
    })

    test('check if the button has pure theme', () => {
      render(<Button theme={ButtonTheme.PURE}>TEST</Button>)
      expect(screen.getByText('TEST')).toHaveClass('clear')
    })
  }
)
