import type { Meta, StoryObj } from '@storybook/react'

import { ArticleRecommendationsList } from './ArticleRecommendationsList'
import { type Article } from '@/entities/Article'

const article: Article = {
  id: '1',
  img: '',
  createdAt: '',
  views: 123,
  user: { id: '1', username: '123' },
  blocks: [],
  type: [],
  title: '123',
  subtitle: 'asfsa'
}

const meta = {
  title: 'Features/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  parameters: {
    mockData: [
      {
        url: `${_API_BASE_URL_}/articles?_limit=3`,
        method: 'GET',
        status: 200,
        response: [
          { ...article, id: '1' },
          { ...article, id: '2' },
          { ...article, id: '3' }
        ]
      }
    ]
  }
} satisfies Meta<typeof ArticleRecommendationsList>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {}
