import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileError } from './getProfileError'

describe('getProfileError', () => {
  test('should return correct data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: 'Error message'
      }
    }
    expect(getProfileError(state as StateSchema)).toEqual('Error message')
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileError(state as StateSchema)).toEqual(undefined)
  })
})
