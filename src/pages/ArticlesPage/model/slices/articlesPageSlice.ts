import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type StateSchema } from '@/app/providers/StoreProvider'
import { type Article, ArticleType, ArticleView } from '@/entities/Article'
import { type ArticlesPageSchema } from '../types/articlesPageSchema'
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from '@/shared/constants/localStorage'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import { ArticleSortField } from '@/entities/Article'
import { type SortOrder } from '@/shared/types/sortOrder'

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id
})

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState()
)

const articlesPageSlice = createSlice({
  name: 'articlesPageSlice',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    page: 1,
    hasMore: false,
    view: ArticleView.SMALL,
    sort: ArticleSortField.CREATED,
    order: 'asc',
    search: '',
    type: ArticleType.ALL,
    _init: false,
    limit: 9
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload
      localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload)
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload
    },
    setType: (state, action: PayloadAction<ArticleType>) => {
      state.type = action.payload
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    initState: (state) => {
      const view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView
      state.view = view
      state.limit = view === ArticleView.BIG ? 4 : 9
      state._init = true
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state, action) => {
        state.error = undefined
        state.isLoading = true

        if (action.meta.arg?.replace) {
          articlesAdapter.removeAll(state)
        }
      })
      .addCase(fetchArticlesList.fulfilled, (
        state,
        action
      ) => {
        state.isLoading = false
        state.hasMore = Boolean(action.payload?.length >= (state.limit ?? 0))
        console.log(action.payload?.length, state.limit)
        if (action.meta.arg?.replace) {
          articlesAdapter.setAll(state, action.payload)
        } else {
          articlesAdapter.addMany(state, action.payload)
        }
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const {
  reducer: articlesPageReducer,
  actions: articlesPageActions
} = articlesPageSlice
