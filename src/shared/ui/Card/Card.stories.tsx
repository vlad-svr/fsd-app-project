import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './Card'
import { Text } from '../Text'

const meta = {
  title: 'Shared/Card',
  component: Card
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    children: <Text title="test" text="text text" />
  }
}
