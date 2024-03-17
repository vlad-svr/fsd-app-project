import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type UserSchema } from '../types/userSchema';
import { type User } from '../types/user';
import { USER_LOCALSTORAGE_KEY } from '@/shared/constants/localStorage';
import { setFeatureFlags } from '@/shared/lib/features';
import { saveJsonSettings } from '../services/saveJsonSettings';
import { JsonSettings } from '../types/jsonSettings';

const initialState: UserSchema = {
  _initialized: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
      state._initialized = true;
      setFeatureFlags(action.payload.features);
    },
    initAuthData: state => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);

      if (user) {
        const userData = JSON.parse(user) as User;
        state.authData = userData;
        setFeatureFlags(userData?.features);
      }

      state._initialized = true;
    },
    logout: state => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
  extraReducers: builder => {
    builder.addCase(
      saveJsonSettings.fulfilled,
      (state, { payload }: PayloadAction<JsonSettings>) => {
        if (state.authData) {
          state.authData.jsonSettings = payload;
        }
      },
    );
  },
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
