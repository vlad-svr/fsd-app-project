import { useTranslation } from 'react-i18next'
import cn from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface LanguageSwitcherProps {
  className?: string
}

const LANGUAGE_CODES = {
  english: 'en',
  russian: 'ru'
}

function LanguageSwitcher ({ className }: LanguageSwitcherProps) {
  const { t, i18n } = useTranslation()

  const toggle = () => {
    void i18n.changeLanguage(
      i18n.language === LANGUAGE_CODES.russian
        ? LANGUAGE_CODES.english
        : LANGUAGE_CODES.russian
    )
  }

  return (
      <Button
          theme={ButtonTheme.PURE}
          onClick={toggle}
          className={cn('', {}, [className])}
    >
          {t('language')}
      </Button>
  )
}

export { LanguageSwitcher }
