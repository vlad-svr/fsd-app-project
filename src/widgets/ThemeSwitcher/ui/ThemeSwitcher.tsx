import { memo } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import LightIcon from '@/shared/assets/icons/theme-light.svg'
import DarkIcon from '@/shared/assets/icons/theme-dark.svg'
import { Theme, useTheme } from '@/app/providers/ThemeProvider'
import { Button } from '@/shared/ui/Button/Button'

interface ThemeSwitcherProps {
  className?: string
}

const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
      <Button onClick={toggleTheme} className={classNames('', {}, [className])}>
          {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
      </Button>
  )
})

export { ThemeSwitcher }
