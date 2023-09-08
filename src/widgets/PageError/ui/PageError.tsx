import { useTranslation } from 'react-i18next'
import cls from './PageError.module.scss'
import classNames from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'

interface PageErrorProps {
  className?: string
}

function PageError ({ className }: PageErrorProps) {
  const { t } = useTranslation()

  const reloadPage = () => {
    location.reload()
  }

  return (
      <div className={classNames(cls.wrapper, {}, [className])}>
          <p>{t('unexpected_error_happened')}</p>
          <Button onClick={reloadPage}>
              {t('reload_page')}
          </Button>
      </div>
  )
}

export { PageError }
