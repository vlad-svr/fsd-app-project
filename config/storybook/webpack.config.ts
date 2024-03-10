import webpack from 'webpack'
import path from 'path'
import { type BuildPaths } from '../build/types/config'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { buildSvgLoader } from '../build/loaders/buildSvgLoader'

async function webpackFinal (config: webpack.Configuration) {
  if (config.resolve) {
    const paths: Pick<BuildPaths, 'src'> = { src: path.resolve(__dirname, '..', '..', 'src') }

    if (config.module) {
      config.resolve.modules?.push(paths.src, 'node_modules')
      config.resolve.extensions?.push('.tsx', '.ts', '.js')
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': paths.src
      }

      config.module.rules = config.module.rules?.map((rule) => {
        if (typeof rule !== 'string' && String(rule.test as string).includes('svg')) {
          return { ...rule, exclude: /\.svg$/ }
        }

        return rule
      })

      config.plugins?.push(
        new webpack.DefinePlugin({
          _IS_DEV_: JSON.stringify(true),
          _API_BASE_URL_: JSON.stringify('https://testapi.com'),
          _PROJECT_: JSON.stringify('storybook')
        })
      )

      config.module?.rules?.push(buildSvgLoader(), buildCssLoader(true))
    }
  }

  return config
}

export { webpackFinal }
