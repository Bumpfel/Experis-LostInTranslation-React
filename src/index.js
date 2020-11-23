import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { Menu } from './components/menu'
import Login from './pages/login'

ReactDOM.render(
  <React.StrictMode>
      <Menu />
      <div className="container">
        <Login /> {/* temp */}
        {/* router outlet */}
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
