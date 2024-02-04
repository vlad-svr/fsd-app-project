import { type BuildOptions } from '../types/config'
import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin'

interface BuildBabelLoaderProps extends BuildOptions {
  isTSX: boolean
}

function buildBabelLoader ({ isDev, isTSX }: BuildBabelLoaderProps) {
  return {
    test: isTSX ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          isDev && require.resolve('react-refresh/babel'),
          ['i18next-extract', { locales: ['ru', 'en'] }],
          ['@babel/plugin-transform-typescript', { isTSX }],
          '@babel/plugin-transform-runtime',
          isTSX && [babelRemovePropsPlugin(), { props: ['data-testid'] }]
        ].filter(Boolean)
      }
    }
  }
}

export { buildBabelLoader }
