import React from 'react'
import { Link } from 'react-router-dom'

const TopMenu = props => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="navbar-brand">Navbar</div>
      <div className="navbar-nav">
        <Link className="nav-item nav-link active" to="/translate">Home</Link>
        <Link className="nav-item nav-link" to="/profile">Profile</Link>
        <Link className="nav-item nav-link" to="/login">Login</Link>
      </div>
    </nav>
  )
}
export default TopMenu
