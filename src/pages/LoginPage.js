import React from 'react'
import LoginForm from './LoginForm/LoginForm'


export default class LoginPage extends React.Component {

  render() {

    const onLoginComplete = () => {
    }

    return (
      <div>
        <LoginForm complete={onLoginComplete} />
      </div>
    )
  }
}