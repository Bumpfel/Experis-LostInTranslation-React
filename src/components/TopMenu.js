import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { logout } from '../utils/auth';

const TopMenu = props => {

  const onLogoutClick = () => {
    logout();
  }
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <Link className="navbar-brand" to="/">Navbar</Link>
      <div className="navbar-nav">
        <NavLink className="nav-item nav-link" to="/translate">Translate</NavLink>
        <NavLink className="nav-item nav-link" to="/profile">Profile</NavLink>
        <NavLink className="nav-item nav-link" to="/login">Login</NavLink>
        <NavLink className="nav-item nav-link" to="/login" onClick={onLogoutClick}>Logout</NavLink>

      </div>
    </nav>
  )
}
export default TopMenu
