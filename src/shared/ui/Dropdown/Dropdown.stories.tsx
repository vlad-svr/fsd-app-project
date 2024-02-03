import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../Button/Button'
import { Dropdown } from './Dropdown'

const meta = {
  title: 'Shared/Dropdown',
  component: Dropdown,
  argTypes: {
  }
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    trigger: <Button>Open</Button>,
    items: [
      {
        content: 'first'
      },
      {
        content: 'second'
      },
      {
        content: 'third'
      }
    ]
  }
}
