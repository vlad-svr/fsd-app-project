import {Suspense, useContext, useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import AboutPageAsync from './pages/AboutPage';
import MainPageAsync from './pages/MainPage';
import './styles/index.scss';
import {useTheme} from '../theme/useTheme';
import cn from './helpers/classNames/classNames';

function App() {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={cn(`app`, {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to="/">Main page</Link>
      <Link to="/about">About page</Link>
      <Suspense>
        <Routes>
          <Route path="/about" element={<AboutPageAsync />} />
          <Route path="/" element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
