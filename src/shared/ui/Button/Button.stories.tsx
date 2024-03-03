import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonSize, ButtonTheme } from './Button'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'

const meta = {
  title: 'Shared/Button',
  component: Button
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Text'
  }
}

export const Pure: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.PURE
  }
}

export const PureInverted: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.PURE_INVERTED
  }
}

export const Background: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND
  }
}

export const BackgroundInverted: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED
  }
}

export const Square: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true
  }
}

export const SquareL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.L,
    square: true
  }
}

export const SquareXL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.XL,
    square: true
  }
}

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE
  }
}

export const OutlineL: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L
  }
}

export const OutlineXL: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL
  }
}

export const OutlineDark: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const Disabled: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    disabled: true
  }
}
