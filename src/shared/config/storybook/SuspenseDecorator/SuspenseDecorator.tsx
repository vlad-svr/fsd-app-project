import { Suspense } from 'react'
import { type Decorator } from '@storybook/react'

export const SuspenseDecorator: Decorator = (StoryComponent) => (
    <Suspense>
        <StoryComponent />
    </Suspense>
)
