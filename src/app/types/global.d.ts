declare module '*.scss' {
  type IClassNames = Record<string, string>
  const classNames: IClassNames
  export = classNames
}

declare module '*.svg' {
  import React = require('react')
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  export default ReactComponent
}
declare module '*.jpg' {
  const content: string
  export default content
}

declare module '*.png' {
  const content: string
  export default content
}

declare module '*.json' {
  const content: string
  export default content
}

declare const _IS_DEV_: boolean
declare const _API_BASE_URL_: string
declare const _PROJECT_: 'storybook' | 'production' | 'jest'

type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T

type OptionalRecord<K extends keyof any, T> = {
  [P in K]?: T;
}
