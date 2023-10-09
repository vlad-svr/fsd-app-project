import type { Meta, StoryObj } from '@storybook/react'

import { CommentList } from './CommentList'

const meta = {
  title: 'Entities/Comment/CommentList',
  component: CommentList
} satisfies Meta<typeof CommentList>

export default meta
type Story = StoryObj<typeof meta>

const comment = {
  id: '1',
  text: 'Hi man!',
  user: {
    id: '1',
    username: 'Vlad'
  }
}

const comment2 = {
  id: '2',
  text: 'Hi there!',
  user: {
    id: '2',
    username: 'Alex'
  }
}

export const Primary: Story = {
  args: {
    comments: [comment, comment2]
  }
}

export const Loading: Story = {
  args: {
    comments: [],
    isLoading: true
  }
}
