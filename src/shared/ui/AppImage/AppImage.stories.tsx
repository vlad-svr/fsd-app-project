import { AppImage } from './AppImage'

import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Shared/AppImage',
  component: AppImage
} satisfies Meta<typeof AppImage>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
