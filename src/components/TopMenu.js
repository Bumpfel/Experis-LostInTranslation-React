import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import * as Auth from '../utils/auth'
import { getUser } from '../utils/storage'

const isLoggedIn = () => Auth.isLoggedIn()
const showUser = getUser();

const TopMenu = props => {

  const onLogoutClick = () => {
    Auth.logout();
  }

  const userName = {
    fontColor: 'black',
    fontFamily: 'Segoe UI',
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '6px'
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <Link className="navbar-brand" to="/">Menu</Link>
      <div className="navbar-nav">
        {isLoggedIn && <span style={userName}>{showUser}</span>}
        <NavLink className="nav-item nav-link" to="/translate">Translate</NavLink>
        <NavLink className="nav-item nav-link" to="/profile">Profile</NavLink>
        <NavLink className="nav-item nav-link" to="/login">Login</NavLink>
        <NavLink className="nav-item nav-link" to="/login" onClick={onLogoutClick}>
          { isLoggedIn && <span>Logout</span> }
          { !isLoggedIn && <span></span> }
          </NavLink>
      </div>
    </nav>
  )
}
export default TopMenu
