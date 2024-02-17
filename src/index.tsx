import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppStyle } from './AppStyle';
import { BrowserRouter } from 'react-router-dom';
import { initializeIcons } from '@fluentui/font-icons-mdl2';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

initializeIcons();

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
