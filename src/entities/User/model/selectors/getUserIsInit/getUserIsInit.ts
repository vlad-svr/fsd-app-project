import { type StateSchema } from '@/app/providers/StoreProvider'

export const getUserIsInit = (state: StateSchema) => state.user?._initialized || false
