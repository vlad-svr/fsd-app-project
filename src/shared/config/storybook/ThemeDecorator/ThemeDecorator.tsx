import { type Decorator } from '@storybook/react'
// eslint-disable-next-line
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import { Theme } from '@/shared/constants/theme'

export const ThemeDecorator = (theme: Theme): Decorator => (StoryComponent) => {
  return <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}><StoryComponent/></div>
  </ThemeProvider>
}
