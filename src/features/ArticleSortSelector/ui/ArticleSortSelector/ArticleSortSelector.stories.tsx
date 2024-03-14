import type { Meta, StoryObj } from '@storybook/react'

import { ArticleSortField } from '@/entities/Article'
import { ArticleSortSelector } from './ArticleSortSelector'
import { fn } from '@storybook/test'

const meta = {
  title: 'Entities/Article/ArticleSortSelector',
  component: ArticleSortSelector
} satisfies Meta<typeof ArticleSortSelector>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    sort: ArticleSortField.CREATED,
    order: 'asc',
    onChangeOrder: fn(),
    onChangeSort: fn()
  }
}
