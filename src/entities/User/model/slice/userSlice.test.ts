import { userActions, userReducer } from '../slice/userSlice';
import { type UserSchema } from '../types/userSchema';

const mockGetItem = jest.fn();
const mockSetItem = jest.fn();
const mockRemoveItem = jest.fn();

describe('userSlice', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: (...args: string[]) => mockGetItem(...args),
        setItem: (...args: string[]) => mockSetItem(...args),
        removeItem: (...args: string[]) => mockRemoveItem(...args),
      },
    });
  });

  test('should set auth data', () => {
    const newUserData = { username: 'test name', id: '123' };
    const state: DeepPartial<UserSchema> = { authData: {} };
    expect(
      userReducer(state as UserSchema, userActions.setAuthData(newUserData)),
    ).toEqual({ _initialized: true, authData: newUserData });
  });

  // test('should init auth data', () => {
  //   const newUserData = { username: 'test name', id: '123' }
  //   const state: DeepPartial<UserSchema> = { }
  //   localStorage.getItem = () => JSON.stringify(newUserData)
  //
  //   expect(userReducer(state as UserSchema, userActions.initAuthData())).toEqual({ authData: newUserData, _initialized: true })
  // })

  test('should logout', () => {
    const state: DeepPartial<UserSchema> = {
      authData: { username: 'test name', id: '123' },
    };

    expect(userReducer(state as UserSchema, userActions.logout())).toEqual({
      authData: undefined,
    });
    expect(mockRemoveItem).toBeCalledTimes(1);
  });
});
