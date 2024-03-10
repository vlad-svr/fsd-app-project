import type { Meta, StoryObj } from '@storybook/react'

import { NavBar } from './NavBar'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'Widgets/NavBar',
  component: NavBar
} satisfies Meta<typeof NavBar>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const Authorized: Story = {
  decorators: [StoreDecorator({ user: { authData: {} } })]
}

export const AuthorizedDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({ user: { authData: {} } })]
}
