import cls from './Loader.module.scss'
import classNames from 'shared/lib/classNames/classNames'

interface LoaderProps {
  className?: string
}

function Loader ({ className }: LoaderProps) {
  return (
      <div className={classNames(cls.loader, {}, [className])} />
  )
}

export { Loader }
