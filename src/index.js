import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppProvider from './context/Provider';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <AppProvider>
      <App />
    </AppProvider>,
  );
