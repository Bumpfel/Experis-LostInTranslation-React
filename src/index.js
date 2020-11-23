import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';

import Menu from './components/Menu'
import Profile from './pages/Profile'
import Translate from './pages/Translate'
import Login from './pages/Login'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Menu />

      <div className="container">
        <Switch>
          <Route path="/translate">
            <Translate />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </div>

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
