import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Profile } from '../../types/profile'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'

export const updateProfileData = createAsyncThunk<Profile, undefined, ThunkConfig>(
  'profile/updateProfileData',
  async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi

    const formData = getProfileForm(getState())

    try {
      const response = await extra.api.put<Profile>('/profile', formData)

      return response.data
    } catch (e) {
      console.error(e)
      return rejectWithValue('ERROR')
    }
  }
)
