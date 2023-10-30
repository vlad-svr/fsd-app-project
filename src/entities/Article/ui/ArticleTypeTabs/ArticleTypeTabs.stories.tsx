import type { Meta, StoryObj } from '@storybook/react'

import { ArticleTypeTabs } from './ArticleTypeTabs'
import { ArticleType } from 'entities/Article'

const meta = {
  title: 'Entities/Article/ArticleTypeTabs',
  component: ArticleTypeTabs
} satisfies Meta<typeof ArticleTypeTabs>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    value: ArticleType.IT
  }
}
