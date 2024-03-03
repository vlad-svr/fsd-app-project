import type { Meta, StoryObj } from '@storybook/react'

import { NotificationList } from './NotificationList'

const meta = {
  title: 'Shared/NotificationList',
  component: NotificationList
} satisfies Meta<typeof NotificationList>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
