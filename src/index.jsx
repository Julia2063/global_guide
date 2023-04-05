import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { App } from './App';
import { AppProvider } from './components/AppProvider';
import './firebase';

import './style/index.scss';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <AppProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </AppProvider>
  </HashRouter>
);
