import type { Meta, StoryObj } from '@storybook/react'

import { NotFoundPage } from './NotFoundPage'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Theme } from '@/shared/constants/theme'

const meta = {
  title: 'Pages/NotFoundPage',
  component: NotFoundPage
} satisfies Meta<typeof NotFoundPage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
}
