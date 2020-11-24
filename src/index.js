import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';

import TopMenu from './components/TopMenu'
import ProfilePage from './pages/ProfilePage/'
import TranslatePage from './pages/TranslatePage/'
import LoginPage from './pages/LoginPage'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TopMenu />

      <div className="container mt-3 mb-2">
        <Switch>
          <Route path="/translate" component={TranslatePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/profile" component={ProfilePage} />
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
