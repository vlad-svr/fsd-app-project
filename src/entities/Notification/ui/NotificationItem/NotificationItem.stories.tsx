import type { Meta, StoryObj } from '@storybook/react'

import { NotificationItem } from './NotificationItem'

const meta = {
  title: 'Entities/Notification/NotificationItem',
  component: NotificationItem
} satisfies Meta<typeof NotificationItem>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: { item: { id: '', title: '', description: '' } }
}
