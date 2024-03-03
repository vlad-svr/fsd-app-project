import type { Meta, StoryObj } from '@storybook/react'
import AvatarImg from '@/shared/assets/tests/avatar.jpg'

import { Avatar } from './Avatar'

const meta = {
  title: 'Shared/Avatar',
  component: Avatar,
  args: {
    src: AvatarImg
  }
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    size: 150
  }
}

export const Small: Story = {
  args: {
    size: 50
  }
}
