import { useContext } from 'react';
import { Theme } from '../../constants/theme';
import { ThemeContext } from '../../lib/context/ThemeContext';

interface UseThemeResult {
  toggleTheme: (saveAction?: (theme: Theme) => void) => void;
  theme: Theme;
}

function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = (saveAction?: (theme: Theme) => void) => {
    let newTheme: Theme;
    switch (theme) {
      case Theme.DARK:
        newTheme = Theme.LIGHT;
        break;
      case Theme.LIGHT:
        newTheme = Theme.ORANGE;
        break;
      case Theme.ORANGE:
        newTheme = Theme.DARK;
        break;
      default:
        newTheme = Theme.LIGHT;
    }
    setTheme?.(newTheme);
    document.body.className = newTheme;
    saveAction?.(newTheme);
  };

  return {
    theme: theme || Theme.LIGHT,
    toggleTheme,
  };
}

export { useTheme };
