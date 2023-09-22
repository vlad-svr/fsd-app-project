import { type RuleSetRule } from 'webpack'
import { type BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader'
import { buildSvgLoader } from './loaders/buildSvgLoader'
import { buildBabelLoader } from './loaders/buildBabelLoader'

export function buildLoaders ({ isDev }: BuildOptions): RuleSetRule[] {
  // if we don't use the typescript then we need the babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }
  const svgLoader = buildSvgLoader()
  const babelLoader = buildBabelLoader(isDev)
  const imagesLoader = {
    test: /\.(png|jpg|gif)$/i,
    type: 'asset/resource'
  }

  const cssLoader = buildCssLoader(isDev)

  return [imagesLoader, svgLoader, babelLoader, typescriptLoader, cssLoader]
}
