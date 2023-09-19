import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { getLoginState } from './getLoginState'

describe('getLoginState', () => {
  test('should return correct state', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: '123',
        username: 'admin',
        error: 'error',
        isLoading: true
      }
    }

    expect(getLoginState(state as StateSchema)).toEqual({
      password: '123',
      username: 'admin',
      error: 'error',
      isLoading: true
    })
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginState(state as StateSchema)).toEqual(undefined)
  })
})
