import type { Meta, StoryObj } from '@storybook/react'

import { CommentCard } from './CommentCard'

const meta = {
  title: 'Entities/CommentCard',
  component: CommentCard
} satisfies Meta<typeof CommentCard>

export default meta
type Story = StoryObj<typeof meta>

const comment = {
  id: '1',
  text: 'Comment text',
  user: {
    id: '1',
    username: 'Vlad'
  }
}

export const Primary: Story = {
  args:
        {
          comment
        }
}
