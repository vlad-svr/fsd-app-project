import { type EntityState } from '@reduxjs/toolkit'
import { type Article, type ArticleType, type ArticleView, type ArticleSortField } from '@/entities/Article'
import { type SortOrder } from '@/shared/types/sortOrder'

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean
  error?: string

  page: number
  hasMore: boolean
  limit?: number

  // filters
  view: ArticleView
  order: SortOrder
  sort: ArticleSortField
  type: ArticleType
  search: string

  _init?: boolean
}
