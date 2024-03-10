import type { Meta, StoryObj } from '@storybook/react'

import AboutPage from './AboutPage'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Theme } from '@/shared/constants/theme'

const meta = {
  title: 'Pages/AboutPage',
  component: AboutPage
} satisfies Meta<typeof AboutPage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
}
