import './styles/index.scss';
import {useTheme} from 'app/providers/ThemeProvider';
import classNames from 'shared/lib/classNames/classNames';
import {AppRouter} from 'app/providers/router';
import {NavBar} from 'widgets/NavBar';

function App() {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames(`app`, {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <NavBar />
      <AppRouter />
    </div>
  );
}

export default App;
