import cls from './PageLoader.module.scss'
import classNames from '@/shared/lib/classNames/classNames'
import { Loader } from '@/shared/ui/Loader'

interface PageLoaderProps {
  className?: string
}

function PageLoader ({ className }: PageLoaderProps) {
  return (
      <div className={classNames(cls.wrapper, {}, [className])}>
          <Loader/>
      </div>
  )
}

export { PageLoader }
