import type { Meta, StoryObj } from '@storybook/react'

import { ArticleType } from '../../model/consts/consts'
import { ArticleTypeTabs } from './ArticleTypeTabs'

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
