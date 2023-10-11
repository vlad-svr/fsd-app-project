import { type To } from 'react-router-dom'
import { type NavigateOptions } from 'react-router'
import { type AxiosInstance } from 'axios'
import { type CounterSchema } from 'entities/Counter'
import { type UserSchema } from 'entities/User'
import { type LoginSchema } from 'features/AuthByUsername'
import { type AnyAction, type CombinedState, type EnhancedStore, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit'
import { type ProfileSchema } from 'entities/Profile'
import { type ArticleDetailsSchema } from 'entities/Article'
import { type ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage'
import { type AddCommentFormSchema } from 'features/addCommentForm'
import { type ArticlesPageSchema } from 'pages/ArticlesPage'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema

  // Async reducers
  loginForm?: LoginSchema
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
  articleDetailsComments?: ArticleDetailsCommentsSchema
  addCommentForm?: AddCommentFormSchema
  articlesPage?: ArticlesPageSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArgs {
  api: AxiosInstance
  navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T = string> {
  rejectValue: T
  extra: ThunkExtraArgs
  state: StateSchema
}
