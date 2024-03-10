import type { Preview } from '@storybook/react'
import '../../src/app/styles/index.scss'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { SuspenseDecorator } from '@/shared/config/storybook/SuspenseDecorator/SuspenseDecorator'
import { Theme } from '@/shared/constants/theme'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({}), RouterDecorator, SuspenseDecorator]
}

export default preview
