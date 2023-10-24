import { FC } from 'react';
import './App.scss';
import { Home } from './scenes';
import { SITE_DATA } from './constants/apps.constants';
import { BrowserRouter } from 'react-router-dom';

export const App: FC<{}> = () => {
  console.log(SITE_DATA);

  return (
    <BrowserRouter>
      <div className="app">
        <Home />
      </div>
    </BrowserRouter>
  );
}
