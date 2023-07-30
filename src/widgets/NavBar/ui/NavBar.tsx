import cls from './NavBar.module.scss';
import cn from 'shared/lib/classNames/classNames';
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink';

interface NavBarProps {
  className?: string;
}

function NavBar({className}: NavBarProps) {
  return (
    <div className={cn(cls.navbar, {}, [className])}>
      <div className={cn(cls.links)}>
        <AppLink to="/" theme={AppLinkTheme.SECONDARY}>
          Main page
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
          About page
        </AppLink>
      </div>
    </div>
  );
}

export {NavBar};
