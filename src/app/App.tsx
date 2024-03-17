import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import classNames from '@/shared/lib/classNames/classNames';
import { getUserIsInit, initAuthData } from '@/entities/User';
import AppRouter from './providers/router';
import { NavBar } from '@/widgets/NavBar';
import { Sidebar } from '@/widgets/Sidebar';
import { useAppDispatch } from '@/shared/lib/hooks';
import { PageLoader } from '@/widgets/PageLoader';
import { useTheme } from '@/shared/lib/hooks/useTheme';

function App() {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const isInitialized = useSelector(getUserIsInit);

  useEffect(() => {
    void dispatch(initAuthData());
  }, [dispatch]);

  if (!isInitialized) {
    return <PageLoader />;
  }

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <NavBar />
        <div className="content-app">
          <Sidebar />
          {isInitialized && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
}

export default App;
