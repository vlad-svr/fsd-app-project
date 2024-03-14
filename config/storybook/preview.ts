import type { Preview } from '@storybook/react'
import '../../src/app/styles/index.scss'
import { Theme } from '@/shared/constants/theme'
import { withThemeByClassName } from '@storybook/addon-themes'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { SuspenseDecorator } from '@/shared/config/storybook/SuspenseDecorator/SuspenseDecorator'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    layout: 'fullscreen'
  },
  decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({}), RouterDecorator, SuspenseDecorator, withThemeByClassName({
    parentSelector: 'body',
    defaultTheme: 'light',
    themes: {
      light: Theme.LIGHT,
      dark: Theme.DARK,
      orange: Theme.ORANGE
    }
  })]
}

export default preview
