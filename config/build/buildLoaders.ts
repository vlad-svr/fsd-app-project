import { type RuleSetRule } from 'webpack'
import { type BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader'
import { buildSvgLoader } from './loaders/buildSvgLoader'
import { buildBabelLoader } from './loaders/buildBabelLoader'

export function buildLoaders (options: BuildOptions): RuleSetRule[] {
  // if we don't use the typescript then we need the babel-loader
  const svgLoader = buildSvgLoader()
  const codeBabelLoader = buildBabelLoader({ ...options, isTSX: false })
  const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTSX: true })
  const imagesLoader = {
    test: /\.(png|jpg|gif)$/i,
    type: 'asset/resource'
  }

  const cssLoader = buildCssLoader(options.isDev)

  return [imagesLoader, svgLoader, codeBabelLoader, tsxCodeBabelLoader, cssLoader]
}
