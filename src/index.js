import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
import App from './componenets/App';
import movies from './reducers/index'



const store = createStore(movies);
console.log('store', store);
console.log('State', store.getState());


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

