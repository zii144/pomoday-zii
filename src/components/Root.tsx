import * as React from 'react';
import { App } from './App';
import { LandingPage } from './LandingPage';

const isAppRoute = () =>
  typeof window !== 'undefined' && window.location.hash.startsWith('#app');

export const Root = () => {
  const [showApp, setShowApp] = React.useState<boolean>(isAppRoute());

  React.useEffect(() => {
    const handleHashChange = () => {
      setShowApp(isAppRoute());
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleLaunch = () => {
    if (typeof window !== 'undefined') {
      window.location.hash = '#app';
    }
    setShowApp(true);
  };

  if (showApp) {
    return <App />;
  }

  return <LandingPage onLaunch={handleLaunch} />;
};
