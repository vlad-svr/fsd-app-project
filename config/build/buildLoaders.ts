import { type RuleSetRule } from 'webpack'
import { type BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader'
import { buildSvgLoader } from './loaders/buildSvgLoader'

export function buildLoaders ({ isDev }: BuildOptions): RuleSetRule[] {
  // if we don't use the typescript then we need the babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const svgLoader = buildSvgLoader()

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          isDev && require.resolve('react-refresh/babel'),
          ['i18next-extract', { locales: ['ru', 'en'] }]
        ].filter(Boolean)
      }
    }
  }

  const imagesLoader = {
    test: /\.(png|jpg|gif)$/i,
    type: 'asset/resource'
  }

  const cssLoader = buildCssLoader(isDev)

  return [imagesLoader, svgLoader, babelLoader, typescriptLoader, cssLoader]
}
