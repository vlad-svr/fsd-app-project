import { createAsyncThunk } from '@reduxjs/toolkit';
import { type User, userActions } from '@/entities/User';
import { type ThunkConfig } from '@/app/providers/StoreProvider';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    const { dispatch, rejectWithValue, extra } = thunkAPI;

    try {
      const response = await extra.api.post<User>('/login', authData);

      if (!response.data) {
        throw new Error();
      }

      dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (e) {
      // console.log(e)
      return rejectWithValue('ERROR');
    }
  },
);
