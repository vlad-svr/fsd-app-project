import type { Meta, StoryObj } from '@storybook/react'

import ArticleRating from './ArticleRating'

const meta = {
  title: 'Features/ArticleRating',
  component: ArticleRating
} satisfies Meta<typeof ArticleRating>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: { articleId: '1' },
  parameters: {
    mockData: [
      {
        url: `${_API_BASE_URL_}/article-ratings?userId=1&articleId=1`,
        method: 'GET',
        status: 200,
        response: [
          { rate: 4 }
        ]
      }
    ]
  }
}

export const WithoutRate: Story = { args: { articleId: '1' } }
