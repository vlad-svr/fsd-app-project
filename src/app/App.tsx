import {Suspense, useContext, useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {AboutPage} from 'pages/AboutPage';
import {MainPage} from 'pages/MainPage';
import './styles/index.scss';
import {useTheme} from 'app/providers/ThemeProvider';
import classNames from 'shared/lib/classNames/classNames';

function App() {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames(`app`, {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to="/">Main page</Link>
      <Link to="/about">About page</Link>
      <Suspense>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
