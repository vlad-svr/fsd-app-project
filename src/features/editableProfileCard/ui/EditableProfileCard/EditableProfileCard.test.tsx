import { screen } from '@testing-library/react'
import { type Profile } from '@/entities/Profile'
import { Currency } from '@/entities/Currency'
import { Country } from '@/entities/Country'
import userEvent from '@testing-library/user-event'
import { $api } from '@/shared/api/api'
import { profileReducer } from '../../model/slice/profileSlice'
import { EditableProfileCard } from './EditableProfileCard'
import { renderWithProviders } from '@/shared/lib/tests/renderWithProviders'

const profile: Profile = {
  id: '1',
  first: 'admin',
  lastname: 'admin',
  age: 465,
  currency: Currency.USD,
  country: Country.Belarus,
  city: 'Brest',
  username: 'admin213'
}

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile
    },
    user: {
      authData: { id: '1', username: 'admin' }
    }
  },
  asyncReducers: {
    profile: profileReducer
  }
}

describe('features/EditableProfileCard', () => {
  test('Readonly mode should be switched', async () => {
    renderWithProviders(<EditableProfileCard id="1" />, options)
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))
    expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument()
  })

  test('Values should be reset after canceling', async () => {
    renderWithProviders(<EditableProfileCard id="1" />, options)
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))

    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))
    await userEvent.clear(screen.getByTestId('ProfileCard.lastname'))

    await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user')
    await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user')

    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user')
    expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('user')

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'))

    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('admin')
    expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('admin')
  })

  test('A mistake should appear', async () => {
    renderWithProviders(<EditableProfileCard id="1" />, options)
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))

    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'))

    expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument()
  })

  test('If there are no errors, we should make a Put request', async () => {
    const mockPutReq = jest.spyOn($api, 'put')
    renderWithProviders(<EditableProfileCard id="1" />, options)
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))
    await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user')

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'))

    expect(mockPutReq).toHaveBeenCalled()
  })
})
