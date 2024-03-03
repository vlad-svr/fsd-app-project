import { memo } from 'react'
import cls from './Text.module.scss'
import classNames, { type Mods } from '@/shared/lib/classNames/classNames'

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
  INVERTED = 'inverted',
}

export enum TextAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

export enum TextSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  size?: TextSize
  theme?: TextTheme
  align?: TextAlign
  'data-testid'?: string
}

type HeaderTagType = 'h1' | 'h2' | 'h3'

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.S]: 'h3',
  [TextSize.M]: 'h2',
  [TextSize.L]: 'h1'
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    text,
    title,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
    'data-testid': dataTestId = 'Text'
  } = props

  const HeaderTag = mapSizeToHeaderTag[size]

  const mods: Mods = {
    [cls[theme]]: true
  }

  return (
      <div className={classNames(cls.wrapper, mods, [className, cls[align], cls[size]])}>
          {title && (
              <HeaderTag
                  className={cls.title}
                  data-testid={`${dataTestId}.Header`}
          >
                  {title}
              </HeaderTag>
          )}
          {text && (
              <p
                  className={cls.text}
                  data-testid={`${dataTestId}.Paragraph`}
              >
                  {text}
              </p>
          )}
      </div>
  )
})
