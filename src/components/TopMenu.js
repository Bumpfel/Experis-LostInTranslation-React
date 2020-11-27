import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import * as Auth from '../utils/auth'
import { getUser } from '../utils/storage'

// workaround to trigger an update on the menu (used from login page)
export function updateMenu() {
  this.setState({ isLoggedIn: Auth.isLoggedIn() })
}

export default class TopMenu extends React.Component {

  componentDidMount() {
    /* eslint-disable */
    updateMenu = updateMenu.bind(this) // eslint warning "no-func-assign"
    /* eslint-enable */
  }

  state = {
    isLoggedIn: Auth.isLoggedIn()
  }

  onLogoutClick = () => {
    Auth.logout();
    this.setState({ isLoggedIn: false });
  }

  userNameStyle = {
    fontColor: 'black',
    fontFamily: 'Segoe UI',
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '7px'
  };

  render = () => (
    <nav className="navbar navbar-expand navbar-light bg-light" style={{ whiteSpace: 'nowrap' }}>
      <Link className="navbar-brand" to="/">Menu</Link>
      <div className="navbar-nav">
        {this.state.isLoggedIn &&
          <React.Fragment>
            <NavLink className="nav-item nav-link" to="/translate">Translate</NavLink>
            <NavLink className="nav-item nav-link" to="/profile">My profile</NavLink>
            <Link className="nav-item nav-link" to="/" onClick={this.onLogoutClick}>Logout</Link>
            <span style={this.userNameStyle}>{getUser()}</span>
          </React.Fragment>
        }
      </div>
    </nav>
  )
}
