import type { Meta, StoryObj } from '@storybook/react'

import ProfilePage from './ProfilePage'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import avatar from '@/shared/assets/tests/avatar.jpg'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { Theme } from '@/shared/constants/theme'

const meta = {
  title: 'Pages/ProfilePage',
  component: ProfilePage
} satisfies Meta<typeof ProfilePage>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  decorators: [
    StoreDecorator({
      profile: {
        form: {
          username: 'Vlad',
          age: 30,
          country: Country.Belarus,
          lastname: 'Pupkin',
          first: 'asd',
          city: 'asf',
          currency: Currency.USD,
          avatar
        }
      }
    })
  ]
}

export const Dark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      profile: {
        form: {
          username: 'Vlad',
          age: 30,
          country: Country.Belarus,
          lastname: 'Pupkin',
          first: 'asd',
          city: 'asf',
          currency: Currency.USD,
          avatar
        }
      }
    })
  ]
}
