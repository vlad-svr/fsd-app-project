import { memo } from 'react'
import classNames, { type Mods } from '@/shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'
import { AppImage } from '../AppImage'
import userIcon from '../../assets/icons/user-filled.svg'
import { Icon } from '../Icon'
import { Skeleton } from '../Skeleton'

interface AvatarProps {
  className?: string
  src?: string
  size?: number
  alt?: string
  fallbackInverted?: boolean
}

export const Avatar = memo(({
  className,
  src,
  size = 100,
  alt,
  fallbackInverted
}: AvatarProps) => {
  const mods: Mods = {}

  const fallback = <Skeleton width={size} height={size} border="50%" />
  const errorFallback = <Icon width={size} height={size} Svg={userIcon} inverted={fallbackInverted} />

  return (
      <AppImage
          src={src}
          alt={alt}
          width={size}
          height={size}
          className={classNames(cls.avatar, mods, [className])}
          fallback={fallback}
          errorFallback={ errorFallback}
        />
  )
})
