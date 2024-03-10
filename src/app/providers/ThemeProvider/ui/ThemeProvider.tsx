import { type ReactNode, useMemo, useState } from 'react'
import { Theme } from '@/shared/constants/theme'
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/constants/localStorage'
import { ThemeContext } from '@/shared/lib/context/ThemeContext'

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

interface ThemeProviderProps {
  children: ReactNode
  initialTheme?: Theme
}

const ThemeProvider = ({ children, initialTheme }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(initialTheme || defaultTheme)

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme
    }),
    [theme]
  )

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}

export { ThemeProvider }
