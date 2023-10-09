import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Profile } from '../../types/profile'

export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig>(
  'profile/fetchProfileData',
  async (profileId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi

    try {
      const response = await extra.api.get<Profile>('/profile/' + profileId)

      if (!response.data) {
        throw new Error()
      }

      return response.data
    } catch (e) {
      console.error(e)
      return rejectWithValue('ERROR')
    }
  }
)
