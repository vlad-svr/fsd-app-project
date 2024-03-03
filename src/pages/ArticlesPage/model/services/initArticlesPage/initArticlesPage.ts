import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { getArticlesPageInit } from '../../selectors/articlesPageSelectors'
import { articlesPageActions } from '../../slices/articlesPageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'
import { type SortOrder } from '@/shared/types'
import { type ArticleSortField, type ArticleType } from '@/entities/Article'

export const initArticlesPage = createAsyncThunk<
void,
URLSearchParams | void,
ThunkConfig
>(
  'articlesPage/initArticlesPage',
  async (searchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi
    const init = getArticlesPageInit(getState())
    const orderFromUrl = searchParams?.get('order') as SortOrder
    const searchFromUrl = searchParams?.get('search')
    const sortFromUrl = searchParams?.get('sort') as ArticleSortField
    const typeFromUrl = searchParams?.get('type') as ArticleType

    if (!init) {
      if (orderFromUrl) dispatch(articlesPageActions.setOrder(orderFromUrl))
      if (sortFromUrl) dispatch(articlesPageActions.setSort(sortFromUrl))
      if (searchFromUrl) dispatch(articlesPageActions.setSearch(searchFromUrl))
      if (typeFromUrl) dispatch(articlesPageActions.setType(typeFromUrl))

      void dispatch(fetchArticlesList())
    }
  }
)
