import { FC } from 'react';
import './App.scss';
import { Home } from './scenes';
import { SITE_DATA } from './utils/apps.constants';

export const App: FC<{ name: string }> = () => {
  console.log(SITE_DATA);

  return (
    <div className="app">
      <Home />
    </div>
  );
}
