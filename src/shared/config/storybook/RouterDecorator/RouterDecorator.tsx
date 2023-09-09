import 'app/styles/index.scss'
import { type Decorator } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

export const RouterDecorator: Decorator = (StoryComponent) => {
  return <BrowserRouter><StoryComponent/></BrowserRouter>
}
