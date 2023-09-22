import type { Meta, StoryObj } from '@storybook/react'

import { Select } from './Select'

const meta = {
  title: 'Shared/Select',
  component: Select
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Select value',
    options: [
      { value: '123', content: 'First option' },
      { value: '1234', content: 'Second option' }
    ]
  }
}
