import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';

import GuardedRoute from './components/GuardedRoute';
import LoginPage from './pages/LoginPage'
import TranslatePage from './pages/TranslatePage'
import ProfilePage from './pages/ProfilePage'
import ErrorPage from './pages/ErrorPage';
import * as Auth from './utils/auth'
import TopMenu from './components/TopMenu';

const isLoggedIn = () => Auth.isLoggedIn()
const isNotLoggedIn = () => !Auth.isLoggedIn()
const defaultLoggedInRoute = '/translate'
const defaultNotLoggedInRoute = '/login'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TopMenu />

      <div className='container mt-3 mb-2'>
        <Switch>
          <Route exact path='/'>
            <Redirect to={defaultNotLoggedInRoute} />
          </Route>
          <GuardedRoute exact path='/login' allow={isNotLoggedIn} redirectTo={defaultLoggedInRoute} component={LoginPage} />
          <GuardedRoute exact path='/translate' allow={isLoggedIn} redirectTo={defaultNotLoggedInRoute} component={TranslatePage} />
          <GuardedRoute exact path='/profile' allow={isLoggedIn} redirectTo={defaultNotLoggedInRoute} component={ProfilePage} />
          <Route path='*'>
            <ErrorPage header='Page not found' message='Four, oh four; the page you requested does not exist'/>
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
