import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import * as Auth from '../utils/auth'
import { getUser } from '../utils/storage'

const TopMenu = props => {

  const [isLoggedIn, setIsLoggedIn] = useState(Auth.isLoggedIn());

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
        {isLoggedIn &&
          <React.Fragment>
            <NavLink className="nav-item nav-link" to="/translate">Translate</NavLink>
            <NavLink className="nav-item nav-link" to="/profile">My profile</NavLink>
            <NavLink className="nav-item nav-link" to="/login" onClick={onLogoutClick}>Logout</NavLink>
            <span style={userName}>{getUser()}</span>
          </React.Fragment>
        }
      </div>
    </nav>
  )
}
export default TopMenu
