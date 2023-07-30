import cls from './AppLink.module.scss';
import classNames from 'shared/lib/classNames/classNames';
import {Link, LinkProps} from 'react-router-dom';

enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  theme?: AppLinkTheme;
  className?: string;
}

function AppLink(props: AppLinkProps) {
  const {to, className, children, theme = AppLinkTheme.PRIMARY, ...restProps} = props;

  return (
    <Link
      to={to}
      className={classNames(cls.wrapper, {}, [className, cls[theme]])}
      {...restProps}
    >
      {children}
    </Link>
  );
}

export {AppLink, AppLinkTheme};
