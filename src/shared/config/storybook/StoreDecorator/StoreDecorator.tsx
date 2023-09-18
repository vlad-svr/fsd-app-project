import { type Decorator } from '@storybook/react'
import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'

export const StoreDecorator = (initialState: DeepPartial<StateSchema>): Decorator => (StoryComponent) => (
    <StoreProvider initialState={initialState}>
        <StoryComponent/>
    </StoreProvider>
)
