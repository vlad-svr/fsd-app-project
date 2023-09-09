import 'app/styles/index.scss'
import { type Decorator } from '@storybook/react'
import { type Theme } from 'app/providers/ThemeProvider'

export const ThemeDecorator = (theme: Theme): Decorator => (StoryComponent) => {
  return <div className={`app ${theme}`}><StoryComponent/></div>
}
