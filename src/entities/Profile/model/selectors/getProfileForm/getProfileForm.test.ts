import { type StateSchema } from 'app/providers/StoreProvider'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { getProfileForm } from './getProfileForm'

describe('getProfileForm', () => {
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
      profile: {
        form: data
      }
    }
    expect(getProfileForm(state as StateSchema)).toEqual(data)
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileForm(state as StateSchema)).toEqual(undefined)
  })
})
