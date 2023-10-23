import { type EntityState } from '@reduxjs/toolkit'
import { type Article, type ArticleView } from 'entities/Article'

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean
  error?: string

  view: ArticleView
  page: number
  hasMore: boolean
  limit?: number

  _init?: boolean
}
