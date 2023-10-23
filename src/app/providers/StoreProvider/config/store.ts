// import { type To, type NavigateOptions } from 'react-router-dom'
import { type CombinedState, type Reducer } from 'redux'
import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { $api } from 'shared/api/api'
import { type StateSchema, type ThunkExtraArgs } from './StateSchema'
import { createReducerManager } from './reducerManager'
import { scrollStoreReducer } from 'features/scrollStore'

export function createReduxStore (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
  // navigate?: (to: To, options?: NavigateOptions) => void
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    scrollStore: scrollStoreReducer
  }

  const reducerManager = createReducerManager(rootReducers)

  const extraArgument: ThunkExtraArgs = {
    api: $api
    // navigate
  }

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: _IS_DEV_,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument
      }
    })
  })

  // @ts-expect-error Temporary
  store.reducerManager = reducerManager

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
