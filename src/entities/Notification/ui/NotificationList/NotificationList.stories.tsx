import type { Meta, StoryObj } from '@storybook/react'

import { NotificationList } from './NotificationList'

const meta = {
  title: 'Entities/Notification/NotificationList',
  component: NotificationList
} satisfies Meta<typeof NotificationList>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  parameters: {
    mockData: [
      {
        url: `${_API_BASE_URL_}/notifications`,
        method: 'GET',
        status: 200,
        response: [
          {
            id: '1',
            title: 'Notification #1',
            description: 'Put you like and leave a comment below'
          },
          {
            id: '2',
            title: 'Notification #2',
            description: 'Put you like and leave a comment below'
          },
          {
            id: '3',
            title: 'Notification #3',
            description: 'Put you like and leave a comment below'
          }
        ]
      }
    ]
  }
}
