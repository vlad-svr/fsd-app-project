import type { Meta, StoryObj } from '@storybook/react'

import ArticleEditPage from './ArticleEditPage'

const meta = {
  title: 'Pages/ArticleEditPage',
  component: ArticleEditPage
} satisfies Meta<typeof ArticleEditPage>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {}
