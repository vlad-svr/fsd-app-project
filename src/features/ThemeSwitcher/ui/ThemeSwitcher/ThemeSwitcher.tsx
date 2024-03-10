import { memo } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import LightIcon from '@/shared/assets/icons/theme-light.svg'
import DarkIcon from '@/shared/assets/icons/theme-dark.svg'
import { Button } from '@/shared/ui/Button'
import { Theme } from '@/shared/constants/theme'
import { useTheme } from '@/shared/lib/hooks/useTheme'

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
