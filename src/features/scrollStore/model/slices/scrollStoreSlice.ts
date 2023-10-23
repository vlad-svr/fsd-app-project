import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type ScrollStoreSchema } from '../types/ScrollStoreSchema'

const initialState: ScrollStoreSchema = {
  scroll: {}
}

export const scrollStoreSlice = createSlice({
  name: 'scrollStore',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<{ path: string, position: number }>) => {
      state.scroll[payload.path] = payload.position
    }
  }
})

// Action creators are generated for each case reducer function
export const { actions: scrollStoreActions } = scrollStoreSlice
export const { reducer: scrollStoreReducer } = scrollStoreSlice
