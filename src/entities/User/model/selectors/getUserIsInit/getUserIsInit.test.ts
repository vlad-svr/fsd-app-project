import { type StateSchema } from 'app/providers/StoreProvider'
import { getUserIsInit } from './getUserIsInit'

describe('getUserIsInit', () => {
  test('should return correct state', () => {
    const state: DeepPartial<StateSchema> = {
      user: { _initialized: true }
    }

    expect(getUserIsInit(state as StateSchema)).toEqual(true)
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getUserIsInit(state as StateSchema)).toEqual(false)
  })
})
