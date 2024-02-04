import type { Meta, StoryObj } from '@storybook/react'

import { ArticleSortField } from '../../model/consts/consts'
import { ArticleSortSelector } from './ArticleSortSelector'

const meta = {
  title: 'Entities/Article/ArticleSortSelector',
  component: ArticleSortSelector
} satisfies Meta<typeof ArticleSortSelector>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    sort: ArticleSortField.CREATED,
    order: 'asc'
  }
}
