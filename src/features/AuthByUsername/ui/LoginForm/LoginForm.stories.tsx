import type { Meta, StoryObj } from '@storybook/react'

import { LoginForm } from './LoginForm'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'Features/LoginForm',
  component: LoginForm
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const WithError: Story = {
  decorators: [StoreDecorator({
    loginForm: {
      username: '123',
      password: '123',
      error: 'This is error message'
    }
  })]
}

export const WithLoading: Story = {
  decorators: [StoreDecorator({
    loginForm: {
      username: '123',
      password: '123',
      isLoading: true
    }
  })]
}
