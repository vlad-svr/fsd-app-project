import type { StorybookConfig } from '@storybook/react-webpack5'
import { webpackFinal } from './webpack.config'

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-actions', {
    name: '@storybook/addon-essentials',
    options: {
      backgrounds: false
    }
  }, '@storybook/addon-onboarding', '@storybook/addon-interactions', '@storybook/addon-themes', 'storybook-addon-mock', '@storybook/addon-webpack5-compiler-babel'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  webpackFinal
}
export default config
