import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import * as Auth from '../utils/auth'
import { getUser } from '../utils/storage'

const getLoginStatus = () => Auth.isLoggedIn()
const showUser = getUser();

const TopMenu = props => {

  const [isLoggedIn, setIsLoggedIn] = useState(getLoginStatus);

  const onLogoutClick = () => {
    Auth.logout();
    setIsLoggedIn(false);
  }


  const userName = {
    fontColor: 'black',
    fontFamily: 'Segoe UI',
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '7px'
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <Link className="navbar-brand" to="/">Menu</Link>
      <div className="navbar-nav">
        <NavLink className="nav-item nav-link" to="/translate">Translate</NavLink>
        <NavLink className="nav-item nav-link" to="/profile">Profile</NavLink>
        <NavLink className="nav-item nav-link" to="/login">
        { !isLoggedIn && <span>Login</span> }
        </NavLink>
        <NavLink className="nav-item nav-link" to="/login" onClick={onLogoutClick}>
          { isLoggedIn && <span>Logout</span> }
          </NavLink>
        { isLoggedIn && <span style={userName}>{showUser}</span> }
      </div>
    </nav>
  )
}
export default TopMenu
