import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type UserSchema } from '../types/userSchema';
import { type User } from '../types/user';
import { USER_LOCALSTORAGE_KEY } from '@/shared/constants/localStorage';
import { setFeatureFlags } from '@/shared/lib/features';
import { saveJsonSettings } from '../services/saveJsonSettings';
import { JsonSettings } from '../types/jsonSettings';
import { initAuthData } from '../services/initAuthData';

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
      localStorage.setItem(USER_LOCALSTORAGE_KEY, action.payload.id);
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
    builder.addCase(initAuthData.fulfilled, (state, { payload }: PayloadAction<User>) => {
      state.authData = payload;
      setFeatureFlags(payload?.features);
      state._initialized = true;
    });
    builder.addCase(initAuthData.rejected, state => {
      state._initialized = true;
    });
  },
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
