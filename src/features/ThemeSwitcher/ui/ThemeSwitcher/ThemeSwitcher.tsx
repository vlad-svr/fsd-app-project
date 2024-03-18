import { memo } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import ThemeIcon from '@/shared/assets/icons/theme-light.svg';
import { Button } from '@/shared/ui/Button';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { saveJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks';
import { Icon } from '@/shared/ui/Icon';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { toggleTheme } = useTheme();
  const dispatch = useAppDispatch();

  const onToggleHandler = () => {
    toggleTheme(newTheme => {
      void dispatch(saveJsonSettings({ theme: newTheme }));
    });
  };

  return (
    <Button onClick={onToggleHandler} className={classNames('', {}, [className])}>
      <Icon Svg={ThemeIcon} width={40} height={40} inverted />
    </Button>
  );
});

export { ThemeSwitcher };
