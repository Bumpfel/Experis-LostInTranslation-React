import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';

import TopMenu from './components/TopMenu'
import ProfilePage from './pages/ProfilePage/'
import TranslatePage from './pages/TranslatePage/'
import LoginPage from './pages/LoginPage'

const isLoggedIn = true

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TopMenu />

      <div className="container mt-3 mb-2">
        <Switch>
            <Route exact path="/translate">
              {isLoggedIn
              ? <TranslatePage />
              : <Redirect to="/login" />}
            </Route>
            <Route exact path="/profile">
              {isLoggedIn
              ? <ProfilePage />
              : <Redirect to="/login" />}
            </Route>
            <Route exact path="/login">
              {!isLoggedIn
              ? <LoginPage />
              : <Redirect to="/translate" />}
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
