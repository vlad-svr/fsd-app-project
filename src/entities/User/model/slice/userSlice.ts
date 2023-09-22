import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type User, type UserSchema } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localStorage'

const initialState: UserSchema = {
  _initialized: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)

      if (user) {
        state.authData = JSON.parse(user)
        state._initialized = true
      }
    },
    logout: (state) => {
      state.authData = undefined
      localStorage.removeItem(USER_LOCALSTORAGE_KEY)
    }
  }
})

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
