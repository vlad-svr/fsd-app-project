import type { Meta, StoryObj } from '@storybook/react'

import { EditableProfileCard } from './EditableProfileCard'

const meta = {
  title: 'Features/editableProfileCard/EditableProfileCard',
  component: EditableProfileCard
} satisfies Meta<typeof EditableProfileCard>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    id: ''
  }
}
