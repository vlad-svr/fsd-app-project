import type { Meta, StoryObj } from '@storybook/react'

import { Text, TextSize, TextTheme } from './Text'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Theme } from '@/shared/constants/theme'

const meta = {
  title: 'Shared/Text',
  component: Text
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    title: 'Title Text',
    text: 'Text'
  }
}

export const SizeS: Story = {
  args: {
    title: 'Title Text',
    text: 'Text',
    size: TextSize.S
  }
}

export const SizeM: Story = {
  args: {
    title: 'Title Text',
    text: 'Text',
    size: TextSize.M
  }
}

export const SizeL: Story = {
  args: {
    title: 'Title Text',
    text: 'Text',
    size: TextSize.L
  }
}

export const PrimaryDark: Story = {
  args: {
    title: 'Title Text',
    text: 'Text'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const OnlyTitle: Story = {
  args: {
    title: 'Title Text Title Text'
  }
}

export const OnlyTitleDark: Story = {
  args: {
    title: 'Title Text Title Text'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const OnlyText: Story = {
  args: {
    text: 'Description Text Description Text Description Text Description Text'
  }
}

export const OnlyTextDark: Story = {
  args: {
    text: 'Description Text Description Text Description Text Description Text'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const Error: Story = {
  args: {
    theme: TextTheme.ERROR,
    title: 'Title Text Title Text',
    text: 'Description Text Description Text Description Text Description Text'
  }
}

export const ErrorDark: Story = {
  args: {
    title: 'Title Text Title Text',
    text: 'Description Text Description Text Description Text Description Text',
    theme: TextTheme.ERROR
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
