import React from 'react'

export const Menu = props => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <div className="navbar-nav">
                <a className="nav-item nav-link active" href="#">Home</a>
                <a className="nav-item nav-link" href="#">Profile</a>
                <a className="nav-item nav-link" href="#">Logout</a>
            </div>
        </nav>
    )
}