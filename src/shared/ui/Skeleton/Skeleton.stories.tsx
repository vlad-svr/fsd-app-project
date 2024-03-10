import type { Meta, StoryObj } from '@storybook/react'

import { Skeleton } from '../Skeleton/Skeleton'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Theme } from '@/shared/constants/theme'

const meta = {
  title: 'Shared/Skeleton',
  component: Skeleton
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    width: '100%',
    height: 200
  }
}

export const Circle: Story = {
  args: {
    border: '50%',
    width: 100,
    height: 100
  }
}

export const NormalDark: Story = {
  args: {
    width: '100%',
    height: 200
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const CircleDark: Story = {
  args: {
    border: '50%',
    width: 100,
    height: 100
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
