import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './style.scss';
import { App } from './App';
import './i18n/config';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);