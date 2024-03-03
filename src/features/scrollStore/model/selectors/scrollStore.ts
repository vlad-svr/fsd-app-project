import { type StateSchema } from '@/app/providers/StoreProvider'
import { createSelector } from '@reduxjs/toolkit'

export const getScrollStore = (state: StateSchema) => state.scrollStore?.scroll

export const getScrollByPath = createSelector(
  getScrollStore,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll?.[path] || 0
)
