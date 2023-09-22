import { type StateSchema } from 'app/providers/StoreProvider'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { getProfileData } from './getProfileData'

describe('getProfileData', () => {
  test('should return correct data', () => {
    const data = {
      username: 'vlad',
      age: 30,
      country: Country.Belarus,
      lastname: 'pupkin',
      first: 'asd',
      city: 'asf',
      currency: Currency.USD
    }
    const state: DeepPartial<StateSchema> = {
      profile: { data }
    }
    expect(getProfileData(state as StateSchema)).toEqual(data)
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileData(state as StateSchema)).toEqual(undefined)
  })
})
