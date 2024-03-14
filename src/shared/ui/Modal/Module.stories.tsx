import type { Meta, StoryObj } from '@storybook/react'

import { Modal } from './Modal'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Theme } from '@/shared/constants/theme'

const meta = {
  title: 'Shared/Modal',
  component: Modal,
  argTypes: {}
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {
    isOpen: true,
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.'
  }
}

export const Dark: Story = {
  args: {
    isOpen: true,
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
