import { type Decorator } from '@storybook/react'
import { type ReducersMapObject } from '@reduxjs/toolkit'
import { type StateSchema, StoreProvider } from '@/app/providers/StoreProvider'
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice'
import { articleDetailsReducer } from '@/entities/Article/model/slice/articleDetailsSlice'
import { type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { addCommentFormReducer } from '@/features/addCommentForm/model/slices/addCommentFormSlice'
import { profileReducer } from '@/features/editableProfileCard/model/slice/profileSlice'
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/model/slices'

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsPage: articleDetailsPageReducer
}

export const StoreDecorator = (
  initialState: DeepPartial<StateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
): Decorator => (StoryComponent) => (
    <StoreProvider initialState={initialState} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent/>
    </StoreProvider>
)
