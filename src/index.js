import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/* provider store to use redux  */}
      <Provider store={store}> 
    {/* call app component to fire in index page */}
    <App />
    </Provider>
  </React.StrictMode>
);
