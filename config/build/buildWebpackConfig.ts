import { type BuildOptions } from './types/config'
import type webpack from 'webpack'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'
import { buildPlugins } from './buildPlugins'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig (options: BuildOptions): webpack.Configuration {
  const { paths, mode, isDev } = options

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.output,
      clean: true,
      publicPath: '/'
    },
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(options),
    plugins: buildPlugins(options),
    devtool: isDev && 'eval-cheap-module-source-map',
    devServer: isDev ? buildDevServer(options) : undefined
  }
}
