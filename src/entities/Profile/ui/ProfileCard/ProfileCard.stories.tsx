import type { Meta, StoryObj } from '@storybook/react'

import { ProfileCard } from './ProfileCard'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import avatar from 'shared/assets/tests/avatar.jpg'

const meta = {
  title: 'Entities/ProfileCard',
  component: ProfileCard
} satisfies Meta<typeof ProfileCard>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    data: {
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
}

export const WithError: Story = {
  args: {
    error: 'true'
  }
}

export const Loading: Story = {
  args: {
    isLoading: true
  }
}
