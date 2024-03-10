import type { Meta, StoryObj } from '@storybook/react'

import { ThemeSwitcher } from './ThemeSwitcher'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Theme } from '@/shared/constants/theme'

const meta = {
  title: 'Widgets/ThemeSwitcher',
  component: ThemeSwitcher
} satisfies Meta<typeof ThemeSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
}
