import webpack from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import { type BuildOptions } from './types/config'
import CopyPlugin from 'copy-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CircularDependencyPlugin from 'circular-dependency-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'

export function buildPlugins ({
  paths,
  isDev,
  apiURL,
  project
}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({ template: paths.html }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new webpack.DefinePlugin({
      _IS_DEV_: JSON.stringify(isDev),
      _API_BASE_URL_: JSON.stringify(apiURL),
      _PROJECT_: JSON.stringify(project)
    }),
    new CopyPlugin({
      patterns: [
        { from: paths.locales, to: paths.buildLocales }
      ]
    }),
    isDev && new ReactRefreshWebpackPlugin(),
    isDev && new webpack.HotModuleReplacementPlugin(),
    isDev && new BundleAnalyzerPlugin({ openAnalyzer: false }),
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/,
      failOnError: true
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true
        },
        mode: 'write-references'
      }
    })
  ].filter(Boolean) as webpack.WebpackPluginInstance[]
}
