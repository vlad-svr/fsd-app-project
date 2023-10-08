import type { Meta, StoryObj } from '@storybook/react'

import { CommentList } from './CommentList'

const meta = {
  title: 'Entities/CommentList',
  component: CommentList
} satisfies Meta<typeof CommentList>

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
          comments: [comment, comment]
        }
}
