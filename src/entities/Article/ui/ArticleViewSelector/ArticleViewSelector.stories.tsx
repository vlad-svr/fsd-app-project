import type { Meta, StoryObj } from '@storybook/react'

import { ArticleViewSelector } from './ArticleViewSelector'
import { ArticleView } from '../../model/types/article'

const meta = {
  title: 'Entities/Article/ArticleViewSelector',
  component: ArticleViewSelector
} satisfies Meta<typeof ArticleViewSelector>

export default meta
type Story = StoryObj<typeof meta>

export const SmallSelected: Story = {
  args: {
    view: ArticleView.SMALL
  }
}

export const BigSelected: Story = {
  args: {
    view: ArticleView.BIG
  }
}
