import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './app.css';
import './global.css';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
