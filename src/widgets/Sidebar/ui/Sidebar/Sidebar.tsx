import cls from './Sidebar.module.scss';
import classNames from 'shared/lib/classNames/classNames';
import {useState} from 'react';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';

interface SidebarProps {
  className?: string;
}

function Sidebar({className}: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed(prevState => !prevState);
  };

  return (
    <div className={classNames(cls.wrapper, {[cls.collapsed]: collapsed}, [className])}>
      <button onClick={onToggle}>Toggle</button>
      <div className={classNames(cls.switchers)}>
        <ThemeSwitcher />
      </div>
    </div>
  );
}

export {Sidebar};
