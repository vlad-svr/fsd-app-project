import type webpack from 'webpack'
import path from 'path'
import { type BuildPaths } from '../build/types/config'
import { buildCssLoader } from '../build/loaders/buildCssLoader'

async function webpackFinal (config: webpack.Configuration) {
  if (config.resolve) {
    const paths: Pick<BuildPaths, 'src'> = { src: path.resolve(__dirname, '..', '..', 'src') }

    config.resolve.modules.push(paths.src, 'node_modules')
    config.resolve.extensions.push('.tsx', '.ts', '.js')

    config.module.rules.push(buildCssLoader(true))
  }

  return config
}

export { webpackFinal }
