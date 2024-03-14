import type { Meta, StoryObj } from '@storybook/react'

import { Sidebar } from './Sidebar'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { Theme } from '@/shared/constants/theme'

const meta = {
  title: 'Widgets/Sidebar',
  component: Sidebar,
  argTypes: {}
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  decorators: [
    StoreDecorator({
      user: { authData: {} }
    })
  ]
}

export const Dark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      user: { authData: {} }
    })
  ]
}

export const NoAuth: Story = {
  decorators: [
    StoreDecorator({
      user: {}
    })
  ]
}
