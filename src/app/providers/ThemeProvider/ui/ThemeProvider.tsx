import { type ReactNode, useEffect, useMemo, useState } from 'react';
import { Theme } from '@/shared/constants/theme';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';
import { useJsonSettings } from '@/entities/User';

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: Theme;
}

const ThemeProvider = ({ children, initialTheme }: ThemeProviderProps) => {
  const { theme: defaultTheme } = useJsonSettings();
  const [isThemeInit, setThemeInit] = useState(false);
  const [theme, setTheme] = useState(initialTheme || defaultTheme || Theme.LIGHT);

  useEffect(() => {
    if (isThemeInit || !defaultTheme) return;
    setTheme(defaultTheme);
    setThemeInit(true);
  }, [defaultTheme, isThemeInit]);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
