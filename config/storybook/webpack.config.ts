import type webpack from 'webpack'
import path from 'path'
import { type BuildPaths } from '../build/types/config'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { buildSvgLoader } from '../build/loaders/buildSvgLoader'
import { type RuleSetRule } from 'webpack'

async function webpackFinal (config: webpack.Configuration) {
  if (config.resolve) {
    const paths: Pick<BuildPaths, 'src'> = { src: path.resolve(__dirname, '..', '..', 'src') }

    config.resolve.modules.push(paths.src, 'node_modules')
    config.resolve.extensions.push('.tsx', '.ts', '.js')

    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
      if (String(rule.test).includes('svg')) {
        return { ...rule, exclude: /\.svg$/ }
      }

      return rule
    })

    config.module.rules.push(buildSvgLoader(), buildCssLoader(true))
  }

  return config
}

export { webpackFinal }
