import type { Meta, StoryObj } from '@storybook/react'

import { LanguageSwitcher } from './LanguageSwitcher'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Theme } from '@/shared/constants/theme'

const meta = {
  title: 'Widgets/LanguageSwitcher',
  component: LanguageSwitcher
} satisfies Meta<typeof LanguageSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}

export const Short: Story = {
  args: { short: true }
}

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
}
