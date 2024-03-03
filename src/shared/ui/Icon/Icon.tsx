import classNames from 'shared/lib/classNames/classNames'
import React, { memo } from 'react'
import cls from './Icon.module.scss'

interface IconProps {
  className?: string
  inverted?: boolean
  Svg: React.FC<React.SVGProps<SVGSVGElement>>
}

export const Icon = memo((props: IconProps) => {
  const { className, Svg, inverted } = props

  return (
      <Svg className={classNames(inverted ? cls.inverted : cls.wrapper, {}, [className])} />
  )
})
