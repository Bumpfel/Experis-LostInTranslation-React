import React from 'react'
import { logout } from '../utils/auth';

import LoginForm from './LoginForm/LoginForm'

export default class LoginPage extends React.Component {

  state = {
    user: ''
  }

  componentDidMount() { }

  render() {
    const onLoginComplete = () => {
      console.log("Success!");
    }

    const onLogoutClick = () => {
      logout(this.state.user);
    }

    return (
      <div>
        <LoginForm complete={onLoginComplete} />
      <div>
        <button onClick={onLogoutClick}>Logout</button>
      </div>
      </div>
    )
  }
}