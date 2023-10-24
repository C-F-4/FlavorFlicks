import { FC } from 'react';
import './App.scss';
import { Home } from './scenes';

export const App: FC<{}> = () => {
  return (
    <div className="app">
      <Home />
    </div>
  );
}
