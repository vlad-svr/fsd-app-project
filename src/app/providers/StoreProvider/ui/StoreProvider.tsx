import { type ReactNode } from 'react'
import { Provider } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
import { createReduxStore } from '../../StoreProvider/config/store'
import { type StateSchema } from '../../StoreProvider/config/StateSchema'
import { type ReducersMapObject } from '@reduxjs/toolkit'

interface StoreProviderProps {
  children?: ReactNode
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = (props: StoreProviderProps) => {
  const {
    children,
    initialState,
    asyncReducers
  } = props
  // const navigate = useNavigate()

  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>
    // navigate
  )

  return (
      <Provider store={store}>
          {children}
      </Provider>
  )
}
