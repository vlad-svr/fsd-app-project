import type { Meta, StoryObj } from '@storybook/react'

import { CountrySelect } from './CountrySelect'

const meta = {
  title: 'Entities/Country/CountrySelect',
  component: CountrySelect
} satisfies Meta<typeof CountrySelect>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
